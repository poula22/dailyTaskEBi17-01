let btnEqual = document.querySelector("#button_equal");
let btnNums = document.querySelectorAll(".button_nums");
let btnOperations = document.querySelectorAll(".button_operations");
let resultText=document.querySelector("#result_txt");

btnEqual.addEventListener("click",() => {
    let oldValue =resultText.value;
    let res=eval(resultText.value);
    resultText.value=res;
    alert("the result of "+oldValue+" : "+res);
});

btnNums.forEach(function(button){
    button.addEventListener("click", function() {
        resultText.value += button.value;
    });
});

btnOperations.forEach(function(button){
    button.addEventListener("click", function() {
        let op = resultText.value.slice(-1);
        if(op == "+" || op== "-" || op=="/" || op=="*"){
            return;
        }else{
            resultText.value += button.value;
        }
        
    });
});

function cl() {
    resultText.value = "";
}