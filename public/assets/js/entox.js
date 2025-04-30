(function ($) {
  ('use strict');

  /* ---- Login and Register Forms ---- */

  $('#register-form').submit(function (e) {
    e.preventDefault();
    var email = $('#register-email').val();
    var password = $('#register-password').val();

    var password2 = $('#register-password2').val();
    var name = $('#register-name').val();
    var surname = $('#register-surname').val();
    var phone = $('#register-phone').val();
    if (email && password && password2 && name && surname && phone) {
      if (password === password2) {
        console.log('passwords match');
        if ($('#register-terms').is(':checked')) {
          signUpUser(email, password, name, surname, phone);
        } else {
          alert(
            'Kullanım ve Gizlilik Politikası şartlarını kabul etmelisiniz.',
          );
          console.log('tickbox');
        }
      } else {
        alert('Şifreler farklı');
        console.log('passwords dont match');
      }
    } else {
      alert('Lütfen gerekli tüm alanları doldurunuz');
      console.log('missing info');
    }
  });

  $('#login-form').submit(function (e) {
    e.preventDefault();
    var email = $('#login-email').val();
    var password = $('#login-password').val();
    console.log(email, password);
    signInUser(email, password);
  });

  //localhost:3000/auth/signout

  /* ---- Logout ---- */

  $('#logout-button').click(function (e) {
    e.preventDefault();
    signOutUser();
  });

  /* ---- hesabım ---- */
  if ($('.tm-myaccount-dashboard').length > 0) {
    var name = localStorage.getItem('name');
    var surname = localStorage.getItem('surname');
    $('#name').text(name);
    $('#surname').text(surname);
    $('#name2').text(name);
    $('#surname2').text(surname);
  }

  /* ---- Quick Popup JS ---- */
  if ($('.quick-popup').length > 0) {
    $('.quick-popup').magnificPopup({
      type: 'iframe',
    });
  }

  /*------------ urls ---------*/
  if (
    document.location.pathname == '/derbent-kale-1.html' ||
    document.location.pathname == '/derbent-kale-2.html'
  ) {
    var disableDays = [
      '22-04-2025',
      '23-04-2025',
      '24-04-2025',
      '25-04-2025',

      '25-05-2025',
      '26-05-2025',
      '27-05-2025',
      '28-05-2025',
    ];

    console.log(disableDays);
  }

  if (
    document.location.pathname == '/derbent-villas.html' ||
    document.location.pathname == '/derbent-white.html'
  ) {
    var disableDays = [
      '12-05-2025',
      '13-05-2025',
      '14-05-2025',

      '05-06-2025',
      '06-06-2025',
      '07-06-2025',
    ];

    console.log(disableDays);
  }
  if (
    document.location.pathname == '/elbeyli-villas-2.html' ||
    document.location.pathname == '/elbeyli-villas-3.html'
  ) {
    var disableDays = [
      '23-04-2025',
      '24-04-2025',
      '25-04-2025',
      '26-04-2025',
      '27-04-2025',
      '28-04-2025',
    ];

    console.log(disableDays);
  }

  if (
    document.location.pathname == '/elbeyli-kuzeymen-2.html' ||
    document.location.pathname == '/elbeyli-kuzeymen-3.html'
  ) {
    var disableDays = [
      '12-05-2025',
      '13-05-2025',
      '14-05-2025',
      '15-05-2025',
      '16-05-2025',
      '17-05-2025',
    ];

    console.log(disableDays);
  }
  if (
    document.location.pathname == '/elbeyli-waterfall.html' ||
    document.location.pathname == '/fethiye-3+1.html'
  ) {
    var disableDays = [
      '02-05-2025',
      '03-05-2025',
      '04-05-2025',
      '05-05-2025',
      '06-05-2025',
      '17-06-2025',
      '18-06-2025',
      '19-06-2025',
      '20-06-2025',
      '21-06-2025',
      '22-06-2025',
      '23-06-2025',
    ];

    console.log(disableDays);
  }
  if (document.location.pathname == '/serefiye-stone.html') {
    var disableDays = [
      '12-05-2025',
      '13-05-2025',
      '14-05-2025',
      '25-05-2025',
      '26-05-2025',
      '27-05-2025',
    ];

    console.log(disableDays);
  }

  /* ---- datepicker ---- */

  if ($('#datepicker-inline').length) {
    function disableAllTheseDays(date) {
      var fDate = $.datepicker.formatDate('dd-mm-yy', date);
      var result = [true, ''];
      $.each(disableDays, function (k, d) {
        if (fDate === d) {
          result = [true, 'ui-state-highlight'];
        }
      });
      return result;
    }

    $('#datepicker-inline').datepicker({
      beforeShowDay: disableAllTheseDays,
    });
  }
  /* ---- Check if IOS and change path ---- */
  if ($('#reservation-button').length) {
    console.log('is IOS?' + iOS());
    if (iOS()) {
      $('#reservation-button').attr('href', 'reservation-ios.html');
      $('#reservation-button').removeClass('quick-popup');
    }
  }

  /*------------ Index pagination ---------*/
  $('.index-page-2').on('click', function () {
    $('#page-1').removeClass('active');
    $('#page-2').addClass('active');
    bringVillaspage2();
  });

  /* ---- bursa mugla buttons ---- */
  if ($('.banner-two__type-boxes').length > 0) {
    $('#select-1').on('change', function () {
      console.log('changed');

      var selectedIndex = $('#select-2').prop('selectedIndex');
      var itemsInDropDownList = $('#select-2 option').length;

      //  If we're not already selecting the last item in the drop down list, then increment the SelectedIndex
      if (selectedIndex < itemsInDropDownList - 1) {
        $('#select-2').prop('selectedIndex', selectedIndex + 1);
        console.log('opt2');
        $('.selectpicker').selectpicker('refresh');
        $('.villa-button').attr('href', 'villalar-mugla.html');
      } else {
        $('#select-2').prop('selectedIndex', selectedIndex - 1);
        console.log('opt1');
        $('.selectpicker').selectpicker('refresh');
        $('.villa-button').attr('href', 'villalar-bursa.html');
      }
    });
    $('#select-2').on('change', function () {
      console.log('changed');

      var selectedIndex = $('#select-1').prop('selectedIndex');
      var itemsInDropDownList = $('#select-1 option').length;

      //  If we're not already selecting the last item in the drop down list, then increment the SelectedIndex
      if (selectedIndex < itemsInDropDownList - 1) {
        $('#select-1').prop('selectedIndex', selectedIndex + 1);
        console.log('opt2');
        $('.selectpicker').selectpicker('refresh');
        $('.villa-button').attr('href', 'villalar-mugla.html');
      } else {
        $('#select-1').prop('selectedIndex', selectedIndex - 1);
        console.log('opt1');
        $('.selectpicker').selectpicker('refresh');
        $('.villa-button').attr('href', 'villalar-bursa.html');
      }
    });
  }

  if ($('.listing-top__map-show-hide').length) {
    $('.listing-top__map-show-hide').on('click', function () {
      $(this).toggleClass('hidden');
      var textElement = $(this).find('.listing-top__map-show-hide-text span');
      if (textElement.text() == textElement.data('text')) {
        textElement.text(textElement.data('toggle-text'));
      } else {
        textElement.text(textElement.data('text'));
      }
      $('.listing__map').toggleClass('hidden');
      $('.listing__content').toggleClass('hidden');
    });
  }

  if ($('.banner-bg-slide').length) {
    $('.banner-bg-slide').each(function () {
      var Self = $(this);
      var bgSlideOptions = Self.data('options');
      var bannerTwoSlides = Self.vegas(bgSlideOptions);
    });
  }

  //Pricing Tabs
  if ($('.pricing-tabs').length) {
    $('.pricing-tabs .tab-btns .tab-btn').on('click', function (e) {
      e.preventDefault();
      var target = $($(this).attr('data-tab'));

      if ($(target).hasClass('actve-tab')) {
        return false;
      } else {
        $('.pricing-tabs .tab-btns .tab-btn').removeClass('active-btn');
        $(this).addClass('active-btn');
        $('.pricing-tabs .pr-content .pr-tab').removeClass('active-tab');
        $(target).addClass('active-tab');
      }
    });
  }

  // Type Effect
  if ($('.typed-effect').length) {
    $('.typed-effect').each(function () {
      var typedStrings = $(this).data('strings');
      var typedTag = $(this).attr('id');
      var typed = new Typed('#' + typedTag, {
        typeSpeed: 100,
        backSpeed: 100,
        fadeOut: true,
        loop: true,
        strings: typedStrings.split(','),
      });
    });
  }

  // Popular Causes Progress Bar
  if ($('.count-bar').length) {
    $('.count-bar').appear(
      function () {
        var el = $(this);
        var percent = el.data('percent');
        $(el).css('width', percent).addClass('counted');
      },
      {
        accY: -50,
      },
    );
  }

  //Fact Counter + Text Count
  if ($('.count-box').length) {
    $('.count-box').appear(
      function () {
        var $t = $(this),
          n = $t.find('.count-text').attr('data-stop'),
          r = parseInt($t.find('.count-text').attr('data-speed'), 10);

        if (!$t.hasClass('counted')) {
          $t.addClass('counted');
          $({
            countNum: $t.find('.count-text').text(),
          }).animate(
            {
              countNum: n,
            },
            {
              duration: r,
              easing: 'linear',
              step: function () {
                $t.find('.count-text').text(Math.floor(this.countNum));
              },
              complete: function () {
                $t.find('.count-text').text(this.countNum);
              },
            },
          );
        }
      },
      {
        accY: 0,
      },
    );
  }

  // Accrodion
  if ($('.accrodion-grp').length) {
    var accrodionGrp = $('.accrodion-grp');
    accrodionGrp.each(function () {
      var accrodionName = $(this).data('grp-name');
      var Self = $(this);
      var accordion = Self.find('.accrodion');
      Self.addClass(accrodionName);
      Self.find('.accrodion .accrodion-content').hide();
      Self.find('.accrodion.active').find('.accrodion-content').show();
      accordion.each(function () {
        $(this)
          .find('.accrodion-title')
          .on('click', function () {
            if ($(this).parent().hasClass('active') === false) {
              $('.accrodion-grp.' + accrodionName)
                .find('.accrodion')
                .removeClass('active');
              $('.accrodion-grp.' + accrodionName)
                .find('.accrodion')
                .find('.accrodion-content')
                .slideUp();
              $(this).parent().addClass('active');
              $(this).parent().find('.accrodion-content').slideDown();
            }
          });
      });
    });
  }

  // Explore Rent Carousel
  if ($('.explore-rent__carousel').length) {
    $('.explore-rent__carousel').owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      smartSpeed: 500,
      autoHeight: false,
      autoplay: true,
      dots: false,
      autoplayTimeout: 10000,
      navText: [
        '<span class="icon-right-arrow left"></span>',
        '<span class="icon-right-arrow"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        800: {
          items: 2,
        },
        1024: {
          items: 2,
        },
        1200: {
          items: 3,
        },
      },
    });
  }

  // Types Carousel
  if ($('.types__carousel').length) {
    $('.types__carousel').owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      smartSpeed: 500,
      autoHeight: false,
      autoplay: true,
      dots: false,
      autoplayTimeout: 10000,
      navText: [
        '<span class="icon-right-arrow left"></span>',
        '<span class="icon-right-arrow"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        800: {
          items: 3,
        },
        1024: {
          items: 3,
        },
        1200: {
          items: 5,
        },
      },
    });
  }

  // Types Carousel
  if ($('.testimonials-one__carousel').length) {
    $('.testimonials-one__carousel').owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      smartSpeed: 500,
      autoHeight: false,
      autoplay: true,
      dots: false,
      autoplayTimeout: 10000,
      navText: [
        '<span class="icon-right-arrow left"></span>',
        '<span class="icon-right-arrow"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        800: {
          items: 2,
        },
        1024: {
          items: 3,
        },
        1200: {
          items: 3,
        },
      },
    });
  }

  // Gallery One Carousel
  if ($('.gallery-one__carousel').length) {
    $('.gallery-one__carousel').owlCarousel({
      loop: true,
      margin: 20,
      nav: false,
      smartSpeed: 500,
      autoHeight: false,
      autoplay: true,
      dots: false,
      autoplayTimeout: 10000,
      navText: [
        '<span class="icon-right-arrow left"></span>',
        '<span class="icon-right-arrow"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        800: {
          items: 2,
        },
        1024: {
          items: 3,
        },
        1200: {
          items: 5,
        },
      },
    });
  }

  if ($('.scroll-to-target').length) {
    $('.scroll-to-target').on('click', function () {
      var target = $(this).attr('data-target');
      // animate
      $('html, body').animate(
        {
          scrollTop: $(target).offset().top,
        },
        100,
      );

      return false;
    });
  }

  if ($('.scroll-to-bottom').length) {
    $('.scroll-to-target').on('click', function () {
      var target = $(this).attr('data-target');
      // animate
      $('html, body').animate(
        {
          scrollBottom: $(target).offset().bottom,
        },
        100,
      );

      return false;
    });
  }

  if ($('.contact-form-validated').length) {
    $('.contact-form-validated').validate({
      // initialize the plugin
      rules: {
        name: {
          required: true,
        },
        email: {
          required: true,
          email: true,
        },
        message: {
          required: true,
        },
        subject: {
          required: true,
        },
      },
      submitHandler: function (form) {
        // sending value with ajax request
        $.post(
          $(form).attr('action'),
          $(form).serialize(),
          function (response) {
            $(form).parent().find('.result').append(response);
            $(form).find('input[type="text"]').val('');
            $(form).find('input[type="email"]').val('');
            $(form).find('textarea').val('');
          },
        );
        return false;
      },
    });
  }

  // mailchimp form
  if ($('.mc-form').length) {
    $('.mc-form').each(function () {
      var Self = $(this);
      var mcURL = Self.data('url');
      var mcResp = Self.parent().find('.mc-form__response');

      Self.ajaxChimp({
        url: mcURL,
        callback: function (resp) {
          // appending response
          mcResp.append(function () {
            return '<p class="mc-message">' + resp.msg + '</p>';
          });
          // making things based on response
          if (resp.result === 'success') {
            // Do stuff
            Self.removeClass('errored').addClass('successed');
            mcResp.removeClass('errored').addClass('successed');
            Self.find('input').val('');

            mcResp.find('p').fadeOut(10000);
          }
          if (resp.result === 'error') {
            Self.removeClass('successed').addClass('errored');
            mcResp.removeClass('successed').addClass('errored');
            Self.find('input').val('');

            mcResp.find('p').fadeOut(10000);
          }
        },
      });
    });
  }

  if ($('.video-popup').length) {
    $('.video-popup').magnificPopup({
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: true,

      fixedContentPos: false,
    });
  }

  if ($('.img-popup').length) {
    var groups = {};
    $('.img-popup').each(function () {
      var id = parseInt($(this).attr('data-group'), 10);

      if (!groups[id]) {
        groups[id] = [];
      }

      groups[id].push(this);
    });

    $.each(groups, function () {
      $(this).magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        gallery: {
          enabled: true,
        },
      });
    });
  }

  function dynamicCurrentMenuClass(selector) {
    let FileName = window.location.href.split('/').reverse()[0];

    selector.find('li').each(function () {
      let anchor = $(this).find('a');
      if ($(anchor).attr('href') == FileName) {
        $(this).addClass('current');
      }
    });
    // if any li has .current elmnt add class
    selector.children('li').each(function () {
      if ($(this).find('.current').length) {
        $(this).addClass('current');
      }
    });
    // if no file name return
    if ('' == FileName) {
      selector.find('li').eq(0).addClass('current');
    }
  }

  if ($('.main-menu__list').length && $('.mobile-nav__container').length) {
    let navContent = document.querySelector('.main-menu__list').outerHTML;
    let mobileNavContainer = document.querySelector('.mobile-nav__container');

    mobileNavContainer.innerHTML = navContent;
  }
  if ($('.sticky-header__content').length) {
    let navContent = document.querySelector('.main-menu').innerHTML;
    let mobileNavContainer = document.querySelector('.sticky-header__content');
    mobileNavContainer.innerHTML = navContent;
  }

  if ($('.mobile-nav__container .main-menu__list').length) {
    let dropdownAnchor = $(
      '.mobile-nav__container .main-menu__list .dropdown > a',
    );
    dropdownAnchor.each(function () {
      let self = $(this);
      let toggleBtn = document.createElement('BUTTON');
      toggleBtn.setAttribute('aria-label', 'dropdown toggler');
      toggleBtn.innerHTML = "<i class='fa fa-angle-down'></i>";
      self.append(function () {
        return toggleBtn;
      });
      self.find('button').on('click', function (e) {
        e.preventDefault();
        let self = $(this);
        self.toggleClass('expanded');
        self.parent().toggleClass('expanded');
        self.parent().parent().children('ul').slideToggle();
      });
    });
  }

  if ($('.mobile-nav__toggler').length) {
    $('.mobile-nav__toggler').on('click', function (e) {
      e.preventDefault();
      $('.mobile-nav__wrapper').toggleClass('expanded');
      $('body').toggleClass('locked');
    });
  }

  if ($('.search-toggler').length) {
    $('.search-toggler').on('click', function (e) {
      e.preventDefault();
      $('.search-popup').toggleClass('active');
      $('.mobile-nav__wrapper').removeClass('expanded');
      $('body').toggleClass('locked');
    });
  }

  if ($('.odometer').length) {
    var odo = $('.odometer');
    odo.each(function () {
      $(this).appear(function () {
        var countNumber = $(this).attr('data-count');
        $(this).html(countNumber);
      });
    });
  }

  if ($('.dynamic-year').length) {
    let date = new Date();
    $('.dynamic-year').html(date.getFullYear());
  }

  if ($('.wow').length) {
    var wow = new WOW({
      boxClass: 'wow', // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      mobile: true, // trigger animations on mobile devices (default is true)
      live: true, // act on asynchronously loaded content (default is true)
    });
    wow.init();
  }

  if ($('#donate-amount__predefined').length) {
    let donateInput = $('#donate-amount');
    $('#donate-amount__predefined')
      .find('li')
      .on('click', function (e) {
        e.preventDefault();
        let amount = $(this).find('a').text();
        donateInput.val(amount);
        $('#donate-amount__predefined').find('li').removeClass('active');
        $(this).addClass('active');
      });
  }

  if ($('.thm-accordion').length) {
    let accordionWrapper = $('.thm-accordion');
    accordionWrapper.each(function () {
      let $this = $(this);
      let accordionID = $this.attr('id');
      let accordionTitle = $this.find('.thm-accordion__title');
      $this.addClass(accordionID);
      // default hide
      let mainAccordionContent = $this.find('.thm-accordion__content').hide();
      $this.find('.active-item .thm-accordion__content').show();
      // on title click
      accordionTitle.on('click', function (e) {
        e.preventDefault();
        let $this = $(this);
        let accordionItem = $(this).parent();
        if (false === accordionItem.hasClass('active-item')) {
          $('#' + accordionID)
            .find('.thm-accordion__item')
            .removeClass('active-item');
          accordionItem.addClass('active-item');
          mainAccordionContent.slideUp();
          accordionItem.find('.thm-accordion__content').slideDown();
        }
      });
    });
  }

  $('.add').on('click', function () {
    if ($(this).prev().val() < 999) {
      $(this)
        .prev()
        .val(+$(this).prev().val() + 1);
    }
  });
  $('.sub').on('click', function () {
    if ($(this).next().val() > 1) {
      if ($(this).next().val() > 1)
        $(this)
          .next()
          .val(+$(this).next().val() - 1);
    }
  });

  if ($('.tabs-box').length) {
    $('.tabs-box .tab-buttons .tab-btn').on('click', function (e) {
      e.preventDefault();
      var target = $($(this).attr('data-tab'));

      if ($(target).is(':visible')) {
        return false;
      } else {
        target
          .parents('.tabs-box')
          .find('.tab-buttons')
          .find('.tab-btn')
          .removeClass('active-btn');
        $(this).addClass('active-btn');
        target
          .parents('.tabs-box')
          .find('.tabs-content')
          .find('.tab')
          .fadeOut(0);
        target
          .parents('.tabs-box')
          .find('.tabs-content')
          .find('.tab')
          .removeClass('active-tab');
        $(target).fadeIn(300);
        $(target).addClass('active-tab');
      }
    });
  }

  if ($('.range-slider-price').length) {
    var priceRange = document.getElementById('range-slider-price');

    noUiSlider.create(priceRange, {
      start: [30, 150],
      limit: 200,
      behaviour: 'drag',
      connect: true,
      range: {
        min: 10,
        max: 200,
      },
    });

    var limitFieldMin = document.getElementById('min-value-rangeslider');
    var limitFieldMax = document.getElementById('max-value-rangeslider');

    priceRange.noUiSlider.on('update', function (values, handle) {
      (handle ? $(limitFieldMax) : $(limitFieldMin)).text(values[handle]);
    });
  }

  function thmSwiperInit() {
    // swiper slider
    const swiperElm = document.querySelectorAll('.thm-swiper__slider');
    swiperElm.forEach(function (swiperelm) {
      const swiperOptions = JSON.parse(swiperelm.dataset.swiperOptions);
      let thmSwiperSlider = new Swiper(swiperelm, swiperOptions);
    });
  }

  function thmTinyInit() {
    // tiny slider
    const tinyElm = document.querySelectorAll('.thm-tiny__slider');
    tinyElm.forEach(function (tinyElm) {
      const tinyOptions = JSON.parse(tinyElm.dataset.tinyOptions);
      let thmTinySlider = tns(tinyOptions);
    });
  }

  function thmTestimonialsThumbCarousel() {
    if ($('#testimonials-one__thumb').length) {
      let testimonialsThumb = new Swiper('#testimonials-one__thumb', {
        slidesPerView: 3,
        spaceBetween: 0,
        speed: 1400,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        autoplay: {
          delay: 5000,
        },
      });

      let testimonialsCarousel = new Swiper('#testimonials-one__carousel', {
        observer: true,
        observeParents: true,
        speed: 1400,
        mousewheel: true,
        slidesPerView: 1,
        autoplay: {
          delay: 5000,
        },
        thumbs: {
          swiper: testimonialsThumb,
        },
      });
    }
  }

  // ===Project===
  function projectMasonaryLayout() {
    if ($('.masonary-layout').length) {
      $('.masonary-layout').isotope({
        layoutMode: 'masonry',
      });
    }
    if ($('.post-filter').length) {
      $('.post-filter li')
        .children('.filter-text')
        .on('click', function () {
          var Self = $(this);
          var selector = Self.parent().attr('data-filter');
          $('.post-filter li').removeClass('active');
          Self.parent().addClass('active');
          $('.filter-layout').isotope({
            filter: selector,
            animationOptions: {
              duration: 500,
              easing: 'linear',
              queue: false,
            },
          });
          return false;
        });
    }

    if ($('.post-filter.has-dynamic-filters-counter').length) {
      // var allItem = $('.single-filter-item').length;
      var activeFilterItem = $('.post-filter.has-dynamic-filters-counter').find(
        'li',
      );
      activeFilterItem.each(function () {
        var filterElement = $(this).data('filter');
        var count = $('.filter-layout').find(filterElement).length;
        $(this)
          .children('.filter-text')
          .append('<span class="count">' + count + '</span>');
      });
    }
  }

  // window load event

  $(window).on('load', function () {
    if ($('.preloader').length) {
      $('.preloader').fadeOut();
    }
    thmSwiperInit();
    thmTinyInit();
    thmTestimonialsThumbCarousel();
    projectMasonaryLayout();

    if ($('.circle-progress').length) {
      $('.circle-progress').appear(function () {
        let circleProgress = $('.circle-progress');
        circleProgress.each(function () {
          let progress = $(this);
          let progressOptions = progress.data('options');
          progress.circleProgress(progressOptions);
        });
      });
    }
    if ($('.post-filter').length) {
      var postFilterList = $('.post-filter li');
      // for first init
      $('.filter-layout').isotope({
        filter: '.filter-item',
        animationOptions: {
          duration: 500,
          easing: 'linear',
          queue: false,
        },
      });
      // on click filter links
      postFilterList.on('click', function () {
        var Self = $(this);
        var selector = Self.attr('data-filter');
        postFilterList.removeClass('active');
        Self.addClass('active');

        $('.filter-layout').isotope({
          filter: selector,
          animationOptions: {
            duration: 500,
            easing: 'linear',
            queue: false,
          },
        });
        return false;
      });
    }

    if ($('.post-filter.has-dynamic-filter-counter').length) {
      // var allItem = $('.single-filter-item').length;

      var activeFilterItem = $('.post-filter.has-dynamic-filter-counter').find(
        'li',
      );

      activeFilterItem.each(function () {
        var filterElement = $(this).data('filter');
        var count = $('.filter-layout').find(filterElement).length;
        $(this).append('<sup>[' + count + ']</sup>');
      });
    }

    //Testimonials Two
    if ($('.listing-details__gallery .bxslider').length) {
      $('.listing-details__gallery .bxslider').bxSlider({
        nextSelector: '.listing-details__gallery #slider-next',
        prevSelector: '.listing-details__gallery #slider-prev',
        nextText: '<i class="icon-right-arrow1"></i>',
        prevText: '<i class="icon-right-arrow1 icon-prev"></i>',
        mode: 'horizontal',
        auto: 'true',
        speed: '500',
        pagerCustom:
          '.listing-details__gallery .slider-pager .listing-details__thumb-box',
      });
    }
  });

  // window scroll event

  $(window).on('scroll', function () {
    if ($('.stricked-menu').length) {
      var headerScrollPos = 630;
      var stricky = $('.stricked-menu');
      if ($(window).scrollTop() > headerScrollPos) {
        stricky.addClass('stricky-fixed');
      } else if ($(this).scrollTop() <= headerScrollPos) {
        stricky.removeClass('stricky-fixed');
      }
    }
    if ($('.scroll-to-top').length) {
      var strickyScrollPos = 100;
      if ($(window).scrollTop() > strickyScrollPos) {
        $('.scroll-to-top').fadeIn(500);
      } else if ($(this).scrollTop() <= strickyScrollPos) {
        $('.scroll-to-top').fadeOut(500);
      }
    }
  });

  if ($('.before-after-twentytwenty').length) {
    $('.before-after-twentytwenty').each(function () {
      var Self = $(this);
      var objName = Self.attr('id');
      $('#' + objName).twentytwenty();

      // hack for bs tab
      $(document).on('shown.bs.tab', 'a[data-toggle="tab"]', function (e) {
        var paneTarget = $(e.target).attr('data-target');
        var $thePane = $('.tab-pane' + paneTarget);
        var twentyTwentyContainer = '#' + objName;
        var twentyTwentyHeight = $thePane.find(twentyTwentyContainer).height();
        if (0 === twentyTwentyHeight) {
          $thePane.find(twentyTwentyContainer).trigger('resize');
        }
      });
    });
  }

  // sort villas
  /*------------ Order by xxx ---------*/

  $('#order')
    .val('1')
    .change(function () {
      if ($(this).val() == '1') {
        //default
        location.reload();
      }
      if ($(this).val() == '2') {
        $('#order option[value=2]').attr('selected', true);
        $('#villas-grid').insertAfter('#villas-grid-2');
        $('#villas-grid-3').insertAfter('#villas-grid-2');
      }
      if ($(this).val() == '3') {
        $('#product option[value=3]').attr('selected', true);
        sortVillasByPriceAsc();
      }
      if ($(this).val() == '4') {
        $('#product option[value=4]').attr('selected', true);
        sortVillasByPriceDesc();
      }
    });
})(jQuery);

