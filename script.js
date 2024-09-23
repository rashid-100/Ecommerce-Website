const bar = document.getElementById("bar");
const nav = document.getElementById("navbar"); 
const closeBar = document.getElementById("closeBar");

if(bar){
    bar.addEventListener("click", ()=> {
        nav.classList.add("active");
    })
}

closeBar.onclick = () =>{
    nav.classList.remove("active")
}