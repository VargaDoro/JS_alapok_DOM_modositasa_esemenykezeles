window.addEventListener("load", function () {
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
    elemekElerese4();
    elemekFormazasa1();
    esemenyKezeles1();
    esemenyKezeles2();
});

function elemekElerese1() {
    const ELEM=document.querySelectorAll("section h2")[0]
    let tartalom = ELEM.innerHTML
    console.log(tartalom)
}
function elemekElerese2() {
    const ELEM=document.querySelectorAll("#ide")[0]
    ELEM.innerHTML="<p>Jó reggelt</p>"
}
function elemekElerese3() {
    const ELEM=document.querySelectorAll(".ide")[0]
    ELEM.innerHTML="<p>Jó reggelt</p>"
}
function elemekElerese4() {
    const ELEM=document.querySelectorAll(".lista")[0]
    let txt ="<ul>"
    for (let index = 0; index < 5; index++) {
        let szam = Math.random()*21+10
        txt += `<li>${Math.floor(szam)}</li>`
    }
    txt+="</ul>"
    ELEM.innerHTML=txt
}
function elemekFormazasa1() {
    const ELEM=document.querySelectorAll(".lista")[0]
    ELEM.classList.add("formazott")
}
function esemenyKezeles1(){
    const ELEM=document.querySelectorAll(".lista")[0]
    ELEM.addEventListener("click", esemenyKezeles)
    
}
function esemenyKezeles() {
    const ELEM=document.querySelectorAll(".lista")[0]
    const kattintasutan=document.querySelectorAll(".kattintasutan")[0]
    kattintasutan.appendChild(ELEM)
}
function esemenyKezeles2() {
    const ELEM=document.querySelectorAll(".feladat")[0]
    ELEM.innerHTML="<button>OK</button>"
    const gomb=document.querySelectorAll(".feladat button")[0]
    gomb.addEventListener("click", esemenyKezelesGomb)
}
function esemenyKezelesGomb() {
    const ELEM=document.querySelectorAll(".feladat")[0]
    ELEM.innerHTML+="<img src='kutya.jpg' alt='kuy'></img>"
}
function esemenyKezeles3() {
    
}