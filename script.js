const piano = document.querySelector('.piano');
const pianoKeys = document.querySelectorAll('.piano-key'); 

piano.addEventListener('click', function(e){
    const dataNote = e.target.dataset.note;
    const src = `assets/audio/${dataNote}.mp3`;
    playAudio(src);
});

piano.addEventListener('mousedown', function(e){
    if(e.target.classList.contains('piano-key')) {
        e.target.classList.add('piano-key-active');
    }
});

piano.addEventListener('mouseup', function(e){
    if(e.target.classList.contains('piano-key')) {
        e.target.classList.remove('piano-key-active');
    }
});

window.addEventListener('keydown', function(e){
    const key = document.querySelector(`.piano-key[data-key="${e.keyCode}"]`);
    if(!key) return;
    const keyDataNote = key.dataset.note;
    const srcKey = `assets/audio/${keyDataNote}.mp3`;
    if(e.repeat) return;
    playAudio(srcKey);
    key.classList.add('piano-key-active');
});

window.addEventListener('keyup', function(e){
    const key = document.querySelector(`.piano-key[data-key="${e.keyCode}"]`);
    key.classList.remove('piano-key-active');
});

function playAudio(src) {
    const audio = new Audio();
    audio.src = src;
    audio.currentTime = 0;
    audio.play();       
}

const buttonNotesLetters = document.querySelector('.btn-container');
buttonNotesLetters.addEventListener('click', function(e){
    const buttonNotes = buttonNotesLetters.querySelector('.btn-notes');
    const buttonLetters = buttonNotesLetters.querySelector('.btn-letters');
    if(buttonNotes.classList.contains('btn-active') && e.target == buttonLetters){
        buttonNotes.classList.remove('btn-active');
        e.target.classList.toggle('btn-active');
        pianoKeys.forEach(element => {
        element.classList.toggle('piano-key-letter');
        });
    }else if(buttonLetters.classList.contains('btn-active') && e.target == buttonNotes){
        buttonLetters.classList.remove('btn-active');
        e.target.classList.toggle('btn-active');
        pianoKeys.forEach(element => {
        element.classList.toggle('piano-key-letter');
        });
    }
});  