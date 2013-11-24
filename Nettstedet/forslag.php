<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Fritidsmaskin - Forslag</title>
	<link rel="stylesheet" type="text/css" href="./css/forslag_style.css">
</head>
<body>

<div class="wrapper">

<h1>forslag</h1>
<h2>Send inn forslag til nye sporter og hobbyer</h2>

<div id="container">

<div class="tilbake"><a href="./index.html"><img  src="./bilder/back-arrow2.png" alt="tilbake til forsiden - http://www.physiosouth.co.nz/files/images/content/back-arrow2.png" class="tilbake"></a></div>
	<form method="post">
		<table>
			<tr>
				<td>
					<h3>Navn på aktivitet: </h3>
				</td>
				<tr>
				<td>
				<input type="text" name="aktivitet" size="25">
				</td>
			</tr>


			<tr>
				<td>
				<h3>Velg type: </h3>
				</td>
			</tr>
			<tr>
				<td>
				 <input type="radio" name="type" value="Hobby"> Hobby
				 <input class="padding" type="radio" name="type" value="Sport"> Sport</td>
				

				<tr><td><h3>Beskriv aktiviteten:</h3></td></tr>
			<tr><td>
				<textarea wrap="soft"></textarea></td>
			</tr>
			<tr>
			
				<td>
				<h3>Høyt eller lav budsjett</h3>
				</td>
			</tr>

			<tr>
				<td><input type="radio" name="budsjett" value="Hoyt"> Høyt
					<input class="padding" type="radio" name="budsjett" value="lavt"> Lavt</td>
			</tr>
		</table>

				<input type="submit" name="submit" value="Send">


	</form>

<?php
	if(isset($_REQUEST['submit']))
	{
		echo "<br /><p>Takk for ditt bidrag! Ditt forslag har blitt sendt!</p>";
	}

?>

</div>

</div>
	
</body>
</html>