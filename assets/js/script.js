
const newText = document.getElementById("newText");

const addArea = document.getElementById("addArea");

const newText2 = document.getElementById("newText2");
const newText3 = document.getElementById("newText3");

const section =  document.getElementById("section");
const section2 =  document.getElementById("section2");
const section3 =  document.getElementById("section3");
const section4 =  document.getElementById("section4");

const portfolioTitle = document.getElementById("Portfolio");
const Resume = document.getElementById("Resume");
const Contact = document.getElementById("Contact");
const About = document.getElementById("About");

const imgSandDollar = document.getElementById("SandDollar");
const shellOne = document.getElementById("shell-1");

/*-------------------------------------------------*/


section.addEventListener("mouseenter", mouseEnter);
section.addEventListener("mouseleave", mouseLeave);

function mouseEnter() {
    newText.textContent = "Each project you see will progressively implements more web development skill sets.";
    imgSandDollar.style.width = "200px";
    portfolioTitle.style.fontSize= "220%";
    newText.style.fontSize = "20px";
    newText.style.opacity = "1";

    addArea.innerHTML = "<a><id=""img src=./assets/images/sanddollar.png></a>"
  }

  function mouseLeave() {
    portfolioTitle.style.fontSize = "150%";
    imgSandDollar.style.width = "150px";
    newText.textContent = "";
    newText.style.fontSize = "2px";
    newText.style.opacity = "0";
  }
/*-------------------------------------------------*/

  document.getElementById("section2").addEventListener("mouseenter", mouseEnter2);
document.getElementById("section2").addEventListener("mouseleave", mouseLeave2);

function mouseEnter2() {
    newText2.textContent = "Hello this is a paragraph Hello this is a paragraph Hello this is a paragraph Hello this is a paragraph";
    shellOne.style.width = "200px";
    Resume.style.fontSize= "220%";

  }

  function mouseLeave2() {
    Resume.style.fontSize = "150%";
    shellOne.style.width = "150px";
    newText2.textContent = "";

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