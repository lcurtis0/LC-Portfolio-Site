
const newText = ("This is text");

document.getElementById("section").addEventListener("mouseenter", mouseEnter);
document.getElementById("section").addEventListener("mouseleave", mouseLeave);

function mouseEnter() {
    document.getElementById("section").style.color = "blue";
    document.getElementById("section").classList.remove("before");
    document.getElementById("section").classList.add("dimentions");

    document.getElementById("section").append(newText);

    document.getElementById("section2").style.width = "10%";
    document.getElementById("section3").style.width = "10%";
    document.getElementById("section4").style.width = "10%";
  }

  function mouseLeave() {
    document.getElementById("section").style.color = "black";
    document.getElementById("section").classList.add("before");
    document.getElementById("section").classList.remove("dimentions");

    document.getElementById("section").remove();

    document.getElementById("section2").style.width = "20%";
    document.getElementById("section3").style.width = "20%";
    document.getElementById("section4").style.width = "20%";
  }
/*-------------------------------------------------*/

  document.getElementById("section2").addEventListener("mouseenter", mouseEnter2);
document.getElementById("section2").addEventListener("mouseleave", mouseLeave2);

function mouseEnter2() {
    document.getElementById("section2").style.color = "blue";
    document.getElementById("section2").classList.remove("before");
    document.getElementById("section2").classList.add("dimentions");
    document.getElementById("section").style.width = "10%";
    document.getElementById("section3").style.width = "10%";
    document.getElementById("section4").style.width = "10%";
  }

  function mouseLeave2() {
    document.getElementById("section2").style.color = "black";
    document.getElementById("section2").classList.add("before");
    document.getElementById("section2").classList.remove("dimentions");
    document.getElementById("section").style.width = "20%";
    document.getElementById("section3").style.width = "20%";
    document.getElementById("section4").style.width = "20%";
  }

  /*-------------------------------------------------*/

  document.getElementById("section3").addEventListener("mouseenter", mouseEnter3);
document.getElementById("section3").addEventListener("mouseleave", mouseLeave3);

function mouseEnter3() {
    document.getElementById("section3").style.color = "blue";
    document.getElementById("section3").classList.remove("before");
    document.getElementById("section3").classList.add("dimentions");
    document.getElementById("section2").style.width = "10%";
    document.getElementById("section").style.width = "10%";
    document.getElementById("section4").style.width = "10%";
  }

  function mouseLeave3() {
    document.getElementById("section3").style.color = "black";
    document.getElementById("section3").classList.add("before");
    document.getElementById("section3").classList.remove("dimentions");
    document.getElementById("section2").style.width = "20%";
    document.getElementById("section").style.width = "20%";
    document.getElementById("section4").style.width = "20%";
  }

  /*-------------------------------------------------*/

  document.getElementById("section4").addEventListener("mouseenter", mouseEnter4);
document.getElementById("section4").addEventListener("mouseleave", mouseLeave4);

function mouseEnter4() {
    document.getElementById("section4").style.color = "blue";
    document.getElementById("section4").classList.remove("before");
    document.getElementById("section4").classList.add("dimentions");
    document.getElementById("section2").style.width = "10%";
    document.getElementById("section3").style.width = "10%";
    document.getElementById("section").style.width = "10%";
  }

  function mouseLeave4() {
    document.getElementById("section4").style.color = "black";
    document.getElementById("section4").classList.add("before");
    document.getElementById("section4").classList.remove("dimentions");
    document.getElementById("section2").style.width = "20%";
    document.getElementById("section3").style.width = "20%";
    document.getElementById("section").style.width = "20%";
  }