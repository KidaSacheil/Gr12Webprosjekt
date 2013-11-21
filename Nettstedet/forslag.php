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

<a href="index.html"><h2>Tilbake</h2> </a>
	<form action=" " method="post">
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
				 <input type="radio" name="type" value="Hobby"><h3>Hobby</h3></td>
				<td></td><td><input type="radio" name="type" value="Sport"><h3>Sport</h3></td>

				<tr><td><h3>Beskriv aktiviteten:</h3></td></tr>
			<tr><td>
				<input type="textarea" name="beskriv"></td>
			</tr>
			<tr>
			
				<td>
				<h3>Høyt eller lav budsjett</h3>
				</td>
			</tr>

			<tr>
				<td><input type="radio" name="budsjett" value="Hoyt"><h3>Høyt</h3></td>
				<td><input type="radio" name="budsjett" value"lavt"><h3>Lavt</h3></td>
			</tr>
		</table>

				<input type="submit" name="submit" value="Send">

	</form>
<?php
	if(isset($_REQUEST['submit']))
	{
		echo "Takk for ditt bidrag! Ditt forslag har blitt sendt!";
	}

?>

</div>

</div>
	
</body>
</html>