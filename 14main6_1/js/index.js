//Чтобы сделать так,чтобы шапка прокручивалась вместе со скролом,
//нужно создать обработчик события,кот. будет отслеживать скролл
//при помощи JavaScript код будет выглядеть примерно так:
//window.onscroll =

//Но мы хотим это сделать при помощи jQuery
//обращаемся к document к методу scroll и прописываем ф-ию
$(document).scroll(function(){
    //если ширина документа меньше 1024px,то фиксировать шапку не будем
    if($(document).width() < 1024)
        return false;
    //узнаем сколько мы уже проскролили scrollTop - в пикселях
    //$('.ful-page' - обращаемся к нашему обьекту с главной картинкой
    if($(document).scrollTop() > $('.full-page').height()/2) 
        $("header").addClass("fixed");
        //беру header и добавляю к нему класс fixed
    else
        //удаляем класс
        $("header").removeClass("fixed");    
});

//вывод прокрутки в консоль(не онлайн)
// var scrol = $(document).scrollTop();
// console.log(scrol);

//повтор кода без коментов

// $(document).scroll(function(){
//     if($(document).width() < 1024)
//         return false;
//     if($(document).scrollTop() > $('.full-page').height() / 2)
//         $("header").addClass("fixed");
//     else
//         $("header").removeClass("fixed");
// });
