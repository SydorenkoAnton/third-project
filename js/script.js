
/*header__cards*/

  document.querySelectorAll(".header__btn-bottom").forEach(item => {
  item.addEventListener("click", function() {
    let btn = this;
    let dropdown = this.parentElement.querySelector(".header__hidden");

    document.querySelectorAll(".header__btn-bottom").forEach(el => {
      if (el != btn) {
        el.classList.remove("is-active");
      }
    });

    document.querySelectorAll(".header__hidden").forEach(el => {
      if (el != dropdown) {
        el.classList.remove("is-active");
      }
    })
    dropdown.classList.toggle("is-active");
    btn.classList.toggle("is-active")
  })
})

document.addEventListener("click", function(e) {
  let target = e.target;
  if (!target.closest(".header__list-bottom")) {
    document.querySelectorAll(".header__hidden").forEach(el => {
        el.classList.remove("is-active");
    })
     document.querySelectorAll(".header__btn-bottom").forEach(el => {
        el.classList.remove("is-active");
    });
  }
})

/*burger*/

window.addEventListener('DOMContentLoaded', function () {
  const burgerBtn = document.querySelector('#burger');
  const burger__menu = document.querySelector('#burger-menu');
  burgerBtn.addEventListener('click', function () {
    burgerBtn.classList.toggle('burger-icon-active');
    if (burgerBtn.classList.contains('burger-icon-active')) {
      burger__menu.classList.add('burger__menu-active');
    } else {
      burger__menu.classList.remove('burger__menu-active');
    };
  });
});

/*---search---*/
const btnSearch = document.querySelector('.header__search-top')
const btnCloseSearch = document.querySelector('.btn--close')
const menuSearch = document.querySelector('.search')

btnSearch.addEventListener('click', () => {
  menuSearch.classList.add('search--active')
})

btnCloseSearch.addEventListener('click', () => {
  menuSearch.classList.remove('search--active')
})

/*Select*/

document.addEventListener('DOMContentLoaded', function () {
  const selector = document.querySelector('.gallery__select');
  const choices1 = new Choices(selector, {
    searchEnabled: false,
    searchChoices: false,
    itemSelectText: '',
    classNames: {
      containerOuter: 'choices choices1',
     },
  });
});

/*Slader*/

document.addEventListener("DOMContentLoaded", () => {
  let gallerySlider = new Swiper(".slides-container", {
    slidesPerView: 1,
    grid: {
      rows: 1,
      fill: "row"
    },
    spaceBetween: 20,
    pagination: {
      el: ".gallery .gallery__pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".gallery__next",
      prevEl: ".gallery__prev"
    },

    breakpoints: {
      441: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30
      },

      1400: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50
      }
    },

    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    },

    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",

    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      }
    }
  });
});

// accordion

document.addEventListener('DOMContentLoaded', function() {
  $( function() {
    $( "#accordion" ).accordion({
      heightStyle: "content",
      collapsible: true
    });
    $( "#accordion-plug" ).accordion({
      heightStyle: "content",
      collapsible: true
    });
  });
})

// tabs

document.addEventListener('DOMContentLoaded', function() {
  function tabsActive(tabsPath, tabsTarget) {
    document.querySelectorAll(tabsPath).forEach(function (countryClick) {
      countryClick.addEventListener('click', function(event) {
        let path = event.currentTarget.dataset.path;

        document.querySelectorAll(tabsTarget).forEach(function(countryContent) {
          countryContent.classList.remove('active')
        })

        document.querySelectorAll(tabsPath).forEach(function(countryContent) {
          countryContent.classList.remove('active')
        })

        document.querySelector(`[data-target="${path}"]`).classList.add('active');

        this.classList.add('active');
      })
     })
  }

  tabsActive('.tabs-country__btn', '.catalog-top-content');
  tabsActive('.tabs-artist-btn', '.tabs-artist__content');
})

/*event--Slader*/

let swiperEvents = new Swiper('.swiper--events', {

  slideLabelMessage: false,
  breakpoints: {
      768: {
          slidesPerGroup: 2,
          slidesPerView: 2,
          spaceBetween: 34,
          pagination: {
            el: '.swiper-pagination-events',
            type: 'bullets',
        },
      },
      1024: {
          slidesPerGroup: 1,
          slidesPerView: 3,
          spaceBetween: 27,
          pagination: {
            el: '.swiper-pagination-events',
            type: 'bullets',
        },
      },
      1440: {
          slidesPerGroup: 1,
          slidesPerView: 3,
          spaceBetween: 50,
          navigation: {
            nextEl: '.swiper-button-next--events',
            prevEl: '.swiper-button-prev--events',
            disabledClass: 'swiper-button-disabled--events',
        },
      }
  },
});

/*project__tooltip*/

tippy('.btn--tooltip', {
  theme: 'tooltip',
  trigger: 'click',
});

/*project__swiper*/

let swiperProject = new Swiper('.project__swiper', {

  slidesPerView: 3,
  spaceBetween: 50,

  breakpoints: {
      768: {
          slidesPerView: 2,
          spaceBetween: 34,
      },
      1024: {
          slidesPerView: 2,
          spaceBetween: 50,
      },
      1440: {
          slidesPerView: 3,
          spaceBetween: 50,
      }
  },

  navigation: {
      nextEl: '.swiper-button-next--project',
      prevEl: '.swiper-button-prev--project',
  },
});

/*Mask*/

document.addEventListener("DOMContentLoaded", function() {
  let selector = document.querySelector("input[type='phone']");
  let e = new Inputmask("+7 (999) 999-99-99");

  e.mask(selector);

/*validate*/

  new JustValidate('.contacts__form', {
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 30
      },
      phone: {
        required: true,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue()
          return Number(phone) && phone.length === 10
        },
      },
    },
  });
});


