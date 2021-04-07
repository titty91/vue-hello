//GOAL: stampare a schermo il contenuto di una variabile dentro un h1
//BONUS: utilizzare un data come nome del file immagine in un tag img
//console.log('maledetto');

var divApp = new Vue({
  el:'#app',
  data:{
    'saluto': 'maledetto Js',
    'img1': 'cake.png',
    'img2': 'cabin.png',
    'activeImg': 'cake.png'
  },
  methods:{
    // ver 1
    // 'clicca': function(){
    //   this.saluto = 'Hola';
    // }
    // ver 2
    clicca(){
      this.saluto = 'holaaaaaa';
    },
    clickImg(){
      if(this.activeImg==this.img1){
        this.activeImg = this.img2;
      }else{
        this.activeImg = this.img1;
      }
      // this.img1 = this.img2;
    }
  }
})
