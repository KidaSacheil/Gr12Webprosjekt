<?php
$page=$_GET["page"];

?><!DOCTYPE HTML>
<html>
<head>
	<title>Sluttrapport - Gruppe 12 </title>
	<meta charset="UTF-8">
	<link rel="stylesheet" type="text/css" href="./css/sluttrapportstyle.css">
</head>

<body>
	<div id="wrapper">

		<nav>
				<h1><a href="forside.html">Gruppe 12</a></h1>

				<h2>Gruppemedlemmer:</h2>
			<ul>
				<li><a href="http://student.cs.hioa.no/~s198541/webprosjekt2/index.php?page=0">Helene Juterud</a></li>
				<li>Steinarr Sommerset</li>
				<li>Patrik Mørkeseth</li>
				<li>Sigurd Hølleland</li>
			</ul>

				<h2>Sluttrapport:</h2>
			<ul>
				<li><a href="sluttrapport.php?page=0">Sluttrapport</li>
				<li>Ferdig produkt</li>
				
			</ul>


				<h2>Dokumenter:</h2>
			<ul>
				<li>Forprosjektrapport</li>
				<li>Kravspec</li>
				<li>Gruppeavtale</li>
				<li>Møterapporter</li>
			</ul>

		</nav>


	<section>
		<?php
			switch($page){

				case 0:
				include ("./sluttrapport.html");
				break; 

				default:
				include("./forside.html");
				break;
			}
		?>
	</section>

	</div>


</body>
</html>