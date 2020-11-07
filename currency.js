function convertToVnd() {
    let choses = document.querySelector('input[name="currency"]:checked').value;
    callApi(choses);
}
function updateResults(response, currency) {
    let	b = (currency ==="USD") ? response.USD_VND : response.EUR_VND;
    let result = document.getElementById('result');
    let te = 	document.getElementById('amount').value;
    result.innerHTML= te + " " + currency + " = " + te*b + " VND";
}
function callApi(currency) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://free.currencyconverterapi.com/api/v6/convert?q=' + currency + '_VND&compact=ultra&apiKey=a39746d493738bb7185b');
    xhr.onload = function() {
  if (xhr.status === 200) {
      updateResults(JSON.parse(xhr.responseText), currency);
  }
  else {
      alert('Request failed.  Returned status of ' + xhr.status);
  }
};
xhr.send();
}