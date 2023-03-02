let bigImg = document.querySelector('.bigImg img');
let smallImg = document.querySelectorAll('.smallImg img');

smallImg.forEach(img => {
    img.addEventListener('click', () => {
        bigImg.setAttribute('src', img.getAttribute('src'));
        bigImg.parentElement.children[1].innerHTML = img.parentElement.children[1].innerHTML;
        playOn(img.getAttribute('data-audio'));
    });
});


// Play audio
let playOn = (audio) => new Audio("audio/" + audio).play();
