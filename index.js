

const start = document.getElementById('start')
const stop = document.getElementById('stop')

const colorChange =  function(){
  const red = parseInt(Math.random()*255+1)
  const blue = parseInt(Math.random()*255+1)
  const green = parseInt(Math.random()*255+1)
  
  const color = `rgba(${red},${blue},${green})`
  document.body.style.backgroundColor = color
}

let myinterval

start.addEventListener('click',(e) => {
  if(!myinterval){
    myinterval = setInterval(colorChange,1000)
  }
  console.log("start")
})

stop.addEventListener('click',(e) => { 
  clearInterval(myinterval)
  myinterval = null
  console.log("stop")
})
