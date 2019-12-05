var dropDown = false;

document.getElementById('menuBtn').onclick = function(event) {
    if (dropDown) {
        document.getElementById('dropDown').style.visibility = "hidden";
        document.getElementById('dropDown').style.marginTop = "-322px";
        dropDown = false;
    } else {
        document.getElementById('dropDown').style.visibility = "visible";
        document.getElementById('dropDown').style.marginTop = "0px";
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
                if (dropDown) {
                    menuBtn.onclick();
                }
            }
        }
    }

    scroll_time = setTimeout(function() {
        scroll_pos = $(window).scrollTop();
    }, 100);
});