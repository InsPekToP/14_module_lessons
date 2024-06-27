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


//добавляем обработчик для кнопки <div class="up-btn"> чтобы она
// перкидвывала нас на верх
//вибараем кнопку ".up-btn" вешаем обработчик события on,
//пишем команду,кот. он будет обрабатывать и дальше пишем ф-ию
//в ней выбираем теги html,body и пишем ф-ию .animate(позво-
//ляет анимировать каккой-либо тег по св-ам)
//исп-ем св-во scrollTop:0(jQuery св-во)-как бы говорим,что скролл равно 0
//и поэтому перекидывает вверх.Вторым пар-ом указываем скорость перехода
//'2000' - 2c,или 'slow'

$(".up-btn").on("click",function(){
    $("html,body").animate({
        scrollTop:0
    },'slow');
});

//теперь делаем обработчик на кнопку show-menu,чтобы при нажатии менялось
//в кнопке  hidden-menu right: -300px; на right: 0;
//выбираем hidden-menu и применяем ф-ию animate(св-во "right":0 через 500мс )
$("#show-menu").on("click",function(){
    $("#hidden-menu").animate({
        "right":0
    },500);
});

//теперь тоже самое для кнопки close
$("#hidden-menu .close").on("click",function(){
    $("#hidden-menu").animate({
        //когда пишем в пикселях,надо указывать кавычки
        "right":"-300px"
    },200);
});