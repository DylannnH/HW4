//先抓到畫面上的cv元素
var canvas = document.getElementById("mycanvas")
var ctx = canvas.getContext("2d")

//設定尺寸
canvas.width= 400
canvas.height= 400

var time=0
function draw(){
  time++
  ctx.clearRect(0,0,400,400)
  //座標繪製
  ctx.beginPath()
  for(var i=0;i<10;i++){
    let pos = i*50 //每格50劃一條線
    ctx.moveTo(pos,0) //x軸起點
    ctx.lineTo(pos,400) //x軸終點
    ctx.fillText(pos,pos,10) //x軸繪製文字(內容,x位置,y位置)
    //
    ctx.moveTo(0,pos) //y軸起點
    ctx.lineTo(400,pos) //y軸終點
    ctx.fillText(pos,10,pos) //y軸繪製文字(內容,x位置,y位置)
  }
  ctx.strokeStyle = "rgba(0,0,0,0.1)"
  ctx.stroke()


ctx.beginPath()
  ctx.moveTo(25,350)
  ctx.lineTo(375,350)
  ctx.lineWidth=2
  ctx.strokeStyle="black"
  ctx.stroke()

ctx.fillStyle="#468d9e"
ctx.fillRect(75,300,250,50)
ctx.strokeRect(75,300,250,50)
ctx.stroke()

ctx.fillStyle="#E4B165"
ctx.fillRect(100,250,60,50)
ctx.strokeRect(100,250,60,50)

ctx.fillStyle="red"
ctx.fillRect(160,250,80,50)
ctx.strokeRect(160,250,80,50)

ctx.fillStyle="#E4B165"
ctx.fillRect(240,250,60,50)
ctx.strokeRect(240,250,60,50)

ctx.fillStyle="black"
ctx.fillRect(125,200,75,50)
ctx.strokeRect(125,200,75,50)


ctx.fillStyle="gray"
ctx.fillRect(200,200,75,50)
ctx.strokeRect(200,200,75,50)

ctx.beginPath()
ctx.moveTo(150,150)
ctx.lineTo(250,150)
ctx.lineTo(250,200)
ctx.lineTo(225,200)

 ctx.arc(200,200,25,Math.PI*2, Math.PI,true)

ctx.lineTo(150,200)
ctx.closePath()

ctx.fillStyle="#2C728A"
ctx.fill()
ctx.strokeStyle="black"
ctx.stroke()

ctx.beginPath()
ctx.moveTo(200,150)
ctx.lineTo(200,100-mouse.y/5)
ctx.lineTo(225,115 - (time%3)-mouse.y/5)
ctx.lineTo(200,125-mouse.y/5)
ctx.closePath()

ctx.fillStyle="yellow"
ctx.fill()
ctx.strokeStyle="black"
ctx.stroke()

ctx.fillStyle="white"
let carx= time%440-40
ctx.fillRect(carx,340,40,25)
ctx.strokeRect(carx,340,40,25)

ctx.beginPath()
ctx.arc(carx+10,365,5,0, Math.PI*2)
ctx.arc(carx+30,365,5,0, Math.PI*2)

ctx.fillStyle="black"
ctx.fill()
ctx.stroke()
 
}

var mouse={
  x:0,
  y:0
}

canvas.addEventListener("mousemove",function(evt)
{
  mouse.x=evt.offsetX
  mouse.y=evt.offsetY
})

ctx.beginPath()
ctx.arc(mouse.x,mouse.y,5,0,Math.PI*2)
ctx.fillStyle="black"
ctx.fill()


// draw()

setInterval(draw,30)