$(document).ready(function() {

    // Cache selectors for faster performance.
    var $window = $(window),
        $icon = $('#icon'),
        $mainMenuBarAnchor = $('#mainMenuBarAnchor');

    // Run this on scroll events.
    $window.scroll(function() {
        var window_top = $window.scrollTop();
        var div_top = $mainMenuBarAnchor.offset().top;
        if (window_top > div_top) {
            // Make the div sticky.
            $icon.addClass('stick');
            $mainMenuBarAnchor.height($icon.height());
        }
        else {
            // Unstick the div.
            $icon.removeClass('stick');
            $mainMenuBarAnchor.height(0);
        }
    });
});