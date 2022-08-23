let modeButton = document.getElementById("lightButton");
let pages = document.getElementsByClassName("darkmode");
let h2 = document.getElementsByTagName("h2");
let h3 = document.getElementsByTagName("h3");
let p = document.getElementsByTagName("p");
let strong = document.getElementsByTagName("strong");
let a = document.getElementsByTagName("a");
let iElements = document.getElementsByTagName("i");

let tools = document.getElementsByClassName("tools")[0];

modeButton.addEventListener("click", ()=>{
    for(let i = 0; i < pages.length; i++)
        pages[i].classList.toggle('lightmode');

    for(let i = 0; i < h2.length; i++)
        h2[i].classList.toggle("textlight");

    for(let i = 0; i < h3.length; i++)
        h3[i].classList.toggle("textlight");

    for(let i = 0; i < p.length; i++)
        p[i].classList.toggle("textlight");

    for(let i = 0; i < strong.length; i++)
        strong[i].classList.toggle("textlight");

    for(let i = 0; i < a.length; i++)
        a[i].classList.toggle("textlight");

    for(let i = 0; i < iElements.length; i++)
        iElements[i].classList.toggle("invertIElements");
    
    if(document.getElementById("tools-page").classList.contains("lightmode") === true){
        tools.classList.add("borderLightmode");
    }
    else{
        tools.classList.remove("borderLightmode");
    }

})



