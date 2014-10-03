$(document).ready(function() {
    $('.learn-more').magnificPopup({ type: 'inline' });

    var ch = new HydnaChannel('strange.hydna.net', 'r');
    var last = false;
    ch.onmessage = function(e) {
        if (e.data == 'online') {
            $('.remote-slide').hide();
            $('.slide-2').css('left', '-100%').show().animate({ left: 0 });
        } else {
            if (!last) {
                last = true;
                $('.remote-slide').hide();
                $('.slide-3').css('left', '-100%').show().animate({ left: 0 });
            } else {
                $('.slide-3').effect('shake', {
                    distance: 40,
                    times: 4
                });
            }
        }
    };
});
