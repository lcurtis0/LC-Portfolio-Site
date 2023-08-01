
const newText = document.getElementById("newText");
const section =  document.getElementById("section");
const section2 =  document.getElementById("section2");
const section3 =  document.getElementById("section3");
const section4 =  document.getElementById("section4");

const portfolioTitle = document.getElementById("Portfolio");
const imgSandDollar = document.getElementById("SandDollar");

section.addEventListener("mouseenter", mouseEnter);
section.addEventListener("mouseleave", mouseLeave);

function mouseEnter() {
    newText.textContent = "Hello this is a paragraph";
    imgSandDollar.style.width = "200px";
    portfolioTitle.style.fontSize= "220%";
  }

  function mouseLeave() {
    portfolioTitle.style.fontSize = "150%";
    imgSandDollar.style.width = "150px";
    newText.textContent = "";
  }
/*-------------------------------------------------*/

  document.getElementById("section2").addEventListener("mouseenter", mouseEnter2);
document.getElementById("section2").addEventListener("mouseleave", mouseLeave2);

function mouseEnter2() {
    document.getElementById("section2").style.color = "blue";

  }

  function mouseLeave2() {
    document.getElementById("section2").style.color = "black";

  }

  /*-------------------------------------------------*/

  document.getElementById("section3").addEventListener("mouseenter", mouseEnter3);
document.getElementById("section3").addEventListener("mouseleave", mouseLeave3);

function mouseEnter3() {
    document.getElementById("section3").style.color = "blue";

  }

  function mouseLeave3() {
    document.getElementById("section3").style.color = "black";

  }

  /*-------------------------------------------------*/

  document.getElementById("section4").addEventListener("mouseenter", mouseEnter4);
document.getElementById("section4").addEventListener("mouseleave", mouseLeave4);

function mouseEnter4() {
    document.getElementById("section4").style.color = "blue";

  }

  function mouseLeave4() {
    document.getElementById("section4").style.color = "black";

  }