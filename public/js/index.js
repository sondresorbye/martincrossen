const database = firebase.database();
const c = getParameterByName('c');


if (c == null) {
    const ref = database.ref("innlegg");
    ref.on('child_added', update);
} else if (c === "nyheter" || c === "meninger" || c === "videoer" || c === "informasjon") {
    document.getElementById('carouselContainer').style.display = "none";
    document.getElementById('hr').style.display = "none";
    const ref = database.ref("innlegg").orderByChild('kategori').equalTo(c);
    ref.on('child_added', update);
} else {
    alert("Hva er det du tror du gjør? Den kategorien finnes ikke.")
}


function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}