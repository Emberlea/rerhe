canvas = document.getElementById("cancan");
ctx = canvas.getContext('2d');

canvas.addEventListener("mousedown",MD);
function MD(e){
    var color=document.getElementById("coolor").value;
    console.log(color);
    var linewidth=document.getElementById("witchwidth").value;
    console.log(linewidth);
    var radii=document.getElementById("readii").value;
    console.log(radii);
    var puranax = e.clientX-canvas.offsetLeft;
    var puranay = e.clientY-canvas.offsetTop;
    console.log(puranax,puranay);
    circle(puranax,puranay);
}
function circle(puranax,puranay){
    ctx.beginPath()
    ctx.strokeStyle=color;
    ctx.lineWidth=linewidth;
    ctx.arc(puranax,puranay,radii,0,2*Math.PI);
    ctx.stroke();
}