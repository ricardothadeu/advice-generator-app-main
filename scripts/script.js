window.onload = getAdvice();
function getAdvice() {
    var requestURL = 'https://api.adviceslip.com/advice'
    var request = new XMLHttpRequest();

    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
      var advice = request.response;
      document.getElementById('advice-id').innerHTML = advice["slip"]["id"];
      document.getElementById('quotes').innerHTML = advice["slip"]["advice"];
    }
  }