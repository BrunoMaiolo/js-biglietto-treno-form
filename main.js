//Elementi dal DOM
const kmImput = document.getElementById('kmImput');
const ageInput = document.getElementById('ageInput');
const calcBtn = document.getElementById('calcBtn');

//Click bottone
calcBtn.addEventListener('click', function () {
// lettura valori degli input
const km = Number(kmInput.value);
  const age = Number(ageInput.value);
  // calcolo del prezzo base
  let price = km * 0.21;
  //sconti (-20% , -40%)
  if (age < 18) {
    price = price * 0.8; 
  } else if (age >= 65) {
    price = price * 0.6; 
  }
  //Stampa in console
  

});
