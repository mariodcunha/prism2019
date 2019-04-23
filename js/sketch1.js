
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




function checkCss()
{
    if(bgcolor==bgcolorArray[0]) // if BLACK
    {
        $('body').css('background-color','rgba(22,22,22,255)'); 
        $('.main-content h4').css('color','#999');

        $('#mainLogo').attr("src","assets/mainLogo_new_W.png");

        $('#mfadtTitle a').css('color','#FFF');
        $('#thesisShowTitle').css('color','#FFF');
        $('#location').css('color','#FFF');
        $('#location a').css('color','#FFF');
        $('.mainEventTitle').css('color','#FFF');
        $('.mainEventDate').css('color','#FFF');
        $("#cornerLogo").attr("src","assets/cornerLogoW.png");

        $('.foot-item:hover').css('text-shadow','4px 4px 3px #fff');
        $('#nav_button_bottom_top_rsvp').css('border','solid #FFF 2px');
        
        // $('#byLine').css('color','#FFF');
        // $('.nav-bar li a').css('color','#FFF');
        // $('.nav_corner a').css('color','#FFF');
        // $('label').css('color','#FFF');
        $('#bottom-content2 a').css('color','#FFF');
        
        $('.socialButtons').css('filter', 'invert(100%)');
        $('.social_footer').css('filter', 'invert(100%)');
        $('.socialButtons:hover').css('background-color', 'rgba(22,22,22,255)');    
    }

    else
    {

        $('body').css('background-color','white');
        $('.main-content h4').css('color','#DDD');

        $('#mainLogo').attr("src","assets/mainLogo_new_B.png");
        
        $('#mfadtTitle a').css('color','#000');
        $('#thesisShowTitle').css('color','#000');
        $('#location').css('color','#000'); 
        $('#location a').css('color','#000');
        $('.mainEventTitle').css('color','#000');
        $('.mainEventDate').css('color','#000');
        $("#cornerLogo").attr("src","assets/cornerLogoB.png");

        $('.foot-item:hover').css('text-shadow','4px 4px 3px #000');
        $('#nav_button_bottom_top_rsvp').css('border','solid #000 2px');

        // $('.nav-bar li a').css('color','#000');
        // $('.nav_corner a').css('color','#000');
        // $('label').css('color','#000');
        $('#bottom-content2 a').css('color','#000');
        // $('.social_footer').css('filter', 'invert(100%)');

        $("#parsonsLogo").css('filter', 'invert(100%)');
        $('.socialButtons:hover').css('background-color', '#fff');

    }
}



