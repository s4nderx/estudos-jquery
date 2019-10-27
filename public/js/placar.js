function inserePlacar() {
    var corpoTabela = $(".placar").find("tbody");
    var usuario = "Phellipe";
    var numeroPalavras = $("#contador-palavras").text();
    var linha = novaLinha(usuario, numeroPalavras);
    linha.find(".botao-remover").click(removeLinha);


    corpoTabela.prepend(linha);
}

function novaLinha(usuario, palavras){
    var linha = $("<tr>");
    var colunaUsuario = $("<td>").text(usuario);
    var colunaPalavras = $("<td>").text(palavras);
    var colunaRemover = $("<td>");
    var link = $("<a>").addClass("botao-remover").attr("href", "#");
    var icone = $("<i>").addClass("small").addClass("material-icons").addClass("icones").text("delete_forever");
    link.append(icone);
    colunaRemover.append(link);
    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);
    return linha;
}
$(".botao-remover").click(removeLinha);
function removeLinha() {
    event.preventDefault();
    $(this).parent().parent().remove();
}