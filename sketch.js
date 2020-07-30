// Video Explicativo 
//https://www.youtube.com/watch?v=VmXQbcONAAM&feature=youtu.be
// Bolas brancas (animais terrestres)
//Bolas coloridas (animais aquaticos)
//Bola branca no canto esquerdo (Terra)
//Bola preta no canto direito (Agua)


var xTerra,yTerra,roTerra
var xAgua, yAgua,rAgua

var xLeao , yjLeao,rLeao
var xBaleia,yBaleia,rBaleia
var xZebra, yZebra,rZebra
var xTubarao,yTubarao,rTubarao
var xElefante, yElefante,rElefante
var xPolvo,yPolvo,rPolvo  

var xMacaco, yMacaco,rMacaco
var xPeixe,yPeixe,rPeixe
var xCavalo, yCavalo,rCavalo
var xGolfinho,yGolfinho,rGolfinho
var nivel =1
var pontos =0
var barreiraDePontos=500
var contador =1
var x,y
x=190
y=90
var opcao=1
var tela =0
var xaquat,yaquat
t=-50
 let img2;
let img;
let img3
let diego
let alice
let elefante
let macaco
let peixe
let leao
let tubarao
let baleia
let polvo
let zebra
let perdeu
let Fundogame
function preload() {
  img = loadImage('Background.jpg');
   img2 = loadImage('Background3.png');
  img3 = loadImage('desert.jpg');
  diego =loadImage('Alice.jpeg');
  alice=loadImage('Diego.jpeg');
  
  leao = loadImage('Leao.png');
  
  baleia = loadImage('Baleia.png')
  zebra = loadImage('Zebra.png')
  tubarao=loadImage('Tubarao.png')
  elefante=loadImage('Elefante.png')
   polvo=loadImage('Polvo.png')
  macaco=loadImage('Macaco.png')
  peixe=loadImage('Peixe.png')
  perdeu=loadImage('Perdeu.jpg')
  Fundogame=loadImage('fundogame.jpg')
  
  
  
  
}
function setup() {
  createCanvas(600,600);
  
  xaquat=400
  yaquat=555
  
  xLeao=300
  yLeao=50
  rLeao=70
  
  xTerra=150
  yTerra=555
  rTerra=70
  wTerra=200
  
  xAgua=460
  yAgua=555
  rAgua=70
  wAgua=200
  
  xBaleia=300
  yBaleia=-100
  rBaleia=70
    
  
  xZebra=300 
  yZebra=-100
  rZebra=70
 
  xTubarao=300 
  yTubarao=-100
  rTubarao=70
  
  xElefante=300
  yElefante=-100
  rElefante=70
  
  xPolvo=300 
  yPolvo=-100
  rPolvo=70

    xMacaco=300
    yMacaco=-100  
    rMacaco=70
   
    xPeixe=300
    yPeixe=-100
    rPeixe=70
    
    xCavalo=300
    yCavalo=-100
    rCavalo-=70
    
    xGolfinho=300
    yGolfinho=-100
    rGolfinho=70

  
  
  
  
  
  
  
  
}


function draw() {
  
  image(img,0,0)
  if(tela==0)
 menu()
  if(tela==1)
    fase1()
  if(tela==2)
    fase2()

 if(tela==3)
    fase3()
 if(tela==4)
   GameOver()
  
}
 


function menu(){
  stroke(15)
  fill(240)
  rect(x,y,250,55);
 
  textSize(35);
 fill(15)
  noStroke()
  text('Animais e seus Habitats' , 125, 30);
  text('JOGAR' , 250, 130);
  text('INSTRUÇOES' , 200, 230);
  text('CREDITOS' , 230, 330); 
}

