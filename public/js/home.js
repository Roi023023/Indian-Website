document.addEventListener('DOMContentLoaded', function() {
    setInterval(updateTime, 1000);
    updateTemperature();
    initMap();
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

function initMap() {
    var map = L.map('map').setView([32.0853, 34.7818],13); // Set the initial view coordinates and zoom level

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    var branchLocations = [
        { lat: 32.0853, lng: 34.7818, name: 'Tel Aviv Branch' }, // Tel Aviv location
        { lat: 40.7128, lng: -74.0060, name: 'New York Branch' }, // New York location
        // Add more branch locations here
    ];

    branchLocations.forEach(function(location) {
        var marker = L.marker([location.lat, location.lng]).addTo(map);
        marker.bindPopup(location.name); // Display branch name on marker click
    });
}
