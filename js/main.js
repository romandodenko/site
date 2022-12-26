"use strict"

window.onload = function () {

  document.addEventListener("click", function (e) {
  const elementTarget = e.target;

  if (elementTarget.closest(".portfolio-swiper__button")) {
    document.querySelectorAll(".portfolio-swiper__descr").forEach(function (s) {
      s.classList.remove("portfolio-swiper-descr-active")
    })
    elementTarget.closest(".portfolio-swiper__descr").classList.add("portfolio-swiper-descr-active")
  }
  if (!elementTarget.closest(".portfolio-swiper-descr-active")) {
    document.querySelectorAll(".portfolio-swiper__descr").forEach(function (s) {
      s.classList.remove("portfolio-swiper-descr-active")
    })
  }
})

const welcome = document.querySelector(".welcome");

if (welcome) {
  function welcomeDisabled() {
    welcome.classList.add("welcome-disabled")
  }
  setTimeout(welcomeDisabled, 2000)
}

const mainScreen = document.querySelector(".main-screen");
const mainScreenTextInit = document.querySelector(".main-screen__text");
const mainScreenText = document.querySelectorAll(".main-screen__text");
const mainScreenMouse = document.querySelector(".main-screen-mouse")
if (mainScreen) {

  document.addEventListener("scroll", function () {
    let mainScreenTextInit = Math.floor(scrollY);
    if (mainScreenTextInit >= 50) {
      mainScreenText.forEach(function (e) {
        e.style.color = "#000000";
      })
      mainScreenMouse.style.cssText = `
      opacity: 0;
      visibility: hidden;
    `;
    } else {
      mainScreenText.forEach(function (e) {
        e.style.color = "#ffffff";
      })
      mainScreenMouse.style.cssText = `
    opacity: 1;
    visibility: visible;
  `;
    }
  })

  createPosition();

  document.addEventListener("scroll", createPosition)

  function createPosition() {
    const contentElement = document.querySelector(".hello__container");
    const windowHeight = window.innerHeight;

    const finalPosition = scrollY / (contentElement.offsetTop - windowHeight) * 5;

    finalPosition < 100 ? forestAnimation(finalPosition) : forestAnimation(100);
  }

  function forestAnimation(finalPosition) {
    const bigImage = document.querySelector(".main-screen__big-image");
    const textsBlocks = document.querySelectorAll(".main-screen__item");
    const middleImage = document.querySelectorAll(".main-screen__middle-image");

    const bigImageTranslate = 170 / 50 * finalPosition;

    bigImage.style.cssText = `
      transform:  translateY(-${bigImageTranslate}%);
    `;

    const textsBlocksTranslate = 190 / 50 * finalPosition;

    textsBlocks[0].style.cssText = `
    transform: translate(-${textsBlocksTranslate}%, ${textsBlocksTranslate}%);
    `;
    textsBlocks[1].style.cssText = `
    transform: translate(${textsBlocksTranslate}%, ${textsBlocksTranslate}%);
    `;

    const middleImageTranslate = 190 / 50 * finalPosition;
    const middleImageScale = 1 + 2 / 50 * finalPosition
    middleImage[0].style.cssText = `
    transform: translate(-${middleImageTranslate}%, ${middleImageTranslate}%);
    `;
    middleImage[1].style.cssText = `
    transform: translate(${middleImageTranslate}%, ${middleImageTranslate}%);
    `;
  }
}

document.addEventListener("mouseover", function (e) {
  const elementTarget = e.target;
  if (elementTarget.closest(".portfolio-swiper__button")) {
    document.querySelectorAll(".portfolio-swiper__descr").forEach(function (s) {
      s.classList.remove("portfolio-swiper-descr-active")
    })
    elementTarget.closest(".portfolio-swiper__descr").classList.add("portfolio-swiper-descr-active")
  }
  if (!elementTarget.closest(".portfolio-swiper-descr-active")) {
    document.querySelectorAll(".portfolio-swiper__descr").forEach(function (s) {
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