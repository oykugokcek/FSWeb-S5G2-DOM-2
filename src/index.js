import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
document.querySelector("h1").addEventListener("click",function(e){
alert("Bana tıkladın!")
});


// Kodlar buraya gelecek!

//
//
//                  CLİCK-WHEEL
//
//
const joke = document.createElement("div");

joke.style.textAlign = "center";
joke.style.fontSize ="1.6rem";
joke.style.backgroundColor = "pink";
joke.style.marginLeft = "100px";
joke.textContent = " Buraya basınız.";



document.querySelector(".container .nav").appendChild(joke);



joke.addEventListener("click", function shiftRight() {
    joke.style.margin = "0 100px 0 0";
});

joke.addEventListener("dblclick", function shiftLeft() {
    joke.style.margin = "0 0 0 100px";
});


                // WHEEL


joke.addEventListener("wheel", function() {
    joke.setAttribute("class", "animation");
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
headings.forEach((item) => {
    item.addEventListener("mouseover", function() {
                item.style.backgroundColor = "purple"; 
            });
        item.addEventListener("mouseout", function() {
                    item.style.backgroundColor = "white"; 
                });
})


//                  Button-textİnput-flex
//
//                  insertAdjacentElement
//
//


const inputBox = document.createElement("div");

const button = document.createElement("BUTTON");
// button.textContent("Gönder");
button.style.width = "40px";


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
//              Focus
//

textBox.addEventListener("keydown", function() {
    textBox.setAttribute("value", "");
    textBox.style.backgroundColor = "blue";
    textBox.style.color = "white";
});

textBox.addEventListener("focus", function() {
    textBox.style.background = "pink";
});

///////////////GRAYSCALE YAP





////////////////////load

const loading = document.querySelector(".loading");

window.addEventListener("load", function() {
    loading.style.display = "none";
});





//////////////resize

window.addEventListener("resize", function()
{
    alert("Lütfen küçültme beni!");
})

///////////////////scroll
const heart = document.createElement("div");
heart.textContent = "❤️";
heart.style.position ="fixed";
heart.style.zIndex ="100";
heart.style.top ="100px";
heart.style.left ="100px";
heart.style.right ="100px";
heart.style.bottom ="100px";
heart.style.fontSize ="100px";
heart.style.alignItems= "center";

window.addEventListener("scroll", function()
{
document.body.appendChild(heart);
}
);





//////////////////select 

const paragraph = document.querySelectorAll(p);
paragraph.forEach((item) => {
    item.addEventListener("select", function()
    {
        item.style.color = "black";
    } )
})
