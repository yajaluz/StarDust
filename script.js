const $screen1 = document.querySelector('.screen1');

contNumbers();
var contNumbers = function(){
    $(document).on("input", ".code", function () {
        var limite = 11;
        var caracteresDigitados = $(this).val().length;
        var caracteresRestantes = limite - caracteresDigitados;
    
        $(".caracteres").text(caracteresRestantes);
    });
}