// Formulário de orçamento
let form = document.getElementById("form_orcamento");

form.addEventListener("submit", function(evento){
    evento.preventDefault();
    alert("Pedido enviado! Entraremos em contato em breve.");
    form.reset();
})
