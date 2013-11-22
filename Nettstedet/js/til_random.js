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

window.location.href = aktivitetar[tilfeldigTall1].url;
}
//random GIF-funksjon ferdig