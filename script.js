let day = document.getElementById('day');
let time = document.getElementById('time');
let data = new Date();
let dayData = data.toLocaleString('en', {weekday: 'long'});
let timeData = data.toLocaleString('en', {hour: '2-digit', minute: 'numeric', second:'numeric'});

window.addEventListener('load', function() {
    day.innerHTML = dayData;
    time.innerHTML = timeData
})