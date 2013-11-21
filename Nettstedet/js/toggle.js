$(function(){
$('.kategoriDiv div').hide(); // skjuler div-ene inne i kategoriDiv
$('#linkKat a').click(function() { // ved klikk på en av linkene (<a>-taggene), kjøres følgende funksjon
var $visDiv = $('.kategoriDiv > div').eq($(this).index('#linkKat a')); /* oppretter et jQuery-objekt, visDiv ... forts.->
som henter alle div-ene i kategoriDiv. eq-funksjonen henter indeksen i objektet som tilsvarer <a>-elementet som ble klikket på (this)*/
   $('.kategoriDiv > div').not($visDiv).hide(); // kategoriDiv-div-ene med indeks i jQuery-objekt som ikke tilsvarer den linkKat-linken som ble klikket på, skjules -- slik at kategorien som ble klikket på forrige gang, blir fjernet ved neste klikk
   $visDiv.show(); // den som ble klikket på, blir vist
   
});
});

