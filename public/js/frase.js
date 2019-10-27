$("#btn-frase").click(fraseAleatoria);
$("#btn-frase-id").click(buscaFrase);

function fraseAleatoria() {
    $("#spinner").toggle();
    $(".frase").toggle();
    $.get("http://localhost:3000/frases", trocaFraseAleatoria)
    .fail(function(){
        $("#erro").show();
        setTimeout(function(){
            $("#erro").toggle();
        }, 3000)
    })
    .always(function(){
        $("#spinner").toggle();
    });
}

function trocaFraseAleatoria(data) {
    var frase = $(".frase");
    var numeroAleatorio = Math.floor(Math.random() * data.length);
    frase.text(data[numeroAleatorio].texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data[numeroAleatorio].tempo);
    $(".frase").toggle();
}

function buscaFrase(){
    $("#spinner").toggle();
    $(".frase").toggle();
    var fraseId = $("#frase-id").val();
    console.log("id da frase: " + fraseId)

    var dados = { id: fraseId };
    
    $.get("http://localhost:3000/frases", dados, trocaFrase)
    .fail(function(){
        $("#erro").show();
        setTimeout(function(){
            $("#erro").toggle();
        }, 3000)
    }).always(function(){
        $("#spinner").toggle();
    });
}

function trocaFrase(data) {
    var frase = $(".frase");
    frase.text(data.texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data.tempo);
    $(".frase").toggle();
}