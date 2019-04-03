const express = require('express');
const app = express();//start an express app
const path = require('path');
const router = express.Router();

//static files
app.use(express.static('public'));


// router
router.get('/',(request, response) =>{
  response.sendFile(path.join(__dirname, "/public/index.html"));
});
router.get('/adivinacion',(request, response) =>{
  response.sendFile(path.join(__dirname, "/public/Adivinacion.html"));
});
router.get('/amor',(request, response) =>{
  response.sendFile(path.join(__dirname, "/public/Amor.html"));
});
router.get('/politicas',(request, response) =>{
  response.sendFile(path.join(__dirname, "/public/Politicas.html"));
});
router.get('/salud',(request, response) =>{
  response.sendFile(path.join(__dirname, "/public/Salud.html"));
});
router.get('/suerte',(request, response) =>{
  response.sendFile(path.join(__dirname, "/public/Suerte.html"));
});
router.get('/dinero',(request, response) =>{
  response.sendFile(path.join(__dirname, "/public/Dinero.html"));
});





app.use("/", router);

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
