function colorChange (division) {
    division.style.background = "#F9E29C";
}

function originalColor (division) {
    division.style.background = "antiquewhite";
}

function weatherOutput (inputDate) {
    fetch('http://localhost:3000/weather_log/2020/May')
    .then(res => res.json())
    .then(data => {
        alert(data.weather);
    })
}

function dayOutput (inputDate) {
    var words = inputDate.split("_");
    var y, m, d;

    fetch('http://localhost:3000/weather_log/2020/May')
    .then(res => res.json())
    .then(data => {
        for ()
        document.getElementById(inputDate).innerHTML = data.month + data.day;
    })
}