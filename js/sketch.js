
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

var page=0, dir;
var factor=1;
var eventChanges;
var padding=100;

var posFactor;




// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() 
{
  if (document.body.scrollTop > windowHeight || document.documentElement.scrollTop > windowHeight) 
  {
    document.getElementById("myBtn").style.display = "block";
  } 

  else 
  {
    document.getElementById("myBtn").style.display = "none";
  }

}

// When the user clicks on the button, scroll to the top of the document
function topFunction() 
{
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



function preload() 
{
//  myFont = loadFont('fonts/NeueDisplay-Random.otf');
  imgB = loadImage('assets/textureW.png');
  imgW = loadImage('assets/textureB.png');
  prism = loadModel('assets/prism.obj');

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
        dir = -1;
    }
    else
    {
        spectrumFrom = color(50, 50, 50, 50);
        spectrumTo = color(255, 255, 255, 10);
        dir = 1;
    }

    checkCss();


    for (let i=0; i<=boxCount; i++) 
    {
        boxSizes[i] = randomInt(w/8, w/4);
        boxSpeeds[i] = noise(randomInt(50))/10 * random(-1,1);
        
        boxPositionsX[i] = randomInt(-w/3,w);
        
        boxPositionsY[i] = randomInt(-h,h);
        
        boxPositionsZ[i] = randomInt(-w/2,-w/4);
    }

    draw();

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

    if(bgcolor<=bgcolorArray[0]) // if BLACK
    {
        $('body').css('background-color','rgba(22,22,22,255)'); 
        $('.main-content h4').css('color','#fff');
        $('.row h3').css('color','#fff');
        $('[class*="col-"] h4').css('color','#ddd');
        $('[class*="col-"] ul li ').css('color','#888');

        $('#mainLogo').attr("src","assets/mainLogo_new_W.png");

        $('#mfadtTitle a').css('color','#FFF');
        $('#thesisShowTitle').css('color','#FFF');
        $('#location').css('color','#FFF');
        $('#location a').css('color','#FFF');
        $('.mainEventTitle').css('color','#FFF');
        $('.mainEventDate').css('color','#FFF');
        $("#cornerLogo").attr("src","assets/cornerLogoW.png");

        // $('.foot-item:hover').css('text-shadow','4px 4px 3px #fff');

        // $('#byLine').css('color','#FFF');
        // $('.nav-bar li a').css('color','#FFF');
        // $('.nav_corner a').css('color','#FFF');
        $('label').css('color','#FFF');
        $('#bottom-content2 a').css('color','#FFF');

        $('#nav_button_bottom_top a').css('color','#FFF');
        $('#nav_button_bottom_top_rsvp a').css('border','2px solid #fff');
        $('#nav_button_bottom_top_rsvp a').css('background','rgba(0,0,0,0.8)');
        $('#nav_button_bottom_top_rsvp a').css('color','#fff');
        // $('#main-menu2 .nav-bar-index').css('background','rgba(22,22,22,50)');
        // $('#nav_button_bottom_top_rsvp a').css('border','solid #FFF 2px');

        $('#mobile_rsvp a').css('color','#fff');
        // $('#mobile_rsvp').css('background','#fff');
        $('#mobile_rsvp').css('border','solid #fff 2px');
        
        $("#parsonsLogo").attr("src","assets/parsonslogoW.png");
        $('.socialButtons').css('filter', 'invert(100%)');
        $('.socialButtons_mobile').css('filter', 'invert(100%)');
        $('.social_footer').css('filter', 'invert(100%)');
        $('.socialButtons:hover').css('background-color', 'rgba(22,22,22,255)');

        $('.event-heading-inner').css('color','#fff');
        $('.event-heading-inner_eventDetails').css('color','#fff');
        
        $('.event-titles').css('color','#fff');
        $('.event-titles_first').css('color','#fff');
        
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
        $('.event-titles_first a').css('color','#fff');

        $('label').css('color','#ccc');
        $('h6.nameTags a').css('color','#eee');

        $('.aboutTitle').css('color','#fff');
        $('.aboutStatement').css('color','#ddd');
        $('.aboutStatement a').css('color','#ddd');
        $('.aboutPara').css('color','#aaa');
        $('.aboutPara_eventDetails').css('color','#aaa');

        $('.generalLinks').css('color','#ddd');
        
        if(w<480 && page==0)
            $('#main-menu2 .nav-bar-index').css('background','rgba(22,22,22,255)');
        
        $('.strikeThru:hover:after').css('border','2px solid red');
        // $('#myBtn img').css('border','2px solid white');
        $('#myBtn img').css('filter','invert(0%)');
        $('#myBtn img').attr("src","assets/top_triangle.png");
        

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

        // $('.foot-item:hover').css('text-shadow','4px 4px 3px #000');

        $('#nav_button_bottom_top a').css('color','#000');
        $('#nav_button_bottom_top_rsvp a').css('border','2px solid #000');
        $('#nav_button_bottom_top_rsvp a').css('background','rgba(255,255,255,0.8)');
        $('#nav_button_bottom_top_rsvp a').css('color','#000');
        // $('#nav_button_bottom_top_rsvp a.buttonHighlight:hover').css('background','#000');
        // $('#nav_button_bottom_top_rsvp a.buttonHighlight:hover').css('color','#fff');

        $('#mobile_rsvp a').css('color','#000');
        // $('#mobile_rsvp').css('background','#000');
        $('#mobile_rsvp').css('border','solid #000 2px');

        $('#bottom-content2 a').css('color','#000');
        // $('.social_footer').css('filter', 'invert(100%)');

        $("#parsonsLogo").attr("src","assets/parsonslogoB.png");
        $('.socialButtons_mobile').css('filter', 'invert(0%)');
        $('.socialButtons').css('filter', 'invert(0%)');
        $('.socialButtons:hover').css('background-color', '#fff');

        $('.event-heading-inner').css('color','#000');
        $('.event-heading-inner_eventDetails').css('color','#000');

        $('.event-titles').css('color','#000');
        $('.event-titles_first').css('color','#000');
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
        $('.event-titles_first a').css('color','#000');

        $('label').css('color','#444');
        $('h6.nameTags a').css('color','#222');             

        $('.aboutTitle').css('color','#000');
        $('.aboutStatement').css('color','#333');
        $('.aboutStatement a').css('color','#333');
        $('.aboutPara').css('color','#444');
        $('.aboutPara_eventDetails').css('color','#333');

        $('.generalLinks').css('color','#333');
        
        if(w<480 && page==0)
            $('#main-menu2 .nav-bar-index').css('background','#fff');

        $('#myBtn img').css('filter','invert(100%)');
        

    }
    // setup();
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

    let locX = mouseX - width / 2 + noise(randomInt(-200,200))*100;
    let locY = mouseY - height / 2 + noise(randomInt(-200,200)*100);

    let lightSpread=noise(randomInt(-500,500)*1000);

    locX = locX + lightSpread;
    locY = locY + lightSpread;

    let pointLightOpacity;

    pointLightOpacity = 255;

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
           boxPositionsX[i] = boxPositionsX[i] + posFactor;
           boxPositionsY[i] = boxPositionsY[i] + posFactor;
           boxPositionsZ[i] = boxPositionsZ[i] + posFactor;

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

    posFactor = noise(randomInt(-100,100))/2 * randomInt(-1,1);
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
        ambientLight(30);
        texture(imgB);
    }
    else
    {
        ambientLight(0,0,0);
        texture(imgW);
    }
    // specularMaterial(255,255,255,100);
    // ambientMaterial(255,0,0,100);

    push();
        translate(x,y,z);
        // translate(x, y, z);
        // fill(255,0,0,50);
        // ellipse(0,-400, 50,50);
        // console.log("("+x+", "+y+", "+z+")");
        rotateX(theta/200 * rs);
        rotateZ(theta * rs);
        rotateY(theta/200 * rs);

        model(prism);

        // box(boxSize, boxSize/2, boxSize/4);
        
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
    eventChanges = event.movementX/2+event.movementY/2;
    // change = eventChanges/2;
    // md += eventChanges/2;
    theta = theta + 0.1 + noise(eventChanges)/7;
}


