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

}

}

  // query for background select, that is what you check in our ifs...


};