function fase1(){

  image(Fundogame,0,0,600,600)
  
  
  textSize(24)
  fill(250)
  text('Nivel:'+nivel,450,50)
  text('Pontos:'+pontos,450,70)
  pontos=pontos+1
  if(pontos>barreiraDePontos) {
    nivel=nivel+1
    barreiraDePontos=barreiraDePontos+500
    
  }
  
  
 
 

  
   

 image(leao,  xLeao,  yLeao, rLeao,rLeao )  
 text('LEAO' , xLeao, yLeao-10);
  if(yLeao>510){
     yLeao=510
    }
  
  if (yBaleia<0&&yZebra<0&&yTubarao<0&&yElefante<0&&yPolvo<0&&yMacaco<0&&yPeixe<0)
  yLeao=yLeao+contador
 

 
  if (yBaleia<0&&yZebra<0&&yTubarao<0&&yElefante<0&&yPolvo<0&&yMacaco<0&&yPeixe<0&&(keyIsDown(DOWN_ARROW))){
       yLeao= yLeao+contador
      }
  if (yBaleia<0&&yZebra<0&&yTubarao<0&&yElefante<0&&yPolvo<0&&yMacaco<0&&yPeixe<0&&(keyIsDown(RIGHT_ARROW))){
       if(xLeao>555){
   xLeao=555
}
    xLeao=xLeao+contador
      
  }
  if (yBaleia<0&&yZebra<0&&yTubarao<0&&yElefante<0&&yPolvo<0&&yMacaco<0&&yPeixe<0&&(keyIsDown(LEFT_ARROW))){
          if(xLeao<5){
   xLeao=5
}
    xLeao=xLeao-contador
      }
  if(dist( xTerra, yTerra, xLeao , yLeao)<  rTerra ){   
     
    xBaleia=300
    yBaleia=60
   xLeao=300
   yLeao=-100
  xTubarao=300
    yTubarao=-100
    yZebra=-100
    xZebra=300
    pontos=pontos+500
    contador=contador+0.2
   
  }
  if(dist( xAgua, yAgua, xLeao , yLeao)<  rAgua ){   
   tela=4
   
  }
  
  else{
   stroke(15) 
    fill(250)
    ellipse(xTerra,yTerra,wTerra,rTerra)   
   fill(0)
 text('TERRESTRE',xTerra-70,yTerra+5)
    
    
    
  }
  
  //baleia
  fill(250)
  text('BALEIA' , xBaleia, yBaleia-10);
  image(baleia, xBaleia , yBaleia,rBaleia,rBaleia) 
  if(yBaleia>510){
     yBaleia=510
    }
  if(yZebra<0&&yTubarao<0&&yLeao<0&&yElefante<0&&yPolvo<0&&yMacaco<0&&yPeixe<0){

 
    
    yBaleia=yBaleia+contador
 
  if (yZebra<0&&yTubarao<0&&yLeao<0&&yElefante<0&&yPolvo<0&&yMacaco<0&&yPeixe<0&&(keyIsDown(DOWN_ARROW))){
      yBaleia=yBaleia+contador
      }
  if (yZebra<0&&yTubarao<0&&yLeao<0&&yElefante<0&&yPolvo<0&&yMacaco<0&&yPeixe<0&&(keyIsDown(RIGHT_ARROW))){
          if(xBaleia>550){
   xBaleia=550
} 
    xBaleia=xBaleia+contador
      }
  if (yZebra<0&&yTubarao<0&&yLeao<0&&yElefante<0&&yPolvo<0&&yMacaco<0&&yPeixe<0&&(keyIsDown(LEFT_ARROW))){
         if(xBaleia<5){
   xBaleia=5
} 
    xBaleia=xBaleia-contador
      }
  }  
  if(dist( xAgua, yAgua, xBaleia ,  yBaleia)<rAgua ){  
 
    xBaleia=300
    yBaleia=-100
    yLeao=-100
    xZebra=300 
  xTubarao=300
    yTubarao=-100
    yElefante=-100
    yMacaco=-100
    yPeixe=-100
pontos=pontos+500
    contador=contador+0.2
    yZebra=40
  }
     if(dist( xTerra,yTerra, xBaleia , yBaleia)<  rTerra ){   
   tela=4
   
  }
     else{
    
      stroke(15) 
    fill(250)
    ellipse(xAgua,yAgua,wAgua,rAgua)   
   fill(0)
 text('AQUATICO',xAgua-30,yAgua)
  }
  
  
  //zebra
  
  fill(250)
  text('ZEBRA' , xZebra, yZebra-10);
  image(zebra,  xZebra,  yZebra, rZebra,rZebra) 
  if( yZebra>510){
     yZebra=510
    }
   
   if(yBaleia<0&&yLeao<0&&yTubarao<0&&yElefante<0&&yPolvo<0&&yMacaco<0&&yPeixe<0){
    yZebra=yZebra+contador
  
  if (yBaleia<0&&yLeao<0&&yTubarao<0&&yElefante<0&&yPolvo<0&&yMacaco<0&&yPeixe<0&&(keyIsDown(DOWN_ARROW))){
      yZebra=yZebra+contador
      }
  if (yBaleia<0&&yLeao<0&&yTubarao<0&&yElefante<0&&yPolvo<0&&yMacaco<0&&yPeixe<0&&(keyIsDown(RIGHT_ARROW))){
           if(xZebra>550){
   xZebra=5
}   
    xZebra=xZebra+contador
      }
  if (yBaleia<0&&yLeao<0&&yTubarao<0&&yElefante<0&&yPolvo<0&&yMacaco<0&&yPeixe<0&&(keyIsDown(LEFT_ARROW))){
           if(xZebra<5){
   xZebra=5
}   
    xZebra=xZebra-contador
      }
  } 
  if(dist( xTerra, yTerra, xZebra , yZebra)<  rTerra ){   
   stroke(15) 
    fill(250)
    ellipse(xTerra,yTerra,wTerra,rTerra)   
   fill(0)
 text('TERRESTRE',xTerra-70,yTerra+5)
    xBaleia=300
    yBaleia=-100
   xLeao=50
   yLeao=-100
     yZebra=-100
    xZebra=300
  
    xTubarao=300
 pontos=pontos+500
    contador=contador+0.2
    yTubarao=50
    
  }
    if(dist( xAgua, yAgua, xZebra , yZebra)<  rAgua ){   
   tela=4
   
  }
  //tubarao
  
 fill(250)
  text('TUBARAO' , xTubarao, yTubarao-10);
  image(tubarao, xTubarao,   yTubarao,  rTubarao,rTubarao) 
  if( yTubarao>510){
     yTubarao=510
    }
   if(yBaleia<0&&yLeao<0&&yZebra<0&&yElefante<0&&yPolvo<0&&yMacaco<0&&yPeixe<0){
    yTubarao=yTubarao+contador
 
  if (yBaleia<0&&yLeao<0&&yZebra<0&&yElefante<0&&yPolvo<0&&yMacaco<0&&yPeixe<0&&(keyIsDown(DOWN_ARROW))){
       yTubarao= yTubarao+contador
      }
  if (yBaleia<0&&yLeao<0&&yZebra<0&&yElefante<0&&yPolvo<0&&yMacaco<0&&yPeixe<0&&(keyIsDown(RIGHT_ARROW))){
        if(xTubarao>550){
   xTubarao=550
}   
    xTubarao= xTubarao+contador
      }
  if (yBaleia<0&&yLeao<0&&yZebra<0&&yElefante<0&&yPolvo<0&&yMacaco<0&&yPeixe<0&&(keyIsDown(LEFT_ARROW))){
        if(xTubarao<5){
   xTubarao=5
}   
    xTubarao= xTubarao-contador
      }
  } 
  if(dist( xAgua, yAgua, xTubarao , yTubarao)<  rAgua ){   
   stroke(15) 
    fill(250)
    ellipse(xTerra,yTerra,wTerra,rTerra)   
   fill(0)
 text('TERRESTRE',xTerra-70,yTerra+5) 
      xLeao=300
   yLeao=-100
    
    xBaleia=300
    yBaleia=-100

     yZebra=-100
    xZebra=300
    xTubarao=40
    yTubarao=-100
     xElefante=300
    yElefante=40
 pontos=pontos+500
    contador=contador+0.2
  }
      if(dist( xTerra,yTerra, xTubarao , yTubarao)<  rTerra ){   
   tela=4
   
  }
     else{
    
       stroke(15) 
    fill(250)
    ellipse(xAgua,yAgua,wAgua,rAgua)   
   fill(0)
 text('AQUATICO',xAgua,yAgua) 
  }
  
  //  ELEFANTE
  
  
    fill(250)
  text('ELEFANTE' , xElefante, yElefante-10);
  image(elefante, xElefante,   yElefante,  rElefante,rElefante) 
  if( yElefante>510){
     yElefante=510
    }
   if(yBaleia<0&&yLeao<0&&yZebra<0&&yTubarao<0&&yPolvo<0&&yMacaco<0&&yPeixe<0){
    yElefante=yElefante+contador

  if (yBaleia<0&&yLeao<0&&yZebra<0&&yTubarao<0&&yPolvo<0&&yMacaco<0&&yPeixe<0&&(keyIsDown(DOWN_ARROW))){
       yElefante= yElefante+contador
      }
  if (yBaleia<0&&yLeao<0&&yZebra<0&&yTubarao<0&&yPolvo<0&&yMacaco<0&&yPeixe<0&&(keyIsDown(RIGHT_ARROW))){
        if(xElefante>550){
   xElefante=550
}   
    xElefante= xElefante+contador
      }
  if (yBaleia<0&&yLeao<0&&yZebra<0&&yTubarao<0&&yPolvo<0&&yMacaco<0&&yPeixe<0&&yCavalo<0&&(keyIsDown(LEFT_ARROW))){
        if(xElefante<5){
   xElefante=5
}    
    xElefante= xElefante-contador
      }
  } 
  if(dist( xTerra, yTerra, xElefante , yElefante)<  rTerra ){   
   stroke(15) 
    fill(250)
    ellipse(xTerra,yTerra,wTerra,rTerra)   
   fill(0)
 text('TERRESTRE',xTerra-70,yTerra+5)
      xLeao=300
   yLeao=-100
    
    xBaleia=300
    yBaleia=-100

     yZebra=-100
    xZebra=300
    xTubarao=300
    yTubarao=-100
    xElefante=300
    yElefante=-100
   pontos=pontos+500
    contador=contador+0.2

       xPolvo=300
    yPolvo=40
 
  }
    if(dist( xAgua, yAgua, xElefante , yElefante)<  rAgua ){   
   tela=4 
   
  }
  
  
  
  ///polvo
    fill(250)
  text('POLVO' , xPolvo, yPolvo-10);
  image(polvo, xPolvo,   yPolvo,  rPolvo, rPolvo) 
  if( yPolvo>510){
      yPolvo=510
    }
   if(yBaleia<0&&yLeao<0&&yZebra<0&&yTubarao<0&&yElefante<0&&yMacaco<0&&yPeixe<0){
    yPolvo=yPolvo+contador
 
  if (yBaleia<0&&yLeao<0&&yZebra<0&&yTubarao<0&&yElefante<0&&yMacaco<0&&yPeixe<0&&(keyIsDown(DOWN_ARROW))){
       yPolvo= yPolvo+contador
      }
  if (yBaleia<0&&yLeao<0&&yZebra<0&&yTubarao<0&&yElefante<0&&yMacaco<0&&yPeixe<0&&yCavalo<0&&(keyIsDown(RIGHT_ARROW))){
        if(xPolvo>550){
   xPolvo=550
}   
    xPolvo= xPolvo+contador
      }
  if (yBaleia<0&&yLeao<0&&yZebra<0&&yTubarao<0&&yElefante<0&&yMacaco<0&&yPeixe<0&&(keyIsDown(LEFT_ARROW))){
        if(xBaleia<5){
   xPolvo=5
}    
    xPolvo= xPolvo-contador
      }
  } 
  if(dist( xAgua, yAgua, xPolvo , yPolvo)<  rAgua ){   
   stroke(15) 
    fill(250)
    ellipse(xTerra,yTerra,wTerra,rTerra)   
   fill(0)
 text('TERRESTRE',xTerra-70,yTerra+5)
      xLeao=300
       yLeao=-100
    
    xBaleia=300
    yBaleia=-100

     yZebra=-100
    xZebra=300
    xTubarao=300
    yTubarao=-100
    xElefante=300
    yElefante=-100
 pontos=pontos+500
    contador=contador+0.2
    xPolvo=300 
    yPolvo=-100
    xMacaco=300
     yMacaco=40
    
 
  }
      if(dist( xTerra,yTerra, xPolvo , yPolvo)<  rTerra ){   
   tela=4
   
  }
     else{
    
       stroke(15) 
    fill(250)
    ellipse(xAgua,yAgua,wAgua,rAgua)   
   fill(0)
 text('AQUATICO',xAgua,yAgua)
  }
  
  
  
  
  ///Macaco
   fill(250)
  text('MACACO' , xMacaco, yMacaco-10);
  image(macaco, xMacaco,   yMacaco,  rMacaco, rMacaco) 
  if(yMacaco>510){
      yMacaco=510
    }
   if(yBaleia<0&&yLeao<0&&yZebra<0&&yTubarao<0&&yElefante<0&&yPolvo<0&&yPeixe<0){
    yMacaco=yMacaco+contador
 
  if (yBaleia<0&&yLeao<0&&yZebra<0&&yTubarao<0&&yElefante<0&&yPolvo<0&&yPeixe<0&&(keyIsDown(DOWN_ARROW))){
       yMacaco= yMacaco+contador
      }
  if (yBaleia<0&&yLeao<0&&yZebra<0&&yTubarao<0&&yElefante<0&&yPolvo<0&&yPeixe<0&&(keyIsDown(RIGHT_ARROW))){
        if(xMacaco>550){
   xMacaco=550
}   
    xMacaco= xMacaco+contador
      }
  if (yBaleia<0&&yLeao<0&&yZebra<0&&yTubarao<0&&yElefante<0&&yPolvo<0&&yPeixe<0&&(keyIsDown(LEFT_ARROW))){
        if(xMacaco<5){
   xMacaco=5
}    
    xMacaco= xMacaco-contador
      }
  } 
  if(dist( xTerra, yTerra, xMacaco , yMacaco)<  rTerra ){   
   stroke(15) 
    fill(250)
    ellipse(xTerra,yTerra,wTerra,rTerra)   
   fill(0)
 text('TERRESTRE',xTerra-70,yTerra+5)
      xLeao=300
       yLeao=-100
    
    xBaleia=300
    yBaleia=-100

     yZebra=-100
    xZebra=300
    
    xTubarao=300
    yTubarao=-100
    
    xElefante=300
    yElefante=-100
    
    xPolvo=300 
    yPolvo=-100
     xMacaco=300
     yMacaco=-100
pontos=pontos+500
    contador=contador+0.2
        yPeixe=40
  }
    if(dist( xAgua, yAgua, xMacaco , yMacaco)<  rAgua ){   
   tela=4
   
  }
  
  //PEIXE
  
  
    fill(250)
  text('PEIXE' , xPeixe, yPeixe-10);
  image(peixe, xPeixe,   yPeixe,  rPeixe, rPeixe) 
  if(yPeixe>510){
      yPeixe=510
    }
   if(yBaleia<0&&yLeao<0&&yZebra<0&&yTubarao<0&&yElefante<0&&yPolvo<0&&yMacaco<0){
    yPeixe=yPeixe+contador

  if (yBaleia<0&&yLeao<0&&yZebra<0&&yTubarao<0&&yElefante<0&&yPolvo<0&&yMacaco<0&&(keyIsDown(DOWN_ARROW))){
    
    yPeixe= yPeixe+contador
      }
  if (yBaleia<0&&yLeao<0&&yZebra<0&&yTubarao<0&&yElefante<0&&yPolvo<0&&yMacaco<0&&(keyIsDown(RIGHT_ARROW))){
        if(xPeixe>550){
   xPeixe=550
}    
    xPeixe= xPeixe+contador
      }
  if (yBaleia<0&&yLeao<0&&yZebra<0&&yTubarao<0&&yElefante<0&&yPolvo<0&&yMacaco<0&&(keyIsDown(LEFT_ARROW))){
           if(xPeixe<5){
   xPeixe=5
} 
    xPeixe= xPeixe-contador
      }
  } 
  if(dist( xAgua, yAgua, xPeixe , yPeixe)<  rAgua){   
    stroke(15) 
    fill(250)
    ellipse(xTerra,yTerra,wTerra,rTerra)   
   fill(0)
 text('TERRESTRE',xTerra-70,yTerra+5)
    
    xLeao=300
       yLeao=50
    
    xBaleia=300
    yBaleia=-100

     yZebra=-100
    xZebra=300
    
    xTubarao=300
    yTubarao=-100
    
    xElefante=300
    yElefante=-100
    pontos=pontos+500
    xPolvo=300
    yPolvo=-100
     xMacaco=300
     yMacaco=-100
    yPeixe=-100
    contador=contador+0.2
  }
  
    if(dist( xTerra,yTerra, xPeixe , yPeixe)<  rTerra ){   
   tela=4
   
  }
     else{
    
      stroke(15) 
    fill(250)
    ellipse(xAgua,yAgua,wAgua,rAgua)   
   fill(0)
 text('AQUATICO',xAgua,yAgua)
  }
  //Cavalo
  
  
  
  
  
  
  
  
  
  
  stroke(15) 
    fill(250)
    ellipse(xAgua,yAgua,wAgua,rAgua)   
   fill(0)
 text('AQUATICO',xAgua-55,yAgua+5)
 
}


