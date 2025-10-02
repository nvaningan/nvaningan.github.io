$(function() {

    let $loginPanel = $('#loginForm_wrap');
    let $loginButton = $('#loginHook');

    $('.wrapper').css({
        position: 'relative'
    });

    $loginPanel.css({
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 10
    });

    // Reposition login button to be on the side of div.wrapper
    $loginButton.css({
        transform: 'rotate(90deg)',
        top: 28,
        left: -59,
        zIndex: 8
    });

    // Initial state of div#loginForm_wrap should be closed
    $loginPanel.hide();

    // Set up a click event handler on our login button and toggle the sliding open/closed of our div#loginForm_wrap
    // div based on its current state
    $loginButton.on('click', function(e) {

        // console.log('clicked');

        // Toggle the login form panel open/closed based on its current state
        $loginPanel.stop(true, true).slideToggle(800, 'easeOutBounce');

        e.preventDefault();

    });

});