//functions

//sort by price
function sortVillasByPriceAsc() {
  $("#villas-grid").empty();
  $("#villas-grid-2").empty();
  $("#villas-grid-3").empty();

  $("#villas-grid").append(
    $("<div>")
      .addClass("explore-rent__single col-xl-4")
      .append(
        $("<a>")
          .attr({ href: "./derbent-kale-1.html" })
          .append(
            $("<div>")
              .addClass("explore-rent__img")
              .append(
                $("<img>").attr({
                  src: "https://tasmahal.s3.eu-north-1.amazonaws.com/cards/derbent-kale-11-kart.webp",
                  alt: "",
                })
              )
              .append(
                $("<div>")
                  .addClass("explore-rent__icon")
                  .append($("<i>").addClass("fa fa-heart"))
              )
          )
      )
      .append(
        $("<div>")
          .addClass("explore-rent__content")
          .append($("<h5>").addClass("explore-rent__sub-title"))
          .append(
            $("<h3>")
              .addClass("explore-rent__title")
              .append(
                $("<a>")
                  .attr({ href: "derbent-kale-1.html" })
                  .text("Derbent Kale 1+1")
              )
          )
          .append(
            $("<p>")
              .addClass("explore-rent__price")
              .append($("<span>").text("7.000 TL"))
          )
          .append(
            $("<ul>")
              .addClass("list-unstyled explore-rent__details")
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("80 m²")
                )
              )
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("1 Yatak")
                )
              )
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("2-4 kişi")
                )
              )
          )
          .append($("<h5>").text("Derbent, İznik, Bursa"))
      )
  );
  $("#villas-grid").append(
    $("<div>")
      .addClass("explore-rent__single col-xl-4")
      .append(
        $("<a>")
          .attr({ href: "./elbeyli-kuzeymen-2.html" })
          .append(
            $("<div>")
              .addClass("explore-rent__img")
              .append(
                $("<img>").attr({
                  src: "https://tasmahal.s3.eu-north-1.amazonaws.com/cards/kuzeymen-21.webp",
                  alt: "",
                })
              )
              .append(
                $("<div>")
                  .addClass("explore-rent__icon")
                  .append($("<i>").addClass("fa fa-heart"))
              )
          )
      )
      .append(
        $("<div>")
          .addClass("explore-rent__content")
          .append($("<h5>").addClass("explore-rent__sub-title"))
          .append(
            $("<h3>")
              .addClass("explore-rent__title")
              .append(
                $("<a>")
                  .attr({ href: "elbeyli-kuzeymen-2.html" })
                  .text("Kuzeymen 2+1")
              )
          )
          .append(
            $("<p>")
              .addClass("explore-rent__price")
              .append($("<span>").text("8.000 TL "))
          )
          .append(
            $("<ul>")
              .addClass("list-unstyled explore-rent__details")
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("120 m²")
                )
              )
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("2 Yatak")
                )
              )
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("4-6 kişi")
                )
              )
          )
          .append($("<h5>").text("Elbeyli, İznik, Bursa"))
      )
  );
  $("#villas-grid").append(
    $("<div>")
      .addClass("explore-rent__single col-xl-4")
      .append(
        $("<a>")
          .attr({ href: "./derbent-kale-2.html" })
          .append(
            $("<div>")
              .addClass("explore-rent__img")
              .append(
                $("<img>").attr({
                  src: "https://tasmahal.s3.eu-north-1.amazonaws.com/cards/derbent-kale-21-kart.webp",
                  alt: "",
                })
              )
              .append(
                $("<div>")
                  .addClass("explore-rent__icon")
                  .append($("<i>").addClass("fa fa-heart"))
              )
          )
      )
      .append(
        $("<div>")
          .addClass("explore-rent__content")
          .append($("<h5>").addClass("explore-rent__sub-title"))
          .append(
            $("<h3>")
              .addClass("explore-rent__title")
              .append(
                $("<a>")
                  .attr({ href: "derbent-kale-2.html" })
                  .text("Derbent Kale 2+1")
              )
          )
          .append(
            $("<p>")
              .addClass("explore-rent__price")
              .append($("<span>").text("10.000 TL "))
          )
          .append(
            $("<ul>")
              .addClass("list-unstyled explore-rent__details")
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("120 m²")
                )
              )
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("2 Yatak")
                )
              )
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("4-6 kişi")
                )
              )
          )
          .append($("<h5>").text("Derbent, İznik, Bursa"))
      )
  );
  //g2
  $("#villas-grid-2").append(
    $("<div>")
      .addClass("explore-rent__single col-xl-4")
      .append(
        $("<a>")
          .attr({ href: "./elbeyli-villas-2.html" })
          .append(
            $("<div>")
              .addClass("explore-rent__img")
              .append(
                $("<img>").attr({
                  src: "https://tasmahal.s3.eu-north-1.amazonaws.com/cards/derbent-white-kart.webp",
                  alt: "",
                })
              )
              .append(
                $("<div>")
                  .addClass("explore-rent__icon")
                  .append($("<i>").addClass("fa fa-heart"))
              )
          )
      )
      .append(
        $("<div>")
          .addClass("explore-rent__content")
          .append($("<h5>").addClass(""))
          .append(
            $("<h3>")
              .addClass("explore-rent__title")
              .append(
                $("<a>")
                  .attr({ href: "elbeyli-villas-2.html" })
                  .text("Elbeyli Villas 2+1")
              )
          )
          .append(
            $("<p>")
              .addClass("explore-rent__price")
              .append($("<span>").text("10.000 TL "))
          )
          .append(
            $("<ul>")
              .addClass("list-unstyled explore-rent__details")
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("125 m²")
                )
              )
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("2 Yatak")
                )
              )
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("4-6 kişi")
                )
              )
          )
          .append($("<h5>").text("Elbeyli, İznik, Bursa"))
      )
  );
  $("#villas-grid-2").append(
    $("<div>")
      .addClass("explore-rent__single col-xl-4")
      .append(
        $("<a>")
          .attr({ href: "./elbeyli-kuzeymen-3.html" })
          .append(
            $("<div>")
              .addClass("explore-rent__img")
              .append(
                $("<img>").attr({
                  src: "https://tasmahal.s3.eu-north-1.amazonaws.com/cards/kuzeymen-31-kapak.webp",
                  alt: "",
                })
              )
              .append(
                $("<div>")
                  .addClass("explore-rent__icon")
                  .append($("<i>").addClass("fa fa-heart"))
              )
          )
      )
      .append(
        $("<div>")
          .addClass("explore-rent__content")
          .append($("<h5>").addClass("explore-rent__sub-title"))
          .append(
            $("<h3>")
              .addClass("explore-rent__title")
              .append(
                $("<a>")
                  .attr({ href: "elbeyli-kuzeymen-3.html" })
                  .text("Kuzeymen 3+1")
              )
          )
          .append(
            $("<p>")
              .addClass("explore-rent__price")
              .append($("<span>").text("10.000 TL "))
          )
          .append(
            $("<ul>")
              .addClass("list-unstyled explore-rent__details")
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("150 m²")
                )
              )
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("3 Yatak")
                )
              )
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("6-8 kişi")
                )
              )
          )
          .append($("<h5>").text("Elbeyli, İznik, Bursa"))
      )
  );
  $("#villas-grid-2").append(
    $("<div>")
      .addClass("explore-rent__single col-xl-4")
      .append(
        $("<a>")
          .attr({ href: "./derbent-villas.html" })
          .append(
            $("<div>")
              .addClass("explore-rent__img")
              .append(
                $("<img>").attr({
                  src: "https://tasmahal.s3.eu-north-1.amazonaws.com/cards/derbent-white-kart.webp",
                  alt: "",
                })
              )
              .append(
                $("<div>")
                  .addClass("explore-rent__icon")
                  .append($("<i>").addClass("fa fa-heart"))
              )
          )
      )
      .append(
        $("<div>")
          .addClass("explore-rent__content")
          .append($("<h5>").addClass("explore-rent__sub-title"))
          .append(
            $("<h3>")
              .addClass("explore-rent__title")
              .append(
                $("<a>")
                  .attr({ href: "derbent-villas.html" })
                  .text("Derbent Villas")
              )
          )
          .append(
            $("<p>")
              .addClass("explore-rent__price")
              .append($("<span>").text("10.000 TL "))
          )
          .append(
            $("<ul>")
              .addClass("list-unstyled explore-rent__details")
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("125 m²")
                )
              )
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("2 Yatak")
                )
              )
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("4-6 kişi")
                )
              )
          )
          .append($("<h5>").text("Derbent, İznik, Bursa"))
      )
  );

  $("#villas-grid-3").append(
    $("<div>")
      .addClass("explore-rent__single col-xl-4")
      .append(
        $("<a>")
          .attr({ href: "./elbeyli-villas-3.html" })
          .append(
            $("<div>")
              .addClass("explore-rent__img")
              .append(
                $("<img>").attr({
                  src: "https://tasmahal.s3.eu-north-1.amazonaws.com/cards/elbeyli-villas-31.webp",
                  alt: "",
                })
              )
              .append(
                $("<div>")
                  .addClass("explore-rent__icon")
                  .append($("<i>").addClass("fa fa-heart"))
              )
          )
      )
      .append(
        $("<div>")
          .addClass("explore-rent__content")
          .append($("<h5>").addClass("explore-rent__sub-title"))
          .append(
            $("<h3>")
              .addClass("explore-rent__title")
              .append(
                $("<a>")
                  .attr({ href: "./elbeyli-villas-3.html" })
                  .text("Elbeyli Villas 3+1")
              )
          )
          .append(
            $("<p>")
              .addClass("explore-rent__price")
              .append($("<span>").text("12.000 TL"))
          )
          .append(
            $("<ul>")
              .addClass("list-unstyled explore-rent__details")
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("160 m²")
                )
              )
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("3 Yatak")
                )
              )
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("6-8 kişi")
                )
              )
          )
          .append($("<h5>").text("Elbeyli, İznik, Bursa"))
      )
  );
  $("#villas-grid-3").append(
    $("<div>")
      .addClass("explore-rent__single col-xl-4")
      .append(
        $("<a>")
          .attr({ href: "./elbeyli-waterfall.html" })
          .append(
            $("<div>")
              .addClass("explore-rent__img")
              .append(
                $("<img>").attr({
                  src: "https://tasmahal.s3.eu-north-1.amazonaws.com/cards/waterfall-kart-grid.webp",
                  alt: "",
                })
              )
              .append(
                $("<div>")
                  .addClass("explore-rent__icon")
                  .append($("<i>").addClass("fa fa-heart"))
              )
          )
      )
      .append(
        $("<div>")
          .addClass("explore-rent__content")
          .append(
            $("<a>")
              .attr({ href: "./elbeyli-waterfall.html" })
              .append($("<h5>").addClass("explore-rent__sub-title"))
          )
          .append(
            $("<h3>")
              .addClass("explore-rent__title")
              .append($("<a>").attr({ href: "./elbeyli-waterfall.html" }))
              .append(
                $("<a>")
                  .attr({ href: "elbeyli-waterfall.html" })
                  .text("Waterfall House")
              )
          )
          .append(
            $("<p>")
              .addClass("explore-rent__price")
              .append($("<span>").text("12.000 TL "))
          )
          .append(
            $("<ul>")
              .addClass("list-unstyled explore-rent__details")
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("180 m²")
                )
              )
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("3 Yatak")
                )
              )
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("6-8 kişi")
                )
              )
          )
          .append($("<h5>").text("Elbeyli, İznik, Bursa"))
      )
  );
  $("#villas-grid-3").append(
    $("<div>")
      .addClass("explore-rent__single col-xl-4")
      .append(
        $("<a>")
          .attr({ href: "./derbent-white.html" })
          .append(
            $("<div>")
              .addClass("explore-rent__img")
              .append(
                $("<img>").attr({
                  src: "https://tasmahal.s3.eu-north-1.amazonaws.com/cards/derbent-white-kart.webp",
                  alt: "",
                })
              )
              .append(
                $("<div>")
                  .addClass("explore-rent__icon")
                  .append($("<i>").addClass("fa fa-heart"))
              )
          )
      )
      .append(
        $("<div>")
          .addClass("explore-rent__content")
          .append($("<h5>").addClass("explore-rent__sub-title"))
          .append(
            $("<h3>")
              .addClass("explore-rent__title")
              .append(
                $("<a>")
                  .attr({ href: "derbent-white.html" })
                  .text("Derbent White ")
              )
          )
          .append(
            $("<p>")
              .addClass("explore-rent__price")
              .append($("<span>").text("15.000 TL "))
          )
          .append(
            $("<ul>")
              .addClass("list-unstyled explore-rent__details")
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("250 m²")
                )
              )
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("3 Yatak")
                )
              )
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("6-8 kişi")
                )
              )
          )
          .append($("<h5>").text("Derbent, İznik, Bursa"))
      )
  );
}
function sortVillasByPriceDesc() {
  $("#villas-grid").empty();
  $("#villas-grid-2").empty();
  $("#villas-grid-3").empty();
  $("#villas-grid-4").empty();

  //g1
  $("#villas-grid").append(
    $("<div>")
      .addClass("explore-rent__single col-xl-4")
      .append(
        $("<a>")
          .attr({ href: "./serefiye-stone.html" })
          .append(
            $("<div>")
              .addClass("explore-rent__img")
              .append(
                $("<img>").attr({
                  src: "https://tasmahal.s3.eu-north-1.amazonaws.com/resources/explore-rent-img-8.png",
                  alt: "",
                })
              )
              .append(
                $("<div>")
                  .addClass("explore-rent__icon")
                  .append($("<i>").addClass("fa fa-heart"))
              )
          )
      )
      .append(
        $("<div>")
          .addClass("explore-rent__content")
          .append($("<h5>").addClass("explore-rent__sub-title"))
          .append(
            $("<h3>")
              .addClass("explore-rent__title")
              .append(
                $("<a>")
                  .attr({ href: "serefiye-stone.html" })
                  .text("Şerefiye Stone House")
              )
          )
          .append(
            $("<p>")
              .addClass("explore-rent__price")
              .append($("<span>").text("30.000 TL "))
          )
          .append(
            $("<ul>")
              .addClass("list-unstyled explore-rent__details")
              .append(
                $("<li>").append($("<a>").attr({ href: "#" }).text("470 m²"))
              )
              .append(
                $("<li>").append($("<a>").attr({ href: "#" }).text("6 Yatak"))
              )
              .append(
                $("<li>").append($("<a>").attr({ href: "#" }).text("8-12 kişi"))
              )
          )
          .append($("<h5>").text("Şerefiye, İznik, Bursa"))
      )
  );
  $("#villas-grid").append(
    $("<div>")
      .addClass("explore-rent__single col-xl-4")
      .append(
        $("<a>")
          .attr({ href: "fethiye-3+1.html" })
          .append(
            $("<div>")
              .addClass("explore-rent__img")
              .append(
                $("<img>").attr({
                  src: "https://tasmahal.s3.eu-north-1.amazonaws.com/resources/fethiye-kapak.webp",
                  alt: "",
                })
              )
              .append(
                $("<div>")
                  .addClass("explore-rent__icon")
                  .append($("<i>").addClass("fa fa-heart"))
              )
          )
      )
      .append(
        $("<div>")
          .addClass("explore-rent__content")
          .append($("<h5>").addClass("explore-rent__sub-title"))
          .append(
            $("<h3>")
              .addClass("explore-rent__title")
              .append(
                $("<a>").attr({ href: "fethiye-3+1.html" }).text("Vadi Fethiye")
              )
          )
          .append(
            $("<p>")
              .addClass("explore-rent__price")
              .append($("<span>").text("30.000 TL "))
          )
          .append(
            $("<ul>")
              .addClass("list-unstyled explore-rent__details")
              .append(
                $("<li>").append($("<a>").attr({ href: "#" }).text("180 m²"))
              )
              .append(
                $("<li>").append($("<a>").attr({ href: "#" }).text("3 Yatak"))
              )
              .append(
                $("<li>").append($("<a>").attr({ href: "#" }).text("6-10 kişi"))
              )
          )
          .append($("<h5>").text("Fethiye, Muğla"))
      )
  );
  $("#villas-grid").append(
    $("<div>")
      .addClass("explore-rent__single col-xl-4")
      .append(
        $("<a>")
          .attr({ href: "./derbent-white.html" })
          .append(
            $("<div>")
              .addClass("explore-rent__img")
              .append(
                $("<img>").attr({
                  src: "https://tasmahal.s3.eu-north-1.amazonaws.com/cards/derbent-white-kart.webp",
                  alt: "",
                })
              )
              .append(
                $("<div>")
                  .addClass("explore-rent__icon")
                  .append($("<i>").addClass("fa fa-heart"))
              )
          )
      )
      .append(
        $("<div>")
          .addClass("explore-rent__content")
          .append($("<h5>").addClass("explore-rent__sub-title"))
          .append(
            $("<h3>")
              .addClass("explore-rent__title")
              .append(
                $("<a>")
                  .attr({ href: "derbent-white.html" })
                  .text("Derbent White ")
              )
          )
          .append(
            $("<p>")
              .addClass("explore-rent__price")
              .append($("<span>").text("15.000 TL "))
          )
          .append(
            $("<ul>")
              .addClass("list-unstyled explore-rent__details")
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("250 m²")
                )
              )
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("3 Yatak")
                )
              )
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("6-8 kişi")
                )
              )
          )
          .append($("<h5>").text("Derbent, İznik, Bursa"))
      )
  );

  //g2
  $("#villas-grid-2").append(
    $("<div>")
      .addClass("explore-rent__single col-xl-4")
      .append(
        $("<a>")
          .attr({ href: "./elbeyli-waterfall.html" })
          .append(
            $("<div>")
              .addClass("explore-rent__img")
              .append(
                $("<img>").attr({
                  src: "https://tasmahal.s3.eu-north-1.amazonaws.com/cards/waterfall-kart-grid.webp",
                  alt: "",
                })
              )
              .append(
                $("<div>")
                  .addClass("explore-rent__icon")
                  .append($("<i>").addClass("fa fa-heart"))
              )
          )
      )
      .append(
        $("<div>")
          .addClass("explore-rent__content")
          .append(
            $("<a>")
              .attr({ href: "./elbeyli-waterfall.html" })
              .append($("<h5>").addClass("explore-rent__sub-title"))
          )
          .append(
            $("<h3>")
              .addClass("explore-rent__title")
              .append($("<a>").attr({ href: "./elbeyli-waterfall.html" }))
              .append(
                $("<a>")
                  .attr({ href: "elbeyli-waterfall.html" })
                  .text("Waterfall House")
              )
          )
          .append(
            $("<p>")
              .addClass("explore-rent__price")
              .append($("<span>").text("12.000 TL "))
          )
          .append(
            $("<ul>")
              .addClass("list-unstyled explore-rent__details")
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("180 m²")
                )
              )
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("3 Yatak")
                )
              )
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("6-8 kişi")
                )
              )
          )
          .append($("<h5>").text("Elbeyli, İznik, Bursa"))
      )
  );
  $("#villas-grid-2").append(
    $("<div>")
      .addClass("explore-rent__single col-xl-4")
      .append(
        $("<a>")
          .attr({ href: "./elbeyli-villas-3.html" })
          .append(
            $("<div>")
              .addClass("explore-rent__img")
              .append(
                $("<img>").attr({
                  src: "https://tasmahal.s3.eu-north-1.amazonaws.com/cards/elbeyli-villas-31.webp",
                  alt: "",
                })
              )
              .append(
                $("<div>")
                  .addClass("explore-rent__icon")
                  .append($("<i>").addClass("fa fa-heart"))
              )
          )
      )
      .append(
        $("<div>")
          .addClass("explore-rent__content")
          .append($("<h5>").addClass("explore-rent__sub-title"))
          .append(
            $("<h3>")
              .addClass("explore-rent__title")
              .append(
                $("<a>")
                  .attr({ href: "./elbeyli-villas-3.html" })
                  .text("Elbeyli Villas 3+1")
              )
          )
          .append(
            $("<p>")
              .addClass("explore-rent__price")
              .append($("<span>").text("12.000 TL"))
          )
          .append(
            $("<ul>")
              .addClass("list-unstyled explore-rent__details")
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("160 m²")
                )
              )
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("3 Yatak")
                )
              )
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("6-8 kişi")
                )
              )
          )
          .append($("<h5>").text("Elbeyli, İznik, Bursa"))
      )
  );

  $("#villas-grid-2").append(
    $("<div>")
      .addClass("explore-rent__single col-xl-4")
      .append(
        $("<a>")
          .attr({ href: "./derbent-villas.html" })
          .append(
            $("<div>")
              .addClass("explore-rent__img")
              .append(
                $("<img>").attr({
                  src: "https://tasmahal.s3.eu-north-1.amazonaws.com/cards/derbent-white-kart.webp",
                  alt: "",
                })
              )
              .append(
                $("<div>")
                  .addClass("explore-rent__icon")
                  .append($("<i>").addClass("fa fa-heart"))
              )
          )
      )
      .append(
        $("<div>")
          .addClass("explore-rent__content")
          .append($("<h5>").addClass("explore-rent__sub-title"))
          .append(
            $("<h3>")
              .addClass("explore-rent__title")
              .append(
                $("<a>")
                  .attr({ href: "derbent-villas.html" })
                  .text("Derbent Villas")
              )
          )
          .append(
            $("<p>")
              .addClass("explore-rent__price")
              .append($("<span>").text("10.000 TL "))
          )
          .append(
            $("<ul>")
              .addClass("list-unstyled explore-rent__details")
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("125 m²")
                )
              )
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("2 Yatak")
                )
              )
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("4-6 kişi")
                )
              )
          )
          .append($("<h5>").text("Derbent, İznik, Bursa"))
      )
  );

  //g3
  $("#villas-grid-3").append(
    $("<div>")
      .addClass("explore-rent__single col-xl-4")
      .append(
        $("<a>")
          .attr({ href: "./elbeyli-kuzeymen-3.html" })
          .append(
            $("<div>")
              .addClass("explore-rent__img")
              .append(
                $("<img>").attr({
                  src: "https://tasmahal.s3.eu-north-1.amazonaws.com/cards/kuzeymen-31-kapak.webp",
                  alt: "",
                })
              )
              .append(
                $("<div>")
                  .addClass("explore-rent__icon")
                  .append($("<i>").addClass("fa fa-heart"))
              )
          )
      )
      .append(
        $("<div>")
          .addClass("explore-rent__content")
          .append($("<h5>").addClass("explore-rent__sub-title"))
          .append(
            $("<h3>")
              .addClass("explore-rent__title")
              .append(
                $("<a>")
                  .attr({ href: "elbeyli-kuzeymen-3.html" })
                  .text("Kuzeymen 3+1")
              )
          )
          .append(
            $("<p>")
              .addClass("explore-rent__price")
              .append($("<span>").text("10.000 TL "))
          )
          .append(
            $("<ul>")
              .addClass("list-unstyled explore-rent__details")
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("150 m²")
                )
              )
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("3 Yatak")
                )
              )
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("6-8 kişi")
                )
              )
          )
          .append($("<h5>").text("Elbeyli, İznik, Bursa"))
      )
  );
  $("#villas-grid-3").append(
    $("<div>")
      .addClass("explore-rent__single col-xl-4")
      .append(
        $("<a>")
          .attr({ href: "./elbeyli-villas-2.html" })
          .append(
            $("<div>")
              .addClass("explore-rent__img")
              .append(
                $("<img>").attr({
                  src: "https://tasmahal.s3.eu-north-1.amazonaws.com/cards/elbeyli-villas-21.webp",
                  alt: "",
                })
              )
              .append(
                $("<div>")
                  .addClass("explore-rent__icon")
                  .append($("<i>").addClass("fa fa-heart"))
              )
          )
      )
      .append(
        $("<div>")
          .addClass("explore-rent__content")
          .append($("<h5>").addClass(""))
          .append(
            $("<h3>")
              .addClass("explore-rent__title")
              .append(
                $("<a>")
                  .attr({ href: "elbeyli-villas-2.html" })
                  .text("Elbeyli Villas 2+1")
              )
          )
          .append(
            $("<p>")
              .addClass("explore-rent__price")
              .append($("<span>").text("10.000 TL "))
          )
          .append(
            $("<ul>")
              .addClass("list-unstyled explore-rent__details")
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("125 m²")
                )
              )
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("2 Yatak")
                )
              )
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("4-6 kişi")
                )
              )
          )
          .append($("<h5>").text("Elbeyli, İznik, Bursa"))
      )
  );
  $("#villas-grid-3").append(
    $("<div>")
      .addClass("explore-rent__single col-xl-4")
      .append(
        $("<a>")
          .attr({ href: "./derbent-kale-2.html" })
          .append(
            $("<div>")
              .addClass("explore-rent__img")
              .append(
                $("<img>").attr({
                  src: "https://tasmahal.s3.eu-north-1.amazonaws.com/cards/derbent-kale-21-kart.webp",
                  alt: "",
                })
              )
              .append(
                $("<div>")
                  .addClass("explore-rent__icon")
                  .append($("<i>").addClass("fa fa-heart"))
              )
          )
      )
      .append(
        $("<div>")
          .addClass("explore-rent__content")
          .append($("<h5>").addClass("explore-rent__sub-title"))
          .append(
            $("<h3>")
              .addClass("explore-rent__title")
              .append(
                $("<a>")
                  .attr({ href: "derbent-kale-2.html" })
                  .text("Derbent Kale 2+1")
              )
          )
          .append(
            $("<p>")
              .addClass("explore-rent__price")
              .append($("<span>").text("10.000 TL "))
          )
          .append(
            $("<ul>")
              .addClass("list-unstyled explore-rent__details")
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("120 m²")
                )
              )
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("2 Yatak")
                )
              )
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("4-6 kişi")
                )
              )
          )
          .append($("<h5>").text("Derbent, İznik, Bursa"))
      )
  );

  //g4
  $("#villas-grid-4").append(
    $("<div>")
      .addClass("explore-rent__single col-xl-4")
      .append(
        $("<a>")
          .attr({ href: "./elbeyli-kuzeymen-2.html" })
          .append(
            $("<div>")
              .addClass("explore-rent__img")
              .append(
                $("<img>").attr({
                  src: "https://tasmahal.s3.eu-north-1.amazonaws.com/cards/kuzeymen-21.webp",
                  alt: "",
                })
              )
              .append(
                $("<div>")
                  .addClass("explore-rent__icon")
                  .append($("<i>").addClass("fa fa-heart"))
              )
          )
      )
      .append(
        $("<div>")
          .addClass("explore-rent__content")
          .append($("<h5>").addClass("explore-rent__sub-title"))
          .append(
            $("<h3>")
              .addClass("explore-rent__title")
              .append(
                $("<a>")
                  .attr({ href: "elbeyli-kuzeymen-2.html" })
                  .text("Kuzeymen 2+1")
              )
          )
          .append(
            $("<p>")
              .addClass("explore-rent__price")
              .append($("<span>").text("8.000 TL "))
          )
          .append(
            $("<ul>")
              .addClass("list-unstyled explore-rent__details")
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("120 m²")
                )
              )
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("2 Yatak")
                )
              )
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("4-6 kişi")
                )
              )
          )
          .append($("<h5>").text("Elbeyli, İznik, Bursa"))
      )
  );
  $("#villas-grid-4").append(
    $("<div>")
      .addClass("explore-rent__single col-xl-4")
      .append(
        $("<a>")
          .attr({ href: "./derbent-kale-1.html" })
          .append(
            $("<div>")
              .addClass("explore-rent__img")
              .append(
                $("<img>").attr({
                  src: "https://tasmahal.s3.eu-north-1.amazonaws.com/cards/derbent-kale-11-kart.webp",
                  alt: "",
                })
              )
              .append(
                $("<div>")
                  .addClass("explore-rent__icon")
                  .append($("<i>").addClass("fa fa-heart"))
              )
          )
      )
      .append(
        $("<div>")
          .addClass("explore-rent__content")
          .append($("<h5>").addClass("explore-rent__sub-title"))
          .append(
            $("<h3>")
              .addClass("explore-rent__title")
              .append(
                $("<a>")
                  .attr({ href: "derbent-kale-1.html" })
                  .text("Derbent Kale 1+1")
              )
          )
          .append(
            $("<p>")
              .addClass("explore-rent__price")
              .append($("<span>").text("7.000 TL"))
          )
          .append(
            $("<ul>")
              .addClass("list-unstyled explore-rent__details")
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("80 m²")
                )
              )
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("1 Yatak")
                )
              )
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("2-4 kişi")
                )
              )
          )
          .append($("<h5>").text("Derbent, İznik, Bursa"))
      )
  );
}

