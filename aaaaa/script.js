const calcular = document.getElementById('calcular');

function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById
    ('resultado');

    

    if(home !="" && altura !="" && peso !=""){

    const valorIMC = (peso/(altura*altura)).toFixed(1);
    let classicacao = "";

    if(valorIMC > 18.5){
        classicacao = "abaixo do peso"
    }

    }

    resultado.textContent = `${nome} seu IMC é ${valorIMC}!`;
}

calcular.addEventListener('click',imc);