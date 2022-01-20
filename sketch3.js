let btnPrev;
let score3
function setup() {
  createCanvas(400, 400);
  btnPrev = createButton('Go Back');
  btnPrev.position(40,40);
  btnPrev.mousePressed(goPrev);
  score3 = getItem('score');//載入score數值
}

function draw() {
  background(200,0,0);
  storeItem('score3', score3);//儲存score數值
}

function goPrev(){
  window.open('index.html','_self');
}