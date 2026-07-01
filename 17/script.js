const inp = document.querySelector("input")
const counter = document.querySelector("#count")

inp.addEventListener("input",()=>{
    console.log(inp.value)
    counter.textContent = `Count: ${inp.value.length}`
})