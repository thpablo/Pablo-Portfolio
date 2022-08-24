let modeButton = document.getElementById("lightButton");
let pages = document.getElementsByClassName("darkmode");

let textsInSite = [document.getElementsByTagName("h2"), document.getElementsByTagName("h3"),
document.getElementsByTagName("p"), document.getElementsByTagName("strong") , document.getElementsByTagName("a"),
document.getElementsByTagName("a")];

let elementsI = document.getElementsByTagName("i");
let contactPage = document.getElementById("contact-page");

let tools = document.getElementsByClassName("tools")[0];

let textsInEmailBox = document.querySelectorAll(".textInEmailBox");

modeButton.addEventListener("click", ()=>{

    /*Variavel Dentro da Função para suas propriedades atualizarem sempre que clicar no botão de mudar o Modo*/
    let listLightMode = document.querySelectorAll(".lightmodeTwo"); //Listas Variaveis com classe Dark/Light
    let listDarkMode = document.querySelectorAll(".darkmodeTwo");

    /*Mudança Páginas para ficarem no modo Light*/
    for(let i = 0; i < pages.length; i++){
        pages[i].classList.toggle("lightmode");
    }

    /*Mudança Textos do site para ficarem pretos, contrastando com o Branco */
    textsInSite.forEach(elementsTexts => {                  /* forEach percorrendo matriz */
        for(let i = 0; i < elementsTexts.length; i++){      /* com arrays de texto (p,h1,h2...)*/
            elementsTexts[i].classList.toggle("textlight");
        }        
    });

    /*Mudança Icones do site para ficarem pretos, contrastando com o Branco */
    for(let i = 0; i < elementsI.length; i++)
        elementsI[i].classList.toggle("invertIElements");
    
    /* Inserindo Bordas Sombreadas para listas de items no modo Branco*/
    if(document.getElementById("tools-page").classList.contains("lightmode") === true)
        tools.classList.add("borderLightmode");
    else
        tools.classList.remove("borderLightmode");

    /*Formulario Contato por email*/
    for(let i = 0; i < listDarkMode.length; i++){
        listDarkMode[i].classList.add("lightmodeTwo");
        listDarkMode[i].classList.remove("darkmodeTwo");       
        listDarkMode.values(Array)
    }

    for(let i = 0; i < listLightMode.length; i++){
        listLightMode[i].classList.add("darkmodeTwo");
        listLightMode[i].classList.remove("lightmodeTwo");       
    }
    
    /*Mudança Divs para ficar modo Branco na Pagina de Contato*/
    if(contactPage.classList.contains("lightmode") == true){
        contactPage.style.backgroundColor = "var(--light-grey)"; /*Background na página de Contatos*/
        for(let i = 0; i < textsInEmailBox.length; i++)         /*Textos na página de Contatos*/
            textsInEmailBox[i].style.color = "white";
    }
    else{   /*Resetando Mudanças*/    
    contactPage.style.backgroundColor = "var(--black)";
        for(let i = 0; i < textsInEmailBox.length; i++)
            textsInEmailBox[i].style.color = "black";
    }
})



