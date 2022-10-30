const displayValue = document.querySelector('.displayValue');
const buttons = document.querySelectorAll('.buttons');
let value;
let operator;


function add(a, b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function div(a,b){
    return a/b;
}

function mul(a, b){
    return a*b;
}

function operate(operant, a, b){
    switch(operant){
        case '+':
            return add(a,b);
        case '-':
            return sub(a,b);
        case '/':
            return div(a,b);
        case '*':
            return mul(a,b);
    }
}

// buttons.forEach(button=>{
//     button.addEventListener('click', (e)=>{
//         if(displayValue.value !== value.toString()){
//             if(e.target.innerText !== '+' && e.target.innerText !== '-' && e.target.innerText !== '*' && e.target.innerText !== '/'){
//                 displayValue.value += e.target.innerText;
//             }
//             else{
//                 // value1= Number(displayValue.value.replace(e.target.innerText, ''));
//                 value = operate(e.target.innerText, value, Number(displayValue.value.replace(e.target.innerText, '')));
//                 displayValue.value = '';
//                 displayValue.value = value;
//                 // console.log(value);
//             }
//         }else{
//             displayValue.value = '';
//             displayValue.value = e.target.innerText;
//         }
        
//     });
// });

buttons.forEach(button=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerText == 'clr'){
            displayValue.value = '';
            operator = undefined;
            value = undefined;
        }
        else if(e.target.innerText !== '+' && e.target.innerText !== '-' && e.target.innerText !== '*' && e.target.innerText !== '/'
        && e.target.innerText !== '='){ //checks if the button doesn't equal to operator
            if(displayValue.value !== value){ //value is not equal to display concatenate display values with the button text
                displayValue.value += e.target.innerText;
            }else{
                displayValue.value = '';  //else clear the display and put the button text
                displayValue.value = e.target.innerText;
            }
        }else{
            if(operator == undefined && value == undefined && e.target.innerText !== '='){ //at first operator and value is undefined and not equal to =, we check it, if it undefined assign value into it
                operator = e.target.innerText;
                value = displayValue.value.toString();
            }else{ //if the variables has values we calculate it with the functions
                if(value !== displayValue.value || e.target.innerText == '='){ //this one prevents executing calculation again if user presses operator again and again
                    displayValue.value = operate(operator, Number(value), Number(displayValue.value));
                    value = displayValue.value; //assign the calculated value back to value
                    if(e.target.innerText !== '='){ //this condition checks for =
                        operator = e.target.innerText; //assign the currently choose operant to operator
                    }else{
                        operator = undefined;
                        value = undefined;
                    }
                }
            }
            // displayValue.value = '';
            console.log(`value is ${value} and operator is ${operator}`);
        }
    });
});