const projectName = document.querySelector(".projectName");
const subtitle = document.querySelector(".subtitle");
const explications = document.querySelector(".explications");
const ElemBody = document.querySelector("body");
const ElemText = document.querySelectorAll(".text");
const dotContainer = document.querySelector(".dot-container")
const loaderContainer = document.querySelector(".loader-container")
NBcycle = 7
direction = 0
IMGwidth = vmin(70)/1.4
IMGheight = vmin(70)
NBprojet = textTable.length
enterCount = 0
function vh(v) {
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  return (v * h) / 100;
}
function vw(v) {
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  return (v * w) / 100;
}
function vmin(v) {
  return Math.min(vh(v), vw(v));
}

window.addEventListener('resize', setWindowSize);

function setWindowSize() {
  IMGwidth = vmin(70)/1.4
  IMGheight = vmin(70)
}





for (i = 1; i < NBprojet+1; i++) {
  const newDot = document.createElement("div");
  newDot.className = `dot dot${i}`;
  dotContainer.appendChild(newDot)
  const newImg = document.createElement("div");
  newImg.className = `img img-${NBprojet+1-i}`;
  document.querySelector(".img-container").appendChild(newImg)

  const urlImg = document.querySelector(`.img-${NBprojet+1-i}`);
  urlImg.style.background = `url(./assets/imgs/img-${NBprojet+1-i}.jpg) no-repeat 50% 50%`
  urlImg.style.backgroundSize = "cover"
  urlImg.style.transitionDuration = (NBprojet+1-i)*200 + "ms"
}

document.querySelector(".dot1").style.background = "white"
projectName.textContent = "Projet 1"


projectName.innerHTML = textTable.find(search => search.nb == 1 ).projectName
subtitle.innerHTML = textTable.find(search => search.nb == 1 ).subtitle
explications.innerHTML = textTable.find(search => search.nb == 1 ).explications




document.addEventListener("mousemove", e => {
  if(enterCount%2 != 0) {
    const cursor2 = document.querySelector(".cursor2");
    cursor2.style.top = e.pageY - 4.5 + "px";
    cursor2.style.left = e.pageX - 4.5 + "px";
    enterOpen()
  } else {
    for (i = 1; i < NBprojet+1; i++) {
      const img = document.querySelector(`.img-${i}`);
      const cursor2 = document.querySelector(".cursor2");
      img.style.top = e.pageY - IMGheight/2 + "px";
      img.style.left = e.pageX - IMGwidth/2 + "px";
      cursor2.style.top = e.pageY - 4.5 + "px";
      cursor2.style.left = e.pageX - 4.5 + "px";
    }
  }
});


document.addEventListener("keydown", e => {
  if (e.key === 'ArrowDown') {
    direction = 'down'
    cycle()
    tutoriel()
  } 
  if (e.key === 'ArrowUp') {
    direction = 'up'
    cycle()
    tutoriel()
  } 
  if (e.key === 'Enter') {
    tutoriel()
    for (i = 0; i < ElemText.length; i++) {
      ElemText[i].classList.toggle("enterClick")
    }
    dotContainer.classList.toggle("enterClick")
    loaderContainer.classList.toggle("enterClick")
    enterCount ++
    if(enterCount%2 != 0) {
      enterOpen()
    } else {
      enterClose()
    }
  } 
  if (e.key === 'Escape') {
    if(enterCount%2 != 0) {
    enterCount ++
    enterClose()
        for (i = 0; i < ElemText.length; i++) {
          ElemText[i].classList.toggle("enterClick")
        }
        dotContainer.classList.toggle("enterClick")
        loaderContainer.classList.toggle("enterClick")
    } else {
    }
  } 
})

function enterOpen() {
  for (i = 1; i < NBprojet+1; i++) {
    // document.querySelector("body").style.cursor = "pointer"
    const firstImg = document.querySelector(`.img-${i}`);
    firstImg.style.height = vh(90) + "px"
    firstImg.style.width = vh(90)/1.4 + "px"
    firstImg.style.top = vh(5) + "px"
    firstImg.style.left = (vw(100)-vh(90)/1.4)/2 + "px"
  }
}

