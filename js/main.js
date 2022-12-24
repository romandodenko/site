"use strict"

window.onload = function () {

  const menu = document.querySelector(".header__menu");

document.addEventListener("click", function (e) {
  const elementTarget = e.target;
  if (elementTarget.closest(".burger")) {
    menu.classList.add("menu-active")
    document.body.style.overflow = "hidden";
  }
  if (elementTarget.closest(".header__exit-menu")) {
    menu.classList.remove("menu-active")
    document.body.style.overflow = "";
  }
  if (elementTarget.closest(".nav__link")) {
    menu.classList.remove("menu-active")
    document.body.style.overflow = "";
  }
  if(elementTarget.closest(".portfolio-swiper__button")) {
    document.querySelectorAll(".portfolio-swiper__descr").forEach(function(s) {
      s.classList.remove("portfolio-swiper-descr-active")
    })
    elementTarget.closest(".portfolio-swiper__descr").classList.add("portfolio-swiper-descr-active")
  }
  if(!elementTarget.closest(".portfolio-swiper-descr-active")) {
    document.querySelectorAll(".portfolio-swiper__descr").forEach(function(s) {
      s.classList.remove("portfolio-swiper-descr-active")
    })
  }
})
if (document.body.offsetWidth < 992) {
  document.querySelectorAll(".title-v1 span").forEach(function(e) {
    e.setAttribute("data-aos-delay","0")
  })
  document.querySelectorAll(".title-v2 span").forEach(function(e) {
    e.setAttribute("data-aos-delay","0")
  })
  document.querySelectorAll(".title-v3 span").forEach(function(e) {
    e.setAttribute("data-aos-delay","0")
  })
  document.querySelectorAll(".about__text").forEach(function(e) {
    e.setAttribute("data-aos-delay","0")
  })
  document.querySelectorAll(".sub-list__item").forEach(function(e) {
    e.setAttribute("data-aos-delay","0")
  })
}
const welcome = document.querySelector(".welcome");

if (welcome) {
  function welcomeDisabled() {
    welcome.classList.add("welcome-disabled")
  }
  setTimeout(welcomeDisabled, 2000)
}

const mainScreen = document.querySelector(".main-screen")

if (mainScreen) {
  document.documentElement.classList.add("loaded");
  createPosition();

  document.addEventListener("scroll", createPosition)

  function createPosition() {
    const contentElement = document.querySelector(".links__container");
    const windowHeight = window.innerHeight;

    const finalPosition = scrollY / (contentElement.offsetTop - windowHeight) * 60;

    finalPosition < 100 ? forestAnimation(finalPosition) : forestAnimation(100);
  }

  function forestAnimation(finalPosition) {
    const mountains = document.querySelector(".main-screen__mountains");
    const trees = document.querySelectorAll(".main-screen__trees");
    const birds = document.querySelectorAll(".main-screen__birds");

    const mountainsTranslate = 170 / 100 * finalPosition;
    const mountainsScale = 1 + 2 / 100 * finalPosition;

    mountains.style.cssText = `
        transform: translate3d(0, ${mountainsTranslate}%, 0) scale(${mountainsScale});
      `;

    trees.forEach(function (tree, index) {
      const treeTranslate = 20 * (trees.length - index) / 100 * finalPosition;
      const treeScale = 1 + 1.5 / 100 * finalPosition;

      tree.style.cssText = `
        transform: translate3d(0, ${treeTranslate}%, 0) scale(${treeScale});
        `;
    })

    const birdsTranslate = 190 / 100 * finalPosition;
    const birdsScale = 1 + 2 / 100 * finalPosition;

    birds[0].style.cssText = `
      transform: translate3d(-${birdsTranslate}%, 0, 0) scale(${birdsScale});
      `;
    birds[1].style.cssText = `
      transform: translate3d(${birdsTranslate}%, 0, 0) scale(${birdsScale});
      `;
  }
}

document.addEventListener("mouseover", function(e) {
  const elementTarget = e.target;
  if(elementTarget.closest(".portfolio-swiper__button")) {
    document.querySelectorAll(".portfolio-swiper__descr").forEach(function(s) {
      s.classList.remove("portfolio-swiper-descr-active")
    })
    elementTarget.closest(".portfolio-swiper__descr").classList.add("portfolio-swiper-descr-active")
  }
  if(!elementTarget.closest(".portfolio-swiper-descr-active")) {
    document.querySelectorAll(".portfolio-swiper__descr").forEach(function(s) {
      s.classList.remove("portfolio-swiper-descr-active")
    })
  }
})

    function testWebP(callback) {
  var webP = new Image();

  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };

  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});

    const mapClass = document.querySelector(".contacts__map")
if (mapClass) {
  ymaps.ready(init);

  function init() {
    const myMap = new ymaps.Map(
      "map", {
        center: [54.41279271719481,86.3020740770263],
        zoom: 17,
      },
    );

    var myPlacemark = new ymaps.Placemark(myMap.getCenter(54.41279271719481,86.3020740770263), {}, { // Если нужно чтобы точка была слегка смещена
      iconLayout: 'default#image',
      iconImageHref: '../../img/svg/marker-map.svg',
      iconImageSize: [20, 20],
    });

    myMap.geoObjects.add(myPlacemark);
    myMap.controls.remove('geolocationControl'); // удаляем геолокацию
    myMap.controls.remove('searchControl'); // удаляем поиск
    myMap.controls.remove('trafficControl'); // удаляем контроль трафика
    myMap.controls.remove('typeSelector'); // удаляем тип
    myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
    myMap.controls.remove('rulerControl'); // удаляем контрол правил
  }

}


    const portfolioSwiperInitOne = document.querySelector(".portfolio-swiper-1");

const portfolioSwiperInitTwo = document.querySelector(".portfolio-swiper-2");

const portfolioSwiperInitThird = document.querySelector(".portfolio-swiper-3");

if (portfolioSwiperInitOne) {
  if (document.body.offsetWidth < 992) {
    console.log("da")
    const portfolioSwiperOne = new Swiper('.portfolio-swiper-1', {
      observer: true,
      observeParents: true,
      watchOverflow: true,
      direction: 'horizontal',
      pagination: {
        el: '.portfolio-swiper-pagination-1',
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        701: {
          slidesPerView: 2,
          spaceBetween: 10
        }
      },
    });
  }
}

if (portfolioSwiperInitTwo) {
  if (document.body.offsetWidth < 992) {
    console.log("da")
    const portfolioSwiperTwo = new Swiper('.portfolio-swiper-2', {
      observer: true,
      observeParents: true,
      watchOverflow: true,
      direction: 'horizontal',
      pagination: {
        el: '.portfolio-swiper-pagination-2',
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        701: {
          slidesPerView: 2,
          spaceBetween: 10
        }
      },
    });
  }
}

if (portfolioSwiperInitThird) {
  if (document.body.offsetWidth < 992) {
    console.log("da")
    const portfolioSwiperThird = new Swiper('.portfolio-swiper-3', {
      observer: true,
      observeParents: true,
      watchOverflow: true,
      direction: 'horizontal',
      pagination: {
        el: '.portfolio-swiper-pagination-3',
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        701: {
          slidesPerView: 2,
          spaceBetween: 10
        }
      },
    });
  }
}

    const aosInit = document.querySelector(".aos-init");
if(aosInit) {
  AOS.init({
    duration: 700,
  });
}
}