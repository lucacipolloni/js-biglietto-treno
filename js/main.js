// # RACCOLTA DATI

// * Inputs

// Chiedo all'utente la sua età
const userAge = parseInt(prompt("Quanti anni hai?"));

// Chiedo all'utente km da percorrere
const userKm = parseInt(prompt("Quanti KM vuoi percorrere?"));

// * Costanti

// Definisco il prezzo al km del biglietto
const priceForKm = 0.21;

// Definisco lo sconto % per minorenni
const minorDiscountPerc = 20;

// Definisco lo sconto % per over65
const over65DiscountPerc = 40;

// * Valori di output

// Definisco il prezzo base del biglietto
let basePrice;

// Definisco il tipo di sconto applicato
let appliedDiscountType;

// Definisco amount di sconto applicato
let appliedDiscountAmount;

// Definisco il prezzo finale
let finalPrice;

// Definisco il testo di output
let outputText;

// # SVOLGIMENTO

// Setto il prezzo base
basePrice = priceForKm * userKm;

// Setto final price
finalPrice = basePrice;

// Se l'utente è minorenne
if (userAge < 18) {
  //   setto un tipo di sconto applicato (minorenni)
  appliedDiscountType = "Sconto per minorenni";

  //   setto un amount di sconto applicato (prezzo base * sconto % per minorenni / 100)
  appliedDiscountAmount = (basePrice * minorDiscountPerc) / 100;

  //   setto un prezzo finale (prezzo base - amount di sconto)
  finalPrice = basePrice - appliedDiscountAmount;
}

// Se l'utente è over 65
if (userAge > 65) {
  //   setto un tipo di sconto applicato (over65)
  appliedDiscountType = "Sconto per over 65";

  //   setto un amount di sconto applicato (prezzo base * sconto % per over65 / 100)
  appliedDiscountAmount = (basePrice * over65DiscountPerc) / 100;

  //   setto un prezzo finale (prezzo base - amount di sconto)
  finalPrice = basePrice - appliedDiscountAmount;
}

// # OUTPUT

// Se c'è tipo di sconto applicato
if (appliedDiscountType) {
  //  Setto output text "Prezzo biglietto - tipo sconto applicato - amount e % - prezzo finale"
  outputText = `
Prezzo iniziale biglietto: € ${basePrice.toFixed(2)}
Tipologia sconto applicata:  ${appliedDiscountType}
Valore sconto: € ${appliedDiscountAmount.toFixed(2)}
Prezzo finale: € ${finalPrice.toFixed(2)}
`;
}
// Altrimenti
else {
  //  Setto uotput text "prezzo finale"
  outputText = `Prezzo biglietto: € ${finalPrice.toFixed(2)}`;
}

// Stampo output text
alert(outputText);
