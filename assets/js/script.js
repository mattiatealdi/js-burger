var nameUser = document.getElementById('name');
var button = document.getElementById('button');
var ingredients = document.getElementsByClassName('ingredient-checkbox');
var coupon = document.getElementById('coupon');
var price = document.getElementById('price');

console.log(ingredients);


/**
 * settings
 */
 var defaultPrice = 50;
 var coupons = ['sconto2021', 'sconto-bool'];
 var discountValue = 0.3;


 button.addEventListener('click', function(){
  nameCheck(nameUser)
});

button.addEventListener('click', function(){
  var priceToppings = priceCalculator();
  console.log(priceToppings);
  var total = totalPrice(defaultPrice, priceToppings);
  console.log(total);
  var discountPrice = discountCalculator(coupon, coupons, discountValue, total);
  console.log("Questo è il prezzo scontato " + discountPrice);
  price.innerHTML = discountPrice.toFixed(2);
});




function discountCalculator(str, arr, discountCost, priceTotal){
  for(i = 0; i < arr.length; i++){
    var arrElement = arr[i];
    if(str.value == arrElement){
      priceTotal = priceTotal*(1 - discountCost);
    }else{
      priceTotal = priceTotal
    }
  }
  return priceTotal
}


function totalPrice(normalPrice, addedPrice){
  var totalPrice = normalPrice + addedPrice;
  return totalPrice;
}

function priceCalculator(){
  var priceIngredients = 0;
  for(i = 0; i < ingredients.length; i++){
    var ingredient = ingredients[i];
    if(ingredient.checked == true){
      priceIngredients += parseInt(ingredient.value);
    }
  }
  return priceIngredients;
}


function nameCheck(str){
  var nomeInserito = str.value.trim();
  if(nomeInserito.length === 0){
    alert("Inserisci il nome del burger!")
  }
  else{
    console.log("Il nome inserito è valido!");
  }
}

