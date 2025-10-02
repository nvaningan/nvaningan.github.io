$(function() {

    // Rotate the <h3> and <p> text to fit angle of the torn paper
    $('.tabDesc h3, .tabDesc p').css({
        transform: 'rotate(3.5deg)'
    })

    // On hover, change the associated text (<h3> and <p>) and the polaroid image to correspond to the hovered
    // over navigational link
    $('.nav a').on('mouseenter', function() {

        // hover over
        // 1. Hide the currently showing text and polaroid image
        //$('.tabDesc:visible').css('display', 'none');
        $('.tabDesc:visible').hide();

        // 2. Show the text and polaroid image that correspond to the hovered over link
        // console.log(this.id);
        $(`#${this.id}Tab`).stop(true, true).fadeIn(1000);

    }).on('mouseleave', function() {

        // hover off
        // 1. Hide the currently shown text and polaroid image
        $('.tabDesc:visible').hide();

        // 2. Show the text and polaroid image for the default tab
        $(`#defaultTab`).stop(true, true).fadeIn(5000);

    });

});