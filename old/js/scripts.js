var $ = jQuery.noConflict();

$(function(){
	$(' #da-thumbs > .item ').each( function() { $(this).hoverdir(); } );
	
	$(' #da-thumbs > .item ').bind('mouseover',function(){
		$(this).find('span.title').addClass('hovered');		
		$(this).find('span.plus').addClass('hovered');
	});
	
	$(' #da-thumbs > .item ').bind('mouseout',function(){
		$(this).find('span.title').removeClass('hovered');
		$(this).find('span.plus').removeClass('hovered');
	});
	
	setDimensions();
	setSameHeight();
	init();
	
	$(window).resize(function(){
		setDimensions();
		setSameHeight();
	});
	
});

function init(){

    $.scrollTo(0, 0);
	
	//timeline
	var $timeline_block = $('.cd-timeline-block');
		//hide timeline blocks which are outside the viewport
	$timeline_block.each(function(){
		if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
			$(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		}
	});
	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		$timeline_block.each(function(){
			if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
				$(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
			}
		});
	}); 
	
	//fades in
	var $fadeIn = $('.fadein');
		//hide timeline blocks which are outside the viewport
	$fadeIn.each(function(){
		if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
			$(this).addClass('is-hidden');
		}
		if($(this).hasClass('showfirst')){
			$(this).removeClass('is-hidden').addClass('bounce-in');
		}
	});
	
	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		$fadeIn.each(function(){
			
			var ratio = 0.75;
			if( $(this).offset().top < $(window).scrollTop()+$(window).height()*ratio && $(this).hasClass('is-hidden') ) {
				$(this).removeClass('is-hidden').addClass('bounce-in');
			}
		});
	});
	
	
	var w = $(window).width();
	if(w>768){
		$("body").queryLoader2({
			backgroundColor:'#ffffff',
			barColor:'#49415C'
		});
	}
	
	$('.me-cycle').cycle({ 
		fx:     'fade',  
		timeout:  5000,
		speed:2500
	});
	
	

	
	/*waypoints*/
	
	var sections = new Array(
		'#intro-text',
		'#timeline',
		'#bio',
		'#portfolio',
		'#contact'
	);
	
	var sectionsBg = new Array(
		'#intro',
		'#timeline-bg',
		'#one',
		'#two',
		'#three'
	);
	
	var current = -1;

	for(var i=0; i<sections.length; i++){
		$(sections[i]).waypoint(function(direction) {
			if(direction == 'down'){
				current++;
				//console.log(current);
			}else{
				current--;
				//console.log(current);
			}
			
			if(current==0){
				$('.cd-timeline-block').find('.cd-timeline-img, .cd-timeline-content').removeClass('bounce-in').addClass('is-hidden');
			}
			
			if(current==4){
				$('.next').fadeOut();
			}else{
				$('.next').fadeIn();
			}		
			
			$('.navbar ul li').removeClass('active');
			$('.navbar ul li').eq(current).addClass('active');
		},{offset:'10%'});
		
		$(sections[i]).waypoint(function(direction) {
			if(direction == 'down'){
				$(this).prev().find('.fadein').removeClass('bounce-in').addClass('is-hidden');
			}else{
				$(this).next().find('.fadein').removeClass('bounce-in').addClass('is-hidden');
			}
			
			if(direction == 'down'){
				if($(this).attr('id')!='intro-text'){
					$('.navbar-brand').addClass('smaller');
				}
			}else{
				if($(this).attr('id')=='timeline'){
					$('.navbar-brand').removeClass('smaller');
				}
				
			}
			
			
		},{offset:'50%'});
	}
	
	$('.section:not(.nomove)').bind('mousemove',function(e){
		var currentBg = sectionsBg[current];
		
		var currentAdd = $(currentBg+' .add');
		
		e.preventDefault();
		
		var w = $(window).width();
		var h = $(window).height();
		
		var offset = $(this).offset(); 
		var posX = e.pageX - offset.left - w/2;
		var posY = e.pageY - offset.top - h/2;
		
		var p = -25;
		
		//var value = (w/2-554/2)+posX/p + ' ' + /*posY/-100*/ "bottom";
		
		$('.me').css({
		  'background-position-x': (w/2-670/2)+posX/p,
		  'background-position-y': "bottom"
		});
		
		currentAdd.css({
		  'background-position-x': (w/2-2100/2)+posX/p/5,
		  'background-position-y': "bottom"
		});

	});
	
	$('.next').bind('click',function(){
		var target = sections[current+1];
		$.scrollTo($(target), 1000, {easing:'easeInOutCubic'});
		$('.display').addClass('off');
	});
	
	/**/
	
	$('.navbar').bind('click', 'ul li a', function(event) {
		event.preventDefault();
		$.scrollTo($(event.target.hash), 1000, {easing:'easeInOutCubic'});
		$('.display').addClass('off');
		/*$('.active').removeClass('active');
		$(event.target).parent().addClass('active');*/
	});
	
	$('.navbar').bind('click', 'ul li a span', function(event) {
		event.preventDefault();
		var parent = $(event.target).parent();
		var hash = parent.attr('href');
		$.scrollTo($(hash), 1000, {easing:'easeInOutCubic'});
		$('.display').addClass('off');
		/*$('.active').removeClass('active');
		$(event.target).parent().addClass('active');*/
	});
	
	$('.navlink').bind('click', function(event) {
		event.preventDefault();
		$.scrollTo($(event.target.hash),1000, {easing:'easeInOutCubic'});
		/*$('.navbar .active').removeClass('active');
		$('.navbar').find(event.target).parent().addClass('active');*/
	});
	
	$("[data-toggle='popover']").popover();
	$('body').on('click', function (e) {
		$('[data-toggle="popover"]').each(function () {
		//the 'is' for buttons that trigger popups
		//the 'has' for icons within a button that triggers a popup
			if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
				$(this).popover('hide');
			}
		});
	});
	
	$("[data-toggle='tooltip']").tooltip();
	
	$(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
		event.preventDefault();
		$(this).ekkoLightbox();
	}); 
	
	
	/*download*/
	var downloadCVUrl = $("[rel=download_cv]").attr("href");
	var downloadPortfolioUrl = $("[rel=download_portfolio]").attr("href");
	
	$(".count.cv").load("include/count.php?url="+downloadCVUrl);
	$(".count.portfolio").load("include/count.php?url="+downloadPortfolioUrl);
	
	$("[rel=download_cv]").on({
		click: function() {
			$.ajax({
				data: { url: $(this).attr("href") },
				url: "include/download.php"
			});
			var href = $(this).attr("href");
			$(".count.cv").load("include/count.php?url="+href);
		}
	});
	
	$("[rel=download_portfolio]").on({
		click: function() {
			$.ajax({
				data: { url: $(this).attr("href") },
				url: "include/download.php"
			});
			var href = $(this).attr("href");
			$(".count.portfolio").load("include/count.php?url="+href);			
		}
	});
	
	$("[rel=download_inz]").on({
		click: function() {
			$.ajax({
				data: { url: $(this).attr("href") },
				url: "include/download.php"
			});
		}
	});
	
	/*contact form*/
	$('#form').submit(function(e){
		e.preventDefault();
		
		var formData = $('#form').serialize();
		
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		}).done(function(response) {
			// Make sure that the formMessages div has the 'success' class.
			$('.response').removeClass('alert alert-error');
			$('.response').addClass('alert alert-success');

			// Set the message text.
			$('.response').text(response);

			// Clear the form.
			$('#name').val('');
			$('#email').val('');
			$('#message').val('');
		}).fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
			$('.response').removeClass('success');
			$('.response').addClass('error');

			// Set the message text.
			if (data.responseText !== '') {
				$('.response').text(data.responseText);
			} else {
				$('.response').text('Wystąpił problem podczas wysyłania wiadomości, spróbuj ponownie później.');
			}
		});
		
	});
	
	//portfolio
	
	$('.portfolio a').bind('click', function(event) {
		event.preventDefault();
		
		$.scrollTo($('#portfolio'),1000, {easing:'easeInOutCubic'});
		
		$('.display .content *').remove();
		
		$('.display .content').cycle('destroy');
		
		$('.display').toggleClass('off');
		
		var href = $(this).attr('href');

		var len = $(this).attr('data-count');
		var cssClass = $(this).attr('data-class');
		var video = $(this).attr('data-video');
		
		if(!video){
			for(var i=0; i<len; i++){
				$('.display .content').append('<div class="img"><span><img src="'+href+'/'+i+'.jpg" alt="" style="margin:0 auto" class="img-responsive '+cssClass+'"></span></div>');
			}
			
			if(len>0){
				$('.display .content').cycle({ 
					fx:     'scrollUp', 
					speed:  1000, 
					timeout: 0, 
					pager:  '.cycle-nav' 
				});
			}
		}else{
			var sw = $(window).innerWidth();
			var sh = $(window).innerHeight()-50;
			var iframe = '<iframe src="//player.vimeo.com/video/'+href+'?portrait=0&title=0&byline=0&badge=0" width="'+sw+'" height="'+sh+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
			
			$('.display .content').append('<div class="video">'+iframe+'</div>');
			
			
		}

	});
	
	//display
	
	$('.display').addClass('off');
	
	$('.display').find('.clouse').bind('click',function(){
		$('.display').toggleClass('off');
		$('.display .content *').remove();
	});
}

function setDimensions(){
	var w = $(window).innerWidth();
	var h = $(window).innerHeight();
	
	if(w>767){
		$('.section:not(.auto), .me').css({
			width:w,
			height:h
		});
		
	}else{
		$('.section:not(.auto), .me').css({
			width:'100%',
			height:'100%'
		});
	}
	
	if(w>767){
		$('.section:not(.auto), .me').css({
			backgroundAttachment:'fixed'
		});
		
	}else{
		$('.section:not(.auto), .me').css({
			backgroundAttachment:'scroll'
		});
	}
	
	$('#timeline-bg, #timeline-bg .me').css('height',$('#timeline').height());
}

function setSameHeight(){
	var w = $(window).width();
	var h = $(window).height();
	if(w>766){
		var maxHeight = 0;
		$('.same-height').each(function(e){
			if($(this).height()>maxHeight){
				maxHeight = $(this).height();
			}
		});
		$('.same-height').css('height',maxHeight);
	}else{
		$('.same-height').css('height','auto');
	}
}

