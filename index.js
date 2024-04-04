var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');


c.moveTo(0,0);
c.lineTo(500,500);
c.lineTo(800,0);
c.strokeStyle ="black";
c.stroke();

// c.beginPath is to state that this is the new structure dont connect it 
// with the previous one

// c.beginPath();
// c.arc(500,500,300, 0, Math.PI * 2, false)
// c.strokeStyle ="black";
// c.stroke();

for (var i =0 ; i < 100 ; i++){
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    c.beginPath();
    c.arc(x,y,50,0,Math.PI * 2, false);
    c.fillStyle = 'rgba(200, 0 ,0 ,0.5)'
    c.fill();
    c.strokeStyle = "black";
    c.stroke();

}










