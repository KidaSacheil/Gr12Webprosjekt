var bilder;
//tilfeldigHobby(); // funksjonen kjører automatisk når skriptet blir lasta inn i HTML-fila

//denne bestemmer hvilket random bilde som blir vist på Sport-siden, og bildeverdien er knyttet til spesifikk side
function tilfeldigSport(){
var tilfeldigTallS = Math.floor((Math.random()*4)); // Tilfeldig tall mellom 0 og 3, runda ned til nærmeste heltall
bilder=[];
	bilder[0]={navn:"gokart",bilde:"./bilder/gokart.jpg",url:"gokart.html"}
	bilder[1]={navn:"orientering",bilde:"./bilder/orientering2.jpg",url:"orientering.html"}
	bilder[2]={navn:"petanque",bilde:"./bilder/petanque.gif",url:"petanque.html"}
	bilder[3]={navn:"bueskyting",bilde:"./bilder/bueskyting.jpg",url:"bueskyting.html"}

document.getElementById("tilfBild").src=bilder[tilfeldigTallS].bilde;
document.getElementById("tilfBild").alt=bilder[tilfeldigTallS].navn;
return [bilder[tilfeldigTallS].url, bilder[tilfeldigTallS].navn];
}

var tilfeldigBildeArrayS = tilfeldigSport();
var tilfeldigBildeArrayUrlS = tilfeldigBildeArrayS[0];
var tilfeldigBildeArrayNamnS = tilfeldigBildeArrayS[1];

		var gjemt = document.getElementById("gjemt").innerHTML; 
		var gjemtEndra = gjemt.replace("ph", tilfeldigBildeArrayNamnS);
		document.getElementById("gjemt").innerHTML=gjemtEndra;

function tilfeldigSportLink(){
	
	window.location.href = tilfeldigBildeArrayUrlS; // return-verdien, altså url-en
}

//denne bestemmer hvilken random bilde video som blir vist på Sport-siden
function tilfeldigVideo(){
var tilfeldigTallS = Math.floor((Math.random()*4)); // Tilfeldig tall mellom 0 og 3, runda ned til nærmeste heltall
bilder=[];
	bilder[0]={navn:"gokart",url:"gokart.html"}
	bilder[1]={navn:"orientering",url:"http://www.youtube.com/embed/B-2xpx5ZKiI"}
	bilder[2]={navn:"petanque",url:"http://www.youtube.com/embed/JwsdXnuqA5w"}
	bilder[3]={navn:"bueskyting",url:"bueskyting.html"}

document.getElementById("tilfBild").src=bilder[tilfeldigTallS].bilde;
document.getElementById("tilfBild").alt=bilder[tilfeldigTallS].navn;
return [bilder[tilfeldigTallS].url, bilder[tilfeldigTallS].navn];
}