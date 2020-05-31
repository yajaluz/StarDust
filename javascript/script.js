const $screen1 = document.querySelector('.screen1');


var contNumbers = function(){
    $(document).on("input", ".code", function () {
        var limite = 11;
        var caracteresDigitados = $(this).val().length;
        var caracteresRestantes = limite - caracteresDigitados;
    
        $(".caracteres").text(caracteresRestantes);
    });

}


// var inputText = function(){
//     var array=['I miss my friends', "I don't stop thinking about something","I'm anxiet with the future"];
//     var html='';

//     $(document).on(".retangle-rtg", function () {
//         $.each(array, function(key, value){
//             $('p').val(value);  
//         });

//     });

// }
