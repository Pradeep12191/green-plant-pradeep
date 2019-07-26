
$(document).ready(() => {
    console.log('ready')
    // $('#banner-slider').animate({'transform': 'translateX(0)'}, 2000)
    $('#banner-slider').addClass('banner-animate');
    $('#banner-slider').animate({
        opacity: 1
    }, {
            duration: 1000,
            done: function () {
                console.log('completed')
                $('.about-card').animate({
                    height: '250px',
                    width: '450px'
                }, {
                        duration: 1000,
                        done: function () {
                            console.log('width compeletd')
                            $('.about-card-left').animate({
                                minWidth: '20%'
                            }, {
                                    done: function () {
                                        $('.hide').removeClass('hide');
                                        $('.img-container').css({
                                            transition: 'all ease-in-out 1s'
                                        })
                                        // $('.about-card-text').removeClass('hide');
                                        setTimeout(() => {
                                            $('html, body').animate({ scrollTop: 320 }, {
                                                duration: 1500,
                                                done: function () {
                                                    console.log('scroll done')
                                                    $('.service-card, .design-card').each(function (index) {
                                                        setTimeout(() => {
                                                            console.log(index);
                                                            // $(this).animate({opacity: 1});
                                                            $(this).css({ opacity: 1, transform: 'translateY(0)' })
                                                        }, 500 * index)

                                                    })
                                                }
                                            });
                                        }, 200)

                                    }
                                })
                        }
                    })
            }
        })
    $('#banner-right-color').addClass('banner-right-animate');

    $('.design-card.last-card').on('transitionend', function () {
        $('html, body').animate({ scrollTop: 820 }, {
            duration: 1500, done: function () {
                $('.contact-img').css({ transform: 'translateX(0%)', opacity: 1 });
            }
        })
    })

    $('.contact-img').on('transitionend', function () {
        $('.contact-card').css({ transform: 'translate(0)', opacity: 1 });
        $('.contact-left-color').css({ left: '-88px', width: '20%' })
        // $('.contact-card').css({transform: 'translateX(0%)', opacity: 1});

    })

    $('.contact-left-color').on('transitionend', function (event) {
        if (event.originalEvent.propertyName === 'left') {
            $('html, body').animate({ scrollTop: 1120 }, {
                duration: 1500, done: function () {
                    $('.goal-card').each(function (index) {
                        setTimeout(() => {
                            $(this).css({ transform: 'translate(0)', opacity: 1 })
                        }, 500 * index)
                    })
                }
            })
        }
    })

    $('.last-goal-card').on('transitionend', function () {
        $('html, body').animate({ scrollTop: 1550 }, { duration: 1500 });
    })

    $('.scroll-top-btn').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, { duration: 1500 });
    })
    let slideCount = $('.slide').length;
    $('.img-container').css({
        width: ($('.slide').length * 100) + '%'
    });
    let slideWidth = (100 / $('.slide').length);
    slideWidth = Math.round(slideWidth * 100) / 100;
    $('.slide').css({
        flex: '1 1 ' + slideWidth + '%',
        maxWidth: slideWidth + '%'
    });

    // go to last slide intial.
    let activeSlideIndex = 3;
    $('.img-container').css({
        transform: 'translateX(-' + (slideWidth * (slideCount - 1)) + '%)'
    })

    $('.left-arrow').attr('disabled', true)

    $('.left-arrow').on('click', function () {
        activeSlideIndex ++;
        slide();
    })
    $('.right-arrow').on('click', function () {
        activeSlideIndex--;

        slide();
    })

    function slide() {
        $('.img-container').css({
            transform: 'translateX(-' + (slideWidth * (activeSlideIndex - 1)) + '%)'
        })
        if (activeSlideIndex === 1) {
            $('.right-arrow').attr('disabled', true)
        } else if (activeSlideIndex === slideCount) {
            $('.left-arrow').attr('disabled', true)
        } else {
            $('.right-arrow').attr('disabled', false);
            $('.left-arrow').attr('disabled', false);
        }
    }
})

