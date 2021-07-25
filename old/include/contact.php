<div class="contact padding-top">
	<div class="container">
		<div class="row">
			<div class="col-md-4 col-sm-6">
				<div class="white-panel fadein">
					<h1 class="white-panel-title handwritte">Formularz kontaktowy</h1>
					<div class="white-panel-content">
						<p class="response"></p>
						<form id="form" name="form" method="POST" action="include/send_email.php">
							<div class="form-group">
								<label>Imię i nazwisko</label>
								<input name="name" type="text" class="form-control" id="name" placeholder="Wpisz swoje imię i nazwisko">
							</div>
							<div class="form-group">
								<label>Adres email</label>
								<input name="email" type="email" class="form-control" id="email" placeholder="Wpisz adres email">
							</div>
							<div class="form-group">
								<label>Wiadomość</label>
								<textarea name="message" id="message" class="form-control" rows="3"></textarea>
							</div>
							<?/*
							<div class="form-group">
								<div class="col-sm-12">
									<label>Dodaj 2 + 2 (antyspam)</label>
								</div>
								<div class="col-sm-6">
									<input name="anti_spam" type="anti_spam" class="form-control" id="anti_spam" placeholder="Wpisz wynik dodawania">
								</div>
							</div>
							*/?>
							<div class="form-group text-right">
								<button type="submit" name="submit" class="btn btn-primary">
									Wyślij wiadomość
								</button>
							</div>
						</form>
					</div>	
				</div>	
			</div>		
			<div class="col-md-4 col-md-offset-4 col-sm-6">
				<div class="white-panel fadein">
					<h1 class="white-panel-title handwritte">Dane kontaktowe</h1>
					<div class="white-panel-content">
						<div class="row">
							<div class="col-xs-3">
								<img src="images/contact_email.png" class="img-responsive" style="margin:0 auto" alt="Email" />
							</div>
							<div class="col-xs-9">
								<p style="margin-top:20px"><strong>hello@piotrmakowski.eu</strong></p>
							</div>
						</div>
					</div>	
				</div>	
				<div class="violet-panel fadein">
					<h1 class="violet-panel-title handwritte">Social Media</h1>
					<div class="violet-panel-content">
						<div class="row">
							<div class="col-xs-2">
								<a class="fb" href="https://www.facebook.com/codeandlove" title="Polub Codeandlove.com na Facebook.com" target="_blank">
									<img src="images/fb.png" class="img-responsive" style="margin:0 auto" alt="Facebook.com"/>
								</a>
							</div>
							<div class="col-xs-2">
								<a class="tw" href="https://www.twitter.com/codeandlove" title="Polub Codeandlove.com na Twitter.com" target="_blank">
									<img src="images/tw.png" class="img-responsive" style="margin:0 auto" alt="Twitter.com"/>
								</a>
							</div>
							<div class="col-xs-2">
								<a class="g" href="http://www.google.com/+Codeandlove" title="Polub Codeandlove.com na Google Plus" target="_blank">
									<img src="images/g.png" class="img-responsive" style="margin:0 auto" alt="Google Plus"/>
								</a>
							</div>
							<div class="col-xs-2">
								<a class="tw" href="http://www.behance.net/codeandlove" title="Polub Codeandlove.com na Behance.net" target="_blank">
									<img src="images/be.png" class="img-responsive" style="margin:0 auto" alt="Behance.net"/>
								</a>
							</div>
							<div class="col-xs-2">
								<a class="tw" href="http://www.vimeo.com/codeandlove" title="Polub Codeandlove.com na Vimeo.com" target="_blank">
									<img src="images/vi.png" class="img-responsive" style="margin:0 auto" alt="Vimeo.com"/>
								</a>
							</div>
						</div>
					</div>
				</div>	
			</div>						
		</div>
	</div>
	<footer class="hidden-xs">
		&copy; 2014 Piotrmakowski.eu \ Wszelkie prawa zastrzeżone.
	</footer>
</div>