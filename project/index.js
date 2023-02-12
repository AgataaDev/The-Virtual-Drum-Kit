import data from './data.json' assert {type: 'json'};

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

data.forEach((title) => {
  const button = document.createElement('div');
  button.classList.add('each_button');
  button.setAttribute('id', title.title);
  button.innerText = `${title.letter} ${title.title}`;
  main.appendChild(button);
  });

function clap() {
     const clap = new Audio('./resources/clap.wav');
     clap.play();
 };

function hihat() {
    const hihat = new Audio('./resources/hihat.wav');
    hihat.play();
};

function kick() {
    const kick = new Audio('./resources/kick.wav');
    kick.play();
};

function openhat() {
    const openhat = new Audio('./resources/openhat.wav');
    openhat.play();
};

function boom() {
    const boom = new Audio('./resources/boom.wav');
    boom.play();
};

function ride() {
    const ride = new Audio('./resources/ride.wav');
    ride.play();
};

function snare() {
    const snare = new Audio('./resources/snare.wav');
    snare.play();
};

function tom() {
    const tom = new Audio('./resources/tom.wav');
    tom.play();
};

function tink() {
    const tink = new Audio('./resources/tink.wav');
    tink.play();
};

const clapBtn = document.getElementById('clap');
clapBtn.addEventListener('click', clap);

const hihatBtn = document.getElementById('hihat');
hihatBtn.addEventListener('click', hihat);

const kickBtn = document.getElementById('kick');
kickBtn.addEventListener('click', kick);

const openhatBtn = document.getElementById('openhat');
openhatBtn.addEventListener('click', openhat);

const boomBtn = document.getElementById('boom');
boomBtn.addEventListener('click', boom);

const rideBtn = document.getElementById('ride');
rideBtn.addEventListener('click', ride);

const snareBtn = document.getElementById('snare');
snareBtn.addEventListener('click', snare);

const tomBtn = document.getElementById('tom');
tomBtn.addEventListener('click', tom);

const tinkBtn = document.getElementById('tink');
tinkBtn.addEventListener('click', tink);


document.addEventListener('keyup',e => {
    switch (e.key) {
    case 'w':{
        return clap();
    }
    case 's':{
        return hihat();
    }
    case 'd':{
        return kick();
    }
    case 'f':{
        return openhat();
    }
    case 'g':{
        return boom();
    }
    case 'h':{
        return ride();
    }
    case 'j':{
        return snare();
    }
    case 'k':{
        return tom();
    }
    case 'l':{
        return tink();
    }
    default: {
        throw new Error(`Letter "${e}" is not supported`);
    }
}});
