
var pos_x = window.innerWidth/2, pos_y=window.innerHeight/2;
var mx, my, w, h;


var r=0, g=0, b=0, bgcolor=255;
var equiv=50, diff=0, opacity=40, mode=1;
var md=0, change, moveX, moveY;
var letterSize=50, dir=1;
var fromColor, toColor;
var noiseCount=10;
var mouseClick=0;
 //df
var x1, y1, x2, y2, x3, y3;

var theta=0, rotateSpeed=0.1;

var bgcolorArray = [22, 255];
var myFont, shadeOpacity=15;

var boxSizes = [];
var boxSpeeds = [];
var boxPositionsX = [];
var boxPositionsY = [];
var boxPositionsZ = [];
var boxCount=5;



function preload() 
{
//  myFont = loadFont('fonts/NeueDisplay-Random.otf');
  imgB = loadImage('images/textureB.png');
  imgW = loadImage('images/textureW.png');

}



function setup() 
{
    var canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    canvas.parent('container'); //within the html

    w = windowWidth;
    h = windowHeight;
    
    noStroke(); 
    colorMode(RGB);

    bgcolor = bgcolorArray[randomInt(0,2)];
    // bgcolor = 255; 0 is black background, 2 is white.

    if(bgcolor==bgcolorArray[0])
    {
        spectrumFrom = color(255, 255, 255, 20);
        spectrumTo = color(50, 50, 50, 10);        
    }
    else
    {
        spectrumFrom = color(50, 50, 50, 50);
        spectrumTo = color(255, 255, 255, 10);
    }

    checkCss();    

    for (let i=0; i<=boxCount; i++) 
    {
        boxSizes[i] = randomInt(w/8, w/4);
        boxSpeeds[i] = noise(randomInt(50))/10 * random(-1,1);
        boxPositionsX[i] = randomInt(-w/2,w/2);
        boxPositionsY[i] = randomInt(-h/2,h/4);
        boxPositionsZ[i] = randomInt(-w/4,w/16);
    }

// console.log(boxPositionsX);      
// console.log(boxPositionsY);      
// console.log(boxPositionsZ);      
// boxPositionsX[0]=431; boxPositionsY[0]=-62; boxPositionsZ[0]=-104;       
// boxPositionsX[1]=75; boxPositionsY[1]=-198; boxPositionsZ[1]=-71;        
// boxPositionsX[2]=529; boxPositionsY[2]=-66; boxPositionsZ[2]=-232;       
// boxPositionsX[3]=492; boxPositionsY[3]=152; boxPositionsZ[3]=86;     
// boxPositionsX[4]=0; boxPositionsY[4]=0; boxPositionsZ[4]=0;      
// boxPositionsX[5]=0; boxPositionsY[5]=0; boxPositionsZ[5]=0;



}


function checkCss()
{
    if(bgcolor==bgcolorArray[0]) // if BLACK
    {
        $('body').css('background-color','rgba(22,22,22,255)'); 
        $('.main-content h4').css('color','#999');

        
        $('#mfadtTitle a').css('color','#FFF');
        $('#thesisShowTitle').css('color','#FFF');
        $('#location').css('color','#FFF');
        $('#location a').css('color','#FFF');
        $('.mainEventTitle').css('color','#FFF');
        $('.mainEventDate').css('color','#FFF');
        $("#cornerLogo").attr("src","assets/cornerLogoW.png");

        $('.foot-item:hover').css('text-shadow','4px 4px 3px #fff');
        
        // $('#byLine').css('color','#FFF');
        $('.nav-bar li a').css('color','#FFF');
        $('.nav_corner a').css('color','#FFF');
        $('label').css('color','#FFF');
        $('#bottom-content2 a').css('color','#FFF');
        
        $('.socialButtons').css('filter', 'invert(100%)');
        $('.social_footer').css('filter', 'invert(100%)');
        $('.socialButtons:hover').css('background-color', 'rgba(22,22,22,255)');    
    }

    else
    {

        $('body').css('background-color','white');
        $('.main-content h4').css('color','#DDD');

        $("#mainLogo").css('filter', 'invert(100%)');
        $('#mfadtTitle a').css('color','#000');
        $('#thesisShowTitle').css('color','#000');
        $('#location').css('color','#000'); 
        $('#location a').css('color','#000');
        $('.mainEventTitle').css('color','#000');
        $('.mainEventDate').css('color','#000');
        $("#cornerLogo").attr("src","assets/cornerLogoB.png");

        $('.foot-item:hover').css('text-shadow','4px 4px 3px #000');
        
        $('.nav-bar li a').css('color','#000');
        $('.nav_corner a').css('color','#000');
        $('label').css('color','#000');
        $('#bottom-content2 a').css('color','#000');
        // $('.social_footer').css('filter', 'invert(100%)');

        $("#parsonsLogo").css('filter', 'invert(100%)');
        $('.socialButtons:hover').css('background-color', '#fff');

    }
}







