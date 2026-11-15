// Troca entre o tema escuro (padrão) e o tema claro.
// Só adiciona ou tira a classe "claro" no body; as cores ficam no CSS.
// A escolha fica guardada no navegador (localStorage), então vale para as duas páginas.
let botao = document.getElementById("btn_tema");
let texto = document.getElementById("texto_tema");

botao.addEventListener("click", function(){
    if (document.body.classList.contains("claro")) {
        document.body.classList.remove("claro");
        texto.innerText = "Tema escuro ativado. Clique para mudar para o tema claro.";
        localStorage.setItem("tema", "escuro");
    } else {
        document.body.classList.add("claro");
        texto.innerText = "Tema claro ativado. Clique para mudar para o tema escuro.";
        localStorage.setItem("tema", "claro");
    }
})

// Se a página abriu já no tema claro, atualiza o texto do botão para leitores de tela
if (document.body.classList.contains("claro")) {
    texto.innerText = "Tema claro ativado. Clique para mudar para o tema escuro.";
}