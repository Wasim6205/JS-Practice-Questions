const body = document.querySelector("body")
const btn = document.querySelector("button")
btn.addEventListener("click",()=>{
    body.classList.toggle("dark")
    if(body.classList.contains("dark")){
        btn.textContent="light"
    }else{
        btn.textContent="dark"
    }
})