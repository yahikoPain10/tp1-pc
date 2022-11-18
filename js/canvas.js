// Dom elements
const canvasContainer = document.querySelector('.canvas-container');
const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');

// Point class 
class Point {
    constructor(x, y) {
        Object.assign(this, {x, y});
    }

    line() {
        c.lineTo(this.x, this.y);
    }

    drawCircle() {
        c.beginPath();
        // Default radius: 2
        c.arc(this.x, this.y, 2,0, Math.PI * 2);
        c.fill();
        c.stroke();
    }
}

updateDimCanvas();
window.addEventListener('resize', updateDimCanvas);

function updateDimCanvas() {
    // Get the width of the canvas container
    var ccw = canvasContainer.clientWidth;
    // set the dim to the canvas
    canvas.width = ccw;
    canvas.height = ccw;
    canvas.style.width = ccw+'px';
    canvas.style.height = ccw+'px';
    drawCanvas();
}


function drawCanvas() {
    var cw = canvas.width;
    var ch = canvas.height;

    // Draw the Y and X axis
    
    c.fillStyle = 'transparent';
    c.strokeStyle = '#dbdbdb';
    c.lineWidth = 3;

    c.beginPath();
    c.moveTo(0,0);
    c.lineTo(0,ch);
    c.lineTo(cw, ch);
    c.stroke();

    // Draw X and Y values
    var values = 15;
    c.fillStyle = 'gray';
    for(var i = 0; i < values; i++) {
        // Horizantal
        c.fillRect((i * cw) / values, ch - 2.5, 2, 2);
        // Vertical
        if(i > 0) {
            c.fillRect(0,(i * ch) / values, 2,2);
        }
    }

    // Display points
    c.strokeStyle = '#0f8cfa';
    c.fillStyle = '#fff';
    c.beginPath();
    for(var i = 0; i < points.length; i++) {
        var x = (points[i].x * cw) / values;
        var y = ch - (points[i].y * ch / values);
        var pt = new Point(x, y, 1);
        pt.line();
    }
    c.stroke();
    // Draw circles points
    for(var i = 0; i < points.length; i++) {
        var x = (points[i].x * cw) / values;
        var y = ch - (points[i].y * ch / values);
        var pt = new Point(x, y, 1);
        pt.drawCircle();
    }

    // Display text
    c.fillStyle = '#555';
    c.font = '14px sans-serif';
    c.fillText('X', cw - cw / 25, ch - ch / 25);
    c.fillText('Y',cw / 35, ch / 30);
}


