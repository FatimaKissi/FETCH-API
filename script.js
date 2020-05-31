fetch('https://2ubiyjczwh.execute-api.eu-west-2.amazonaws.com/wall').then(response => response.json()).then(data => appendData(data))

if (localStorage.getItem('test') == "key") {
  console.log("It's there!")
} else {
  localStorage.setItem('test', 'key')
}
function appendData(data) {
    var mainContainer = document.getElementById("wallItems");
    for (var i = 0; i < data.length; i++) {
    }
}