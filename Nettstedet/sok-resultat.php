<!DOCTYPE HTML>

<html>

<head><title>Fritidsmaskin - Søkeresultater</title>
		<meta charset="UTF-8">

	<link rel="stylesheet" type="text/css" href="./css/kategori.css">
</head>

<body id="sokresultatbg">

<section>
<h2>Søkeresultat</h2>
<div class="tilbake"><a href="./index.html"><img  src="./bilder/back-arrow2.png" alt="tilbake til forsiden - http://www.physiosouth.co.nz/files/images/content/back-arrow2.png" class="tilbake"></a></div>

<br><form action="" method="post">
<input type="text" name="sokefeltet">
<input type="submit" name="soket">

</form>
<br>

	<?php

		if(isset($_REQUEST["sok"]))
		{
			echo "<h3>Ditt søk på ".$_REQUEST['sokefelt']." har gitt 0 resultater</h3><br><br>";
			echo "<h4>Dette er en funksjon som kommer etterhvert<br></h4>";
		}


		if(isset($_REQUEST["soket"]))
		{
			echo "<h3>Ditt søk på ".$_REQUEST['sokefeltet']." har gitt 0 resultater</h3><br><br>";
			echo "<h4>Dette er en funksjon som kommer etterhvert</h4><br>";
		}	
	?>


</section>

</body>
</html>