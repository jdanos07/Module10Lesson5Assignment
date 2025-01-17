// Task 2
function changeBoxColor() {
    const box = document.getElementById("box");
    if (box.style.backgroundColor === "lightblue" || box.style.backgroundColor === "") {
        box.style.backgroundColor = "lightgreen";
    } 
    else {
        box.style.backgroundColor = "lightblue";
    }
  }
  
  // Task 3
  function hoverChange(element) {
    element.style.backgroundColor = "orange";
  }
  
  function hoverReset(element) {
    element.style.backgroundColor = "lightcoral";
  }
  
  function makeTextLarger() {
    const text = document.getElementById("text");
    text.style.fontSize = "24px";
    text.style.color = "blue";
    text.style.fontWeight = "bold";
  }
  
  function resetTextStyle() {
    const text = document.getElementById("text");
    text.style.fontSize = "18px";
    text.style.color = "darkslategray";
    text.style.fontWeight = "normal";
  }
  
  function addBorderToBox() {
    const box = document.getElementById("box");
    box.style.border = "5px dashed red";
  }
  
  function resetBoxStyle() {
    const box = document.getElementById("box");
    box.style.border = "2px solid black";
    box.style.backgroundColor = "lightblue";
    box
  }