function loadData() {
    $.getJSON("students.json", function(data) {
        // Write the data into our global variable.
        students = data;
        var index = window.location.hash.split('#')[1].trim();
        // console.log(index);
        // console.log(students);


        // Call a function to create HTML for all the students.
        renderSingleProjectPage(index, students);
    });
}

loadData();

function renderSingleProjectPage(index, data) {
    var counter = 0;
    var tagCounter = 0;
    var prevComma = 0;
    var newComma = 0;
    var position = 0;
    // var setPageOnce = true ;
    
    var embeddedvid = false;
    var portTrue = false;
    var fbTrue = false;
    var instaTrue = false;
    var twitterTrue = false;
    var linkTrue = false;
    var githubTrue = false;
    var tumblrTrue = false;

    var project = $('.project-intro'),
        bio = $('.individual-intro');

    // console.log(page);
    // console.log(container);


    // Find the wanted project by iterating the data object and searching for the chosen index.
    if (data.length) {
        data.forEach(function(item) {

            if (item.id == index) {


                //       Insert student info
                bio.find('.student-name').text(item.flname);
                bio.find('.student-title').text(item.profTitles);
                bio.find('.student-intro').text(item.bio);
                bio.find('.student-url').append('<a href="' + item.url + '" target=blank_>Website<p>');

                //       Insert Project info
                project.find('.project-name').text(item.project.title);
                project.find('.project-description').append("<p>" + item.project.description + "<p>");

                project.find(checkForVid());
                
                }

                function checkForVid() {
                        var video = item.project.embedvideo

                        if (video.includes("youtube")) {
                            project.find('.project-description').append('<iframe class="embedded-video" src="' + video.replace("watch?v=", "embed/") + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
                            project.find('.project-description').append(pullAbstract());
                        } else if (video.includes("vimeo")) {
                        var forVimeo = video.replace('vimeo.com', 'player.vimeo.com/video');
            
                            project.find('.project-description').append('<iframe class="embedded-video" src="' + forVimeo + '" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>');
                            
                            project.find('.project-description').append(pullAbstract());
                        } else {

                            project.find('.project-description').append('<img src="projects/' + index + '/coverimage.png" alt="">');
                            project.find('.project-description').append(pullAbstract());
                        }
                    };
                
                function pullAbstract() {
                    var str = (item.project.abstract);
                    for (var i = 0; i < str.length; i++) {
                        if (str[i] === "\r\n")
                            indices.push(i);
                        nstr = ("<p>" + str.replace("\r\n", "</br>" + "</p>"));
                        return nstr
                    };
                }
            });
        }
    };