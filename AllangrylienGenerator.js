//RANDOM ANGRYLIEN color
var randomColor = new Array();
randomColor[0] = "#78b9a1"
randomColor[1] = "#d694c1"
randomColor[2] = "#f97fb5"
randomColor[3] = "#a3bbc3"
randomColor[4] = "#00aeef"
randomColor[5] = "#ffb600"
randomColor[6] = "#86d1d4"
randomColor[7] = "#afd24d"
randomColor[8] = "#00ae8d"
randomColor[9] = "#dbb17f"
randomColor[10] = "#faa61a"
randomColor[11] = "#cda176"
randomColor[12] = "#c5b4e2"
//
// var identity = Math.floor(Math.random()*randomColor.length);
// var newColor = randomColor[identity];
// return newColor;
// console.log(identity);

// ARRAY OF BACKGROUND FRAME COLOR
var randomBG = new Array();
randomBG[0] = "ed1c24"
randomBG[1] = "0097ce"
randomBG[2] = "afd24d"
randomBG[3] = "00aeef"
randomBG[4] = "faa61a"
randomBG[5] = "ef4a76"
randomBG[6] = "0f985f"
randomBG[7] = "768ab5"
randomBG[8] = "afd24d"
randomBG[9] = "00aeef"
randomBG[10] = "ffcb26"
randomBG[11] = "a78e8d"
randomBG[12] = "ef4a76"
randomBG[13] = "0f985f"
randomBG[14] = "0097ce"
// randomBG[15] = "ed1c24"


// ARRAY OF ANGRYLIENS EYE PART
var randomEyes =  new Array();
randomEyes[0] = "images/eyes/eyes-1.svg"
randomEyes[1] = "images/eyes/eyes-2.svg"
randomEyes[2] = "images/eyes/eyes-3.svg"
randomEyes[3] = "images/eyes/eyes-4.svg"
randomEyes[4] = "images/eyes/eyes-5.svg"
randomEyes[5] = "images/eyes/eyes-6.svg"
randomEyes[6] = "images/eyes/eyes-7.svg"
randomEyes[7] = "images/eyes/eyes-8.svg"
randomEyes[8] = "images/eyes/eyes-9.svg"
randomEyes[9] = "images/eyes/eyes-10.svg"
randomEyes[10] = "images/eyes/eyes-11.svg"
randomEyes[11] = "images/eyes/eyes-12.svg"
randomEyes[12] = "images/eyes/eyes-13.svg"
randomEyes[13] = "images/eyes/eyes-14.svg"
randomEyes[14] = "images/eyes/eyes-15.svg"
randomEyes[15] = "images/eyes/eyes-16.svg"

// ANGRY ARRAY OF MOUTH
var randomMouth =  new Array();
randomMouth[0] = "images/mouth/mouth-1.svg"
randomMouth[1] = "images/mouth/mouth-2.svg"
randomMouth[2] = "images/mouth/mouth-3.svg"
randomMouth[3] = "images/mouth/mouth-4.svg"
randomMouth[4] = "images/mouth/mouth-5.svg"
randomMouth[5] = "images/mouth/mouth-6.svg"
randomMouth[6] = "images/mouth/mouth-7.svg"
randomMouth[7] = "images/mouth/mouth-8.svg"
randomMouth[8] = "images/mouth/mouth-9.svg"
randomMouth[9] = "images/mouth/mouth-10.svg"
randomMouth[10] = "images/mouth/mouth-11.svg"
randomMouth[11] = "images/mouth/mouth-12.svg"
randomMouth[12] = "images/mouth/mouth-13.svg"
randomMouth[13] = "images/mouth/mouth-14.svg"
randomMouth[14] = "images/mouth/mouth-15.svg"
randomMouth[15] = "images/mouth/mouth-16.svg"


// var angryAliens = {col: value1, bg: value2, eye: value3, mouth: value4};

var angryLiensConstructor = [];

for (var i = 0; i < randomEyes.length; i++) {

          var myEyes = randomEyes[i];

          for (var j = 0; j < randomMouth.length; j++) {

          var myMouth = randomMouth[j];

          for (var k = 0; k < randomColor.length; k++) {

            var myColor = randomColor[k];

            for (var l = 0; l < randomBG.length; l++) {
              var myBG = randomBG[l];

              var mySingleAlien = {eyes: myEyes, mouth: myMouth, color: myColor, bg: myBG};

              angryLiensConstructor.push(mySingleAlien);

            }

          }




          }
}


window.onload = function getRandomPiece(){

var theAngrylien = "";
var lengthy = randomColor.length*randomBG.length;
console.log(lengthy);
for (var i = 0; i < angryLiensConstructor.length; i ++) {

  var singleColor = angryLiensConstructor[i].color;
  var singleBG = angryLiensConstructor[i].bg;
  var singleEye = angryLiensConstructor[i].eyes;
  var singleMouth = angryLiensConstructor[i].mouth;


  var sigleAngryline = "";
  sigleAngryline += '<div class="tinyLien"><div><object data="'+singleEye+'" type="image/svg+xml" id="SVGhead" style="display: block;" /></object></div><div><object data="'+singleMouth+'" type="image/svg+xml" id="SVGmouth"  style="display: block;"/></object></div></div>';
  // mySingleAngrylien += ''

  theAngrylien += sigleAngryline;




}
// console.log(theAngrylien);

document.getElementById("angrylienHolder").innerHTML +=  theAngrylien;
console.log(theAngrylien.length);

}


// console.log(angryLiensConstructor);
//
console.log(randomEyes.length);
console.log(randomMouth.length);
console.log(randomColor.length);
console.log(randomBG.length);
console.log(angryLiensConstructor.length);
