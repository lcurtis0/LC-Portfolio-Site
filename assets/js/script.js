
const newText = document.getElementById("newText");

const addArea = document.getElementById("addArea");
const newText2 = document.getElementById("newText2");
const newText3 = document.getElementById("newText3");
const newText4 = document.getElementById("newText4");

const Resumelink = document.getElementById("Resumelink");

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
const shellTwo = document.getElementById("shell-2");

let Horizon = document.createElement('img');
let passwordGenerator = document.createElement('img');
let ultimateTest = document.createElement('img');

let Resumeimg = document.createElement('img');

/*-------------------------------------------------*/


section.addEventListener("mouseenter", mouseEnter);
section.addEventListener("mouseleave", mouseLeave);

function mouseEnter() {
    newText.textContent = "Each project you see will progressively implements more web development skill sets.";
    imgSandDollar.style.width = "200px";
    portfolioTitle.style.fontSize= "220%";
    newText.style.fontSize = "20px";
    newText.style.opacity = "1";

    Horizon.src = "./assets/images/sanddollar.png";
    Horizon.style.border = "1px solid";
    Horizon.style.borderRadius = "10px";
    addArea.appendChild(Horizon);
    Horizon.style.width = "100px";
  
    passwordGenerator.src = "./assets/images/coral.png";
    passwordGenerator.style.border = "1px solid";
    passwordGenerator.style.borderRadius = "10px";
    addArea2.appendChild(passwordGenerator);
    passwordGenerator.style.width = "100px";

    ultimateTest.src = "./assets/images/coral.png";
    ultimateTest.style.border = "1px solid";
    ultimateTest.style.borderRadius = "10px";
    addArea3.appendChild(ultimateTest);
    ultimateTest.style.width = "100px";

  }

  function mouseLeave() {
    portfolioTitle.style.fontSize = "150%";
    imgSandDollar.style.width = "150px";
    newText.textContent = "";
    newText.style.fontSize = "2px";
    newText.style.opacity = "0";

    Horizon.src = "";
    Horizon.style.width = "0px";
    Horizon.style.border = "0px none";

    passwordGenerator.src = "";
    passwordGenerator.style.width = "0px";
    passwordGenerator.style.border = "0px none";

    ultimateTest.src = "";
    ultimateTest.style.width = "0px";
    ultimateTest.style.border = "0px none";

  }
/*-------------------------------------------------*/

  document.getElementById("section2").addEventListener("mouseenter", mouseEnter2);
document.getElementById("section2").addEventListener("mouseleave", mouseLeave2);

function mouseEnter2() {
    newText2.textContent = "Hello this is a paragraph Hello this is a paragraph Hello this is a paragraph Hello this is a paragraph";
    shellOne.style.width = "200px";
    Resume.style.fontSize= "220%";
    newText2.style.fontSize = "20px";
    newText2.style.opacity = "1";

    Resumeimg.src = "./assets/images/Screenshot (156).png";
    Resumeimg.style.border = "1px solid";
    Resumeimg.style.borderRadius = "5px";
    Resumelink.appendChild(Resumeimg);
    Resumeimg.style.width = "200px";
  }

  function mouseLeave2() {
    Resume.style.fontSize = "150%";
    shellOne.style.width = "150px";
    newText2.textContent = "";
    newText2.style.fontSize = "2px";
    newText2.style.opacity = "0";

    Resumeimg.src = "";
    Resumeimg.style.width = "0px";
    Resumeimg.style.border = "0px none";

  }

  /*-------------------------------------------------*/

  document.getElementById("section3").addEventListener("mouseenter", mouseEnter3);
document.getElementById("section3").addEventListener("mouseleave", mouseLeave3);

const Firstname = document.createElement('input');

function mouseEnter3() {
    newText3.textContent = "This is the contact area. Fill out the information ";
    shellTwo.style.width = "200px";
    Contact.style.fontSize= "220%";
    newText3.style.fontSize = "20px";
    newText3.style.opacity = "1";

    const github = document.createElement('p');
    github.textContent = "https://github.com/lcurtis0";

    const email = document.createElement('p');
    email.textContent = "lmcurtis222@gmail.com";

    

    Firstname.placeholder = "Enter First Name"
    document.getElementById('firstName').style.opacity = "1";
    document.getElementById('firstName').appendChild(Firstname);
  }

  function mouseLeave3() {
    Contact.style.fontSize = "150%";
    shellTwo.style.width = "150px";
    newText3.textContent = "";
    newText3.style.fontSize = "2px";
    newText3.style.opacity = "0";

    document.getElementById('firstName').style.opacity = "0";

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