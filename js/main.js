/* DISCOUNT ADRESS  */

$('.discount__adress').hover(
    function() {
        $(this).addClass('discount__text_hover')
        $(this).find('span').css('display', 'block')
    },
    function() {
        $('.discount__adress').find('span').css('display', 'none')
        $('.discount__adress').removeClass('discount__text_hover')
    })

$('.discount__show_adress').click(function() {
    $(this).closest('.discount__item').find('.discount__hidden').toggleClass('discount__hidden_show')
})

/* FAQ ITEM */

$('.faq__item').click(function() {

    if ($(this).find('.faq__item_answer').hasClass('faq__item_answer_open')) {
        $(this).find('.faq__item_status').text('+')
    } else {
        $(this).find('.faq__item_status').text('-')
    }

    $(this).find('.faq__item_answer').toggleClass('faq__item_answer_open');
    $(this).find('.faq__answer__text').toggleClass('faq__answer__text_visible')

    $(this).find('.faq__item_number').toggleClass('faq__item_number_open')
})

var bodyWidth = $('body').width()

if (bodyWidth < 491) {
    $('.info__full_logo').attr('src', 'image/logotypes__mb.png')

    $('.reasons').attr('style', 'display: none');
    $('.reviews').attr('style', 'display: none');
    $('.faq').attr('style', 'display: none');
    $('.info').attr('style', 'display: none');
    $('footer').attr('style', 'display: none');

}

$("body").scroll(function() {
    $('.reasons').attr('style', 'display: block');
    $('.reviews').attr('style', 'display: block');
    $('.faq').attr('style', 'display: block');
    $('.info').attr('style', 'display: block');
    $('footer').attr('style', 'display: block');
});

if (bodyWidth < 1024) {

    $('.coupon__price > img').attr('src', 'image/var_1_banner.png')
    $('..coupon__price').css('left', '0')
}