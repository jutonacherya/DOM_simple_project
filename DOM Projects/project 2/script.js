var con=document.querySelector("#container")
var icon=document.querySelector("i")
var icon2= document.querySelector("#lm")
con.addEventListener("dblclick",function(){
    icon.style.transform="translate(-50%,-50%) scale(1)"
    icon2.style.color="red"
  setTimeout(function(){
    icon.style.transform="translate(-50%,-50%) scale(0)"
  },1000); 
})