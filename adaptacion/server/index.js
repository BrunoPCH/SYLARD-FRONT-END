const express = require('express');
const app = express();
const path = require('path');
const eafTools = require('../helpers/eafTools');
var parser = require('xml2json');
const ExpHbs = require('express-handlebars');
var fs = require('fs');
const appRoot = require('app-root-path').path;

var chars =  {
  '<': '&lt;',
  '>': '&gt;',
  '(': '&#40;',
  ')': '&#41;',
  '#': '&#35;',
  '&': '&amp;',
  '"': '&quot;',
  "'": '&apos;'
};

const options = {
  object: true,
  reversible: false,
  coerce: false,
  sanitize: true,
  trim: true,
  arrayNotation: false,
  alternateTextNode: false
};

// MP3 Constans
const EAF_TITLE = `I³ta² sa³in⁴ ta³ta² (<i>Gomphrena serrata</i> L. por Raúl Felipe Margarito (Yoloxóchitl mixteco, <i>yolo1241</i>)`;
const EAF_FILE_NAME = "a03.eaf";
const AUDIO_FILE = `https://drakoestudio.com.mx/SYLARDEMULE/audios/DEMCA_archivos_Jonathan/Chilc_Botan_RMM302-MSO325_mowih-Acanthaceae_2011-07-27-j.mp3`;

// Reading the file
let eafXml = fs.readFileSync( path.join(appRoot,'originals', EAF_FILE_NAME), 'utf8');
var eafJs = parser.toJson(eafXml, options);

// App Templae EGINE
app.engine('hbs', ExpHbs({
  extname: '.hbs',
  defaultLayout: 'main'
}));

// Selecting Template Engine
app.set('view engine', 'hbs');
// Setting Views Route
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res)=>{
  // Getting variables
  let timeslotArr = eafTools.getTimeSlotArray(eafJs);
  let dataArr = eafTools.getDataArray(eafJs);
  let lineTimeArr = eafTools.getLineTimeArray(eafJs);
  let tierArr = eafTools.getTierArr(eafJs);

  let timeslotArrStr = JSON.stringify(timeslotArr);
  let dataArrStr = JSON.stringify(dataArr);
  let lineTimeArrStr = JSON.stringify(lineTimeArr);
  let tierArrStr = JSON.stringify(tierArr);

  let eafViewModel = {
    title : EAF_TITLE,
    timeslotArr,
    timeslotArrStr,
    dataArr,
    dataArrStr,
    lineTimeArr,
    lineTimeArrStr,
    tierArr,
    tierArrStr,
    audioFile: AUDIO_FILE
  }

  res.render('home', eafViewModel);
});

app.get('/res/timeslotArr', (req, res) => {
  let timeslotArr = eafTools.getTimeSlotArray(eafJs);
  res.json(timeslotArr);
});

app.get('/res/dataArr', (req, res) => {
  let dataArr = eafTools.getDataArray(eafJs);
  res.json(dataArr);
});

app.get('/res/lineTimeArr', (req, res) => {
  let lineTimeArr = eafTools.getLineTimeArray(eafJs)
  res.json(lineTimeArr);
});

app.get('/res/tierArr', (req, res) => {
  let tierArr = eafTools.getTierArr(eafJs)
  res.json(tierArr);
});

app.get('/eaf', (req, res) => {
  
  eafJs = JSON.parse(parser.toJson(eafXml));
  //console.log("to json -> %s", json);
  res.json(eafJs);
});

app.get('/org/dataArr', (req, res) => {
  let dataArr = require('../originals/dataArr.json')
  res.json(dataArr);
});

app.get('/org/tierArr', (req, res) => {
  let tierArr = require('../originals/tierArr.json')
  res.json(tierArr);
});

app.get('/org/timeslotArr', (req, res) => {
  let timeslotArr = require('../originals/timeslotArr.json')
  res.json(timeslotArr);
});

app.get('/org/lineTimeArr', (req, res) => {
  let lineTimeArr = require('../originals/lintetimeArr.json')
  res.json(lineTimeArr);
});

// Adding static files
app.use(express.static(path.join(appRoot,'public')));

// Starting Server
const port = 3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