/*------------ Index pagination ---------*/
//sort by price
function bringVillaspage2() {
  $("#villas-grid").empty();
  $("#villas-grid-2").empty();

  $("#villas-grid").append(
    $("<div>")
      .addClass("explore-rent__single col-xl-4")
      .append(
        $("<a>")
          .attr({ href: "./derbent-kale-1.html" })
          .append(
            $("<div>")
              .addClass("explore-rent__img")
              .append(
                $("<img>").attr({
                  src: "https://tasmahal.s3.eu-north-1.amazonaws.com/cards/derbent-kale-11-kart.webp",
                  alt: "",
                })
              )
              .append(
                $("<div>")
                  .addClass("explore-rent__icon")
                  .append($("<i>").addClass("fa fa-heart"))
              )
          )
      )
      .append(
        $("<div>")
          .addClass("explore-rent__content")
          .append($("<h5>").addClass("explore-rent__sub-title"))
          .append(
            $("<h3>")
              .addClass("explore-rent__title")
              .append(
                $("<a>")
                  .attr({ href: "derbent-kale-1.html" })
                  .text("Derbent Kale 1+1")
              )
          )
          .append(
            $("<p>")
              .addClass("explore-rent__price")
              .append($("<span>").text("7.000 TL"))
          )
          .append(
            $("<ul>")
              .addClass("list-unstyled explore-rent__details")
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("80 m²")
                )
              )
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("1 Yatak")
                )
              )
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("2-4 kişi")
                )
              )
          )
          .append($("<h5>").text("Derbent, İznik, Bursa"))
      )
  );
  $("#villas-grid").append(
    $("<div>")
      .addClass("explore-rent__single col-xl-4")
      .append(
        $("<a>")
          .attr({ href: "./elbeyli-kuzeymen-2.html" })
          .append(
            $("<div>")
              .addClass("explore-rent__img")
              .append(
                $("<img>").attr({
                  src: "https://tasmahal.s3.eu-north-1.amazonaws.com/cards/kuzeymen-21.webp",
                  alt: "",
                })
              )
              .append(
                $("<div>")
                  .addClass("explore-rent__icon")
                  .append($("<i>").addClass("fa fa-heart"))
              )
          )
      )
      .append(
        $("<div>")
          .addClass("explore-rent__content")
          .append($("<h5>").addClass("explore-rent__sub-title"))
          .append(
            $("<h3>")
              .addClass("explore-rent__title")
              .append(
                $("<a>")
                  .attr({ href: "elbeyli-kuzeymen-2.html" })
                  .text("Kuzeymen 2+1")
              )
          )
          .append(
            $("<p>")
              .addClass("explore-rent__price")
              .append($("<span>").text("8.000 TL "))
          )
          .append(
            $("<ul>")
              .addClass("list-unstyled explore-rent__details")
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("120 m²")
                )
              )
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("2 Yatak")
                )
              )
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("4-6 kişi")
                )
              )
          )
          .append($("<h5>").text("Elbeyli, İznik, Bursa"))
      )
  );
  $("#villas-grid").append(
    $("<div>")
      .addClass("explore-rent__single col-xl-4")
      .append(
        $("<a>")
          .attr({ href: "./derbent-kale-2.html" })
          .append(
            $("<div>")
              .addClass("explore-rent__img")
              .append(
                $("<img>").attr({
                  src: "https://tasmahal.s3.eu-north-1.amazonaws.com/cards/derbent-kale-21-kart.webp",
                  alt: "",
                })
              )
              .append(
                $("<div>")
                  .addClass("explore-rent__icon")
                  .append($("<i>").addClass("fa fa-heart"))
              )
          )
      )
      .append(
        $("<div>")
          .addClass("explore-rent__content")
          .append($("<h5>").addClass("explore-rent__sub-title"))
          .append(
            $("<h3>")
              .addClass("explore-rent__title")
              .append(
                $("<a>")
                  .attr({ href: "derbent-kale-2.html" })
                  .text("Derbent Kale 2+1")
              )
          )
          .append(
            $("<p>")
              .addClass("explore-rent__price")
              .append($("<span>").text("10.000 TL "))
          )
          .append(
            $("<ul>")
              .addClass("list-unstyled explore-rent__details")
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("120 m²")
                )
              )
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("2 Yatak")
                )
              )
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("4-6 kişi")
                )
              )
          )
          .append($("<h5>").text("Derbent, İznik, Bursa"))
      )
  );
  //g2

  $("#villas-grid-2").append(
    $("<div>")
      .addClass("explore-rent__single col-xl-4")
      .append(
        $("<a>")
          .attr({ href: "./elbeyli-kuzeymen-3.html" })
          .append(
            $("<div>")
              .addClass("explore-rent__img")
              .append(
                $("<img>").attr({
                  src: "https://tasmahal.s3.eu-north-1.amazonaws.com/cards/kuzeymen-31-kapak.webp",
                  alt: "",
                })
              )
              .append(
                $("<div>")
                  .addClass("explore-rent__icon")
                  .append($("<i>").addClass("fa fa-heart"))
              )
          )
      )
      .append(
        $("<div>")
          .addClass("explore-rent__content")
          .append($("<h5>").addClass("explore-rent__sub-title"))
          .append(
            $("<h3>")
              .addClass("explore-rent__title")
              .append(
                $("<a>")
                  .attr({ href: "elbeyli-kuzeymen-3.html" })
                  .text("Kuzeymen 3+1")
              )
          )
          .append(
            $("<p>")
              .addClass("explore-rent__price")
              .append($("<span>").text("10.000 TL "))
          )
          .append(
            $("<ul>")
              .addClass("list-unstyled explore-rent__details")
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("150 m²")
                )
              )
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("3 Yatak")
                )
              )
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("6-8 kişi")
                )
              )
          )
          .append($("<h5>").text("Elbeyli, İznik, Bursa"))
      )
  );

  $("#villas-grid-2").append(
    $("<div>")
      .addClass("explore-rent__single col-xl-4")
      .append(
        $("<a>")
          .attr({ href: "./elbeyli-waterfall.html" })
          .append(
            $("<div>")
              .addClass("explore-rent__img")
              .append(
                $("<img>").attr({
                  src: "https://tasmahal.s3.eu-north-1.amazonaws.com/cards/waterfall-kart-grid.webp",
                  alt: "",
                })
              )
              .append(
                $("<div>")
                  .addClass("explore-rent__icon")
                  .append($("<i>").addClass("fa fa-heart"))
              )
          )
      )
      .append(
        $("<div>")
          .addClass("explore-rent__content")
          .append(
            $("<a>")
              .attr({ href: "./elbeyli-waterfall.html" })
              .append($("<h5>").addClass("explore-rent__sub-title"))
          )
          .append(
            $("<h3>")
              .addClass("explore-rent__title")
              .append($("<a>").attr({ href: "./elbeyli-waterfall.html" }))
              .append(
                $("<a>")
                  .attr({ href: "elbeyli-waterfall.html" })
                  .text("Waterfall House")
              )
          )
          .append(
            $("<p>")
              .addClass("explore-rent__price")
              .append($("<span>").text("12.000 TL "))
          )
          .append(
            $("<ul>")
              .addClass("list-unstyled explore-rent__details")
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("180 m²")
                )
              )
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("3 Yatak")
                )
              )
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("6-8 kişi")
                )
              )
          )
          .append($("<h5>").text("Elbeyli, İznik, Bursa"))
      )
  );
  $("#villas-grid-2").append(
    $("<div>")
      .addClass("explore-rent__single col-xl-4")
      .append(
        $("<a>")
          .attr({ href: "./derbent-white.html" })
          .append(
            $("<div>")
              .addClass("explore-rent__img")
              .append(
                $("<img>").attr({
                  src: "https://tasmahal.s3.eu-north-1.amazonaws.com/cards/derbent-white-kart.webp",
                  alt: "",
                })
              )
              .append(
                $("<div>")
                  .addClass("explore-rent__icon")
                  .append($("<i>").addClass("fa fa-heart"))
              )
          )
      )
      .append(
        $("<div>")
          .addClass("explore-rent__content")
          .append($("<h5>").addClass("explore-rent__sub-title"))
          .append(
            $("<h3>")
              .addClass("explore-rent__title")
              .append(
                $("<a>")
                  .attr({ href: "derbent-white.html" })
                  .text("Derbent White ")
              )
          )
          .append(
            $("<p>")
              .addClass("explore-rent__price")
              .append($("<span>").text("15.000 TL "))
          )
          .append(
            $("<ul>")
              .addClass("list-unstyled explore-rent__details")
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("250 m²")
                )
              )
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("3 Yatak")
                )
              )
              .append(
                $("<li>").append(
                  $("<a>").attr({ href: "javascript:void(0)" }).text("6-8 kişi")
                )
              )
          )
          .append($("<h5>").text("Derbent, İznik, Bursa"))
      )
  );
}


/*------------ Google Login ---------*/
function parseJwt(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}
function decodeJwtResponse(data) {
  signIn(parseJwt(data));
  console.log(parseJwt(data));
}

/*------------ IOS CHECKER ---------*/
function iOS() {
  return (
    [
      "iPad Simulator",
      "iPhone Simulator",
      "iPod Simulator",
      "iPad",
      "iPhone",
      "iPod",
    ].includes(navigator.platform) ||
    // iPad on iOS 13 detection
    (navigator.userAgent.includes("Mac") && "ontouchend" in document)
  );
}
