/* Javascript goes here! */


 //api key
 //3cef4cd991736dccbb9be9f483c460f3
 $(function(){

   var apiUrl = 'http://api.openweathermap.org/data/2.5/weather',
   apiKey = '3cef4cd991736dccbb9be9f483c460f3';

   function getWeatherData(city){
    var getWeather = $.ajax({
       url: apiUrl,
       method: 'GET',
       dataType: 'json',
       data: {
         q: city,
         appid: apiKey,
         units: 'imperial'
       }
     });
    getWeather.done(function(response){
     // console.log(response);
       var city = response.name,
       flag = response.sys.country,
       temp = response.main.temp,
       humidity = response.main.humidity,
       description = response.weather[0].description,
       icon = response.weather[0].icon;


       $('.results .results-city').text(city);
       $('.temperature-container .temperature').text(temp + 'ºF');
       $('.humidity-container .humidity').text(humidity+'%');
       $('.description-container .description').text(description);
       $('.icon-container .icon').attr('src','http://openweathermap.org/img/w/'+icon+'.png');
     });

     getWeather.fail(function(error){
         $('.city-error').css('display','inline-block');
     });


   }

   function setHandlers(){
     $('.getWeatherData').on('submit',function(e){
         e.preventDefault();
         city = $(this).find('.weather-city').val();
         getWeatherData(city);
         // console.log(city);
    });
   }

   /*flow of the webapp*/
   function main(){
     getWeatherData('Austin');
     setHandlers();
   }

   main();

 });
