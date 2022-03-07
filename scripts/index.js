
     





let audio= document.getElementById("audio");

let controller= new Player(audio, songs);

let songsList= document.getElementById("songs-list");

songsList.innerHTML= controller.song.getListHTML(); //riceve la lista chiamando il controller



let selected= document.querySelectorAll("#songs-list > .active");

 
 let boxPlayer= document.getElementById("player");
 let playerInfo = document.querySelector("#player > #info");
 
 playerInfo.innerHTML= controller.updateInfo(0); // le prime informazioni che ricevo sono quelle della prima canzone in lista



let playButton= document.getElementById("music");

function playerChange(key){  //cambiare le info del player
     playerInfo.innerHTML= controller.updateInfo(key);
     boxPlayer.style.backgroundImage=`url(${controller.current.image})`;
    
}






function chanceActiveList(element){  //funzione per cambiare la selezione grafica ".active" nella lista
     let select= document.querySelector("#songs-list > .active");
     select.classList.remove("active");
     element.classList.toggle("active");

}



songsList.onclick=function (e){ //funzione per gestire la lista -> cliccando una canzone viene fatta partire
    let element= e.target;

    chanceActiveList(element);


    
    let key= element.getAttribute("key");
    let info= controller.setAllInfo(key);

//     console.log(info.image);
//     console.log(boxPlayer);

  playerChange(key);

  playButton.innerHTML= controller.theButtonPause();
      
}




playButton.onclick=(e)=>{  //bottone play - parte la musica/stoppa la musica
     if(controller.count==0){
     controller.play();

     
     
     }else{
     controller.pause();
     
     }
playButton.innerHTML= controller.theButtonPause();
};






let nextButton = document.getElementById("next"); //bottone per cambiare canzone -> avanti nella lista 

nextButton.onclick=()=>{

     controller.changeNext(controller.current.id);
     playerChange(controller.current.id);

     playButton.innerHTML= controller.theButtonPause();

     let lists= document.querySelectorAll("#songs-list > .list-group-item-action");
     let active =document.querySelector("#songs-list > .active");
     let key= Number(active.getAttribute("key")) + 1;
     
     
 
     key >= controller.song.array.length ? key= 0 : null;
     chanceActiveList(lists[key]);
 
}




let beforeButton = document.getElementById("before");   //bottone per cambiare canzone -> indietro nella lista 

beforeButton.onclick=()=>{  

    controller.changeBefore(controller.current.id);
    playerChange(controller.current.id);

    playButton.innerHTML= controller.theButtonPause();
    
    
    let lists= document.querySelectorAll("#songs-list > .list-group-item-action");
    let active =document.querySelector("#songs-list > .active");
    let key= Number(active.getAttribute("key") - 1);


    

     key<0 ? key= controller.song.array.length - 1 : null;
    chanceActiveList(lists[key]);




     
     // console.log(key);


}




let plusButton =document.getElementById("plus");   //bottone volume +

plusButton.onclick=()=>{

     controller.plus();

}




let minuButton =document.getElementById("minus"); //bottone volume -

minuButton.onclick=()=>{


    

     controller.minus();




}
