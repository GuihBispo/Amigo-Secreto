//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo(){
    let amigo = document.querySelector('.input-name');
    if (amigo.value == ''){
        alert ('Por gentileza, insira um nome.');
    }else {
        if(amigos.includes(amigo.value)){
            alert('Este nome já foi adicionado.');
        }else{
            amigos.push(amigo.value);
            amigo.value = '';
        }
    }
    mostrarLista();
}
function mostrarLista (){
    let lista = document.querySelector('.name-list');
    lista.innerHTML = '';
    for (let i = 0; i< amigos.length; i++){
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}
function limparLista(){
    amigos = [];
    mostrarLista();
    let lista = document.querySelector('.name-list');
    lista.innerHTML = '';
    
}

function sortearAmigo(){
    if(amigos.length == 0){
        alert('Por gentileza, adicione um amigo antes de sortear');
    }else{
        let sorteado = Math.floor(Math.random()*amigos.length);
        let amigoSorteado = amigos[sorteado];
        let resultado = document.querySelector('.result-list');
        resultado.innerHTML = '';
        resultado.innerHTML = `O amigo secreto sorteado foi:<li>${amigoSorteado}</li>`;
        amigos
        
    }
    limparLista();
}