function getRandomColor(){
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


  var identity = Math.floor(Math.random()*randomColor.length);

  var newColor = randomColor[identity];
  return newColor;

}

function getRandomBG(){
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



  var identity = Math.floor(Math.random()*randomBG.length);


  document.getElementById("angrylienHolder").style.backgroundColor = "#" + randomBG[identity];


}

// get random eyes
function getRandomEyes(){
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


  //identifies which option to be used

    var identity = Math.floor(Math.random()*randomEyes.length);

    document.getElementById("eyes").innerHTML +=  '<object data="'+randomEyes[identity]+'" type="image/svg+xml" id="SVGhead" style="display: block;" />'

    console.log("A random angrylines Eyes has been generated and populated in the website");

}

// Get Random Mouth
function getRandomMouth(){
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




    var identity = Math.floor(Math.random()*randomMouth.length);
    document.getElementById("mouth").innerHTML +=  '<object data="'+randomMouth[identity]+'" type="image/svg+xml" id="SVGmouth"  style="display: block;"/>'
    console.log("A random angrylines mouth has been generated and populated in the website");

}


window.onload = function getRandomPiece(){
  getRandomEyes();
  getRandomMouth();
  getRandomBG();
  var svgColor = getRandomColor();
  console.log(svgColor);
  var mySVGbody = document.getElementById("SVGmouth");
  var mySVGhead = document.getElementById("SVGhead")
  var svgDoc;
  mySVGbody.addEventListener("load",function() {
    svgDoc = mySVGbody.contentDocument;
    // alert("SVG contentDocument Loaded!");
    var zinc = svgDoc.getElementById("DOTS").getElementsByClassName("st2");

    for (var i = 0; i < zinc.length; i++) {
      zinc[i].style.fill = svgColor;
    }
    // zinc

    console.log("A random coloured angryline has been generated and populated in the website");

  }, false);

  mySVGhead.addEventListener("load",function() {
    svgDocH = mySVGhead.contentDocument;
    // alert("SVG contentDocument Loaded!");
    var copper = svgDocH.getElementById("DOTS").getElementsByClassName("st2");

    for (var i = 0; i < copper.length; i++) {
      copper[i].style.fill = svgColor;
;
    }

  }, false);


  // document.getElementById("name").innerHTML += '<h2>'+name+'</h2>'


}
