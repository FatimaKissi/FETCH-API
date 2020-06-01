fetch('https://2ubiyjczwh.execute-api.eu-west-2.amazonaws.com/wall').then(response => response.json()).then(data => addElements(data))
function addElements(list){
    list.forEach(function(element){
    let newLi=document.createElement("li");
    let newContent = document.createTextNode(element);
    newLi.appendChild(newContent)
    let currentUl=document.getElementById("result");
    document.body.insertBefore(newLi,currentUl)  
    })
  }