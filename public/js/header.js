var dropDown = false;

document.getElementById('menuBtn').onclick = function() {
    if (dropDown) {
        document.getElementById('dropDown').style.marginTop = "-398px";
        dropDown = false;
    } else {
        document.getElementById('dropDown').style.marginTop = "0px";
        dropDown = true;
    }
};

var scroll_pos = 0;
var scroll_time;

$(window).scroll(function() {
    clearTimeout(scroll_time);
    var current_scroll = $(window).scrollTop();

    if (current_scroll >= $('#header').outerHeight()) {
        if (current_scroll <= scroll_pos) {
            $('#header').removeClass('hidden');    
        }
        else {
            $('#header').addClass('hidden');  
        }
    }

    scroll_time = setTimeout(function() {
        scroll_pos = $(window).scrollTop();
    }, 100);
});