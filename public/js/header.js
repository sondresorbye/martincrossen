var dropDown = false;

document.getElementById('menuBtn').onclick = function() {
    if (dropDown) {
    	document.getElementById('dropDown').style.marginTop = "-328px";
    	dropDown = false;
    } else {
        document.getElementById('dropDown').style.marginTop = "0px";
        dropDown = true;
    }
};