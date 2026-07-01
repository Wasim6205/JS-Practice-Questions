// Mini Student Manager
let nameInput = document.querySelector("#name")
let courseInput = document.querySelector("#course")
const addBtn = document.querySelector("#add")
const studentsDiv = document.querySelector("#students")
const count = document.querySelector("#count")

const students = [
    {
        name:"Md Wasim",
        course:"BCA"
    },
    {
        name:"Sahil",
        course:"BBA"
    },
    {
        name:"Sameer",
        course:"MCA"
    },
]

addBtn.addEventListener("click",()=>{
    let name = nameInput.value.trim()
    let course = courseInput.value.trim()
    if(name.trim()=="" || name.trim()==""){
        alert("Please fill all fields")
        return
    }
    students.push({
        name,
        course
    })
    renderStudents()
    nameInput.value=""
    courseInput.value=""
})

function renderStudents(){
    studentsDiv.innerHTML=""
    students.forEach((student,idx)=>{
            studentsDiv.innerHTML += `<div id="student" class="border-2 rounded-md border-gray-400 py-4 px-2 flex flex-col gap-2 w-[250px] h-auto">
                <p>Name: ${student.name}</p>
                <p>Course: ${student.course}</p>
                <button onclick="deleteBtn(${idx})" id="delete" class="rounded-md bg-red-400 py-1 px-3 w-fit cursor-pointer">Delete</button>
            </div>`
    })
    count.textContent=students.length
}
renderStudents()
const deleteBtn = (idx) => {
    students.splice(idx,1)
    renderStudents()
}

// addBtn.addEventListener("click",()=>{
//     studentsDiv.innerHTML += `<div id="student" class="border-2 border-gray-400 py-4 px-2 flex flex-col gap-2 w-[300px] h-auto">
//                 <p>Name: ${name.value}</p>
//                 <p>Course: ${course.value}</p>
//                 <button id="delete" class="rounded-md bg-red-400 py-1 px-3 w-fit">Delete</button>
//             </div>`
//     name.value=""
//     course.value=""
// })


// Dark Mode
// const body = document.querySelector("body")
// const toggleBtn = document.querySelector("#toggle")
// let mode="dark"

// toggleBtn.addEventListener("click",()=>{
//     if(mode==="dark"){
//         toggleBtn.classList.remove("ri-moon-line")
//         toggleBtn.classList.add("ri-moon-fill")
//         body.style.backgroundColor="white"
//         body.style.color="black"
//         mode="light"
//     }else{
//         toggleBtn.classList.add("ri-moon-line")
//         toggleBtn.classList.remove("ri-moon-fill")
//         body.style.backgroundColor="black"
//         body.style.color="white"
//         mode="dark"
//     }
// })

// Image Slider
// const imgArr = ["https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg","https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg","https://thumbs.dreamstime.com/b/wooden-bridge-4965008.jpg","https://thumbs.dreamstime.com/b/bridge-to-unknow-nature-connects-two-opposing-unknown-realities-let-s-go-exploring-124169311.jpg"]
// const image = document.querySelector("#image")
// const prevBtn = document.querySelector("#prev")
// const nextBtn = document.querySelector("#next")

// let index=0
// image.setAttribute("src",imgArr[index])

// nextBtn.addEventListener("click",()=>{
//     index++
//     if(index===imgArr.length){
//         index=0
//     }
//     image.setAttribute("src",imgArr[index])
// })
// prevBtn.addEventListener("click",()=>{
//     index--
//     if(index===0){
//         index=imgArr.length-1
//     }
//     image.setAttribute("src",imgArr[index])
// })