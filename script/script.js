(function($){

    const kia = {
        init() {
            this.header();
            this.section2();
            this.modal();
        },
        header() {
            $('.nav-btn').on({
                mouseenter() {
                    $('.sub').stop().slideUp(0);
                    $(this).next().stop().slideDown(200);

                    $('.nav-btn').removeClass('on');
                    $(this).addClass('on');
                },
                focusin() {
                    $('.sub').stop.slideUp(0);
                    $(this).next().stop().slideDown(300);

                    $('.nav-btn').removeClass('on');
                    $(this).addClass('on');
                }
            });

            $('.col').on({
                mouseleave() {
                    $('.sub').stop().slideUp(300);
                    $('.nav-btn').removeClass('on');
                }
            })
        },
        section1() {
            
        },
        section2() {
            let cnt = 0;
            function mainSlide() {
                $('.slide-wrap').stop().animate({ left: `${-33.333 * cnt}%` }, 600, function () {
                    if (cnt > 3) cnt = 0;
                    $('.slide-wrap').stop().animate({ left: `${-33.333 * cnt}%` }, 0);
                });
            }
            function nextCount() {
                cnt++;
                mainSlide();
            }
            function autoTimer() {
                setInterval(nextCount, 3000);
            }
            autoTimer();
        },
        modal() {
            $('.popup-open').on({
                click() {
                    $('.modal').addClass('on');
                }
            })
            $('.close').on({
                click() {
                    $('.modal').removeClass('on')
                }
            })
        },
    }
    kia.init();

})(jQuery);