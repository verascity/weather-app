$(document).ready(function () {
    $("#lbox").on("click", function () {  
        $.ajax({
            url: "http://api.wunderground.com/api/27aadada19471fa5/conditions/q/autoip.json",
            success: function (response) {
                console.log(response);
                $("#lbox").remove();
                $("main").html("<h2>The temperature in " + response.current_observation.display_location.city + " is:</h2><hr><h2 id='temp'>" + response.current_observation.temp_f + "&deg; F</h2><p><a href='#f' id='f'>F&deg;</a>|<a href='#c' id='c'>C&deg;</a></p>");
                $("#c").on("click", function () {
                    $('#temp').html(response.current_observation.temp_c + "&deg; C");
                });
                $("#f").on("click", function () {
                    $('#temp').html(response.current_observation.temp_f + "&deg; F");
                });    
                                    
                if (response.current_observation.temp_f >= 90) {
                    $("body").css("background-color", "red");
                } else if (response.current_observation.temp_f >= 80) {
                    $("body").css("background-color", "orange");
                } else if (response.current_observation.temp_f >= 70) {
                    $("body").css("background-color", "yellow");
                } else if (41 <= response.main.temp < 70) {
                    $("body").css("background-color", "green");
                } else if (response.current_observation.temp_f <= 40) {
                    $("body").css("background-color", "deepskyblue");
                } else if (response.current_observation.temp_f <= 32) {
                    $("body").css("background-color", "cornflowerblue");
                } else if (response.current_observation.temp_f <= 20) {
                    $("body").css("background-color", "blue");
                }
            }
        });
        
    });
});