<?php
    $db = new PDO(
		"mysql:dbname=witryny_pm;host=sql.s13.vdl.pl",
		"witryny_pm",
		"3558916"
    );
    $db->prepare(
		"UPDATE pliki
		SET pobrania = pobrania + 1
		WHERE url = :url"
    )->execute(
		array("url" => $_GET["url"])
    );
?>