let btnNext;
let btnCred;
let btnPic;
let page1 = false;
let score=0;
let catpic
let centerX
let centerY
function preload(){
  catpic = loadImage('04.jpg'); //載入圖片
}
function setup() {
  score=0;
  myCanvas = createCanvas(1600, 900); 
  centerCanvas(); //執行畫布置中function
  
  btnNext = createButton('Start');
  btnNext.position(40,40);
  btnNext.mousePressed(goNext);
  
  btnCred = createButton('Credit');
  btnCred.position(600,80);
  btnCred.mousePressed(getScore);
  
  score = getItem('score3');//載入score數值
  
}

function draw() 
{
  background(200,200,200);
  fill(255);
  circle(mouseX,mouseY,20);
  print(centerX)
  storeItem('score', score);//儲存score數值

  if(score>3)
    {
      btnPic = createImg('cat.jpg',"");
      btnPic.position(160,69);
      btnPic.size(300,300);
    }
  
  
  text('Score : '+centerX,centerX+800,centerY+500);
  text('Score : '+centerY,centerX+800,centerY+550);
}

function goNext(){
 window.open('sketch2.html','_self');
}

function goCredit(){
  page1 = !page1;
}
function getScore(){
  score++;
}

let myCanvas; //宣告畫布變數
//畫布置中function設置
function centerCanvas()  {
  centerX = windowWidth/2 - width/2;   
  centerY = windowHeight/2 - height/2; 
  myCanvas.position(centerX,centerY); 
}

function windowResized() {
  centerCanvas();
}