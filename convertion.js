let userInput = document.getElementById("inrAmount");
let convertBar = document.getElementById("convertedAmount");
let resultOutput = document.getElementById("billAmount");
let exchangeButton = document.getElementById("convertButton");
let payButton = document.getElementById("payBtn");
let dropD = document.getElementById("selectDropdown");
let denimination = document.getElementById("denomination");



exchangeButton.onclick = () => {
    const firstVal = parseFloat(userInput.value);
    const selecter = dropD.value;

    if (!firstVal || firstVal <= 0) {
        alert("Please enter a valid INR amount and select a currency.");
        return;
    }
    let url = "https://api.exchangerate-api.com/v4/latest/INR";
    let options = {
        method: "GET"
    };
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            const exchangeRate = data.rates[selecter];
            const resultValue = firstVal * exchangeRate;
            convertBar.value = resultValue.toFixed(2);
            resultOutput.value = resultValue.toFixed(2);
            denimination.innerText = selecter;
        })





}
function transverse(){
    if(convertBar.value != 0 && resultOutput.value != 0){
        payButton.disabled = false;
          window.location.href = "payment.html";
    }
    else{
        alert("Select and convert currency to pay ")
}
}

 
 function pay() {
      let cardName = document.getElementById('cardName').value.trim();
      let number = document.getElementById('number').value.trim();
      let cvv = document.getElementById('cvv').value.trim();
      let cardsDetails = JSON.parse(localStorage.getItem("cardDetails"));
      
      if (!cardsDetails) {
            alert("card details are not saved or invalid.");
            return;
      }
      else if(cardName === cardsDetails.name && number === cardsDetails.cardNumber && cvv === cardsDetails.CVV) {
            alert("Payment Successful! Thank you for your transaction.");
      }
      else{
            alert("Invalid card details. Please try again.");
      }
}

function back() {
    window.location.href = "convertion.html"; 
};

