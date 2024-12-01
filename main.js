import {operations} from "./modules/operation.js"
const box1 = document.getElementById("box1")
const box2 = document.getElementById("box2")
const result = document.getElementById("result");
const buttons = document.querySelectorAll('button');

for( let i = 0 ; i< buttons.length; i++){
    buttons[i].addEventListener('click',()=>{
        let num1 = box1.value;
        let num2 = box2.value;
        switch(buttons[i].innerHTML){
            case "+":
                result.innerHTML = operations(Number(num1),Number(num2)).add;
            break;
            case "-":
                result.innerHTML = operations(Number(num1),Number(num2)).mines;
            break;
            case "*":
                result.innerHTML = operations(Number(num1),Number(num2)).mupltiple;
            break;
            case "/":
                result.innerHTML = operations(Number(num1),Number(num2)).divide;
            break;
        }
    });
}
