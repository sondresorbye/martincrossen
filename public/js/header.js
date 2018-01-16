var dropDown = false;

document.getElementById('menuBtn').onclick = function(event) {
    if (dropDown) {
        document.getElementById('dropDown').style.marginTop = "-398px";
        enableScroll();
        dropDown = false;
    } else {
        document.getElementById('dropDown').style.marginTop = "0px";
        disableScroll();
        dropDown = true;
    }
    event.stopPropagation();
};

// når du klikker utenfor menyen -> lukk
$(window).click(function() {
    if (dropDown) {
        menuBtn.onclick();
    }
});

$('#dropDown').click(function(event) {
    event.stopPropagation();
});


var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
    if (window.addEventListener) // older FF
        window.addEventListener('DOMMouseScroll', preventDefault, false);
    window.onwheel = preventDefault; // modern standard
    window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
    window.ontouchmove = preventDefault; // mobile
    document.onkeydown = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
}


// remove header onscroll
var scroll_pos = 0;
var scroll_time;

$(window).scroll(function() {
    clearTimeout(scroll_time);
    var current_scroll = $(window).scrollTop();
    if (current_scroll < 70) {
        $('#header').removeClass('hidden');
    } else {
        if (current_scroll >= $('#header').outerHeight()) {
            if (current_scroll <= scroll_pos) {
                $('#header').removeClass('hidden');
            } else {
                $('#header').addClass('hidden');
            }
        }
    }

    scroll_time = setTimeout(function() {
        scroll_pos = $(window).scrollTop();
    }, 75);
});