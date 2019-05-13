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
            videoArray = ['.mp4', '.mov'];
            imageArray = ['.jpg', '.jpeg', '.png', '.gif'];

            if (item.id == index) {
                // Insert student info
                bio.find('.student-image').append('<img class="student-image" src="portraits/' + item.id + '.jpg" alt="' + item.flname +'">');
                bio.find('.student-name').text(item.flname);
                bio.find('.student-title').text(item.profTitle);
                bio.find('.student-intro').text(item.bio);
                bio.find('.student-url').append('<a href="' + item.url + '" target=blank_>Website<p>');
                // bio.find('.student-image').attr('src','portraits/' + item.id + '.jpg" alt="' + item.flname +'">');
                // Insert Project info
                project.find('.project-name').text(item.project.title);
                project.find('.project-description').append("<p>" + item.project.description + "<p>");
                project.find(checkForVid());
            }

            // Run check if there's a video to embed
            function checkForVid() {
                var video = item.project.embedvideo

                if (video.includes("youtube")) {
                    project.find('.project-description').append('<iframe class="embedded-video" src="' + video.replace("watch?v=", "embed/") + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
                    project.find('.project-description').append(pullAbstract());
                    pullSecondContent(1);

                } else if (video.includes("vimeo")) {
                    var forVimeo = video.replace('vimeo.com', 'player.vimeo.com/video');
                    project.find('.project-description').append('<iframe class="embedded-video" src="' + forVimeo + '" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>');
                    project.find('.project-description').append(pullAbstract());
                    pullSecondContent(1);
                } else {
                    var categories = item.project.projMeta.split(',');
                    //                     var categories = ('<li class="list-down">' + item.project.projMeta.replace(', ', '</li>')
                    //                  node.appendChild(item.project.projMeta);  
                    project.find('.project-description').append(mainAssetLoader());
                    categories.forEach(function(element) {
                        project.find('.project-category-list').append('<li class="list-down">' + element + '</li>')
                    });
                    //                     
                }
            };

            // START - MAIN ASSET LOADER
            function mainAssetLoader() {
                var queryVid = 3
                var counter = []
                var assetCounter = 1
                var imgURL = ('projects/' + index + '/' + index + '-image1');
                var vidURL = ('projects/' + index + '/' + index + '-movie1');

                // Check if there's a video
                videoArray.forEach(function(element) {
                    var vidTestURL = (vidURL + element);
                    $.get(vidTestURL, data, function() {
                            console.log("second success");
                            counter.push(1);
                            redirect();
                        })
                        .done(function() {
                            var mainVid = ('<video class="main-page-video" controls> <source src="' + vidTestURL + '"></video>')
                            project.find('.project-description').append(mainVid);
                            project.find('.project-description').append(pullAbstract());
                        }).fail(function() {
                            counter.push(0, 0);
                            redirect();
                        });

                });

                function redirect() {
                    // console.log(counter);
                    if (counter.length === 3 && counter.includes(1)) {
                        console.log("queryVid true")
                        const trueVideo = assetCounter
                        pullSecondContent(trueVideo)
                    } else if (counter.length === 4) {
                        console.log("queryVid false")
                        pullMainImage()
                    }
                }


                function pullMainImage() {
                    imageArray.forEach(function(element) {
                        var imgTestURL = (imgURL + element);
                        console.log(element)
                        $.get(imgTestURL)
                            .done(function() {
                                //                         console.log("Image exists")
                                // console.log(imgTestURL)
                                var mainImg = ('<img src="' + imgTestURL + '"/>')
                                project.find('.project-description').append(mainImg);
                                project.find('.project-description').append(pullAbstract());
                                value = true
                                    //                                 console.log(value)
                            }).fail(function() {
                                null
                            })
                        if (element == '.gif') {
                            falseVideo = assetCounter - 1
                            pullSecondContent(falseVideo)
                        }
                    });
                }
            }
            // END - MAIN ASSET LOADER



            // START - SECOND ASSET LOADER
            function pullSecondContent(asset) {
                console.log("second content ready");
                console.log("Page Main Image is video: " + asset)

                if (asset === 1) {
                    console.log("Get Second Video or First Image")
                    secondVidFirstImageLoader()
                } else if (asset === 0) {
                    console.log("Get Second Image")
                    secondImageLoader()
                }

                function secondVidFirstImageLoader() {
                    var videoNumber = 2
                    var imageNumber = 1
                    var indexCounter = []

                    for (videoNumber; videoNumber < 6; videoNumber++) {
                        // console.log(videoNumber);
                        var assetIndex = 6;
                        var vidURL = ('projects/' + index + '/' + index + '-movie' + videoNumber)
                        if (assetIndex > 1) {
                            // Check if there's a video
                            videoArray.forEach(function(element) {
                                var vidTestURL = (vidURL + element);
                                $.get(vidTestURL, data, function() {
                                        // console.log("Puling second videos");
                                        // counter.push(1);
                                        // redirect();
                                    })
                                    .done(function() {
                                        console.log(assetIndex);
                                        var vidTag = ('<video class="page-secondary-video" controls> <source src="' + vidTestURL + '"></video>')
                                        project.find('.project-description').append(vidTag);
                                        // project.find('.project-description').append(pullAbstract());
                                    }).fail(function() {
                                        // console.log("fail");
                                        // counter.push(0, 0);
                                        // redirect();
                                    });

                            });
                            assetIndex--
                            indexCounter.push(0);
                            console.log(assetIndex);
                        }
                        if (indexCounter.length === 4) {
                            loadMoreImgs()
                                // console.log("Load secondary Images");
                        }
                    }

                    function loadMoreImgs() {
                        console.log("Load secondary Images");


                        for (imageNumber; imageNumber < 6; imageNumber++) {
                            var imgURL = ('projects/' + index + '/' + index + '-image' + imageNumber)
                            imageArray.forEach(function(element) {
                                var imgTestURL = (imgURL + element);
                                $.get(imgTestURL, data)
                                    .done(function() {
                                        // console.log(assetIndex);
                                        var imgTag = ('<img class="page-secondary-image" src="' + imgTestURL + '"/>')
                                        project.find('.project-description').append(imgTag);
                                        // project.find('.project-description').append(vidTag);
                                        // project.find('.project-description').append(pullAbstract());
                                    }).fail(function() {
                                        // console.log("fail");
                                        // counter.push(0, 0);
                                        // redirect();
                                    });

                            });
                        }
                    }
                }

                function secondImageLoader() {
                    var imageNumber = 2
                    console.log(imageNumber);
                    for (imageNumber; imageNumber < 6; imageNumber++) {
                        var imgURL = ('projects/' + index + '/' + index + '-image' + imageNumber)
                        imageArray.forEach(function(element) {
                            var imgTestURL = (imgURL + element);
                            $.get(imgTestURL, data)
                                .done(function() {
                                    // console.log(assetIndex);
                                    var imgTag = ('<img class="page-secondary-image" src="' + imgTestURL + '"/>')
                                    project.find('.project-description').append(imgTag);
                                    // project.find('.project-description').append(vidTag);
                                    // project.find('.project-description').append(pullAbstract());
                                }).fail(function() {
                                    // console.log("fail");
                                    // counter.push(0, 0);
                                    // redirect();
                                });

                        });
                    }


                }




            }
            // END - SECOND ASSET LOADER


            // run pull and format the abstract.                
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