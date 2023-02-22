"use strict"

window.onload = function () {

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

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
          trigger: item,
          start: '-650',
          end: 'center center',
          scrub: 1.9
        },
        opacity: 1,
        scale: 1,
        borderRadius: 30,
      })
    })

    gsap.fromTo('.portfolio', {
      opacity: 0,
      x: 100,
    }, {
      scrollTrigger: {
        trigger: '.about',
        start: 'bottom bottom',
        scrub: 1.9
      },
      opacity: 1,
      x: 0
    })

    let itemsT = gsap.utils.toArray('.portfolio-list__title')

    itemsT.forEach(item => {
      gsap.fromTo(item, {
        opacity: .01,
        yPercent: -100,
      }, {
        scrollTrigger: {
          trigger: item,
          start: '-620',
          end: '-320',
          scrub: 1.9
        },
        opacity: 1,
        yPercent: 0,
      })
    })

    let itemsL = gsap.utils.toArray('.portfolio-swiper__image')

    itemsL.forEach(item => {
      gsap.fromTo(item, {
        opacity: 0.01,
        xPercent: -5,
      }, {
        scrollTrigger: {
          trigger: item,
          start: 'top center',
          end: 'center center',
          scrub: 2.9
        },
        opacity: 1,
        xPercent: 0,
      })
    })

    let itemsR = gsap.utils.toArray('.portfolio-swiper__descr')

    itemsR.forEach(item => {
      gsap.fromTo(item, {
        opacity: 0.01,
        xPercent: 5,
      }, {
        scrollTrigger: {
          trigger: item,
          start: 'top center',
          end: 'center center',
          scrub: 2.9
        },
        opacity: 1,
        xPercent: 0,
      })
    })

    gsap.fromTo('.contacts', {
      opacity: 0,
    }, {
      scrollTrigger: {
        trigger: '.portfolio',
        start: 'bottom bottom',
        scrub: 1.9
      },
      opacity: 1,
    })

    gsap.fromTo('.contacts__list', {
      yPercent: 20,
    }, {
      scrollTrigger: {
        trigger: '.portfolio',
        start: 'bottom bottom',
        scrub: 1.9
      },
      yPercent: 0,
    })

    gsap.fromTo('.contacts__image', {
      yPercent: -20,
    }, {
      scrollTrigger: {
        trigger: '.portfolio',
        start: 'bottom bottom',
        scrub: 1.9
      },
      yPercent: 0,
    })

  }

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