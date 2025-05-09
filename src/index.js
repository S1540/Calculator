let num1 = document.getElementById('num1');
let operators = document.getElementById('operators');
let num2 = document.getElementById('num2');
let result = document.getElementById('result');

function calculate() {
       const firstNum = parseFloat(num1.value);
       const op = operators.value;
       const secondNum = parseFloat(num2.value);

       switch(op){

              case '+':
                     result.value = firstNum + secondNum;
                     break;

              case '-':
                     result.value = firstNum - secondNum;
                     break;
              
              case '*':
                     result.value = firstNum * secondNum;
                     break;
                     
              case '/':
                     if(secondNum === 0) {
                            result.value = 'Pagal hai kya?'
                     }else{
                            result.value = firstNum / secondNum;
                            break;
                     }   
                     default:
                     result.value = 'Invalid Input.'   

       }
       num1.value = '';
       num2.value = '';
       operators.value = '';

}