function fase2(){
 
image(img2,0,0)
   fill(250)
  textSize(17)
 noStroke()
  text('O game destina-se a uma turma de 10 alunos do Infantil IV,'+ '\nEducação Infantil, de uma escola particular de Natal. A turma tem'+'\n trabalhado durante todo o ano letivo de 2020 um projeto sobre animais'+'\n aquáticos, conteúdo relacionado a temática de decoração da'+' \nsala de aula e, também, escolhida pela professora para compor um'+'\n portfólio artístico. O conteúdo enquadra-se no campo de'+'\n conhecimento Natureza e Sociedade. E, de acordo com a Base Nacional'+'\n Comum Curricular, compreende o código EI03ET03 “Identificar e'+' \nselecionar fontes de informações para responder a questões sobre a'+'\n natureza, seus fenômenos, sua conservação”.' , 35, 100);
 
 
  

}
function GameOver(){
image(perdeu,0,0,600,600)
  
  fill(250)
  text('Pressione Esc para voltar ao inicio',120,450)
       
}
       
function fase3(){
  fill(250)
  image(img2,0,0)
  textSize(20)
  text('Desenvlvedor: Diego Allan'+'\nGraduando em C&T',275,100)
   text('Alice Cristina'+'\nPedagoga e Idealizadora do Projeto',275,350)
  image(diego,0,300,250,250)
  image(alice,0,0,250,250)
}



function keyPressed() {
   if(key==="ArrowUp"&&y>130){
     y=y-100;
     opcao=opcao-1;
     console.log(opcao)
   }
    if(key==="ArrowDown"&&y<330){
     y=y+100;
      opcao=opcao+1;
      console.log(opcao)
    }
 if(key=="Enter"){
   tela=tela+opcao
 }
   if(key=="Escape"){
       yLeao=50
     yBaleia=-100
     yZebra=-100
     yTubarao=-100
     yElefante=-100
     yPolvo=-100
     yMacaco=-100
     yPeixe=-100
  tela=0
     pontos=0
     nivel=1
     contador=1
   
 }
}
   
