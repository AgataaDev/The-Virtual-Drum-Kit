import drumSet from './model/drumSet.json' assert {type: 'json'};
import sheet from './style.css' assert {type:'css'};
document.adoptedStyleSheets = [sheet];

const app = document.getElementById('app');
const title = document.createElement('div');
title.classList.add('title');
title.innerText='Beat! - The Virtual Drum Kit Experience';
app.appendChild(title);

const musicBox = document.createElement('div');
musicBox.classList.add('musicbox');
app.appendChild(musicBox)
const main = document.createElement('div');
main.classList.add('main');
const text = document.createElement('p');
text.innerText =
  'Bringing the power of a full drum set to your fingertips, anytime, anywhere!';
musicBox.appendChild(main);
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

// let btn = app.getElementsByClassName('each_button');
// btn.style.boxShadow = "0 0.5em 0.5em -0.4em";
// btn.style.transform="translateY(-0.25em)";