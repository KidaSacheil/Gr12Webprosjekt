var bilder;
//tilfeldigHobby(); // funksjonen kjører automatisk når skriptet blir lasta inn i HTML-fila

//denne går bare til random side på GIF-en på forsida
function tilfeldigAktivitet(){
var tilfeldigTall1 = Math.floor((Math.random()*8)); // Tilfeldig tall mellom 0 og 7, runda ned til nærmeste heltall
var aktivitetar=[];
	aktivitetar[0]={navn:"petanque",url:"http://www.petanque.no"}
	aktivitetar[1]={navn:"gokart",url:"http://www.gokart.no"}
	aktivitetar[2]={navn:"orientering",url:"http://www.orientering.no"}
	aktivitetar[3]={navn:"bueskytting",url:"http://www.bueskytting.no"}
	aktivitetar[4]={navn:"strikking",url:"http://www.strikking.no"}
	aktivitetar[5]={navn:"matfoto",url:"http://www.matfoto.no"}
	aktivitetar[6]={navn:"bridge",url:"http://www.bridge.no"}
	aktivitetar[7]={navn:"spotting",url:"http://www.spotting.no"}

alert ("No blir du heilt tilfeldig sendt til sida for "+aktivitetar[tilfeldigTall1].navn);
window.location.href = aktivitetar[tilfeldigTall1].url;
}
//random GIF-funksjon ferdig

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

function tilfeldigHobbyLink(){
	
	alert ("No blir du derimot sendt til sida for den tilfeldige aktiviteten du ser bilde av (når riktig bilde er på plass), altså "+tilfeldigBildeArrayNamnH);
	window.location.href = tilfeldigBildeArrayUrlH; // return-verdien, altså url-en
}	
/*
//denne bestemmer hvilket random bilde som blir vist på Sport-siden, og bildeverdien er knyttet til spesifikk side
function tilfeldigSport(){

var tilfeldigTall3 = Math.floor((Math.random()*4)); // Tilfeldig tall mellom 0 og 3, runda ned til nærmeste heltall
bilder=[];

	bilder[0]={navn:"petanque",bilde:"../Nettstedet/bilder/petanque.jpg",url:"/petanque.html"}
	bilder[1]={navn:"gokart",bilde:"../Nettstedet/bilder/petanque.jpg",url:"/gokart.html"}
	bilder[2]={navn:"orientering",bilde:"../Nettstedet/bilder/petanque.jpg",url:"/orientering.html"}
	bilder[3]={navn:"bueskyting",bilde:"../Nettstedet/bilder/bueskyting.jpg",url:"/bueskyting.html"}

document.getElementById("tilfBild").src=bilder[tilfeldigTall2].bilde;
document.getElementById("tilfBild").alt=bilder[tilfeldigTall2].navn;
return [bilder[tilfeldigTall2].url, bilder[tilfeldigTall2].navn];
}
*/

tilfeldigHobby();