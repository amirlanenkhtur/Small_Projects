let number1 = 0;
let number2 = 0;
let arithmeticTap = false;
const result = document.getElementById("result-section");

function press(num){
    if (arithmeticTap == false){
        number1 = number1*10 + num;
        result.innerHTML = `
        <div>
            <p> ${number1} </p>
        </div>
        ` 
    } else{
        number2 = number2*10 + num;
        result.innerHTML = `
        <div>
            <p> ${number1} ${arithmeticTap} ${number2} </p>
        </div>
        ` 
    }
}

function setOperator(op){
    arithmeticTap = op;
    result.innerHTML = `
    <div>
        <p> ${number1} ${arithmeticTap} </p>
    </div>
    `
}

function calculate(){
    if (arithmeticTap == "+"){
        number1 = number1 + number2;
        result.innerHTML = `
        <div>
            <p> ${number1} </p>
        </div>
        ` 
    } else if (arithmeticTap == "-"){
        number1 = number1 - number2;
        result.innerHTML = `
        <div>
            <p> ${number1} </p>
        </div>
        ` 
    } else if (arithmeticTap == "*"){
        number1 = number1 * number2;
        result.innerHTML = `
        <div>
            <p> ${number1} </p>
        </div>
        ` 
    } else if (arithmeticTap == "/"){
        number1 = number1 / number2;
        result.innerHTML = `
        <div>
            <p> ${number1} </p>
        </div>
        ` 
    }
    arithmeticTap = false;
    number1 = 0;
    number2 = 0;
}