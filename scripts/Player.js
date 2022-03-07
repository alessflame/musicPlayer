
 class Player{
     constructor(audio,array){
          this.audio= audio;
          this.song= new Music(array);
          this.current= this.song.getAllinfo(0);
          this.count=0;
          
          ()=>{ this.audio.setAttribute("src", this.song.getInfo(0,"folder"));}
     }



     setAllInfo(i){
          
         
         let song=  this.song.getAllinfo(i);
         this.audio.setAttribute("src", this.song.getInfo(i,"folder"));
            
         try {
              this.play();
         } catch (error) {
              console.log(error);
         }
         
         this.current=song;
         return song;
         
         
     }

     play(){
         
          
         this.audio.play(); 

         this.count=1;


    }
         
     pause(){
           this.audio.pause();   
           this.count=0;
     }

     changeBefore(i){
         let id = i - 1;
         if(id< 0){id=4}

         let src= this.song.getInfo(id,"folder");
         this.audio.setAttribute("src", src);

         this.setAllInfo(id);

     }

     changeNext(i){
        let id= Number(i) + 1 ;
       console.log(controller.song.array.length);


        if(id >= controller.song.array.length){
             id=0;
         }

         let src= this.song.getInfo(id,"folder");
         this.audio.setAttribute("src", src);
         
         this.setAllInfo(id);

     }

     updateInfo(i){
          

    let update=`<h5 class="card-title text-white">${this.song.getInfo(i,"title")}</h5>
              <p class="card-text text-white-50">${this.song.getInfo(i,"author")}</p>`;

         return update;
          }


    plus(){
         
         this.audio.volume += 0.2;

    }

    minus(){
         this.audio.volume -= 0.2;
    }





    theButtonPause(){
         if(this.count==1){
         
         return `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" class="bi bi-pause-circle-fill" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5z"/>
          </svg>`;
         
          } else{
        return ` <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
         <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
       </svg>`


          }
          

    }

         
     }