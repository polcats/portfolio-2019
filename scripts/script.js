var mybutton = document.getElementById("to-top");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

var subtitles = [
    "Sometimes a computer repairman.",
    "Almost the typical programmer.",
    "Technically a cat person..",
    "Loves to read.",
    "Last name's a language!",
    "Creative.",
    "Research and Development Engineer"
];

var iter = 0;
setInterval(function() {
    var subtitle = document.createElement("h1");
    subtitle.setAttribute("class", "subtitle profession fade-in");
    subtitle.innerHTML = subtitles[iter];
    document.getElementsByClassName("profession")[0].replaceWith(subtitle);
    ++iter;
    iter %= subtitles.length;
}, 2000);

function goTo(location) {
    window.location.href = location;
}
