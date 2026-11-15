// Carrossel de categorias (usado no celular: um card por vez)
let cards = document.getElementsByClassName("card_categoria");
let pontos = document.getElementsByClassName("ponto");
let atual = 0;

function mostrar(numero){
    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.remove("ativo");
        pontos[i].classList.remove("ativo");
    }
    cards[numero].classList.add("ativo");
    pontos[numero].classList.add("ativo");
}

document.getElementById("seta_proxima").addEventListener("click", function(){
    atual = atual + 1;
    if (atual > cards.length - 1) { atual = 0; }
    mostrar(atual);
})

document.getElementById("seta_anterior").addEventListener("click", function(){
    atual = atual - 1;
    if (atual < 0) { atual = cards.length - 1; }
    mostrar(atual);
})
