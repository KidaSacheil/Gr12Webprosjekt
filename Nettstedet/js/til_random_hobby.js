var bilder;
//tilfeldigHobby(); // funksjonen kjører automatisk når skriptet blir lasta inn i HTML-fila

//denne bestemmer hvilket random bilde som blir vist på Hobby-siden, og bildeverdien er knyttet til spesifikk side
function tilfeldigHobby(){
var tilfeldigTallH = Math.floor((Math.random()*4)); // Tilfeldig tall mellom 0 og 3, runda ned til nærmeste heltall
bilder=[];
	bilder[0]={navn:"strikking",bilde:"./bilder/strikking.jpg",url:"strikking.html"}
	bilder[1]={navn:"matfotografering",bilde:"./bilder/godmat.jpg",url:"matfotografi.html"}
	bilder[2]={navn:"bridge",bilde:"./bilder/bridge.jpg",url:"bridge.html"}
	bilder[3]={navn:"flyspotting",bilde:"./bilder/b777.jpg",url:"planespotting.html"}

document.getElementById("tilfBild").src=bilder[tilfeldigTallH].bilde;
document.getElementById("tilfBild").alt=bilder[tilfeldigTallH].navn;
return [bilder[tilfeldigTallH].url, bilder[tilfeldigTallH].navn];
}

var tilfeldigBildeArrayH = tilfeldigHobby();
var tilfeldigBildeArrayUrlH = tilfeldigBildeArrayH[0];
var tilfeldigBildeArrayNamnH = tilfeldigBildeArrayH[1];

		var gjemt = document.getElementById("gjemt").innerHTML; 
		var gjemtEndra = gjemt.replace("ph", tilfeldigBildeArrayNamnH);
		document.getElementById("gjemt").innerHTML=gjemtEndra;

function tilfeldigHobbyLink(){
	
	window.location.href = tilfeldigBildeArrayUrlH; // return-verdien, altså url-en
}

//denne bestemmer hvilken random video som blir vist på Hobby-siden
function tilfeldigVideo(){
var tilfeldigTallV = Math.floor((Math.random()*4)); // Tilfeldig tall mellom 0 og 3, runda ned til nærmeste heltall
bilder=[];
	bilder[0]={navn:"strikking",url:"http://www.youtube.com/embed/Fal-g2r_QmI?rel=0"}
	bilder[1]={navn:"matfotografering",url:"http://www.youtube.com/embed/rOARrwMOQkY?rel=0"}
	bilder[2]={navn:"bridge",url:"http://www.youtube.com/embed/E8H5oR-f1ME?rel=0"}
	bilder[3]={navn:"flyspotting",url:"http://www.youtube.com/embed/JwsdXnuqA5w?rel=0"}

document.getElementById("tilfVideo").src=bilder[tilfeldigTallV].url;
return [bilder[tilfeldigTallV].url, bilder[tilfeldigTallV].navn];
}

tilfeldigVideo(); // må kjøres når den ikke kalles på