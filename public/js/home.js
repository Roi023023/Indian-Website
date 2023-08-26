document.addEventListener('DOMContentLoaded', function() {
                
    setInterval(updateTime, 1000);
    
    updateTemperature()
});

function updateTime() {
   const now = new Date();
    let hours = now.getHours() + 2; // Adding 2 hours for India time
    let minutes = now.getMinutes() + 30; // Adding 30 minutes for India time

    if (minutes >= 60) {
        hours += Math.floor(minutes / 60);
        minutes %= 60;
    }

    const timeStr = `${hours}:${String(minutes).padStart(2, '0')}`;
    document.getElementById('time').innerText = 'Current Time In India: ' + timeStr;
}

function updateTemperature() {
    
    const mockTemperature = "28"; 
    document.getElementById('temperature').innerText = 'Temperature In India: ' + mockTemperature + ' °C';
}

/*
function updateTemperature() {
        var request = require('request');
        request('https://samples.openweathermap.org/data/2.5/find?q=mumbai&appid=71afdeb6cc6e69e117adae0300482c2b', 
            function (error, response, body) {
              let data = JSON.parse(body)
             if(response.statusCode === 200){
                document.getElementById('temperature').innerText = 'The weather in India is: ';
                }
            });
}

*/