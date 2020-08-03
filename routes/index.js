const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('calender', { title: 'Canlender' })
  console.log('Likit!')
})

/* WEATHER */
router.get('/weather', function (req, res, next) {
  res.json([
    { year: 2020, month: 'May', day: 31, avr_temp: 21.2, high_temp: 28.0, low_temp: 17.6, weather: 'Mist, Rain' },
    { year: 2020, month: 'Jun', day: 1, avr_temp: 19.7, high_temp: 24.5, low_temp: 16.6, weather: 'Mist, Rain' },
    { year: 2020, month: 'Jun', day: 2, avr_temp: 17.9, high_temp: 21.8, low_temp: 14.8, weather: 'Rain, Mist' },
    { year: 2020, month: 'Jun', day: 3, avr_temp: 22.0, high_temp: 28.4, low_temp: 17.6, weather: 'Mist' },
    { year: 2020, month: 'Jun', day: 4, avr_temp: 21.9, high_temp: 26.5, low_temp: 19.7, weather: 'Rain, Mist' },
    { year: 2020, month: 'Jun', day: 5, avr_temp: 23.0, high_temp: 28.7, low_temp: 18.4, weather: 'Mist' },
    { year: 2020, month: 'Jun', day: 6, avr_temp: 24.6, high_temp: 30.9, low_temp: 19.2, weather: 'Mist' },
    { year: 2020, month: 'Jun', day: 7, avr_temp: 22.7, high_temp: 29.2, low_temp: 19.2, weather: 'Mist' },
    { year: 2020, month: 'Jun', day: 8, avr_temp: 25.0, high_temp: 32.0, low_temp: 19.8, weather: 'Mist' },
    { year: 2020, month: 'Jun', day: 9, avr_temp: 26.7, high_temp: 32.8, low_temp: 20.3, weather: 'Clear' },
    { year: 2020, month: 'Jun', day: 10, avr_temp: 25.8, high_temp: 32.1, low_temp: 22.5, weather: 'Rain, Mist' },
    { year: 2020, month: 'Jun', day: 11, avr_temp: 26.1, high_temp: 31.6, low_temp: 21.7, weather: 'Rain, Mist' },
    { year: 2020, month: 'Jun', day: 12, avr_temp: 24.7, high_temp: 27.6, low_temp: 21.6, weather: 'Mist' },
    { year: 2020, month: 'Jun', day: 13, avr_temp: 26.9, high_temp: 33.5, low_temp: 20.6, weather: 'Rain' },
    { year: 2020, month: 'Jun', day: 14, avr_temp: 24.0, high_temp: 28.8, low_temp: 20.1, weather: 'Rain, Mist' },
    { year: 2020, month: 'Jun', day: 15, avr_temp: 23.0, high_temp: 28.6, low_temp: 18.2, weather: 'Mist' },
    { year: 2020, month: 'Jun', day: 16, avr_temp: 24.4, high_temp: 30.7, low_temp: 20.0, weather: 'Mist' },
    { year: 2020, month: 'Jun', day: 17, avr_temp: 24.3, high_temp: 30.3, low_temp: 20.2, weather: 'Mist' },
    { year: 2020, month: 'Jun', day: 18, avr_temp: 23.4, high_temp: 27.3, low_temp: 20.3, weather: 'Clear' },
    { year: 2020, month: 'Jun', day: 19, avr_temp: 24.7, high_temp: 30.0, low_temp: 21.1, weather: 'Rain' },
    { year: 2020, month: 'Jun', day: 20, avr_temp: 24.9, high_temp: 29.7, low_temp: 20.7, weather: 'Mist' },
    { year: 2020, month: 'Jun', day: 21, avr_temp: 26.1, high_temp: 32.7, low_temp: 19.5, weather: 'Mist' },
    { year: 2020, month: 'Jun', day: 22, avr_temp: 28.6, high_temp: 35.4, low_temp: 21.7, weather: 'Clear' }
  ])
})

module.exports = router
