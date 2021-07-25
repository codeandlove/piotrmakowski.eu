<!DOCTYPE html>
<html lang="pl">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>♣ Piotr Makowski - piotrmakowski.eu - Designer &amp; Developer</title>
		<link rel="shortcut icon" href="http://www.piotrmakowski.eu/favicon.ico" type="image/x-icon">
		<link href='http://fonts.googleapis.com/css?family=Oxygen:400,700,300&amp;subset=latin,latin-ext' rel='stylesheet' type='text/css'>
		<link href='http://fonts.googleapis.com/css?family=Pacifico&amp;subset=latin,latin-ext' rel='stylesheet' type='text/css'>
		<link href="../css/bootstrap.css" rel="stylesheet">
		<link href="../css/bootstrap-theme.css" rel="stylesheet">
		<link href="../css/bootstrap-lightbox.css" rel="stylesheet">
		<link href="../css/styles.css" rel="stylesheet">
	</head>
	<body>

		<form id="form" name="form" method="POST" action="send_email.php">
			<div class="form-group">
				<label>Adres email odbiorcy</label>
				<input name="email_to" type="text" class="form-control" id="email_to" placeholder="Wpisz adres email odbiorcy">
			</div>
			<div class="form-group">
				<label>Typ (agencja/firma)</label>
				<input name="type" type="radio" class="form-control" value="agency"> Agencja
				<input name="type" type="radio" class="form-control" value="company"> Firma
			</div>
			<button type="submit" name="submit" class="btn btn-primary">
				Wyślij wiadomość
			</button>
		</form>
	</body>
</html>