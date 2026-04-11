var t = 0
var pxcc = 0
var pressed = false;
var imageInput = document.getElementById('imageInput');
var rotem = document.getElementById("r")
var own = document.getElementById("own")
var creep = document.getElementById("c")
var ender = document.getElementById("e")
var mario = document.getElementById("m")
var pit = document.getElementById("gh")
var pig = document.getElementById("hg")
var rangerr = document.getElementById("rang")
var timespent = document.getElementById("pods")
var px = document.getElementById("px")
var present = document.getElementById("low")
var left = 2.95 - timer
left = -10
var ranger = document.getElementById("veger")
var timerr = 0
var p = document.getElementById("pa")
var musicc = document.getElementById("pit")
var divv = document.getElementById("pov")
//var div = document.getElementsByTagName("div")
//div.style.left = screen.width / 2
var timer = 0
var pitx = document.getElementById("pity")
var body = document.getElementById("pitxx")
var pd = 0
var checs = document.getElementById("pd")
var nochecs = document.getElementById("pid")
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

au.addEventListener('change', auy); 
function auy(event) {
var aag = event.target.files[0];

const reader = new FileReader();
reader.onload = function(event) {
    audurl = event.target.result;
    pies.src = audurl;
}
reader.readAsDataURL(aag);
}

divv.src = "https://www.dropbox.com/s/nvcslw815ge97um/Screenshot_2023-02-06-11-03-54-240_no.mobitroll.kahoot.android-edit.jpg?dl=0"
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
p.innerHTML =  "click the square!"
console.log("variable's loaded")
setInterval(time, 10)
function time() {
    if (pd!==1) {
    if (pd==0) {
    pitx.setAttribute("value", "#fefeff");
    ranger.setAttribute("value", "50")  
    rangerr.setAttribute("value", "50");
    console.log("input's value loaded")
    }
    if (pd==2) {
        ranger.setAttribute("value", "50");
    }
    if (pd==3) {
        rangerr.setAttribute("value", "50");
    }
    pd = 1
    }
    if (checs.checked==true) {
        body.classList.add("pf");
    var np = rangerr.value * 10 / 100
    body.style.animationDuration = np + "s"
    }
    else {
    body.classList.remove("pf");
    body.style.backgroundColor = pitx.value
    }
    if (nochecs.checked==true) {
        divv.classList.add("ball");
        divv.classList.remove("square");
    }
    else {
    divv.classList.remove("ball");
    divv.classList.add("square");
    }
    if (divv.id=="hello") {
    var element = document.querySelector('.spin'); 
    var n = ranger.value * 16 / 100
    element.style.animationDuration = n + "s"
    }
    else {
        divv.style.animationDuration = "1s"
    }
    present.innerHTML = ranger.value * 2 + "%  ";
    px.innerHTML = rangerr.value * 2 + "%  ";
    if (divv.classList.contains("secret")) {
        divv.classList.remove("pit");
        divv.classList.remove("pig");
        divv.classList.remove("rotem");
        divv.classList.remove("mario");
        divv.classList.remove("ender");
        divv.classList.remove("creep")
        divv.style.backgroundImage = ""
    }
    else if (pit.checked==true) {
        divv.classList.add("pit");
        divv.classList.remove("pig");
        divv.classList.remove("rotem");
        divv.classList.remove("mario");
        divv.classList.remove("ender");
        divv.classList.remove("creep")
        divv.style.backgroundImage = ""
    }
    else if (pig.checked==true) {
        divv.classList.add("pig");
        divv.classList.remove("rotem");
        divv.classList.remove("mario");
        divv.classList.remove("pit");
        divv.classList.remove("ender");
        divv.classList.remove("creep")
        divv.style.backgroundImage = ""
    }
    else if (mario.checked==true) {
        divv.classList.add("mario");
        divv.classList.remove("rotem");
        divv.classList.remove("pig");
        divv.classList.remove("pit");
        divv.classList.remove("ender");
        divv.classList.remove("creep")
        divv.style.backgroundImage = ""
    }
    else if (rotem.checked==true) {
        divv.classList.add("rotem");
        divv.classList.remove("pig");
        divv.classList.remove("pit");
        divv.classList.remove("mario");
        divv.classList.remove("ender");
        divv.style.backgroundImage = ""
        divv.classList.remove("creep")
    }
    else if (ender.checked==true) {
        divv.classList.add("ender")
        divv.classList.remove("rotem");
        divv.classList.remove("pig");
        divv.classList.remove("pit");
        divv.classList.remove("mario");
        divv.classList.remove("creep")
    divv.style.backgroundImage = "" 
    }
    else if (creep.checked==true) {
        divv.classList.add("creep")
        divv.classList.remove("ender")
        divv.classList.remove("rotem");
        divv.classList.remove("pig");
        divv.classList.remove("pit");
        divv.classList.remove("mario");
        divv.style.backgroundImage = ""
    }
    else if (own.checked==true) {
    divv.style.backgroundImage = `url(${imageDataUrl})`;
    divv.classList.remove("pig");
    divv.classList.remove("pit");
    divv.classList.remove("mario"); 
    divv.classList.remove("rotem");   
    divv.classList.remove("ender");
    divv.classList.remove("creep");
    }
    else {
    divv.style.backgroundImage = ""
    divv.classList.remove("pig");
    divv.classList.remove("pit");
    divv.classList.remove("mario"); 
    divv.classList.remove("rotem");   
    divv.classList.remove("ender");
    divv.classList.remove("creep");
    divv.style.backgroundImage = "";
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
        window.navigator.vibrate(500);
        if (t==0) {
        alert("you passed the: " + Math.floor(secs)/60 + " minutes mark")
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
            pa.innerHTML = "click the square!"
        }
        else {
            pa.innerHTML = "click the circle!"
        }
    }
    else if (divv.id=="pov") {
        p.innerHTML = "click the square!"
    }
    else {
        p.innerHTML = ""
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
    if (mario.checked==true) {
        pxcc = 1
        musicc.src = "music/mario.mp3"
        musicc.type = "audio/mpeg"
    }
    else if (pxcc==1){
        musicc.src = "music/Otherside.mp3"
        musicc.type = "audio/mpeg"
        pxcc = 0
    }
}
if (pressed) {
    p.innerHTML = ""
    divv.id = "hello"
    divv.classList.add("spin");
    console.log("square is spining")
    musicc.play()
    console.log("music starting")
}
else {
    p.innerHTML = "click the square!"
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
