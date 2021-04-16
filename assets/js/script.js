var nameUser = document.getElementById('name');
var button = document.getElementById('button');

/**
 * settings
 */
 var defaultPrice = 50;
 var coupons = ['sconto2021', 'sconto-bool'];
 var discountValue = 0.3;





function myname(){}


function nameCheck(str){
  var nomeInserito = str.value.trim();
  if(nomeInserito.length === 0){
    alert("Inserisci il nome del burger!")
  }
  else{
    console.log("Il nome inserito è valido!");
  }
}

button.addEventListener('click', function(){
  nameCheck(nameUser)
});