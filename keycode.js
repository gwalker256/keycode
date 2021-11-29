const keyBox = document.getElementById("keyBox");
const codeBox = document.getElementById("codeBox");
const whichBox = document.getElementById("whichBox");

document.addEventListener("keydown",(e)=>{   
    keyBox.innerHTML = (e.key);
    codeBox.innerHTML = (e.code);
    whichBox.innerHTML = (e.which);
})