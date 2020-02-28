var result = document.getElementById("result");
// Variaveis globais
var n1=0, n2=0;
var operacao="";


function onNumberClicked(numberButton){
    
    if(result.innerHTML == "0"){
        result.innerHTML = numberButton.innerHTML;
    }
    else{
        result.innerHTML += numberButton.innerHTML;
    }
}

function onClearClicked(){
    result.innerHTML = "0";
}

function onEqualsClicked(){
    
    n2=parseFloat(result.innerHTML) //atribuição e conversão para número
    if(operacao=="+"){
        result.innerHTML=n1+n2;
    }
    if (operacao=="-"){
        result.innerHTML=n1-n2;
    }
    if (operacao=="*"){
        result.innerHTML=n1*n2;
    }
    if (operacao=="/"){
        if(n2>0){
        result.innerHTML=n1/n2;
    }else{
        alert("Impossivel divisão por 0")
    }
}
    // operacao= operacao
    

    // result.innerHTML= operacao 
}

function onDivideClicked(){
    n1=parseInt(result.innerHTML) 
    operacao="/";
    result.innerHTML=0
    // n1=parseInt(result.innerHTML)
    // n2=parseInt(result.innerHTML)
    // operacao=n1/n2
    
    // return operacao;
 }



function onAddClicked(){
    n1=result.innerHTML
    n1=parseInt(n1)
    operacao="+";
    result.innerHTML=0
    // n1=parseInt(result.innerHTML)
    // n2=parseInt(result.innerHTML)
    // operacao=n1+n2
    
    // return operacao;
    // result.innerHTML =operacao
    // parseInt(operacao=(n1+n2))
}

function onSubtractClicked(){
    n1=parseInt(result.innerHTML) 
    operacao="-";
    result.innerHTML=0
    // n1=parseInt(result.innerHTML)
    // n2=parseInt(result.innerHTML)
    // operacao=n1-n2
    
    // return operacao;
    // result.innerHTML = operacao
    // parseInt(resultado=(n1-n2))
}
function onMultiplyCliked(){
    n1=parseInt(result.innerHTML) 
    operacao="*";
    result.innerHTML=0
    // n1=parseInt(result.innerHTML)
    // n2=parseInt(result.innerHTML)
    // operacao=n1*n2
    
    // return operacao;
}
