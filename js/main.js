"use strict"

window.onload = function () {

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  let zergAnimation = gsap.timeline({
    paused: true
  })

  zergAnimation
    .to(".zerg", {
      duration: .6,
      display: "block",
      opacity: 1,
    })
    .to(".zerg__image_1", {
      duration: .6,
      opacity: 1,
      x: 0,
      y: 0,
      z: 0
    }, "-=.2")
    .to(".zerg__image_2", {
      duration: .6,
      opacity: 1,
      x: 0,
      y: 0,
      z: 0
    }, "-=.2")
    .to(".zerg__image_3", {
      duration: .6,
      opacity: 1,
      x: 0,
      y: 0,
      z: 0
    }, "-=.2")
    .to(".zerg__image_4", {
      duration: .6,
      opacity: 1,
      x: 0,
      y: 0,
      z: 0
    }, "-=.2")
    .to(".zerg__image_main", {
      duration: .6,
      opacity: 1,
      x: 0,
      y: 0,
      z: 0
    }, "-=.2")
    .to(".zerg__descr", {
      duration: .6,
      opacity: 1,
    })
    .to(".zerg__text", {
      duration: .6,
      opacity: 1,
      y: 0,
    }, '-=.5')
    .to(".zerg__link", {
      duration: .6,
      opacity: 1,
      y: 0,
    }, '-=.3')

  document.addEventListener("click", function (e) {
    const elementInteractive = e.target;

    if (elementInteractive.closest(".zerg-item__button")) {

      const zergItem = elementInteractive.closest(".zerg-item");

      const zergImage = zergItem.querySelector(".zerg-item__image");

      const zergSourceSrc = zergImage.querySelector("source").getAttribute("srcset");

      const zergImageSrc = zergImage.querySelector("img").getAttribute("src");

      const zergText = zergItem.querySelector(".zerg-item__text").innerHTML;

      const zergLink = zergItem.querySelector(".zerg-item__link").getAttribute("href");

      const zergImageMain = document.querySelector(".zerg__image_main");

      zergImageMain.querySelector("source").setAttribute("srcset", `${zergSourceSrc}`);

      zergImageMain.querySelector("img").setAttribute("src", `${zergImageSrc}`);

      const zergMainText = document.querySelector(".zerg__text");

      zergMainText.innerHTML = zergText;

      const zergMainLink = document.querySelector(".zerg__link");

      zergMainLink.setAttribute("href", `${zergLink}`);

      zergAnimation.timeScale(1).play();

      document.body.style.overflow = 'hidden';

    }

    if (elementInteractive.closest(".zerg__close")) {

      zergAnimation.timeScale(2).reverse();

      document.body.style.overflow = '';
    }

    if (elementInteractive.closest(".zerg__image")) {

      zergAnimation.timeScale(2).reverse();

      document.body.style.overflow = '';
    }

  })

  let anim = gsap.timeline({})

  anim
    .fromTo(".hello__title", {
      opacity: 0,
      yPercent: 50,
    }, {
      opacity: 1,
      yPercent: 0,
      duration: .6,
    })

  anim
    .fromTo(".hello__text", {
        opacity: 0,
        yPercent: 50,
      }, {
        opacity: 1,
        yPercent: 0,
        duration: .6,
      },
      "-=.3"
    )

  anim
    .fromTo(".hello__item_1", {
        opacity: 0,
      }, {
        opacity: 1,
        duration: .6,
      },
      "-=.4"
    )
  anim
    .fromTo(".hello__item_2", {
        opacity: 0,
      }, {
        opacity: 1,
        duration: .6,
      },
      "-=.4"
    )
  anim
    .fromTo(".hello__item_3", {
        opacity: 0,
      }, {
        opacity: 1,
        duration: .6,
      },
      "-=.4"
    )

  anim
    .fromTo(".hello__image", {
        opacity: 0,
        xPercent: 50,
      }, {
        opacity: 1,
        xPercent: 0,
        duration: .8,
      },
      "-=1.3"
    )

  if (ScrollTrigger.isTouch !== 1) {

    ScrollSmoother.create({
      wrapper: '.page',
      content: '.scroll',
      smooth: 1.5,
      effects: true,
    })

    gsap.fromTo('.hello', {
      opacity: 1
    }, {
      scrollTrigger: {
        trigger: '.hello',
        start: 'center center',
        end: '620',
        scrub: 1.3
      },
      opacity: 0
    })

    gsap.fromTo('.hello__body', {}, {
      scrollTrigger: {
        trigger: '.hello',
        start: 'top top',
        scrub: 1.9,
      },
      xPercent: -30
    })

    gsap.fromTo('.hello__image img', {}, {
      scrollTrigger: {
        trigger: '.hello',
        start: 'top top',
        scrub: 1.9,
      },
      scale: 1.2
    })

    gsap.fromTo('.about', {
      opacity: 0,
      xPercent: -10,
    }, {
      scrollTrigger: {
        trigger: '.hello',
        start: 'bottom bottom',
        scrub: 1.5,
      },
      opacity: 1,
      xPercent: 0,
    })

    let itemsA = gsap.utils.toArray('.about__item')

    itemsA.forEach(item => {
      gsap.fromTo(item, {
        opacity: 0,
        scale: .3,
        borderRadius: 0,
      }, {
        scrollTrigger: {
          trigger: ".hello",
          start: 'bottom bottom',
          scrub: 1.9
        },
        opacity: 1,
        scale: 1,
        borderRadius: 30,
      })
    })

    let itemsQ = gsap.utils.toArray('.zerg-list__titles')

    itemsQ.forEach(item => {
      gsap.fromTo(item, {
        opacity: 0,
        xPercent: 10,
      }, {
        scrollTrigger: {
          trigger: item,
          start: 'top bottom',
          scrub: 1.5,
        },
        opacity: 1,
        xPercent: 0,
      })
    })

    let itemsT = gsap.utils.toArray('.zerg-item')

    itemsT.forEach(item => {
      gsap.fromTo(item, {
        opacity: .01,
        yPercent: 30,
      }, {
        scrollTrigger: {
          trigger: item,
          start: 'top bottom',
          end: 'bottom center',
          scrub: 1.9
        },
        opacity: 1,
        yPercent: 0,
      })
    })

    gsap.fromTo('.contacts', {
      opacity: 0,
    }, {
      scrollTrigger: {
        trigger: '.block-zerg',
        start: 'bottom bottom',
        scrub: 1.9
      },
      opacity: 1,
    })

    gsap.fromTo('.contacts__list', {
      yPercent: 20,
    }, {
      scrollTrigger: {
        trigger: '.block-zerg',
        start: 'bottom bottom',
        scrub: 1.9
      },
      yPercent: 0,
    })

    gsap.fromTo('.contacts__image', {
      yPercent: -20,
    }, {
      scrollTrigger: {
        trigger: '.block-zerg',
        start: 'bottom bottom',
        scrub: 1.9
      },
      yPercent: 0,
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
    if (document.body.offsetWidth < 992) {
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


}