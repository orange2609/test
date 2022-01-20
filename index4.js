let BackPic
let StartPic
function preload(){
  BackPic = loadImage('04.jpg'); //載入圖片

}

function setup() 
{
   myCanvas = createCanvas(1600, 900); 
  centerCanvas(); //執行畫布置中function 
}
  function draw() 
{
  image(BackPic,0,0);

  btn1 = createImg("05boss big.png","");
  btn1.position(centerX+388,centerY+130.5);
  btn1.mousePressed(goNext);
  //btn1.size(454,128) //調整按鈕大小

  btn2 = createImg("05Sabrina big.png","");
  btn2.position(centerX+855,centerY+140.5);
  btn2.mousePressed(goNext);
  btn2.size(460,215) //調整按鈕大小

  btn2 = createImg("05heart big.png","");
  btn2.position(centerX+396,centerY+369.5);
  btn2.mousePressed(goNext);
  btn2.size(300,200) //調整按鈕大小

  btn3 = createImg("05Monica big.png","");
  btn3.position(centerX+704,centerY+367.5);
  btn3.mousePressed(goNext);
  btn3.size(300,200) //調整按鈕大小

  btn3 = createImg("05Jacky big.png","");
  btn3.position(centerX+1010,centerY+367.5);
  btn3.mousePressed(goJacky);
  btn3.size(300,200) //調整按鈕大小
  
  //text('Score : '+mouseX,centerX+800,centerY+700);
  //text('Score : '+mouseY,centerX+800,centerY+750);

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
  function goNext()
{
  window.open('index5.html','_self');
}
function goJacky()
{
  window.open('sketch2.html','_self');
}