
const input = document.querySelector(".comment")
const esas=document.querySelector(".esas")
const tasks = document.querySelector("#lists")
const loading=document.querySelector(".loading")
tasks.style.display="none"
esas.style.display="none"

document.querySelector('.add').onclick = function(){
    if(document.querySelector('.input').value.length == 0){
        alert("Please Enter a Task!")
    }

    else{  
        tasks.style.display="block"
        document.querySelector('#lists').innerHTML += `
            <div class="list">
                <span id="listname">✓
                    ${document.querySelector('.input').value}
                </span>
                <button class="delete">X</button>
            </div>
        `;

        document.querySelector('.input').value=""
       let c = document.querySelectorAll(".delete");
        for(let i=0; i<c.length; i++){
            c[i].onclick = function(){
                this.parentNode.remove();
                
            }
        }
    }
}

function color(event) {
    event.target.style.textDecoration = 'line-through' ;
  
  }
  const elements = document.querySelectorAll('#lists');
  elements.forEach((element) => {  
    element.addEventListener('click',color);
  });
 

let a=document.querySelector(".del")
a.addEventListener("click",()=>{
    input.classList.add("pluss")
})

let d=document.querySelector(".plus")
d.addEventListener("click",()=>{
   if(input.classList.contains("pluss")){
      input.classList.remove("pluss")
   }
})





let img1=document.querySelector(".imagebut")
let img2=document.querySelector(".imagebut2")
// const tasks = document.querySelector("#tasks")

img1.addEventListener('click', () => {
let task=document.querySelectorAll('.list')
let x = [];

task.forEach(ele =>{
    x.push(ele.firstElementChild.innerText)
})

tasks.innerHTML=""
x.sort()

x.forEach(item=>{
    
   tasks.innerHTML+= `<div class="list">
    <span id="listname">
        ${item}
    </span>
    <button class="delete">X</button>
</div>`


document.querySelector('.input').value=""
let c = document.querySelectorAll(".delete");
 for(let i=0; i<c.length; i++){
     c[i].onclick = function(){
         this.parentNode.remove();
     }}


})
});


img2.addEventListener('click', () => {
    let task=document.querySelectorAll('.list')
    let y = [];
    
    task.forEach(ele =>{
        y.push(ele.firstElementChild.innerText)
    })
    
    tasks.innerHTML=""
    y.reverse()
    
    y.forEach(item=>{
        
       tasks.innerHTML+= `<div class="list">
        <span id="listname">
            ${item}
        </span>
        <button class="delete">X</button>
    </div>`

    document.querySelector('.input').value=""
let c = document.querySelectorAll(".delete");
 for(let i=0; i<c.length; i++){
     c[i].onclick = function(){
         this.parentNode.remove();
     }}
    
    })
    });

img2.style.display="none"

img1.addEventListener("click",()=>{
    img1.style.display="none";
    img2.style.display="block";  
}),

img2.addEventListener("click",()=>{
    img1.style.display="block";
    img2.style.display="none";  
})

document.querySelector('.loading').mousemove = setTimeout(() => {
    esas.style.display="block"
   loading.style.display="none"
  }, 100000)
  
  