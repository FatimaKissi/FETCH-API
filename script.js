fetch('https://2ubiyjczwh.execute-api.eu-west-2.amazonaws.com/wall').then(response => response.json()).then(data => appendData(data)
)
function appendData(wallItems) {
    wallItems.forEach(function(element){
        let newLi=document.createElement("LI");
        let newContent = document.createTextNode(element);
        newLi.appendChild(newContent);
        let currentUl=document.getElementById("result");
        document.body.insertBefore(newLi,currentUl)  
        })
}