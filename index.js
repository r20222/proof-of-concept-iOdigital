console.log('mooi')

// import json from 'beau-ter-ham.json'
import express from 'express'

// onderstaande code is om require te kunnen gebruiken
import { createRequire } from 'module';


const require = createRequire(import.meta.url);
// Maak een nieuwe express app
const app = express()


// fs is een nodemodule die ervoor zorgt dat je bij je locale bestanden kunt
const fs = require('fs');

const jsonData = fs.readFileSync('beau-ter-ham.json');
const data = JSON.parse(jsonData);


// test video
// const video = fs.readFileSync('computer-lottie.json');
// const videoData = video;

// Stel in hoe we express gebruiken
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static('public'))

app.get('/', (request, response) => {
    // Read the JSON file
    // console.log("bliep")
    // console.log(data);


      response.render('index', { data: data});

  })



// Stel het poortnummer in en start express
app.set('port', process.env.PORT || 8000)
app.listen(app.get('port'), function () {
  console.log(`Application started on http://localhost:${app.get('port')}`)
})


// async function fetchJson(jsonData) {
//   return await fetch(jsonData)
//     .then((response) => response.json())
//     .catch((error) => error)
// }