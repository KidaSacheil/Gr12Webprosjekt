var bilder;

//denne bare går til random side
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

//denne bestemmer hvilket random bilde som blir vist, og bildeverdien er knyttet til spesifikk side
function tilfeldigBilde(){

var tilfeldigTall2 = Math.floor((Math.random()*8)); // Tilfeldig tall mellom 0 og 7, runda ned til nærmeste heltall
bilder=[];
	bilder[0]={navn:"petanque",bilde:"http://m9.i.pbase.com/t1/68/971468/4/146509739.IaG6SjFZ.jpg",url:"http://www.petanque.no"}
	bilder[1]={navn:"gokart",bilde:"http://m8.i.pbase.com/t1/26/499326/4/92825838.YpQQmclD.jpg",url:"http://www.gokart.no"}
	bilder[2]={navn:"orientering",bilde:"http://m7.i.pbase.com/t1/13/526513/4/58260767.PearBlossoms.jpg",url:"http://www.orientering.no"}
	bilder[3]={navn:"bueskytting",bilde:"http://m3.i.pbase.com/u36/ayalofer/small/32185523.IMG_2499.jpg",url:"http://www.bueskytting.no"}
	bilder[4]={navn:"strikking",bilde:"http://m7.i.pbase.com/u34/dinkum/small/22734917.r_PICT9540.jpg",url:"http://www.strikking.no"}
	bilder[5]={navn:"matfoto",bilde:"http://m1.i.pbase.com/t3/60/43760/4/76568421.VT6IvtPy.jpg",url:"http://www.matfoto.no"}
	bilder[6]={navn:"bridge",bilde:"http://m3.i.pbase.com/t1/11/37011/4/62445683.iyMkLZuT.jpg",url:"http://www.bridge.no"}
	bilder[7]={navn:"spotting",bilde:"http://m5.i.pbase.com/t3/67/427867/4/102498205.lTLCWTLp.jpg",url:"http://www.spotting.no"}

document.getElementById("tilfBild").src=bilder[tilfeldigTall2].bilde;
document.getElementById("tilfBild").alt=bilder[tilfeldigTall2].navn;
return [bilder[tilfeldigTall2].url, bilder[tilfeldigTall2].navn];
}

var tilfeldigBildeArray = tilfeldigBilde();
var tilfeldigBildeArrayUrl = tilfeldigBildeArray[0];
var tilfeldigBildeArrayNamn = tilfeldigBildeArray[1];

function tilfeldigBildeAktivitet(){
	
	alert ("No blir du derimot sendt til sida for den tilfeldige aktiviteten du ser bilde av (når riktig bilde er på plass), altså "+tilfeldigBildeArrayNamn);
	window.location.href = tilfeldigBildeArrayUrl; // return-verdien, altså url-en
}	

tilfeldigBilde(); // funksjonen køyrer automatisk når skriptet blir lasta inn i HTML-fila