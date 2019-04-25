
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

var page=0;


function preload() 
{
//  myFont = loadFont('fonts/NeueDisplay-Random.otf');
  imgB = loadImage('assets/textureW.png');
  imgW = loadImage('assets/textureB.png');
  // img = loadImage('assets/textureB1.png');
  prism = loadModel('assets/prism.obj');
  // svg = loadImage('assets/texture1.svg');

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
    // bgcolor = 255; 
    // bgcolor = 22; 
    // 0 is black background, 2 is white.

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
        boxPositionsX[i] = randomInt(-w/16,w/2);
        boxPositionsY[i] = randomInt(-h/2,h/4);
        boxPositionsZ[i] = randomInt(0,w/8);
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
        $('.main-content h4').css('color','#fff');
        $('.row h3').css('color','#fff');
        $('[class*="col-"] h4').css('color','#eee');
        $('[class*="col-"] ul li ').css('color','#fff');
        

        $('#mainLogo').attr("src","assets/mainLogo_new_W.png");

        $('#mfadtTitle a').css('color','#FFF');
        $('#thesisShowTitle').css('color','#FFF');
        $('#location').css('color','#FFF');
        $('#location a').css('color','#FFF');
        $('.mainEventTitle').css('color','#FFF');
        $('.mainEventDate').css('color','#FFF');
        $("#cornerLogo").attr("src","assets/cornerLogoW.png");

        $('.foot-item:hover').css('text-shadow','4px 4px 3px #fff');

        // $('#byLine').css('color','#FFF');
        // $('.nav-bar li a').css('color','#FFF');
        // $('.nav_corner a').css('color','#FFF');
        $('label').css('color','#FFF');
        $('#bottom-content2 a').css('color','#FFF');

        $('#nav_button_bottom_top a').css('color','#FFF');
        $('#nav_button_bottom_top_rsvp a').css('color','#FFF');
        $('#nav_button_bottom_top_rsvp a').css('border','solid #FFF 2px');

        $('#mobile_rsvp a').css('color','#FFF');
        $('#mobile_rsvp').css('border','solid #FFF 2px');
        
        $("#parsonsLogo").attr("src","assets/parsonslogoW.png");
        $('.socialButtons').css('filter', 'invert(100%)');
        $('.socialButtons_mobile').css('filter', 'invert(100%)');
        $('.social_footer').css('filter', 'invert(100%)');
        $('.socialButtons:hover').css('background-color', 'rgba(22,22,22,255)');

        $('.event-heading-inner').css('color','#fff');
        $('#schedule').css('color','#fff');
        $('.schedTime').css('color','#fff');
        $('.schedTime a').css('color','#fff');
        $('.schedLoc').css('color','#fff');
        $('.schedLoc a').css('color','#fff');

        
        $('#schedule table, th, td').css('border','solid 1px #555');
        $('#schedule').css('border','solid 2px rgb(22, 22, 22)');

        $('.mobile_events').css('color','#fff');
        $('.eventDate_events').css('border-bottom','solid 1px #fff');
        $('.event-titles a').css('color','#fff');        

    }

    else
    {

        $('body').css('background-color','white');
        $('.main-content h4').css('color','#DDD');
        $('.row h3').css('color','#777');
        $('[class*="col-"] h4').css('color','#444');
        $('[class*="col-"] ul li').css('color','#555');
        

        $('#mainLogo').attr("src","assets/mainLogo_new_B.png");
        
        $('#mfadtTitle a').css('color','#000');
        $('#thesisShowTitle').css('color','#000');
        $('#location').css('color','#000'); 
        $('#location a').css('color','#000');
        $('.mainEventTitle').css('color','#000');
        $('.mainEventDate').css('color','#000');
        $("#cornerLogo").attr("src","assets/cornerLogoB.png");

        $('.foot-item:hover').css('text-shadow','4px 4px 3px #000');

        $('#nav_button_bottom_top a').css('color','#000');
        $('#nav_button_bottom_top_rsvp a').css('color','#000');
        $('#nav_button_bottom_top_rsvp a').css('border','solid #000 2px');
        $('#nav_button_bottom_top_rsvp a.buttonHighlight:hover').css('background','#000');
        $('#nav_button_bottom_top_rsvp a.buttonHighlight:hover').css('color','#fff');

        $('#mobile_rsvp a').css('color','#000');
        $('#mobile_rsvp').css('border','solid #000 2px');        

        $('#bottom-content2 a').css('color','#000');
        // $('.social_footer').css('filter', 'invert(100%)');

        $("#parsonsLogo").attr("src","assets/parsonslogoB.png");
        $('.socialButtons_mobile').css('filter', 'invert(0%)');
        $('.socialButtons').css('filter', 'invert(0%)');
        $('.socialButtons:hover').css('background-color', '#fff');

        $('.event-heading-inner').css('color','#000');
        $('#schedule').css('color','#000');
        $('.schedTime').css('color','#000');
        $('.schedTime a').css('color','#000');
        $('.schedLoc').css('color','#000');
        $('.schedLoc a').css('color','#000');
        
        $('#schedule table, th, td').css('border','solid 1px #ccc');
        $('#schedule').css('border','solid 2px #fff');

        $('.mobile_events').css('color','#000');
        $('.eventDate_events').css('border-bottom','solid 1px #000');
        $('.event-titles a').css('color','#000');
         

    }
}



function pageSet()
{
    console.log(bgcolor);
    page=1;
}


function indexPage()
{

    page=0;
    setup();
}





function draw() 
{


if(w>480 && page==0)    
{
    background(bgcolor);

    let locX = mouseX - width / 2;
    let locY = mouseY - height / 2;

    let pointLightOpacity;

    pointLightOpacity = 200;

    pointLight(255, 0, 0, locX, locY, pointLightOpacity);
    pointLight(0, 255, 0, locX, locX, pointLightOpacity);
    pointLight(0, 0, 255, locY, locX, pointLightOpacity);
    pointLight(255, 255, 0, locY, locY, pointLightOpacity);
    pointLight(255, 0, 255, locX/2, locY/2, pointLightOpacity);
    pointLight(0, 255, 255, locX*2, locY*2, pointLightOpacity);
    pointLight(100, 0, 30, locY/4, locY/4, pointLightOpacity);

    let dirX = (mouseX / width - 0.5) * 2;
    let dirY = (mouseY / height - 0.5) * 2;
    directionalLight(250, 250, 250, -dirX, -dirY, 0.25);


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

    let rs = rotateSpeed*2;
    angleMode(RADIANS);


    gl = this._renderer.GL;
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.disable(gl.DEPTH_TEST);
    
    
    fill(0,0,0,0);
    if(bgcolor==bgcolorArray[0])
    {
        ambientLight(200);
        texture(imgB);
    }
    else
    {
        ambientLight(0);
        texture(imgW);
    }
    // specularMaterial(255,255,255,100);
    // ambientMaterial(255,0,0,100);

    push();
        translate(x, y, z);
        rotateZ(theta * rs);
        rotateX(theta * rs);
        rotateY(theta * rs);
        box(boxSize, boxSize/2, boxSize/4);
        // model(prism);
    pop(); 
}



function triangleDraw(x1, y1, z1, x2, y2, z2, x3, y3, z3)
{
    // texture(svg);
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


