import data from "./model/data.json" assert {type: 'json'};

export default class MusicService {

   MusicService(params){
      this.params = params;
   }

   setupMusic(){
      data.forEach((sound) => {
         const button = document.createElement('div');
         button.classList.add('each_button');
         button.setAttribute('id', sound.title);
         button.setAttribute('musicPath',sound.musicPath);
         button.innerText = `${sound.letter} ${sound.title}`;
         button.addEventListener('click',this.playMusic);
           main.appendChild(button);
         
         });
   
   }
    playMusic(e){
        const sound = new Audio(e.target.getAttribute('musicPath'));
        sound.play();
     };

}

