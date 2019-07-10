


(function(){
var lights = ["green", "yellow", "red"];
var nLights = lights.length;
var lit = 2;
function cycle() {
lit = (lit + 1) % nLights;
var litElement, selector;
for (var i=0; i < nLights; i++ ) {
selector = "." + lights[i] + " .lit";
litElement = document.querySelector(selector);
litElement.style.setProperty("visibility",
(i==lit)? "visible" : "hidden",
null);
}
}
cycle()
setInterval(cycle, 3000);
})()


