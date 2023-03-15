const rate = document.querySelectorAll("label")
const display = document.querySelector(".selected__num");
const main = document.querySelector("main");
const box = document.querySelector(".for__JS")


const btn = document.querySelector(".__btn")


rate.forEach((e)=>{ 
    e.addEventListener("click", ()=>{
        let num = e.textContent; 
        display.textContent = num;
    });
})

btn.addEventListener("click", ()=>{
    if(display.textContent !== ""){
        main.remove();
        box.setAttribute("class", "for_displayed__JS");
    }else{
        alert(`Hey we care about your rate, don't ghost us please :(`)
    }
});



