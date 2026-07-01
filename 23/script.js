const inp = document.querySelector("#inp")
const result = document.querySelector("#result")

inp.addEventListener("input",()=>{
    let F = inp.value * 9/5 + 32
    if(inp.value){
        result.innerHTML=`Fahrenheit: ${F}`
    }else{
        result.innerHTML=''
    }
})