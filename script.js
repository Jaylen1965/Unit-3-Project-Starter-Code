/* Declare variables below to save the different sections (divs) of your story*/


let buttonOne = document.querySelector(".option-one");
let tradeHimScreen = document.querySelector('.option-one-screen');
buttonOne.onclick = function() {
    tradeHimScreen.style.display = "block";
};

let buttonTwo = document.querySelector(".option-Two");
let donttradeHimScreen = document.querySelector('.option-two-end');
buttonTwo.onclick = function() {
    donttradeHimScreen.style.display = "block";
};

let one = document.querySelector(".option-One-End");
let  seeresults  = document.querySelector('.option-two-screen');
 one.onclick = function() {
    seeresults.style.display = "block";
    };

let optiontwoendbutton = document.querySelector(".option-two-End");
let  Thebadending  = document.querySelector('.option-two-End2');
 optiontwoendbutton.onclick = function() {
    Thebadending.style.display = "block";
    };



/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
INSERT_VARIABLE.onclick=function(){

};

INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/