function draw() 
{

if(w>480)    
{
    background(bgcolor);

    let locX = mouseX - width / 2;
    let locY = mouseY - height / 2;

    pointLight(255, 0, 0, locX, locY, 100);
    pointLight(0, 255, 0, locX, locX, 100);
    pointLight(0, 0, 255, locY, locX, 100);
    pointLight(255, 255, 0, locY, locY, 100);
    pointLight(255, 0, 255, locX/2, locY/2, 100);
    pointLight(0, 255, 255, locX*2, locY*2, 100);
    pointLight(100, 0, 30, locY/4, locY/4, 100);

    // let dirX = (mouseX / width - 0.5) * 2;
    // let dirY = (mouseY / height - 0.5) * 2;
    // directionalLight(250, 250, 250, -dirX, -dirY, 0.25);

    if(bgcolor==bgcolorArray[0])
    {
        texture(imgW);
        ambientLight(200);
    }
    else
    {
        texture(imgB);
        ambientLight(0);
    }

    for(i=0; i<=boxCount; i++)
    {
        drawCuboid(boxSizes[i], boxSpeeds[i], boxPositionsX[i], boxPositionsY[i], boxPositionsZ[i]);
    }

    // drawCuboid(w/4, 0, -300, 95, 50);
    // translate(-400, 50, 100);
    // push();
    // angleMode(DEGREES);
    // rotateY(5);
    // box(w/3, w/20, w/8);
    // pop();

    theta = theta + (0.1);



    }
}


function drawCuboid(boxSize, rotateSpeed, x, y, z)
{
    let rs = rotateSpeed;
    angleMode(RADIANS);
    push();
        translate(x, y, z);
        rotateZ(theta * rotateSpeed);
        rotateX(theta * rotateSpeed);
        rotateY(theta * rotateSpeed);
        box(boxSize, boxSize/2, boxSize/4);
    pop(); 
}



function triangleDraw(x1, y1, z1, x2, y2, z2, x3, y3, z3)
{
    texture(img);
     beginShape();
        vertex(x1, y1, z1,0,0);
        vertex(x2, y2, z2,0,1);
        vertex(x3, y3, z3,1,0);
    endShape();
}


function shapeDraw(x1, y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, z4)
{
    beginShape();
        vertex(-50, -50, 0, 0);
        vertex(50, -50, 1, 0);
        vertex(50, 50, 1, 1);
        vertex(-50, 50, 0, 1);
    endShape();
}





function mouseMoved(event) 
{
    // draw();
    var eventChanges = event.movementX/2+event.movementY/2;
    // change = eventChanges/2;
    // md += eventChanges/2;
    theta = theta + 0.1 + noise(eventChanges)/7;
}


function mouseClicked()
{
    fill(255,0,0);
    mouseSaveX = mouseX;
    mouseSaveY = mouseY;

    draw();
}



function mouseWheel(event) 
{
    letterSize += event.delta*0.1;
    draw();
}


function randomInt(n)
{
  return Math.floor(random(0,n));
}

function randomInt(l,h)
{
  return Math.floor(random(l,h));
}


function RandomNoise(n)
{

  return noise(n)*randomInt(n);
 
}


