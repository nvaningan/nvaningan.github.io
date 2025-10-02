//$(document).ready(function() {});
//
// Use a shortcut for the above call
$(function() {

    // console.log('Hello from fadePic');

    // Create and store a JQuery object whose matched element nodelist contains img#pic
    let $soldierPic = $('#pic');

    // Fade the image to 15% opacity over 3 seconds initially
    $soldierPic.fadeTo(3000, .15, 'easeOutBounce');

    // On hover, fade the image to full opacity using the "slow" keyword for the duration
    //
    // On hover off, fade the image to 15% using "normal" keyword for the duration
    //
    $soldierPic.on('mouseenter', function() {
        // on hover over
        $soldierPic.stop().fadeTo('slow', 1);
    }).on('mouseleave', function() {
        $soldierPic.stop().fadeTo('normal', .15);
    });

});