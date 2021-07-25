<?php
	
	$to = strip_tags($_POST['email_to']);
	
	$type = strip_tags($_POST['type']);
	
	$subject = 'Piotr Makowski - współpraca - Piotrmakowski.eu';

	$headers = "From: Piotr Makowski <hello@piotrmakowski.eu>\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
	
	
	
	$message = '<html><body>';
	$message .= '<div marginwidth="0" marginheight="0">';
	$message .= '<table style="width:600px" id="Table_01" width="600" height="801" border="0" cellpadding="0" cellspacing="0" border="0" cellspacing="0" cellpadding="0" align="center" bgcolor="#eeeeee">';
	
	if($type == 'agency'){
		$message .= '<tr><td colspan="6"><img style="display:block" src="http://www.piotrmakowski.eu/email/images/agency/email_01.jpg" width="600" height="190" alt=""></td> </tr> <tr><td colspan="6"><img style="display:block" src="http://www.piotrmakowski.eu/email/images/agency/email_02.jpg" width="600" height="110" alt=""></td> </tr> <tr><td colspan="5"><img style="display:block" src="http://www.piotrmakowski.eu/email/images/agency/email_03.jpg" width="340" height="210" alt=""></td> <td rowspan="5"><img style="display:block" src="http://www.piotrmakowski.eu/email/images/agency/email_04.jpg" width="260" height="480" alt=""></td> </tr> <tr><td colspan="2" rowspan="2"><img style="display:block" src="http://www.piotrmakowski.eu/email/images/agency/email_05.jpg" width="125" height="182" alt=""></td> <td><a href="http://www.piotrmakowski.eu" target="_blank"><img style="display:block" src="http://www.piotrmakowski.eu/email/images/agency/email_06.jpg" width="113" height="20" border="0" alt="Piotrmakowski.eu"></a></td> <td colspan="2" rowspan="2"><img style="display:block" src="http://www.piotrmakowski.eu/email/images/agency/email_07.jpg" width="102" height="182" alt=""></td> </tr><tr><td><img style="display:block" src="http://www.piotrmakowski.eu/email/images/agency/email_08.jpg" width="113" height="162" alt=""></td> </tr><tr><td rowspan="2"><img style="display:block" src="http://www.piotrmakowski.eu/email/images/agency/email_09.jpg" width="30" height="88" alt=""></td> <td colspan="3"><a href="http://www.piotrmakowski.eu" target="_blank"><img style="display:block" src="http://www.piotrmakowski.eu/email/images/agency/email_10.jpg" width="280" height="52" border="0" alt="Piotrmakowski.eu"></a></td> <td rowspan="2"><img style="display:block" src="http://www.piotrmakowski.eu/email/images/agency/email_11.jpg" width="30" height="88" alt=""></td> </tr><tr><td colspan="3"><img style="display:block" src="http://www.piotrmakowski.eu/email/images/agency/email_12.jpg" width="280" height="36" alt=""></td> </tr><tr><td colspan="6"><img style="display:block" src="http://www.piotrmakowski.eu/email/images/agency/email_13.jpg" width="600" height="20" alt=""></td> </tr><tr><td><img style="display:block" src="http://www.piotrmakowski.eu/email/images/agency/spacer.gif" width="30" height="1" alt=""></td><td><img style="display:block" src="http://www.piotrmakowski.eu/email/images/agency/spacer.gif" width="95" height="1" alt=""></td><td><img style="display:block" src="http://www.piotrmakowski.eu/email/images/agency/spacer.gif" width="113" height="1" alt=""></td><td><img style="display:block" src="http://www.piotrmakowski.eu/email/images/agency/spacer.gif" width="72" height="1" alt=""></td><td><img style="display:block" src="http://www.piotrmakowski.eu/email/images/agency/spacer.gif" width="30" height="1" alt=""></td><td><img style="display:block" src="http://www.piotrmakowski.eu/email/images/agency/spacer.gif" width="260" height="1" alt=""></td> </tr>';	
	}else{
		$message .= '<tr><td colspan="6"><img style="display:block" src="http://www.piotrmakowski.eu/email/images/company/email_01.jpg" width="600" height="190" alt=""></td> </tr> <tr><td colspan="6"><img style="display:block" src="http://www.piotrmakowski.eu/email/images/company/email_02.jpg" width="600" height="110" alt=""></td> </tr> <tr><td colspan="5"><img style="display:block" src="http://www.piotrmakowski.eu/email/images/company/email_03.jpg" width="340" height="210" alt=""></td> <td rowspan="5"><img style="display:block" src="http://www.piotrmakowski.eu/email/images/company/email_04.jpg" width="260" height="480" alt=""></td> </tr> <tr><td colspan="2" rowspan="2"><img style="display:block" src="http://www.piotrmakowski.eu/email/images/company/email_05.jpg" width="125" height="182" alt=""></td> <td><a href="http://www.piotrmakowski.eu" target="_blank"><img style="display:block" src="http://www.piotrmakowski.eu/email/images/company/email_06.jpg" width="113" height="20" border="0" alt="Piotrmakowski.eu"></a></td> <td colspan="2" rowspan="2"><img style="display:block" src="http://www.piotrmakowski.eu/email/images/company/email_07.jpg" width="102" height="182" alt=""></td> </tr><tr><td><img style="display:block" src="http://www.piotrmakowski.eu/email/images/company/email_08.jpg" width="113" height="162" alt=""></td> </tr><tr><td rowspan="2"><img style="display:block" src="http://www.piotrmakowski.eu/email/images/company/email_09.jpg" width="30" height="88" alt=""></td> <td colspan="3"><a href="http://www.piotrmakowski.eu" target="_blank"><img style="display:block" src="http://www.piotrmakowski.eu/email/images/company/email_10.jpg" width="280" height="52" border="0" alt="Piotrmakowski.eu"></a></td> <td rowspan="2"><img style="display:block" src="http://www.piotrmakowski.eu/email/images/company/email_11.jpg" width="30" height="88" alt=""></td> </tr><tr><td colspan="3"><img style="display:block" src="http://www.piotrmakowski.eu/email/images/company/email_12.jpg" width="280" height="36" alt=""></td> </tr><tr><td colspan="6"><img style="display:block" src="http://www.piotrmakowski.eu/email/images/company/email_13.jpg" width="600" height="20" alt=""></td> </tr><tr><td><img style="display:block" src="http://www.piotrmakowski.eu/email/images/company/spacer.gif" width="30" height="1" alt=""></td><td><img style="display:block" src="http://www.piotrmakowski.eu/email/images/company/spacer.gif" width="95" height="1" alt=""></td><td><img style="display:block" src="http://www.piotrmakowski.eu/email/images/company/spacer.gif" width="113" height="1" alt=""></td><td><img style="display:block" src="http://www.piotrmakowski.eu/email/images/company/spacer.gif" width="72" height="1" alt=""></td><td><img style="display:block" src="http://www.piotrmakowski.eu/email/images/company/spacer.gif" width="30" height="1" alt=""></td><td><img style="display:block" src="http://www.piotrmakowski.eu/email/images/company/spacer.gif" width="260" height="1" alt=""></td> </tr>';	
	}
		
	$message .= '</table>';
	
	$message .= '</div>';
	$message .= '<div style="text-align:center">';
	$message .= 'Zapraszam do obejrzenia mojego portfolio oraz przeczytania Curriculum Vitae na stronie wwww.piotrmakowski.eu<br/>';	
	$message .= '<span style="font-size:12px; color:#ccc">Państwa adres email został pozyskany z ogólnodostępnych serwisów internetowych bądź z Państwa witryny internetowej.</span>';
	$message .= '<span style="font-size:12px; color:#ccc">Wiadomość ta nie stanowi oferty w rozumieniu kodeksu cywilnego.</span>';
	$message .= '</div>';
	$message .= "</body></html>";
	
	echo $message;
	
	mail($to, $subject, $message, $headers);

?>