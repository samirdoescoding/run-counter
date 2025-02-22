let fourDisplay = document.querySelector(".display-four");
let wicketDisplay = document.querySelector(".display-wicket");
let overDisplay = document.querySelector(".display-over");

let fourDisplay2 = document.querySelector(".four");
let wicketDisplay2 = document.querySelector(".wicket");
let overDisplay2 = document.querySelector(".over");

//over counter
const ballAdder = () => {
    let content = overDisplay.innerHTML;
    let contentNumber = parseFloat(content);

console.log(Math.round(contentNumber));
    if(Math.round(contentNumber) - contentNumber == 0.5){
        contentNumber += 0.5
    }else{
        contentNumber += 0.1
    }

    overDisplay.innerHTML = contentNumber.toFixed(1);  
}

//four counter

let four = fourDisplay.innerHTML;
let numOfFour = parseInt(four);

const fourAdder = () => {
    
    numOfFour++;

    fourDisplay.innerHTML = numOfFour;
}

//wicket adder
const wicketAdder = () => {
    let wicket = wicketDisplay.innerHTML;
    let numOfWicket = parseInt(wicket);
    numOfWicket++;

    wicketDisplay.innerHTML = numOfWicket;
}

//reset function
const reset = () => {
    // document.querySelectorAll(".reset-over").forEach(elem => {
    //     elem.innerHTML = 0.0;
    // });
    // document.querySelectorAll(".reset-four").forEach(elem => {
    //     elem.innerHTML = 0;
    // });
    // document.querySelectorAll(".reset-wicket").forEach(elem => {
    //     elem.innerHTML = 0;
    // });
    location.reload();
}

//end function
const end = () => {
    fourDisplay = fourDisplay2;
    overDisplay = overDisplay2;
    wicketDisplay = wicketDisplay2;

    document.querySelector(".display-target").innerHTML = numOfFour + 1;
    numOfFour = 0;
}

//end2 function
let target = document.querySelector(".display-target");
let target2 = parseInt(target);

let result = fourDisplay2.innerHTML;
let result2 = parseInt(result)

const end2 = () => {
    if(result2 < target2){
        alert("Team 1 Win")
    }else{
        alert("Team 2 Win")
    }
}
