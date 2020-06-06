$(function() {

        var map = L.map('mapa').setView([16.860867, -459.88200], 16);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        
        L.marker([16.860867, -459.88200]).addTo(map)
            .bindPopup('AcaWebCamp 2020<br>Compra tus boletos')
            .openPopup();
});