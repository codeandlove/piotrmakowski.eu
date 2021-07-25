<div class="intro padding-top">
	<div class="container">
		<div class="col-md-4 col-sm-5 fadein is-hidden showfirst">
			<div class="white-panel no-panel ">
				<h1 class="white-panel-title handwritte">Piotr Makowski</h1>
				<div class="white-panel-content">
					<img src="images/piotr_makowski_prof.jpg" alt="Piotr Makowski" class="img-responsive img-circle hidden-lg hidden-md hidden-sm" style="margin:0 auto 20px;"/>
					<p>Witaj na moim kreatywnym CV.</p>
					<p>Nazywam się <strong>Piotr Makowski</strong> i chciałbym pokazać Ci czym się zajmuję.</p>
					<p>Działam w obszarze projektowania grafiki komputerowej, programowania witryn internetowych oraz związanych z tym technologii.</p>
				</div>
			</div>
			<div class="white-panel no-panel ">
				<h3 class="white-panel-title ">Portfolio & Curriculum Vitae</h3>
				<div class="white-panel-content">
					<p>Pobierz moje Portfolio lub Curriculum Vitae w dokumencie PDF.</p>
					<a href="download/cv.pdf" class="btn btn-primary" style="margin-right:10px;" rel="download_cv" target="_blank" data-toggle="tooltip" data-placement="top" title="
						<?php
							try {
								$url = "download/cv.pdf";
								$pdo = new PDO('mysql:host=sql.s13.vdl.pl;dbname=witryny_pm', 'witryny_pm', '3558916');
								$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

								$stmt = $pdo -> query("SELECT pobrania FROM pliki WHERE url='$url'");

								while($row = $stmt->fetch())
								{
								  $count = $row['pobrania'];
								}
								$stmt->closeCursor();
								
								echo 'Pobrano '.$count.' razy';
						   }catch(PDOException $e){
								echo 'Połączenie nie mogło zostać utworzone: ' . $e->getMessage();
						   }

						?>
					">
						<span class="glyphicon glyphicon-download"></span> Pobierz CV
					</a>
					<a href="download/portfolio.pdf" class="btn btn-primary" rel="download_portfolio" target="_blank" data-toggle="tooltip" data-placement="top" title="
						<?php
							try {
								$url = "download/portfolio.pdf";
								$pdo = new PDO('mysql:host=sql.s13.vdl.pl;dbname=witryny_pm', 'witryny_pm', '3558916');
								$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

								$stmt = $pdo -> query("SELECT pobrania FROM pliki WHERE url='$url'");

								while($row = $stmt->fetch())
								{
								  $count = $row['pobrania'];
								}
								$stmt->closeCursor();
								
								echo 'Pobrano '.$count.' razy';
						   }catch(PDOException $e){
								echo 'Połączenie nie mogło zostać utworzone: ' . $e->getMessage();
						   }

						?>
					">
						<span class="glyphicon glyphicon-download"></span> Zobacz Portfolio PDF
 					</a>
				</div>
			</div>
		</div>	
		<div class="col-md-4 col-md-offset-4 col-sm-5 col-sm-offset-2 fadein is-hidden showfirst">
			<div class="white-panel no-panel">
				<div class="white-panel-content">
					<div class="graphic-developer">
						<h1 class="handwritte">
							<span class="designer">Frontend <br/> Developer</span>
							<span class="developer">UX/UI Designer</span>
						</h1>
					</div>
				</div>
			</div>
			<div class="white-panel no-panel">
				<h3 class="white-panel-title ">Profil zawodowy</h3>
				<div class="white-panel-content">
					<ul style="font-size:16px">
                        <li>Senior Frontend at <div class="effect"><a href="http://wearevirtua.com" target="_blank"><span data-hover="WeAreVirtua.com">WeAreVirtua.com</span></a></div></li>
                        <li>Magento Certified FE developer</li>
                        <li>React/Redux developer</li>
						<li>CEO agencji <div class="effect"><a href="http://www.codeandlove.com" target="_blank" title="Agencja reklamowa Codeandlove.com z Wrocławia" ><span data-hover="Codeandlove.com">Codeandlove.com</span></a></div></li>
						<li>Programista z wieloletnim doświadczeniem</li>
						<li>UX/UI & UC-D Designer</li>
					</ul>
					<a href="#timeline" class="navlink btn btn-primary pull-right hidden-xs" >Przejdź do osi czasu</a>
				</div>
			</div>
		</div>							
	</div>
</div>