// global $ 



// Showing navbar when scrolling
$(window).scroll(function () {
    if($(window).scrollTop() >= 400) {
        $('.nav-bar').css({
            'display': 'block',
            'position': 'fixed',
            'width': '100%',
            'z-index': '999'
        })
    } else {
        $('.nav-bar').fadeOut(500)
    }

    // add class active depend on data scroll 

    $('section').each(function() {

        if($(window).scrollTop() > $(this).offset().top - 10) {

            var scrId = $(this).attr('id');

            $('a[data-scroll="' + scrId + '"]').parent('li').addClass('active').siblings().removeClass('active');
        }
    })



})

// scroll up
$('.scroll-up').click(function() {
    $('html, body').animate({
        scrollTop: 0
    })
})


// going to specific section by id

$('.navbar li a').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('#' + $(this).data('scroll')).offset().top
    }, 700);
    $(this).parent('li').addClass('active').siblings().removeClass('active');

})

// going to project section by view my work button

$('.header .under-title').click(function() {
    $('html, body').animate({
        scrollTop: $('section.projects').offset().top
    }, 700)
})