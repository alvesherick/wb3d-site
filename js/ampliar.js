// Foto ampliada no catálogo
let molduras = document.getElementsByClassName("moldura");
let ampliada = document.getElementById("ampliada");
let fotoGrande = document.getElementById("foto_grande");
let legendaGrande = document.getElementById("legenda_grande");
let botaoFechar = document.getElementById("fechar");
let ultimoBotao = null;

// Abrir: clicar em qualquer foto do catálogo
for (let i = 0; i < molduras.length; i++) {
    molduras[i].addEventListener("click", function(){
        let foto = molduras[i].getElementsByTagName("img")[0];
        let legenda = molduras[i].parentNode.getElementsByTagName("figcaption")[0];

        fotoGrande.src = foto.src;
        fotoGrande.alt = foto.alt;
        legendaGrande.innerText = legenda.innerText;

        ampliada.classList.add("aberta");
        document.body.classList.add("travado");
        ultimoBotao = molduras[i];
        botaoFechar.focus();
    })
}

// Fechar: clicar na tela escura, no X ou apertar Esc
function fechar(){
    ampliada.classList.remove("aberta");
    document.body.classList.remove("travado");
    if (ultimoBotao != null) {
        ultimoBotao.focus();
    }
}

ampliada.addEventListener("click", fechar);

document.addEventListener("keydown", function(evento){
    if (ampliada.classList.contains("aberta")) {
        if (evento.key == "Escape") {
            fechar();
        }
        if (evento.key == "Tab") {
            evento.preventDefault();
            botaoFechar.focus();
        }
    }
})