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
    'Sometimes a computer repairperson..',
    'Almost the typical programmer.',
    'Technically a cat person..',
    'I love reading.',
    'My last name is a language!',
    'I am creative.',
    'Out of mana!',
    'Bleep blop..'
];

var iter = 0;
setInterval(function() {
    console.log(iter);
    document.getElementsByClassName('profession')[0].innerHTML = subtitles[iter];
    ++iter;
    iter %= subtitles.length;
}, 2000);
