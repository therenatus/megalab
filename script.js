let day = document.getElementById('day');
let time = document.getElementById('time');

window.addEventListener('DOMContentLoaded', function() {
    toHtml();
})

function toHtml () {
    let data = new Date();
    let dayData = data.toLocaleString('en', {weekday: 'long'});
    let timeData = data.toLocaleString('en', {hour: '2-digit', minute: 'numeric', second:'numeric'});
    day.innerHTML = dayData;
    time.innerHTML = timeData;
    setTimeout(()=> {
        toHtml();
    }, 1000)
}