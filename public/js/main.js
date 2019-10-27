var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");

$(function(){
    console.log("Pagina carregou")
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    inicializaMarcadores();
    $("#btn-reiniciar").click(reiniciaJogo);
});

function atualizaTamanhoFrase() {
    var frase = $(".frase").text();
    var numPalavras = frase.split(" ").length;
    var tamanhoFrase = $("#tamanho-frase");

    tamanhoFrase.text(numPalavras);
}

function inicializaContadores() {

    campo.on("input", function(){
    var conteudo = campo.val();
    var qtdPalavras = conteudo.split(/\S+/).length - 1;
    $("#contador-palavras").text(qtdPalavras);
    var qtdCaracteres = conteudo.length;
    $("#contador-caracteres").text(qtdCaracteres);
});
}

function inicializaCronometro() {
    var tempoRestante = $("#tempo-digitacao").text();
    campo.one("focus", function(){
    var cronometroId = setInterval(function(){
        tempoRestante--;
        $("#tempo-digitacao").text(tempoRestante);
        if(tempoRestante < 1){
        campo.attr("disabled", true);
        clearInterval(cronometroId);
        campo.toggleClass("campo-desativado");
        }
    }, 1000);
});
}


function inicializaMarcadores() {
    var frase = $(".frase").text();
campo.on("input", function(){
    var digitado = campo.val();
    var comparavel = frase.substr(0, digitado.length);
    console.log("Digitado: " + digitado);
    console.log("Frase C.: " + comparavel);
    if (digitado == comparavel){
        campo.toggleClass("borda-verde");
    } else{
        campo.toggleClass("borda-vermelha");
    }

    console.log(digitado);
    console.log(frase);
});
}



function reiniciaJogo(params) {
    campo.attr("disabled", false);
    campo.val("");
    $("#contador-palavras").text("0");
    $("#contador-caracteres").text("0");
    $("#contador-palavras").text("0");
    $("#tempo-digitacao").text(tempoInicial);
    inicializaCronometro();
    campo.removeClass("campo-desativado");
    campo.removeClass("borda-verde");
    campo.removeClass("borda-vermelha");
}



