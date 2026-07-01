const body = document.querySelector("body")
const btn = document.querySelector("button")
const colors=["red","green","yellow","blue"]
let index = 0
body.style.backgroundColor=colors[index]

btn.addEventListener("click",()=>{
    index++
    if(index===colors.length){
        index=0
    }
    body.style.backgroundColor=colors[index]
})
