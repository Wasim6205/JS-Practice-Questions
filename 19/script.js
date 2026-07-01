const count = document.querySelector("#count")
const btn = document.querySelector("#click")
const resetBtn = document.querySelector("#reset")
btn.addEventListener("click",()=>{
    const value = Number(count.textContent)
    count.textContent = value+1
})
resetBtn.addEventListener("click",()=>{
    count.textContent = 0
})