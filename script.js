fetch(''https://2ubiyjczwh.execute-api.eu-west-2.amazonaws.com/wall')
    .then(response => response.json())
    .then(json => console.log(json));
