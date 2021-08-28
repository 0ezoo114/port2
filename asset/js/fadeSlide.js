$('#section10').height($('.sec10').width())

window.addEventListener('scroll', () => {
    if ($(window).scrollTop() >= $('#section10').offset().top) {
        $('.sec10').css({ marginLeft: -($(window).scrollTop() - $('#section10').offset().top) })
    }
})

var cnt = 1

setInterval(() => {
    cnt += 1

    if (cnt > 6) {
        cnt = 1
    }

    $('#section1 .img').css({
        background: `url(./asset/img/firstbigphoto${cnt}.jpg) no-repeat center / cover`
    })
}, 1500)

