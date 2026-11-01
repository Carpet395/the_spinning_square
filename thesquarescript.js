var t = 0
var pxcc = 0
var pressed = false;
var imageInput = document.getElementById('imageInput');
var rotem = document.getElementById("r")

var own = document.getElementById("OwnSkin")
var DogSkin = document.getElementById("DogSkin")
var DogAltSkin = document.getElementById("DogAltSkin")
var D5Skin = document.getElementById("DiceSkin")

var timespent = document.getElementById("pods")
var px = document.getElementById("px")
var left = 2.95 - timer
left = -10
var timerr = 0
var clickTheSquareText = document.getElementById("clickText")
var musicc = document.getElementById("pit")
var divv = document.getElementById("pov")
//var div = document.getElementsByTagName("div")
//div.style.left = screen.width / 2
var timer = 0
var body = document.getElementById("pitxx")
var pd = 0
var UseCircle = document.getElementById("UseCircle")
var god = document.querySelector('#hello');
var audurl = ""
var au = document.getElementById('au');
var pies = document.getElementById('pos');

const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const FromApp = urlParams.get('FromApp');

if (urlParams.has('FromApp')) {
    const FromApp = urlParams.get('FromApp');
    if (FromApp) {
        document.getElementById('appDownlaod').remove();
    }
}

//au.addEventListener('change', auy); 
function auy(event) {
var aag = event.target.files[0];

const reader = new FileReader();
reader.onload = function(event) {
    audurl = event.target.result;
    pies.src = audurl;
}
reader.readAsDataURL(aag);
}

var secs = 0
var ter = 0
var imageDataUrl = ""
function pie() {
    secs = 0
}
imageInput.addEventListener('change', handleImageSelect); 
        function handleImageSelect(event) {
const selectedImageFile = event.target.files[0];

const reader = new FileReader();
reader.onload = function(event) {
    imageDataUrl = event.target.result;
    if (own.checked==true) {
    divv.style.backgroundImage = `url(${imageDataUrl})`;
    }
}
    reader.readAsDataURL(selectedImageFile);
}
clickTheSquareText.innerHTML =  "click the square!"
console.log("variable's loaded")
setInterval(time, 10)
function time() {
    if (UseCircle.checked==true) {
        divv.classList.add("ball");
        divv.classList.remove("square");
    }
    else {
    divv.classList.remove("ball");
    divv.classList.add("square");
    }
    if (DogSkin.checked) {
        divv.style.setProperty("--background-image", `url(sprites/sad_pit.jpg)`);
        divv.style.backgroundImage = ""
    }
    else if (DogAltSkin.checked) {
        divv.style.setProperty("--background-image", `url(sprites/Skin_DogAlt.png)`);
    }
    else if (D5Skin.checked) {
        divv.style.setProperty("--background-image", `url(sprites/Skin_D5.png)`);
    }
    else if (own.checked) {
        divv.style.setProperty("--background-image", `url(${imageDataUrl})`);
    }
    else {
        divv.style.setProperty("--background-image", ``);
    }
    
    if (divv.id=="hello") {
        secs += 0.01
        timespent.innerHTML = "the square has spinned for: " + Math.floor(secs/60) + " minutes, " + Math.floor(secs)%60 + "'s"
    }
    else {
        timespent.innerHTML = "the square is not rotating (" + Math.floor(secs/60) + " minutes, " + Math.floor(secs)%60 + "'s)"
    }
    if (Math.floor(secs)!==0) {
    if (Math.floor(secs)%60==0) {
        //window.navigator.vibrate(500);
        if (t==0) {
        //alert("you passed the: " + Math.floor(secs)/60 + " minutes mark")
        t = 1
    }
    }
    else {
        t = 0
    }
    }
    timer += 0.01
    left = Math.ceil(2.950 - timer)
    left = -10
    if (left<=0&&divv.id=="pov") {
        if (divv.classList.contains("square")==true) {
            clickTheSquareText.innerHTML = "click the square!"
        }
        else {
            clickTheSquareText.innerHTML = "click the circle!"
        }
    }
    else if (divv.id =="pov") {
        clickTheSquareText.innerHTML = "click the square!"
    }
    else {
        clickTheSquareText.innerHTML = "\n"
    }
}
function bo() {
    musicc.pause()
    musicc.currentTime = 0;
    ter =0
    if (divv.id=="hello"&&divv.classList.contains("ball")==false) {
    divv.id = "pi"
    }
    setTimeout(ss, 1000)
}
function ss() {
    divv.id = "pov"
    divv.classList.remove("spin");
    console.log("square stops to spin")
}
function change() {
pressed = !pressed
if (divv.id=="pov") {
    //if (pxcc==1){
        musicc.src = "music/Otherside.mp3"
        musicc.type = "audio/mpeg"
        //pxcc = 0
    //}
}
if (pressed) {
    clickTheSquareText.innerHTML = "\n"
    divv.id = "hello"
    divv.classList.add("spin");
    console.log("square is spining")
    musicc.play()
    console.log("music starting")
}
else {
    clickTheSquareText.innerHTML = "click the square!"
    musicc.pause()
    musicc.currentTime = 0;
    ter =0
    if (divv.id=="hello"&&divv.classList.contains("ball")==false) {
    divv.id = "pi"
    }
    setTimeout(ss, 1000)
}
}
function ran(h) {
    pd = 2
    ranger.value = 50
}
function rran(a) {
    pd = 3
    rangerr.value = 50
}
