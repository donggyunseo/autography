function colorChange (division) {
  division.style.background = '#F9E29C'
}

function originalColor (division) {
  division.style.background = 'antiquewhite'
}

function weatherOutput (inputDate) {
  console.log(inputDate)
  fetch('http://localhost:3000/weather')
  .then(res => res.json())
  .then(data => {
    document.getElementById(inputDate).innerHTML = data[0].weather
  })
}

function dayOutput (inputDate) {
  fetch('http://localhost:3000/weather')
  .then(res => res.json())
  .then(data => {
    document.getElementById(inputDate).innerHTML = data[0].month + ' ' + data[0].day;
  })
} 