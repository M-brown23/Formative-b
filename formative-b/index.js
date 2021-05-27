var getImage = document.getElementById("outputImg")
var getUpdateButton = document.getElementById('submit');
var getBackground = document.getElementById('background').value;


getUpdateButton.onclick = function() {

  // Changing Images ------------ ------------------------------//
  var chooseImages = document.getElementById('image').value;



  if (chooseImages === 'birthday') {
    getImage.src = 'assets/birthday.jpg';
  }
  if (chooseImages === 'christmas') {
    getImage.src = 'assets/christmas.jpg';

  if (chooseImages === 'valentines') {
    getImage.src = 'assets/valentines.jpg';
  }

  console.log('working');
  // Changing Images ends

  // Changing Background Colors ----------------------------

  // get element
  // Add a class
  // do a querySelector noBorder
function BackgroundFunction() {

var  getBackgroundVar = document.getElementById('backgroundid');

if (getBackground === 'celadon') {
getBackgroundVar.classLit.add('celadonBackground')
  } else {
    getBackgroundVar.classList.remove('celadonBackground');
  }
  
  if (getBackground === 'graphite') {
getBackgroundVar.classLit.add('graphiteBackground')
  } else {
    getBackgroundVar.classList.remove('graphiteBackground');
  }
  
    if (getBackground === 'rose') {
getBackgroundVar.classLit.add('roseBackground')
  } else {
    getBackgroundVar.classList.remove('roseBackground');
  }
  
//   Changing of Fonts
  
  function fontFunction() {
   var getFontVar = document.getElementById('font') 
  
   if(getFont ==='handwriting-font'){
   getFontVar.classList.add('handwriting');
   } else {
       getFontVar.classList.remove('handwriting');
   }
    
      if(getFont ==='print-font'){
   getFontVar.classList.add('print');
   } else {
       getFontVar.classList.remove('print');
   }
    
     if(getFont ==='sketch-font'){
   getFontVar.classList.add('sketch');
   } else {
       getFontVar.classList.remove('sketch');
   }

  }

imageFunction()
backgroundFunction()
borderFunction()
fontFunction()

  
  var messageVar = document.getElementById('message')
  
  

};
