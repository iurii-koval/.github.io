function getLukesData() {
    var request = new XMLHttpRequest();    
    request.onreadystatechange = function() {
            if(request.readyState == 4 && request.status == 200){
            document.getElementById("LukesData").innerHTML = request.responseText;
        } else {
            document.getElementById("LukesData").innerHTML = "ready state: " + request.readyState + " status: " + request.status;
        }
    }
    
    request.open("GET", "http://swapi.co/api/people/1/", true);
    request.send();    
}
