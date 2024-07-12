$('.openBar').click(function(){
    $('.sideBar').animate({width:'toggle', padding:'toggle'},700)
})

$('.close').click(function(){
    $('.sideBar').animate({width:'toggle', padding:'toggle'},700)
})


$("#singerDown .toggle").click(function() {
    $(".inner").not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
});

$('#countdown-active').countdown('2025/01/01', function (event) {
    $(this).html(event.strftime(' days :%M:%S'));
    $(this).html(event.strftime('<div class="single-countdown"><h2>%D</h2><span>Days</span></div> <div class="single-countdown"><h2>%H</h2><span>Hours</span></div> <div class="single-countdown"><h2>%M</h2><span>Minutes</span></div> <div class="single-countdown"><h2>%S</h2><span>Seconds</span></div>'));
});

let maxLength = 100;
$("textarea").attr("maxlength", maxLength);
$("textarea").keyup(function() {
    let length = $(this).val().length;
    let remainingChar = maxLength - length;
    if (remainingChar <= 0) {
        $("#chars").text("There are no available characters remaining");
    }else {
        $("#chars").text(remainingChar);
    }
})
