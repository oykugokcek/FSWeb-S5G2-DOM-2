import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
document.querySelector("h1").addEventListener("click",function(e){
alert("Bana tıkladın!")
});


// Kodlar buraya gelecek!

//
//
//                  CLİCK
//
//
const joke = document.createElement("div");

joke.style.textAlign = "center";
joke.style.fontSize ="1.6rem";
joke.style.backgroundColor = "pink";
joke.style.marginLeft = "100px";
joke.textContent = " Buraya basınız.";



document.querySelector(".container .nav").appendChild(joke);
console.log(joke);

joke.addEventListener("click", function shiftRight() {
    joke.style.margin = "0 100px 0 0";
});

joke.addEventListener("click", function shiftLeft() {
    joke.style.margin = "0 0 0 100px";
});

//tekrar eski haline getirme??????????????????????????????????????

const firstSection = document.querySelector(".text-content h2");

firstSection.addEventListener("click", function(x) {
    document.querySelector(".home .content-section").style.flexDirection = "row-reverse";
});


//
//
//                  MOUSEOVER, MOUSEOUT
//
//




const headings = document.querySelectorAll("h2");
for (let i =0; i<headings.length-1; i++)
{
    headings[i].addEventListener("mouseover", function() {
        headings[i].style.backgroundColor = "purple"; 
    });
    headings[i].addEventListener("mouseout", function() {
        headings[i].style.backgroundColor = "white"; 
    });
}


//                  Button-textİnput-flex
//
//                  insertAdjacentElement
//
//


const inputBox = document.createElement("div");

const button = document.createElement("BUTTON");
button.setAttribute("value", "Gnder");


const textBox = document.createElement("INPUT");
textBox.setAttribute("type", "text");
textBox.setAttribute("value", "Eposta giriniz.");

inputBox.appendChild(textBox);
inputBox.appendChild(button);


const section = document.querySelector("footer");

section.insertAdjacentElement("beforebegin", inputBox);

inputBox.style.display ="flex";
inputBox.style.justifyContent ="center";



//                  
//
//              KEYDOWN KEYUP    
//
//

textBox.addEventListener("keypress", function() {
    textBox.setAttribute("value", "");
    textBox.backgroundColor = "blue";
});
//????????????????????????????????????????????????????


