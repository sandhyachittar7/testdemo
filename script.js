var request =new XMLHttpRequest();
request.open("GET","http://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();

request.onload=function(){
    var data= JSON.parse(request.response);
    console.log(data);
    for(var i=0;i<data.length;i++){
        console.log(`Country: ${data[i].name}
        Latitude:${data[i].latlng[0]} Longitude:${data[i].latlng[1]}`);
    }
}