const text = document.querySelector("p")
const btn = document.querySelector("button")
let flag=true
btn.addEventListener("click",()=>{
    if(flag){
        btn.textContent="Show Less"
        flag=false
        text.textContent=text.innerText.length
    }else{
        btn.textContent="Read More"
        flag=true
    }
})