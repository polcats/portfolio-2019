var mybutton = document.getElementById('to-top');

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = 'block';
    } else {
        mybutton.style.display = 'none';
    }
}

var subtitles = [
    'A Research and Development Engineer',
    'Sometimes a computer repairman.',
    'Almost the typical programmer.',
    'Technically a cat person..',
    'Loves to read.',
    "Last name's a language!",
    'Creative.',
    'Out of mana!',
    'Bleep blop..'
];

var iter = 0;
setInterval(function() {
    document.getElementsByClassName('profession')[0].innerHTML = subtitles[iter];
    ++iter;
    iter %= subtitles.length;
}, 2000);
