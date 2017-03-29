$( document ).ready(function() {
    $("#lbox").on("click", function() {
        if ("geolocation" in navigator){
             navigator.geolocation.getCurrentPosition(function(position){ 
                //$("#result").html("Found your location <br />Lat : "+position.coords.latitude+" </br>Lang :"+ position.coords.longitude);
                 $.ajax({
                     url: "https://api.openweathermap.org/data/2.5/weather?lat="+position.coords.latitude+"&lon="+position.coords.longitude+"&APPID=0cd024506296321d372539d62a64351c",
                     success: function(response){
                         console.log(response);
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