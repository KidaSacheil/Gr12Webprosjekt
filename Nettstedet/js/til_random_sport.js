var bilder;
//tilfeldigHobby(); // funksjonen kjører automatisk når skriptet blir lasta inn i HTML-fila

//denne går bare til random side på GIF-en på forsida
function tilfeldigAktivitet(){
var tilfeldigTall1 = Math.floor((Math.random()*8)); // Tilfeldig tall mellom 0 og 7, runda ned til nærmeste heltall
var aktivitetar=[];
	aktivitetar[0]={navn:"petanque",url:"petanque.html"}
	aktivitetar[1]={navn:"gokart",url:"gokart.html"}
	aktivitetar[2]={navn:"orientering",url:"orientering.html"}
	aktivitetar[3]={navn:"bueskytting",url:"bueskytting.html"}
	aktivitetar[4]={navn:"strikking",url:"strikking.html"}
	aktivitetar[5]={navn:"matfoto",url:"matfotografi.html"}
	aktivitetar[6]={navn:"bridge",url:"bridge.html"}
	aktivitetar[7]={navn:"spotting",url:"planespotting.html"}

alert ("No blir du heilt tilfeldig sendt til sida for "+aktivitetar[tilfeldigTall1].navn);
window.location.href = aktivitetar[tilfeldigTall1].url;
}
//random GIF-funksjon ferdig

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

function tilfeldigSportLink(){
	
	alert ("No blir du derimot sendt til sida for den tilfeldige aktiviteten du ser bilde av (når riktig bilde er på plass), altså "+tilfeldigBildeArrayNamnS);
	window.location.href = tilfeldigBildeArrayUrlS; // return-verdien, altså url-en
}