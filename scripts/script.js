const displayValue = document.querySelector('.displayValue');
const buttons = document.querySelectorAll('.buttons');
let displayArray = [];


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