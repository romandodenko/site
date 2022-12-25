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
  setTimeout(welcomeDisabled, 3000)
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

if (document.body.offsetWidth > 1220) {
  // 3D Scroll

  let zSpacing = -1000,
    lastPos = zSpacing / 5,
    $frames = document.getElementsByClassName('frame'),
    frames = Array.from($frames),
    zVals = []


  window.addEventListener("scroll", function (e) {
    let top = document.documentElement.scrollTop,
      delta = lastPos - top

    lastPos = top

    frames.forEach(function (n, i) {
      zVals.push((i * zSpacing) + zSpacing)
      zVals[i] += delta * -5.5
      let frame = frames[i],
        transform = `translateZ(${zVals[i]}px)`,
        opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0,
        visibilityProperty = zVals[i];
      if (visibilityProperty < 1) {
        var visibilityValue = "visibility: visible"
      } else {
        var visibilityValue = "visibility: hidden"
      }

      // здесь я сделал переменную visibilityProperty для того чтобы можно было функционировать с кнопками, ссылкам в слайдах

      frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}; ${visibilityValue};`)
    })
  })

  window.scrollTo(0, 1)
} else {
  document.querySelector(".page").style.height = "auto";
}

const mouse = document.querySelector(".mouse");

if(mouse) {
  window.addEventListener("scroll", function () {
    let pop = Math.floor(scrollY);
    if (pop >= 150) {
      mouse.style.opacity = 0;
      mouse.style.visibility = "hidden";
    } else {
      mouse.style.opacity = 1;
      mouse.style.visibility = "visible";
    }
  })
}

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

if (portfolioSwiperInitOne) {
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

if (portfolioSwiperInitTwo) {
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
  // }
}


    const aosInit = document.querySelector(".aos-init");

if (document.body.offsetWidth > 1220) {
  if(aosInit) {
    AOS.init({
      duration: 700,
      disable: true,
    });
  }
} else {
  if(aosInit) {
    AOS.init({
      duration: 700,
      disable: false,
    });
  }
}
}