function enterClose() {
  for (i = 1; i < NBprojet+1; i++) {
    const firstImg = document.querySelector(`.img-${i}`);
    firstImg.style.height = vmin(70) + "px"
    firstImg.style.width = vmin(70)/1.4 + "px"
    firstImg.style.top = vh(5) + "px"
    firstImg.style.left = (vw(100)-vh(90)/1.4)/2 + "px"
  }
}

function tutoriel() {
  setTimeout(function () {
    var element = document.querySelector(".keysContainer");
    element.classList.add("errase");
   }, 3000);
}

var change = 0

function cycle(){
  
  if (direction == 'down' ) {
    NBcycle = NBcycle + 1
  } else if (direction == 'up' ) {
    NBcycle = NBcycle - 1
  }
  if (NBcycle >= NBprojet+1) {
    NBcycle = NBcycle - NBprojet
    } else if (NBcycle <=0 ) {
    NBcycle = NBcycle + NBprojet
    }
  for (i = 1; i < NBprojet+1; i++) {
    const img = document.querySelector(`.img-${i}`);
    change = i + NBcycle
    if (change >= NBprojet+1) {
      change = change - NBprojet
    } else if (change <= 0) {
      change = change + NBprojet
    }
    // console.log(" i = ",i,"change = ",change,"NBcycle = ",NBcycle);
    img.style.background = `url(./assets/imgs/img-${change}.jpg) no-repeat 50% 50%`
    img.style.backgroundSize = "cover"

    

    dotRemplissage()

  }
  if(enterCount%2 != 0) {
    enterOpen()
  }
  function dotRemplissage() {
    dotTransparent = document.querySelectorAll(".dot");
    for (j = 0; j < dotTransparent.length; j++) {
      dotTransparent[j].style.background = "transparent";
    }
    let dotNumber = NBcycle+1
    if (dotNumber >= NBprojet+1) {
      dotNumber = 1
    }
    // console.log(" dotNumber = ",dotNumber,"change = ",change)
    const dotWhite = document.querySelector(`.dot${dotNumber}`);
    dotWhite.style.background = "white"
    
    const bgImage = document.querySelector(".bg-image");
    bgImage.style.background = `url(./assets/imgs/img-${dotNumber}.jpg) no-repeat center center fixed`
    bgImage.style.backgroundSize = "cover"
    
    projectName.innerHTML = textTable.find(search => search.nb == dotNumber ).projectName
    subtitle.innerHTML = textTable.find(search => search.nb == dotNumber ).subtitle
    explications.innerHTML = textTable.find(search => search.nb == dotNumber ).explications


  }
}

// AUDIO
audioCount = 0

var soundBar = document.querySelectorAll('.soundBar');

loaderContainer.addEventListener("click", function() {
  var audio = document.getElementById("myAudio"); 
  audio.volume = 0.2;
  audioCount++
  if(audioCount%2 != 0)
  {
    audio.play()
    var element = document.querySelector(".clickSound");
    element.classList.add("errase");
    
    for (let i = 1; i <= 6; i++) {
      setTimeout(function () {
        let moiss = document.querySelector(".soundBar"+(7-i));
        let moiss2 = document.querySelector(".soundBar"+(5+i));
          moiss.style.animation =  "load 3s ease-in-out infinite";
          moiss2.style.animation =  "load 3s ease-in-out infinite";
       }, 100 * i);
    }
  }
  else
  {
    audio.pause()
    for (let i = 1; i <= 6; i++) {
      setTimeout(function () {
        let moiss = document.querySelector(".soundBar"+(7-i));
        let moiss2 = document.querySelector(".soundBar"+(5+i));
          moiss.style.animation =  "";
          moiss2.style.animation =  "";
       }, 100 * i);
    }
  }
})

