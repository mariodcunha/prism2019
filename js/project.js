
function loadData() {
  $.getJSON( "students-new.json", function( data ) {
    // Write the data into our global variable.
    students = data;
    var index = window.location.hash.split('#')[1].trim();
    // console.log(index);
    // console.log(students);


    // Call a function to create HTML for all the students.
    renderSingleProjectPage(index,students);
  });
}

loadData()

function renderSingleProjectPage(index, data){
  var counter = 0 ;
  var tagCounter = 0 ;
  var prevComma = 0  ;
  var newComma = 0 ;
  var position = 0 ;
  // var setPageOnce = true ;

  var portTrue = false ;
  var fbTrue = false ;
  var instaTrue = false ;
  var twitterTrue = false ;
  var linkTrue = false ;
  var githubTrue = false ;
  var tumblrTrue = false ;

  var project = $('.project-intro'),
  bio = $('.individual-intro');

    // console.log(page);
    // console.log(container);


  // Find the wanted project by iterating the data object and searching for the chosen index.
  if(data.length){
    data.forEach(function (item) {

      if(item.id == index) {

      // console.log(index);
      // console.log(item.id);
      console.log(item.flname);

      bio.find('.student-name').text(item.flname);
      bio.find('.student-title').text(item.profTitles);
      bio.find('.student-intro').text(item.bio);
      bio.find('.student-url').append('<a href="' + item.url + '" target=blank_>Website<p>');

      project.find('.project-name').text(item.project.title);
      project.find('.project-description').append("<p>" + item.project.description + "<p>");
      project.find('.project-description').append('<img src="projects-new/' + index + '/coverimage.png" alt="">');
      project.find('.project-description').append(
        function () {
          var str = (item.project.abstract);
          for(var i=0; i<str.length; i++) {
            if (str[i] === "\r\n") 

            indices.push(i);
            nstr = ("<p>" + str.replace("\r\n", "</br>" + "</p>"));
            return nstr
          };}
        );



    // console.log(indices)
    



    // page.find('.page-image').find('img').attr('src',"portraits/"+item['profile-pic']);

    if(item.social['portfolio'] != "") {
      page.find('.portfolio').text("Portfolio") ;
      // page.find('.portfolio').attr('href', item.social['portfolio']) ;
      page.find('#port1').append("&nbsp;&nbsp;|&nbsp;&nbsp;") ;
      portTrue = true ;
    }
    if(item.social['facebook'] != "") {
      page.find('.fb').text("Facebook") ;
      page.find('.fb').attr('href', item.social['facebook']) ;
      page.find('#fb1').append("&nbsp;&nbsp;|&nbsp;&nbsp;") ;
      fbTrue = true ;
    }
    if(item.social['instagram'] != "") {
      page.find('.insta').text("Instagram") ;
      page.find('.insta').attr('href', item.social['instagram']) ;
      page.find('#insta1').append("&nbsp;&nbsp;|&nbsp;&nbsp;") ;
      instaTrue = true ;
    }
    if(item.social['linkedin'] != "") {
      page.find('.linkedin').text("Linkedin") ;
      page.find('.linkedin').attr('href', item.social['linkedin']) ;
      page.find('#linkedin1').append("&nbsp;&nbsp;|&nbsp;&nbsp;") ;
      linkTrue = true ;
    }
    if(item.social['twitter'] != "") {
      page.find('.twitter').text("Twitter") ;
      page.find('.twitter').attr('href', item.social['twitter']) ;
      page.find('#twitter1').append("&nbsp;&nbsp;|&nbsp;&nbsp;") ;
      twitterTrue = true ;
    }
    if(item.social.hasOwnProperty('github') && item.social['github'] != "") {
      page.find('.github').text("Github") ;
      page.find('.github').attr('href', item.social['github']) ;
      page.find('#github1').append("&nbsp;&nbsp;|&nbsp;&nbsp;") ;
      githubTrue = true ;
    }
    if(item.social.hasOwnProperty('tumblr') && item.social['tumblr'] != "") {
      page.find('.tumblr').text("Tumblr") ;
      page.find('.tumblr').attr('href', item.social['tumblr']) ;
      page.find('#tumblr1').append("&nbsp;&nbsp;|&nbsp;&nbsp;") ;
      tumblrTrue = true ;
    }
    if(item.social['other'] != "") {
      page.find('.other').text(item.social['other']) ;
      if(item.social['other'][0] == "h") {
        page.find('.other').attr('href', item.social['other']) ;
      }
    } else {
      if(tumblrTrue === true) {
        page.find('.tumblr').text("Tumblr") ;
        page.find('#tumblr1').text("");
      } else if (githubTrue === true) {
        page.find('.github').text("Github") ;
        page.find('#github1').text("");
      } else if(twitterTrue === true) {
        page.find('.twitter').text("Twitter") ;
        page.find('#twitter1').text("") ;
      } else if (linkTrue === true) {
        page.find('.linkedin').text("Linkedin") ;
        page.find('#linkedin1').text("") ;
      } else if (instaTrue === true) {
        page.find('.insta').text("Instagram") ;
        page.find('#insta1').text("") ;
      } else if(fbTrue === true) {
        page.find('.fb').text("Facebook") ;
        page.find('#fb1').text("") ;
      } else if (portTrue === true) {
        page.find('.portfolio').text("Portfolio") ;
        page.find('#port1').text("") ;
      }
    }
    for(var i = 0 ; i < item.aboutme.length ; i++) {
      page.find('.page-desc').append(item.aboutme[i]+ "<br>" + "<br>") ;
    }

    if(item.project['website'] != "") {
      page.find('.websiteLink').text("Project Website") ;
      page.find('.websiteLink').attr('href', item.project['website']) ;
      instaTrue = true ;
    }


    page.find('.project-name').text(item.project.title);
    page.find('.project-desc').append(item.project.description[0] + "<br>" + "<br>");
    page.find('.project-desc').append(item.project.description[1] + "<br>" + "<br>");
        // page.find('.project-desc').append('More details: ') ;
        // var newLink = document.createElement('a') ;
        // newLink.setAttribute('class', 'aimeeLink') ;
        // newLink.setAttribute('src', "http://coexistgame.com/")
        // $( ".project-desc" ).append(newLink) ;
        // page.find('.aimeeLink').append("http://coexistgame.com/") ;

        var newVideo = document.createElement('iframe') ;
        newVideo.setAttribute('src', item.project.video[0]) ;
        newVideo.setAttribute('allowFullScreen', 'true')
        $('#theProject').append(newVideo) ;

        var newText = document.createElement('h5');
        newText.setAttribute('class', 'project-desc2') ;
        newText.setAttribute('id', 'project-description') ;
        $("#theProject").append(newText) ;
        page.find('.project-desc2').append("<br>" + item.project.description[2] + "<br>" + "<br>");

        var newImage = document.createElement('img');
        newImage.id = "projectImages" ;
        console.log(newImage.id) ;
        newImage.setAttribute('src',"project/"+ item.id + "/" + item.project.image[0] );
        newImage.setAttribute('style', "width:50vw; margin-bottom:30px;")
        $( "#theProject" ).append(newImage) ;

        var newText3 = document.createElement('h5');
        newText3.setAttribute('class', 'project-desc3') ;
        newText3.setAttribute('id', 'project-description') ;
        $("#theProject").append(newText3) ;
        page.find('.project-desc3').append(item.project.description[3] + "<br>");

        var newImage2 = document.createElement('img');
        newImage2.id = "projectImages" ;
        console.log(newImage2.id) ;
        newImage2.setAttribute('src',"project/"+ item.id + "/" + item.project.image[1] );
        newImage2.setAttribute('style', "width:50vw; margin-bottom:30px;")
        $( "#theProject" ).append(newImage2) ;

        var newText4 = document.createElement('h5');
        newText4.setAttribute('class', 'project-desc4') ;
        newText4.setAttribute('id', 'project-description') ;
        $("#theProject").append(newText4) ;
        page.find('.project-desc4').append(item.project.description[4] + "<br>" + "<br>");
        page.find('.project-desc4').append(item.project.description[5]);

        var newImage3 = document.createElement('img');
        newImage3.id = "projectImages" ;
        newImage3.setAttribute('src',"project/"+ item.id + "/" + item.project.image[2] );
        newImage3.setAttribute('style', "width:50vw; margin-bottom:30px;")
        $( "#theProject" ).append(newImage3) ;

        var newText5 = document.createElement('h5');
        newText5.setAttribute('class', 'project-desc5') ;
        newText5.setAttribute('id', 'project-description') ;
        $("#theProject").append(newText5) ;
        page.find('.project-desc5').append(item.project.description[6]);

        var newImage4 = document.createElement('img');
        newImage4.id = "projectImages" ;
        newImage4.setAttribute('src',"project/"+ item.id + "/" + item.project.image[3] );
        newImage4.setAttribute('style', "width:50vw; margin-bottom:30px;")
        $( "#theProject" ).append(newImage4) ;

        var newText6 = document.createElement('h5');
        newText6.setAttribute('class', 'project-desc6') ;
        newText6.setAttribute('id', 'project-description') ;
        $("#theProject").append(newText6) ;
        page.find('.project-desc6').append(item.project.description[7]);



        for(var i = 0 ; i < item.project['thesis-category'].length ; i++) {
         page.find('.thesis-category').append(item.project['thesis-category'][i] + "<br>") ;
       }

       for(var i = 0 ; i < item.project['tags'].length ; i++) {
        page.find('.myTags').append(item.project['tags'][i] + "<br>") ;
      }
      page.find('.studio1').append(item.project['studio-professor-1']+"<br>") ;
      page.find('.studio1').append(item.project['writing-professor-1']) ;
      if(item.project.hasOwnProperty('other-professor-1')) {
        console.log("ran") ;
        page.find('.studio1').append("<br>" + item.project['other-professor-1']) ;
      }
      page.find('.studio2').append(item.project['studio-professor-2']+"<br>") ;
      page.find('.studio2').append(item.project['writing-professor-2']) ;
      if(item.project.hasOwnProperty('other-professor-2')) {
        page.find('.studio2').append("<br>" + item.project['other-professor-2']) ;
      }

      container.find('h4').text(item.project.blurb);
      container.find('p').text(item.project.description);
    } else if(item.id == 26 && item.id == index) {
        //erica kermani
        page.find('.page-name').text(item.name);
        page.find('.page-image').find('img').attr('src',"portraits/"+item['profile-pic']);
        if(item.social['portfolio'] != "") {
          page.find('.portfolio').text("Portfolio") ;
          page.find('.portfolio').attr('href', item.social['portfolio']) ;
          page.find('#port1').append("&nbsp;&nbsp;|&nbsp;&nbsp;") ;
          portTrue = true ;
        }
        if(item.social['facebook'] != "") {
          page.find('.fb').text("Facebook") ;
          page.find('.fb').attr('href', item.social['facebook']) ;
          page.find('#fb1').append("&nbsp;&nbsp;|&nbsp;&nbsp;") ;
          fbTrue = true ;
        }
        if(item.social['instagram'] != "") {
          page.find('.insta').text("Instagram") ;
          page.find('.insta').attr('href', item.social['instagram']) ;
          page.find('#insta1').append("&nbsp;&nbsp;|&nbsp;&nbsp;") ;
          instaTrue = true ;
        }
        if(item.social['linkedin'] != "") {
          page.find('.linkedin').text("Linkedin") ;
          page.find('.linkedin').attr('href', item.social['linkedin']) ;
          page.find('#linkedin1').append("&nbsp;&nbsp;|&nbsp;&nbsp;") ;
          linkTrue = true ;
        }
        if(item.social['twitter'] != "") {
          page.find('.twitter').text("Twitter") ;
          page.find('.twitter').attr('href', item.social['twitter']) ;
          page.find('#twitter1').append("&nbsp;&nbsp;|&nbsp;&nbsp;") ;
          twitterTrue = true ;
        }
        if(item.social.hasOwnProperty('github') && item.social['github'] != "") {
          page.find('.github').text("Github") ;
          page.find('.github').attr('href', item.social['github']) ;
          page.find('#github1').append("&nbsp;&nbsp;|&nbsp;&nbsp;") ;
          githubTrue = true ;
        }
        if(item.social.hasOwnProperty('tumblr') && item.social['tumblr'] != "") {
          page.find('.tumblr').text("Tumblr") ;
          page.find('.tumblr').attr('href', item.social['tumblr']) ;
          page.find('#tumblr1').append("&nbsp;&nbsp;|&nbsp;&nbsp;") ;
          tumblrTrue = true ;
        }
        if(item.social['other'] != "") {
          page.find('.other').text(item.social['other']) ;
          if(item.social['other'][0] == "h") {
            page.find('.other').attr('href', item.social['other']) ;
          }
        } else {
          if(tumblrTrue === true) {
            page.find('.tumblr').text("Tumblr") ;
            page.find('#tumblr1').text("");
          } else if (githubTrue === true) {
            page.find('.github').text("Github") ;
            page.find('#github1').text("");
          } else if(twitterTrue === true) {
            page.find('.twitter').text("Twitter") ;
            page.find('#twitter1').text("") ;
          } else if (linkTrue === true) {
            page.find('.linkedin').text("Linkedin") ;
            page.find('#linkedin1').text("") ;
          } else if (instaTrue === true) {
            page.find('.insta').text("Instagram") ;
            page.find('#insta1').text("") ;
          } else if(fbTrue === true) {
            page.find('.fb').text("Facebook") ;
            page.find('#fb1').text("") ;
          } else if (portTrue === true) {
            page.find('.portfolio').text("Portfolio") ;
            page.find('#port1').text("") ;
          }
        }
        for(var i = 0 ; i < item.aboutme.length ; i++) {
          page.find('.page-desc').append(item.aboutme[i]+ "<br>" + "<br>") ;
        }

        if(item.project['website'] != "") {
          page.find('.websiteLink').text("Project Website") ;
          page.find('.websiteLink').attr('href', item.project['website']) ;
          instaTrue = true ;
        }


        page.find('.project-name').text(item.project.title);

        var newText = document.createElement('h5');
        newText.setAttribute('class', 'project-desc1') ;
        newText.setAttribute('id', 'project-description') ;
        newText.setAttribute('style', 'margin-bottom:2px') ;
        $("#theProject").append(newText) ;
        page.find('.project-desc1').append(item.project.description[0]);

        var newText2 = document.createElement('h5');
        newText2.setAttribute('class', 'project-desc2') ;
        newText2.setAttribute('id', 'project-description') ;
        newText2.setAttribute('style', 'margin-bottom:2px') ;
        $("#theProject").append(newText2) ;
        page.find('.project-desc2').append(item.project.description[1]);

        var newText3 = document.createElement('h5');
        newText3.setAttribute('class', 'project-desc3') ;
        newText3.setAttribute('id', 'project-description') ;
        $("#theProject").append(newText3) ;
        page.find('.project-desc3').append(item.project.description[2]);

        var newText4 = document.createElement('h5');
        newText4.setAttribute('class', 'project-desc4') ;
        newText4.setAttribute('id', 'project-description') ;
        $("#theProject").append(newText4) ;
        page.find('.project-desc4').append(item.project.description[3] + "<br>" +"<br>");

        var newText5 = document.createElement('h5');
        newText5.setAttribute('class', 'project-desc5') ;
        newText5.setAttribute('id', 'project-description') ;
        $("#theProject").append(newText5) ;
        page.find('.project-desc5').append(item.project.description[4] + "<br>" +"<br>");

        if(item.project.image[0] != "") {
          for(var i = 0 ; i < item.project.image.length ;i++) {
            var newImage = document.createElement('img');
            newImage.id = "projectImages" ;
            console.log(newImage.id) ;
            newImage.setAttribute('src',"project/"+ item.id + "/" + item.project.image[i] );
            newImage.setAttribute('style', "width:50vw; margin-bottom:30px;")
            $( "#theProject" ).append(newImage) ;
          }
        }

        if(item.project.hasOwnProperty('video')) {
          for(var i = 0 ; i < item.project.video.length ; i++) {
            var newVideo = document.createElement('iframe') ;
            newVideo.setAttribute('src', item.project.video[i]) ;
            newVideo.setAttribute('allowFullScreen', 'true')
            $('#theProject').append(newVideo) ;
          }
        }


        for(var i = 0 ; i < item.project['thesis-category'].length ; i++) {
         page.find('.thesis-category').append(item.project['thesis-category'][i] + "<br>") ;
       }

       for(var i = 0 ; i < item.project['tags'].length ; i++) {
        page.find('.myTags').append(item.project['tags'][i] + "<br>") ;
      }
      page.find('.studio1').append(item.project['studio-professor-1']+"<br>") ;
      page.find('.studio1').append(item.project['writing-professor-1']) ;
      if(item.project.hasOwnProperty('other-professor-1')) {
        console.log("ran") ;
        page.find('.studio1').append("<br>" + item.project['other-professor-1']) ;
      }
      page.find('.studio2').append(item.project['studio-professor-2']+"<br>") ;
      page.find('.studio2').append(item.project['writing-professor-2']) ;
      if(item.project.hasOwnProperty('other-professor-2')) {
        page.find('.studio2').append("<br>" + item.project['other-professor-2']) ;
      }

      container.find('h4').text(item.project.blurb);
      container.find('p').text(item.project.description);
    } else if(item.id == 65 && item.id == index) {
        //paolo's page
        page.find('.page-name').text(item.name);
        page.find('.page-image').find('img').attr('src',"portraits/"+item['profile-pic']);
        if(item.social['portfolio'] != "") {
          page.find('.portfolio').text("Portfolio") ;
          page.find('.portfolio').attr('href', item.social['portfolio']) ;
          page.find('#port1').append("&nbsp;&nbsp;|&nbsp;&nbsp;") ;
          portTrue = true ;
        }
        if(item.social['facebook'] != "") {
          page.find('.fb').text("Facebook") ;
          page.find('.fb').attr('href', item.social['facebook']) ;
          page.find('#fb1').append("&nbsp;&nbsp;|&nbsp;&nbsp;") ;
          fbTrue = true ;
        }
        if(item.social['instagram'] != "") {
          page.find('.insta').text("Instagram") ;
          page.find('.insta').attr('href', item.social['instagram']) ;
          page.find('#insta1').append("&nbsp;&nbsp;|&nbsp;&nbsp;") ;
          instaTrue = true ;
        }
        if(item.social['linkedin'] != "") {
          page.find('.linkedin').text("Linkedin") ;
          page.find('.linkedin').attr('href', item.social['linkedin']) ;
          page.find('#linkedin1').append("&nbsp;&nbsp;|&nbsp;&nbsp;") ;
          linkTrue = true ;
        }
        if(item.social['twitter'] != "") {
          page.find('.twitter').text("Twitter") ;
          page.find('.twitter').attr('href', item.social['twitter']) ;
          page.find('#twitter1').append("&nbsp;&nbsp;|&nbsp;&nbsp;") ;
          twitterTrue = true ;
        }
        if(item.social.hasOwnProperty('github') && item.social['github'] != "") {
          page.find('.github').text("Github") ;
          page.find('.github').attr('href', item.social['github']) ;
          page.find('#github1').append("&nbsp;&nbsp;|&nbsp;&nbsp;") ;
          githubTrue = true ;
        }
        if(item.social.hasOwnProperty('tumblr') && item.social['tumblr'] != "") {
          page.find('.tumblr').text("Tumblr") ;
          page.find('.tumblr').attr('href', item.social['tumblr']) ;
          page.find('#tumblr1').append("&nbsp;&nbsp;|&nbsp;&nbsp;") ;
          tumblrTrue = true ;
        }
        if(item.social['other'] != "") {
          page.find('.other').text(item.social['other']) ;
          if(item.social['other'][0] == "h") {
            page.find('.other').attr('href', item.social['other']) ;
          }
        } else {
          if(tumblrTrue === true) {
            page.find('.tumblr').text("Tumblr") ;
            page.find('#tumblr1').text("");
          } else if (githubTrue === true) {
            page.find('.github').text("Github") ;
            page.find('#github1').text("");
          } else if(twitterTrue === true) {
            page.find('.twitter').text("Twitter") ;
            page.find('#twitter1').text("") ;
          } else if (linkTrue === true) {
            page.find('.linkedin').text("Linkedin") ;
            page.find('#linkedin1').text("") ;
          } else if (instaTrue === true) {
            page.find('.insta').text("Instagram") ;
            page.find('#insta1').text("") ;
          } else if(fbTrue === true) {
            page.find('.fb').text("Facebook") ;
            page.find('#fb1').text("") ;
          } else if (portTrue === true) {
            page.find('.portfolio').text("Portfolio") ;
            page.find('#port1').text("") ;
          }
        }
        for(var i = 0 ; i < item.aboutme.length ; i++) {
          page.find('.page-desc').append(item.aboutme[i]+ "<br>" + "<br>") ;
        }

        if(item.project['website'] != "") {
          page.find('.websiteLink').text("Project Website") ;
          page.find('.websiteLink').attr('href', item.project['website']) ;
          instaTrue = true ;
        }


        page.find('.project-name').text(item.project.title);

        var newImage = document.createElement('img');
        newImage.id = "projectImages" ;
        console.log(newImage.id) ;
        newImage.setAttribute('src',"project/"+ item.id + "/" + item.project.image[0] );
        newImage.setAttribute('style', "width:50vw; margin-bottom:30px;")
        $( "#theProject" ).append(newImage) ;

        var newText = document.createElement('h5');
        newText.setAttribute('class', 'project-desc1') ;
        newText.setAttribute('id', 'project-description') ;
        $("#theProject").append(newText) ;
        page.find('.project-desc1').append("<br>" + item.project.description[0]);

        var newText2 = document.createElement('h5');
        newText2.setAttribute('class', 'project-desc2') ;
        newText2.setAttribute('id', 'project-description') ;
        $("#theProject").append(newText2) ;
        page.find('.project-desc2').append(item.project.description[1] + "<br>");

        var newText3 = document.createElement('h5');
        newText3.setAttribute('class', 'project-desc3') ;
        newText3.setAttribute('id', 'project-description') ;
        newText3.setAttribute('style', 'font-weight:900;font-size:18px; margin-bottom:2px') ;
        $("#theProject").append(newText3) ;
        page.find('.project-desc3').append(item.project.description[2]);

        var newText4 = document.createElement('h5');
        newText4.setAttribute('class', 'project-desc4') ;
        newText4.setAttribute('id', 'project-description') ;
        $("#theProject").append(newText4) ;
        page.find('.project-desc4').append(item.project.description[3] + "<br>" + "<br>");

        var newText5 = document.createElement('h5');
        newText5.setAttribute('class', 'project-desc5') ;
        newText5.setAttribute('id', 'project-description') ;
        $("#theProject").append(newText5) ;
        page.find('.project-desc5').append(item.project.description[4] + "<br>");

        var newVideo = document.createElement('iframe') ;
        newVideo.setAttribute('src', item.project.video[0]) ;
        newVideo.setAttribute('allowFullScreen', 'true')
        $('#theProject').append(newVideo) ;

        var newText6 = document.createElement('h5');
        newText6.setAttribute('class', 'project-desc6') ;
        newText6.setAttribute('id', 'project-description') ;
        newText6.setAttribute('style', 'font-weight:900;font-size:18px; margin-bottom:2px') ;
        $("#theProject").append(newText6) ;
        page.find('.project-desc6').append(item.project.description[5]);

        var newText7 = document.createElement('h5');
        newText7.setAttribute('class', 'project-desc7') ;
        newText7.setAttribute('id', 'project-description') ;
        $("#theProject").append(newText7) ;
        page.find('.project-desc7').append(item.project.description[6]);

        var newText8 = document.createElement('h5');
        newText8.setAttribute('class', 'project-desc8') ;
        newText8.setAttribute('id', 'project-description') ;
        newText8.setAttribute('style', 'font-weight:900;font-size:18px; margin-bottom:2px') ;
        $("#theProject").append(newText8) ;
        page.find('.project-desc8').append(item.project.description[7]);

        var newText9 = document.createElement('h5');
        newText9.setAttribute('class', 'project-desc9') ;
        newText9.setAttribute('id', 'project-description') ;
        $("#theProject").append(newText9) ;
        page.find('.project-desc9').append(item.project.description[8]);

        var newText10 = document.createElement('h5');
        newText10.setAttribute('class', 'project-desc10') ;
        newText10.setAttribute('id', 'project-description') ;
        newText10.setAttribute('style', 'font-weight:900;font-size:18px; margin-bottom:2px') ;
        $("#theProject").append(newText10) ;
        page.find('.project-desc10').append(item.project.description[9]);

        var newVideo2 = document.createElement('iframe') ;
        newVideo2.setAttribute('src', item.project.video[1]) ;
        newVideo2.setAttribute('allowFullScreen', 'true') ;
        $('#theProject').append(newVideo2) ;

        var newText11 = document.createElement('h5');
        newText11.setAttribute('class', 'project-desc11') ;
        newText11.setAttribute('id', 'project-description') ;
        newText11.setAttribute('style', 'font-weight:900;font-size:18px; margin-bottom:2px') ;
        $("#theProject").append(newText11) ;
        page.find('.project-desc11').append(item.project.description[10]);

        var newImage2 = document.createElement('img');
        newImage2.id = "projectImages" ;
        newImage2.setAttribute('src',"project/"+ item.id + "/" + item.project.image[1] );
        newImage2.setAttribute('style', "width:50vw; margin-bottom:30px;")
        $( "#theProject" ).append(newImage2) ;

        var newText12 = document.createElement('h5');
        newText12.setAttribute('class', 'project-desc12') ;
        newText12.setAttribute('id', 'project-description') ;
        newText12.setAttribute('style', 'font-weight:900;font-size:18px; margin-bottom:2px') ;
        $("#theProject").append(newText12) ;
        page.find('.project-desc12').append(item.project.description[11]);

        var newImage3 = document.createElement('img');
        newImage3.id = "projectImages" ;
        newImage3.setAttribute('src',"project/"+ item.id + "/" + item.project.image[2] );
        newImage3.setAttribute('style', "width:50vw; margin-bottom:30px;")
        $( "#theProject" ).append(newImage3) ;

        var newText13 = document.createElement('h5');
        newText13.setAttribute('class', 'project-desc13') ;
        newText13.setAttribute('id', 'project-description') ;
        newText13.setAttribute('style', 'font-weight:900;font-size:18px; margin-bottom:2px') ;
        $("#theProject").append(newText13) ;
        page.find('.project-desc13').append(item.project.description[12]);

        var newImage4 = document.createElement('img');
        newImage4.id = "projectImages" ;
        newImage4.setAttribute('src',"project/"+ item.id + "/" + item.project.image[3] );
        newImage4.setAttribute('style', "width:50vw; margin-bottom:30px;")
        $( "#theProject" ).append(newImage4) ;

        var newImage5 = document.createElement('img');
        newImage5.id = "projectImages" ;
        newImage5.setAttribute('src',"project/"+ item.id + "/" + item.project.image[4] );
        newImage5.setAttribute('style', "width:50vw; margin-bottom:30px;")
        $( "#theProject" ).append(newImage5) ;

        var newText14 = document.createElement('h5');
        newText14.setAttribute('class', 'project-desc14') ;
        newText14.setAttribute('id', 'project-description') ;
        newText14.setAttribute('style', 'font-weight:900;font-size:18px; margin-bottom:2px') ;
        $("#theProject").append(newText14) ;
        page.find('.project-desc14').append(item.project.description[13]);

        var newText15 = document.createElement('h5');
        newText15.setAttribute('class', 'project-desc15') ;
        newText15.setAttribute('id', 'project-description') ;
        $("#theProject").append(newText15) ;
        page.find('.project-desc15').append(item.project.description[14]);

        var newImage6 = document.createElement('img');
        newImage6.id = "projectImages" ;
        newImage6.setAttribute('src',"project/"+ item.id + "/" + item.project.image[5] );
        newImage6.setAttribute('style', "width:50vw; margin-bottom:30px;")
        $( "#theProject" ).append(newImage6) ;
        var newImage7 = document.createElement('img');
        newImage7.id = "projectImages" ;
        newImage7.setAttribute('src',"project/"+ item.id + "/" + item.project.image[6] );
        newImage7.setAttribute('style', "width:50vw; margin-bottom:30px;")
        $( "#theProject" ).append(newImage7) ;
        var newImage8 = document.createElement('img');
        newImage8.id = "projectImages" ;
        newImage8.setAttribute('src',"project/"+ item.id + "/" + item.project.image[7] );
        newImage8.setAttribute('style', "width:50vw; margin-bottom:30px;")
        $( "#theProject" ).append(newImage8) ;
        
        for(var i = 0 ; i < item.project['thesis-category'].length ; i++) {
         page.find('.thesis-category').append(item.project['thesis-category'][i] + "<br>") ;
       }

       for(var i = 0 ; i < item.project['tags'].length ; i++) {
        page.find('.myTags').append(item.project['tags'][i] + "<br>") ;
      }
      page.find('.studio1').append(item.project['studio-professor-1']+"<br>") ;
      page.find('.studio1').append(item.project['writing-professor-1']) ;
      if(item.project.hasOwnProperty('other-professor-1')) {
        console.log("ran") ;
        page.find('.studio1').append("<br>" + item.project['other-professor-1']) ;
      }
      page.find('.studio2').append(item.project['studio-professor-2']+"<br>") ;
      page.find('.studio2').append(item.project['writing-professor-2']) ;
      if(item.project.hasOwnProperty('other-professor-2')) {
        page.find('.studio2').append("<br>" + item.project['other-professor-2']) ;
      }

      container.find('h4').text(item.project.blurb);
      container.find('p').text(item.project.description);

    } else if(item.id == 81 && item.id == index) {
      page.find('.page-name').text(item.name);
      page.find('.page-image').find('img').attr('src',"portraits/"+item['profile-pic']);
      if(item.social['portfolio'] != "") {
        page.find('.portfolio').text("Portfolio") ;
        page.find('.portfolio').attr('href', item.social['portfolio']) ;
        page.find('#port1').append("&nbsp;&nbsp;|&nbsp;&nbsp;") ;
        portTrue = true ;
      }
      if(item.social['facebook'] != "") {
        page.find('.fb').text("Facebook") ;
        page.find('.fb').attr('href', item.social['facebook']) ;
        page.find('#fb1').append("&nbsp;&nbsp;|&nbsp;&nbsp;") ;
        fbTrue = true ;
      }
      if(item.social['instagram'] != "") {
        page.find('.insta').text("Instagram") ;
        page.find('.insta').attr('href', item.social['instagram']) ;
        page.find('#insta1').append("&nbsp;&nbsp;|&nbsp;&nbsp;") ;
        instaTrue = true ;
      }
      if(item.social['linkedin'] != "") {
        page.find('.linkedin').text("Linkedin") ;
        page.find('.linkedin').attr('href', item.social['linkedin']) ;
        page.find('#linkedin1').append("&nbsp;&nbsp;|&nbsp;&nbsp;") ;
        linkTrue = true ;
      }
      if(item.social['twitter'] != "") {
        page.find('.twitter').text("Twitter") ;
        page.find('.twitter').attr('href', item.social['twitter']) ;
        page.find('#twitter1').append("&nbsp;&nbsp;|&nbsp;&nbsp;") ;
        twitterTrue = true ;
      }
      if(item.social.hasOwnProperty('github') && item.social['github'] != "") {
        page.find('.github').text("Github") ;
        page.find('.github').attr('href', item.social['github']) ;
        page.find('#github1').append("&nbsp;&nbsp;|&nbsp;&nbsp;") ;
        githubTrue = true ;
      }
      if(item.social.hasOwnProperty('tumblr') && item.social['tumblr'] != "") {
        page.find('.tumblr').text("Tumblr") ;
        page.find('.tumblr').attr('href', item.social['tumblr']) ;
        page.find('#tumblr1').append("&nbsp;&nbsp;|&nbsp;&nbsp;") ;
        tumblrTrue = true ;
      }
      if(item.social['other'] != "") {
        page.find('.other').text(item.social['other']) ;
        if(item.social['other'][0] == "h") {
          page.find('.other').attr('href', item.social['other']) ;
        }
      } else {
        if(tumblrTrue === true) {
          page.find('.tumblr').text("Tumblr") ;
          page.find('#tumblr1').text("");
        } else if (githubTrue === true) {
          page.find('.github').text("Github") ;
          page.find('#github1').text("");
        } else if(twitterTrue === true) {
          page.find('.twitter').text("Twitter") ;
          page.find('#twitter1').text("") ;
        } else if (linkTrue === true) {
          page.find('.linkedin').text("Linkedin") ;
          page.find('#linkedin1').text("") ;
        } else if (instaTrue === true) {
          page.find('.insta').text("Instagram") ;
          page.find('#insta1').text("") ;
        } else if(fbTrue === true) {
          page.find('.fb').text("Facebook") ;
          page.find('#fb1').text("") ;
        } else if (portTrue === true) {
          page.find('.portfolio').text("Portfolio") ;
          page.find('#port1').text("") ;
        }
      }
      for(var i = 0 ; i < item.aboutme.length ; i++) {
        page.find('.page-desc').append(item.aboutme[i]+ "<br>" + "<br>") ;
      }

      if(item.project['website'] != "") {
        page.find('.websiteLink').text("Project Website") ;
        page.find('.websiteLink').attr('href', item.project['website']) ;
        instaTrue = true ;
      }


      page.find('.project-name').text(item.project.title);
      page.find('.project-desc').append(item.project.description[0] + "<br>" + "<br>");

      var newVideo = document.createElement('iframe') ;
      newVideo.setAttribute('src', item.project.video[0]) ;
      newVideo.setAttribute('allowFullScreen', 'true')
      $('#theProject').append(newVideo) ;

      if(item.project.image[0] != "") {
        for(var i = 0 ; i < item.project.image.length ;i++) {
          var newImage = document.createElement('img');
          newImage.id = "projectImages" ;
          console.log(newImage.id) ;
          newImage.setAttribute('src',"project/"+ item.id + "/" + item.project.image[i] );
          newImage.setAttribute('style', "width:50vw; margin-bottom:30px;")
          $( "#theProject" ).append(newImage) ;
        }
      }


      for(var i = 0 ; i < item.project['thesis-category'].length ; i++) {
       page.find('.thesis-category').append(item.project['thesis-category'][i] + "<br>") ;
     }

     for(var i = 0 ; i < item.project['tags'].length ; i++) {
      page.find('.myTags').append(item.project['tags'][i] + "<br>") ;
    }
    page.find('.studio1').append(item.project['studio-professor-1']+"<br>") ;
    page.find('.studio1').append(item.project['writing-professor-1']) ;
    if(item.project.hasOwnProperty('other-professor-1')) {
      console.log("ran") ;
      page.find('.studio1').append("<br>" + item.project['other-professor-1']) ;
    }
    page.find('.studio2').append(item.project['studio-professor-2']+"<br>") ;
    page.find('.studio2').append(item.project['writing-professor-2']) ;
    if(item.project.hasOwnProperty('other-professor-2')) {
      page.find('.studio2').append("<br>" + item.project['other-professor-2']) ;
    }

    container.find('h4').text(item.project.blurb);
    container.find('p').text(item.project.description);
  } else if(item.id == index){
    console.log("this also ran") ;
        // console.log(item.profile-pic);
        // Populate '.popup-detail' with the chosen project's data.
        page.find('.page-name').text(item.name);
        page.find('.page-image').find('img').attr('src',"portraits/"+item['profile-pic']);
        if(item.social['portfolio'] != "") {
          page.find('.portfolio').text("Portfolio") ;
          page.find('.portfolio').attr('href', item.social['portfolio']) ;
          page.find('#port1').append("&nbsp;&nbsp;|&nbsp;&nbsp;") ;
          portTrue = true ;
        }
        if(item.social['facebook'] != "") {
          page.find('.fb').text("Facebook") ;
          page.find('.fb').attr('href', item.social['facebook']) ;
          page.find('#fb1').append("&nbsp;&nbsp;|&nbsp;&nbsp;") ;
          fbTrue = true ;
        }
        if(item.social['instagram'] != "") {
          page.find('.insta').text("Instagram") ;
          page.find('.insta').attr('href', item.social['instagram']) ;
          page.find('#insta1').append("&nbsp;&nbsp;|&nbsp;&nbsp;") ;
          instaTrue = true ;
        }
        if(item.social['linkedin'] != "") {
          page.find('.linkedin').text("Linkedin") ;
          page.find('.linkedin').attr('href', item.social['linkedin']) ;
          page.find('#linkedin1').append("&nbsp;&nbsp;|&nbsp;&nbsp;") ;
          linkTrue = true ;
        }
        if(item.social['twitter'] != "") {
          page.find('.twitter').text("Twitter") ;
          page.find('.twitter').attr('href', item.social['twitter']) ;
          page.find('#twitter1').append("&nbsp;&nbsp;|&nbsp;&nbsp;") ;
          twitterTrue = true ;
        }
        if(item.social.hasOwnProperty('github') && item.social['github'] != "") {
          page.find('.github').text("Github") ;
          page.find('.github').attr('href', item.social['github']) ;
          page.find('#github1').append("&nbsp;&nbsp;|&nbsp;&nbsp;") ;
          githubTrue = true ;
        }
        if(item.social.hasOwnProperty('tumblr') && item.social['tumblr'] != "") {
          page.find('.tumblr').text("Tumblr") ;
          page.find('.tumblr').attr('href', item.social['tumblr']) ;
          page.find('#tumblr1').append("&nbsp;&nbsp;|&nbsp;&nbsp;") ;
          tumblrTrue = true ;
        }
        if(item.social['other'] != "") {
          page.find('.other').text(item.social['other']) ;
          if(item.social['other'][0] == "h") {
            page.find('.other').attr('href', item.social['other']) ;
          }
        } else {
          if(tumblrTrue === true) {
            page.find('.tumblr').text("Tumblr") ;
            page.find('#tumblr1').text("");
          } else if (githubTrue === true) {
            page.find('.github').text("Github") ;
            page.find('#github1').text("");
          } else if(twitterTrue === true) {
            page.find('.twitter').text("Twitter") ;
            page.find('#twitter1').text("") ;
          } else if (linkTrue === true) {
            page.find('.linkedin').text("Linkedin") ;
            page.find('#linkedin1').text("") ;
          } else if (instaTrue === true) {
            page.find('.insta').text("Instagram") ;
            page.find('#insta1').text("") ;
          } else if(fbTrue === true) {
            page.find('.fb').text("Facebook") ;
            page.find('#fb1').text("") ;
          } else if (portTrue === true) {
            page.find('.portfolio').text("Portfolio") ;
            page.find('#port1').text("") ;
          }
        }
        for(var i = 0 ; i < item.aboutme.length ; i++) {
          page.find('.page-desc').append(item.aboutme[i]+ "<br>" + "<br>") ;
        }
        page.find('.project-name').text(item.project.title);
        for( var i = 0 ; i < item.project.description.length ; i++) {
          page.find('.project-desc').append(item.project.description[i] + "<br>" + "<br>");
        }
        if(item.project.image[0] != "") {
          for(var i = 0 ; i < item.project.image.length ;i++) {
            var newImage = document.createElement('img');
            newImage.id = "projectImages" ;
            console.log(newImage.id) ;
            newImage.setAttribute('src',"project/"+ item.id + "/" + item.project.image[i] );
            newImage.setAttribute('style', "width:50vw; margin-bottom:30px;")
            $( "#theProject" ).append(newImage) ;
          }
        }
        if(item.project['website'] != "") {
          page.find('.websiteLink').text("Project Website") ;
          page.find('.websiteLink').attr('href', item.project['website']) ;
          instaTrue = true ;
        }

        if(item.project.hasOwnProperty('video')) {
          for(var i = 0 ; i < item.project.video.length ; i++) {
            var newVideo = document.createElement('iframe') ;
            newVideo.setAttribute('src', item.project.video[i]) ;
            newVideo.setAttribute('allowFullScreen', 'true')
            $('#theProject').append(newVideo) ;
          }
        }
        for(var i = 0 ; i < item.project['thesis-category'].length ; i++) {
         page.find('.thesis-category').append(item.project['thesis-category'][i] + "<br>") ;
       }
       

       for(var i = 0 ; i < item.project['tags'].length ; i++) {
        page.find('.myTags').append(item.project['tags'][i] + "<br>") ;
      }
      page.find('.studio1').append(item.project['studio-professor-1']+"<br>") ;
      page.find('.studio1').append(item.project['writing-professor-1']) ;
      if(item.project.hasOwnProperty('other-professor-1')) {
        console.log("ran") ;
        page.find('.studio1').append("<br>" + item.project['other-professor-1']) ;
      }
      page.find('.studio2').append(item.project['studio-professor-2']+"<br>") ;
      page.find('.studio2').append(item.project['writing-professor-2']) ;
      if(item.project.hasOwnProperty('other-professor-2')) {
        page.find('.studio2').append("<br>" + item.project['other-professor-2']) ;
      }

      container.find('h4').text(item.project.blurb);
      container.find('p').text(item.project.description);
    }
  });
}

  // Show the page.
  page.addClass('visible');

}
