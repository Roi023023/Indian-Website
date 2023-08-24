document.addEventListener('DOMContentLoaded', function() {
                
    setInterval(updateTime, 1000);
    
    updateTemperature()
});

function updateTime() {
    const now = new Date();
    const timeStr = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;
    document.getElementById('time').innerText = 'Current Time In India: ' + timeStr;
}

function updateTemperature() {
    
    const mockTemperature = "28"; 
    document.getElementById('temperature').innerText = 'Temperature In India: ' + mockTemperature + ' °C';
}