function mouseClicked()
{
    // fill(255,0,0);
    // mouseSaveX = mouseX;
    // mouseSaveY = mouseY;

    setup();
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






function magnify(imgID, zoom) 
{
  var img, glass, w, h, bw;
  img = document.getElementById("mainLogo");

  console.log(img);

  /*create magnifier glass:*/
  glass = document.createElement("DIV");
  glass.setAttribute("class", "img-magnifier-glass");
  /*insert magnifier glass:*/
  img.parentElement.insertBefore(glass, img);
  /*set background properties for the magnifier glass:*/
  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
  bw = 3;
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;
  /*execute a function when someone moves the magnifier glass over the image:*/
  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);
  /*and also for touch screens:*/
  glass.addEventListener("touchmove", moveMagnifier);
  img.addEventListener("touchmove", moveMagnifier);
  
  function moveMagnifier(e) 
  {
    var pos, x, y;
    /*prevent any other actions that may occur when moving over the image*/
    e.preventDefault();
    /*get the cursor's x and y positions:*/
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;
    /*prevent the magnifier glass from being positioned outside the image:*/
    if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
    if (x < w / zoom) {x = w / zoom;}
    if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
    if (y < h / zoom) {y = h / zoom;}
    /*set the position of the magnifier glass:*/
    glass.style.left = (x - w) + "px";
    glass.style.top = (y - h) + "px";
    /*display what the magnifier glass "sees":*/
    glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
  }

function getCursorPos(e) 
{
    var a, x = 0, y = 0;
    e = e || window.event;
    /*get the x and y positions of the image:*/
    a = img.getBoundingClientRect();
    /*calculate the cursor's x and y coordinates, relative to the image:*/
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /*consider any page scrolling:*/
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }
}


