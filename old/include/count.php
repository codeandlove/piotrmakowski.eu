<?php
    try
   {
		$url = $_GET['url'];
		$pdo = new PDO('mysql:host=sql.s13.vdl.pl;dbname=witryny_pm', 'witryny_pm', '3558916');
		$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

		$stmt = $pdo -> query("SELECT pobrania FROM pliki WHERE url='$url'");

		while($row = $stmt->fetch())
		{
		  $count = $row['pobrania'];
		}
		$stmt->closeCursor();
		
		echo $count;
   }
   catch(PDOException $e)
   {
		echo 'Połączenie nie mogło zostać utworzone: ' . $e->getMessage();
   }

?>