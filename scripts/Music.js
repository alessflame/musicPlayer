let songs=[
     {
          id:0,
          title:"Hey",
          author:"Benjamin Tissot",
          folder:"./audio/bensound-hey.mp3",
          image:"./image/back/inspire-g8930cad16_640.jpg"
     },
     {
          id:1,
          title:"Punky",
          author:"Benjamin Tissot",
          folder:"./audio/bensound-punky.mp3",
          image:"./image/back/fantasy-g7f1bc1d04_640.jpg"
     },
     {
          id:2,
          title:"Dubstep",
          author:"Benjamin Tissot",
          folder:"./audio/bensound-dubstep.mp3",
          image:"./image/back/lion-g03de650a9_640.jpg"
     },
     {
          id:3,
          title:"Happy Rock",
          author:"Benjamin Tissot",
          folder:"./audio/bensound-happyrock.mp3",
          image:"./image/back/moon-g7093cdde7_640.jpg"
     },
     {
          id:4,
          title:"Energy",
          author:"Benjamin Tissot",
          folder:"./audio/bensound-energy.mp3",
          image:"./image/back/woman-gc0913d22d_640.jpg"
     }

];


 class Music{
     constructor(array) {
          this.array= array;
          this.song = (i)=>{return this.getAllinfo(i);}
     }

     getAllinfo(i){

          let song={};
          for (const key in this.array[i]) {
               song[key]= this.array[i][key];
               }
          return song;
          }
     

     getInfo(i, element){
          return this.array[i][element];
     } 



     getListHTML(){

         let list =" ";

          this.array.forEach((element) => {
              list += `<button type="button" key=${element.id} class="list-group-item
               list-group-item-action ${element.id==0?  'active': ' '} "aria-current="true"
                imageFolder="${element.image}">
              ${element.title} - ${element.author}
            </button>`;
          })
          return list;
     }


     
}