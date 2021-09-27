    /* TOP BUTTON */

    var progressValue = document.querySelector('.progress');
    var RADIUS = 50;
    var CIRCUMFERENCE = 2 * Math.PI * RADIUS;

    function progress(value) {
        var progress = value / 100;
        var dashoffset = CIRCUMFERENCE * (1 - progress);
        progressValue.style.strokeDashoffset = dashoffset;
    }
    progressValue.style.strokeDasharray = CIRCUMFERENCE;
    var pageHeight = $(document).outerHeight(true);

    $(window).on('scroll', function() {
        var distanceScrolled = $(window).scrollTop();
        var scrollPercent = (distanceScrolled * 100) / pageHeight;
        progress(scrollPercent);
    });

    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();

        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    $(window).on('resize scroll', function() {
        if ($('.header').isInViewport()) {
            $('.scroll_up').removeClass('scroll_up_visible');
        } else {
            $('.scroll_up').addClass('scroll_up_visible');
        }
    });

    /* END */

    /* SMOOTH SCROLL */

    var $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 600);
        return false;
    });

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

    }

    if (bodyWidth < 1024) {

        $('.coupon__price > img').attr('src', 'image/Component 16.png')
    }