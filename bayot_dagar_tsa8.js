function Astart() {
    document.getElementById("barea").style.alignItems = "flex-start";
}
function Acenter() {
    document.getElementById("barea").style.alignItems = "center";
}
function Aend() {
    document.getElementById("barea").style.alignItems = "flex-end";
}

 function resetFlexbox(){
    document.getElementById("barea").style.flexDirection = "row";
    document.getElementById("barea").style.alignItems = "flex-start";
    document.getElementById("barea").style.justifyContent = "flex-start";
    document.getElementById("barea").style.gap = "0px";
    
    document.getElementById("b1").style.flexGrow = "0";
    document.getElementById("b2").style.flexGrow = "0";
    document.getElementById("b3").style.flexGrow = "0";

    document.getElementById("growbox1").value = "";
    document.getElementById("growbox2").value = "";
    document.getElementById("growbox3").value = "";
    document.getElementById("gar").value = "";
}

function Rgrow(){
    document.getElementById("b1").style.flexGrow = "0";
    document.getElementById("b2").style.flexGrow = "0";
    document.getElementById("b3").style.flexGrow = "0";
    document.getElementById("barea").style.gap = "0px";

    document.getElementById("growbox1").value = "";
    document.getElementById("growbox2").value = "";
    document.getElementById("growbox3").value = "";
    document.getElementById("gar").value = "";
}
function Allgrow(){
    document.getElementById("growbox1").value = "1";
    document.getElementById("growbox2").value = "1";
    document.getElementById("growbox3").value = "1";

    document.getElementById("b1").style.flexGrow = "1";
    document.getElementById("b2").style.flexGrow = "1";
    document.getElementById("b3").style.flexGrow = "1";
}
function Gb1(){
    let x = document.getElementById("growbox1").value;
    document.getElementById("b1").style.flexGrow = x;
}
function Gb2(){
    let x = document.getElementById("growbox2").value;
    document.getElementById("b2").style.flexGrow = x;
}
function Gb3(){
    let x = document.getElementById("growbox3").value;
    document.getElementById("b3").style.flexGrow = x;
}
function gap(){
    let x = document.getElementById("gar").value;
    document.getElementById("barea").style.gap = `${x}px`;
}

// FLEX DIRECTIONS
function row() {
    document.getElementById("barea").style.flexDirection = "row";
}
function column() {
    document.getElementById("barea").style.flexDirection = "column";
}

// JUSTIFY CONTENT
function start() {
    document.getElementById("barea").style.justifyContent = "flex-start";
}
function center() {
    document.getElementById("barea").style.justifyContent = "center";
}
function end() {
    document.getElementById("barea").style.justifyContent = "flex-end";
}
function spaceBetween() {
    document.getElementById("barea").style.justifyContent = "space-between";
}
function spaceAround() {
    document.getElementById("barea").style.justifyContent = "space-around";
}
function spaceEvenly() {
    document.getElementById("barea").style.justifyContent = "space-evenly";
}