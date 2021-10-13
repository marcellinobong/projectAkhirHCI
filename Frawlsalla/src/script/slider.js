$(function () {
    $('.next').on('click', function () {
        var currentImg = $('.active');
        var nextImg = currentImg.next();
        var firstImg = currentImg.prevAll().last()
        if (nextImg.length > 0) {
            currentImg.removeClass('active').css('z-index', '-99');
            nextImg.addClass('active').css('z-index', '12')
        }
        else {
            currentImg.removeClass('active').css('z-index', '-99');
            firstImg.addClass('active').css('z-index', '12')
        }
    })

    $('.prev').on('click', function () {
        var currentImg = $('.active');
        var prevImg = currentImg.prev();
        var lastImg = currentImg.nextAll().last()
        if (prevImg.length > 0) {
            currentImg.removeClass('active').css('z-index', '-99');
            prevImg.addClass('active').css('z-index', '12')
        }
        else {
            currentImg.removeClass('active').css('z-index', '-99');
            lastImg.addClass('active').css('z-index', '12')
        }
    })


})