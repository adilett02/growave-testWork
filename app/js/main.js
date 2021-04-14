$(function () {
  //sticky-header
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $('.header').addClass('header-sticky');
    } else {
      $('.header').removeClass('header-sticky');
    }
  });

  //scroll
  // $('.menu-link').on('click', function () {
  //   $('html, body').animate(
  //     {
  //       scrollTop: $($(this).attr('href')).offset().top - $('header').height() + 'px',
  //     },
  //     {
  //       duration: 1000,
  //       easing: 'easeInOutExpo',
  //     },
  //   );
  // });
  // $('.back-to-top').on('click', function () {
  //   $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
  //   return false;
  // });

  const section = $('section'),
    nav = $('.header'),
    navHeight = nav.outerHeight();
  $(window).on('scroll', function () {
    const position = $(this).scrollTop();

    section.each(function () {
      const top = $(this).offset().top - navHeight - 100,
        bottom = top + $(this).outerHeight();

      if (position >= top && position <= bottom) {
        nav.find('a').removeClass('active-link');
        section.removeClass('active-section');

        $(this).addClass('active-section');
        nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active-link');
      }
    });
  });

  const mobilenav = $('.mobile-menu');

  $(window).on('scroll', function () {
    const position = $(this).scrollTop();

    section.each(function () {
      const top = $(this).offset().top - navHeight,
        bottom = top + $(this).outerHeight();

      if (position >= top && position <= bottom) {
        mobilenav.find('a').removeClass('active-link');
        section.removeClass('active-section');

        $(this).addClass('active-section');
        mobilenav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active-link');
      }
    });
  });

  $('body').on('click', '.toggle-menu', function (e) {
    var $this = $(this);
    e.preventDefault();

    if ($('body').hasClass('mobile-body')) {
      $('body').removeClass('mobile-body');
      $('body').find('.toggle-menu').removeClass('active');
    } else {
      $('body').addClass('mobile-body');
      $('body').find('.toggle-menu').addClass('active');
    }
  });

  lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
    fadeDuration: 100,
    resizeDuration: 100,
  });
});
