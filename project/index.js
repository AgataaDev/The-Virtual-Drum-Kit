import drumSet from './model/drumSet.json' assert {type: 'json'};
import sheet from './style.css' assert {type:'css'};
document.adoptedStyleSheets = [sheet];

const app = document.getElementById('app');
const title = document.createElement('div');
title.classList.add('title');
title.innerText='Beat! - The Virtual Drum Kit Experience';
app.appendChild(title);

const main = document.createElement('div');
main.classList.add('main');
const text = document.createElement('p');
text.innerText =
  'Bringing the power of a full drum set to your fingertips, anytime, anywhere!';
app.appendChild(main);
main.appendChild(text);

drumSet.forEach((sound) => {
  const button = document.createElement('div');
  button.classList.add('each_button');
  button.setAttribute('id', sound.title);
  button.setAttribute('musicPath',sound.musicPath);
  button.innerText = `${sound.letter}\n${sound.title}`;
  button.addEventListener('click',playMusicOnClick);
main.appendChild(button);
  
  });

function playMusicOnClick(e){
    const sound = new Audio(e.target.getAttribute('musicPath'));
    sound.play();
 };

 function playMusicOnKey(musicPath){
    const sound = new Audio(musicPath);
    sound.play();
 }


document.addEventListener('keyup',playToneFromKey);


function playToneFromKey(e) {
    drumSet.forEach(drumPiece => {
            if (drumPiece.letter === e.key){
            playMusicOnKey(drumPiece.musicPath);
        }   
    })
}
    // switch (e.key) {
    //     case 'w': {
    //         return clap();
    //     }
    //     case 's': {
    //         return hihat();
    //     }
    //     case 'd': {
    //         return kick();
    //     }
    //     case 'f': {
    //         return openhat();
    //     }
    //     case 'g': {
    //         return boom();
    //     }
    //     case 'h': {
    //         return ride();
    //     }
    //     case 'j': {
    //         return snare();
    //     }
    //     case 'k': {
    //         return tom();
    //     }
    //     case 'l': {
    //         return tink();
    //     }
    //     default: {
    //         throw new Error(`Letter "${e}" is not supported`);
    //     }
    // }

