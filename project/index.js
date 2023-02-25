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
  button.setAttribute('letter',sound.letter);
  button.innerText = `${sound.letter}\n${sound.title}`;
  button.addEventListener('click',playMusicOnClick);
  main.appendChild(button);
  
  });

const history = document.createElement('div');
history.classList.add('history');
history.innerText="You recently clicked:";
app.appendChild(history);

function playMusicOnClick(e){
  console.log(e);
    saveInHistory(e.target.getAttribute('letter'));
    const sound = new Audio(e.target.getAttribute('musicPath'));
    sound.play();
 };

 
document.addEventListener('keydown',addCLassEffect);
document.addEventListener('keyup',playMusicBasedOnKey);

function playMusicBasedOnKey(e){
  drumSet.forEach(drumPiece => {
        if (drumPiece.letter === e.key){
          saveInHistory(e.key); 
          document.getElementById(drumPiece.title).classList.remove('activateOnKey'); 
          playMusicFrom(drumPiece.musicPath);
    }   
})
}

function addCLassEffect(e) {
      drumSet.forEach(drumPiece => {
            if (drumPiece.letter === e.key){
                document.getElementById(drumPiece.title).classList.add('activateOnKey');            
        }   
    })
}

function playMusicFrom(musicPath){
  const sound = new Audio(musicPath);
  sound.play();
}
function saveInHistory(letter) {
  history.innerText+=` ${letter},`;
}