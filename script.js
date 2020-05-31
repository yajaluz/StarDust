const $screen1 = document.querySelector('.screen1');

var contNumbers = function(){
    $(document).on("input", "#TxtObservacoes", function () {
        var limite = 11;
        var caracteresDigitados = $(this).val().length;
        var caracteresRestantes = limite - caracteresDigitados;
    
        $(".caracteres").text(caracteresRestantes);
    });$(document).on("input", "#TxtObservacoes", function () {
        var limite = 255;
        var caracteresDigitados = $(this).val().length;
        var caracteresRestantes = limite - caracteresDigitados;
    
        $(".caracteres").text(caracteresRestantes);
    });

}