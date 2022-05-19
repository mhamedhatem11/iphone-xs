
var img = document.createElement("img");
img.src = "1.jpg";
img.setAttribute("width", "95%");
img.setAttribute("height", "700px");
img.style.margin = "30px";
var src = document.getElementById("x");
src.appendChild(img);
let move = document.getElementById('move');
 move.style.background= "orange";
 move.style.fontFamily= "verdena";
 move.style.fontSize= "40px";
 move.innerText = "hi from js";
 move.style.textAlign = "center";
 let hi = document.getElementById('hi');
 hi.style.fontFamily= "Tahoma";
 hi.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, culpa facere! Voluptate, numquam commodi. Dolorem maxime, sit obcaecati nihil molestias libero aut eligendi quis tenetur distinctio blanditiis voluptatum amet consectetur.";
 hi.style.fontSize= "20px";
 hi.style.margin= "100px";
 function myFunction() {
    var element = document.getElementById("myDIV");
    element.classList.toggle("myystyle");
    element.textContent = 'This is a DIV element.how are you..Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, culpa facere! Voluptate, numquam commodi'
 }