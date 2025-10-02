$(function() {

    // Reposition the logo image so it is half on, half off the left edge of the page using jQuery's css() method
    // passing it an object literal where we can set multiple CSS attributes at the same time on the selected tag(s).
    //
    // Then we'll use jQuery's animate() method to change CSS attribute values over time to make the logo image fly in
    // (move) toward its destination fading it in as it moves
    let $logoPic = $('#logo1870');

    $logoPic.css({
        opacity: .5,
        position: 'relative',
        left: '-30%',
        zIndex: 100
    }).animate({
        opacity: 1,
        left: '55%'
    }, 2500, 'easeOutElastic', function() {

        // This type of function is commonly referred to as a callback function AND will not be called until the animate()'s
        // animation is finished => sequencing
        //
        // console.log("logo1870's animate() is complete");
        //
        // Note: the 'this' keyword, when used in the context of a callback function in jQuery is the matched element
        // (img#logo1870) of the jQuery object the animate() was run on
        //
        $(this).fadeTo(2000, .5)
            .rotate({
                duration: 2000,
                angle: 0,
                center: [0, 0],
                animateTo: 720
            });

    })
    .rotate({
        duration: 2500,
        angle: 0,
        center: [50, 50],
        animateTo: -360
    });
});