$( document ).ready(function() {
    $("#lbox").on("click", function() {
        if ("geolocation" in navigator){
             navigator.geolocation.getCurrentPosition(function(position){ 
                 $.ajax({
                     url: "http://api.openweathermap.org/data/2.5/weather?lat="+position.coords.latitude+"&lon="+position.coords.longitude+"&appid=0cd024506296321d372539d62a64351c",
                     success: function(response){
                         $("#lbox").remove();
                         $("main").html("<h2>"+response.name+"</h2><hr><p>"+Math.round(kelToFar(response.main.temp))+"<a href='#f'>F&deg;</a>|"+Math.round(kelToCel(response.main.temp))+"<a href='#c'>C&deg;</a></p>");
                         
                         if (response.main.temp >= 305.372) {
                             $("body").css("background-color", "red");
                         } else if (response.main.temp >= 299.817) {
                             $("body").css("background-color", "orange");
                         } else if (response.main.temp >= 294.261) {
                             $("body").css("background-color", "yellow");
                         } else if (277.595 <= response.main.temp < 294.261) {
                             $("body").css("background-color", "green");
                         } else if (response.main.temp <= 277.594) {
                             $("body").css("background-color", "deepskyblue");
                         } else if (response.main.temp <= 273.15) {
                             $("body").css("background-color", "cornflowerblue");
                         } else if (response.main.temp <= 266.483) {
                             $("body").css("background-color", "blue");
                         };
                     }
                 });             
             
             });
    }/*else{
        $("main").html("<p>Please enter your city and <a href='https://en.wikipedia.org/wiki/ISO_3166-1' target='_blank'>country code</a>: </p> <input type='text' placeholder='New York, US'><input type='submit' value='submit' id='submit'>");
        $("#submit").on("click", function(){
            $(this).addClass(".coldest");
        });
    }      */  
        
        
        
    });
});
            
var kelToFar = function(val) {
    return (val - 273.15)*1.8000 + 32.00;
};

var kelToCel = function(val) {
    return (val - 273.15)
};