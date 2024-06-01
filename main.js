let operationSpace = [];
let currentOperator ='';
let numberOne =null;
let numberTwo =null;



window.onload = function () {
     document.getElementById("entranceSound").play();
    

    var moiAudio = document.getElementById('moiEntrance');
    
    setTimeout(function(){
        moiAudio.play();
       }, 1000);
}

function numbers(objButton){  
  

    var audio = document.getElementById("clickingButton");
    audio.play();
    
    
 operationSpace.push(objButton.value);

 console.log(operationSpace);
 
 screenDisplay();


 
}

function operator(objOperator){


    document.getElementById("operationClear").play();

    if (numberOne === null) {
        numberOne = parseFloat(operationSpace.join(''));
    } else if (operationSpace.length > 0) {
        numberTwo = parseFloat(operationSpace.join(''));
        numberOne = evaluate(numberOne, numberTwo, currentOperator);

        if(numberOne== "Infinity"){
            NoDivideZero();
            clearAll();
        }
    }
    
  
    currentOperator = objOperator.value;
    console.log("operador actual",currentOperator); 
    operationSpace = [];
    screenDisplay();

    console.log("resultado actual: ",numberOne);

}

function result(){
    if (operationSpace.length > 0) {
        numberTwo = parseFloat(operationSpace.join(''));
        numberOne = evaluate(numberOne, numberTwo, currentOperator);
    }

    if(numberOne== "Infinity"){
        NoDivideZero();
        clearAll();
    }
    
    console.log(evaluate(numberOne,numberTwo,currentOperator));

    operationSpace = [numberOne.toString()];
    currentOperator = '';
    numberOne = null;
    numberTwo = null;
    screenDisplay();


    
    var audio = document.getElementById("clickingResult");
    audio.play();

}


function evaluate(numberOne,numberTwo,currentOperator){
    switch (currentOperator) {
        case '+':
            return numberOne + numberTwo;
        case '-':
            return numberOne - numberTwo;
        case '*':
            return numberOne * numberTwo;
        case '/':
            return numberOne / numberTwo;
            
        default:
            return numberTwo;
    }
}


function screenDisplay() {
    let fullOperation = '';

    if (operationSpace.length > 0) {
        fullOperation = operationSpace.join('');
    } else {
        if (numberOne !== null) {
            fullOperation = numberOne.toString();
        }
    }

    document.getElementById("textScreen").value = fullOperation;
}

function clearAll() {
    
    document.getElementById("resetClear").play();

    operationSpace = [];
    currentOperator = '';
    numberOne = null;
    numberTwo = null;
    screenDisplay();
}

function NoDivideZero() {
 
    const calculator = document.getElementById('calculator');
    calculator.classList.add('byebye');

    document.getElementById("endingClear").play();
    // Remove the 'byebye' class after the animation completes
    setTimeout(() => {
        calculator.classList.remove('byebye');
    }, 1000); // Adjust the duration of the animation if needed
}


function delInput(){
    
    document.getElementById("resetClear").play();
     operationSpace.pop();
    screenDisplay();
   
   
}




