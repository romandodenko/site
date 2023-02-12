"use strict"

window.onload = function () {

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

  if (ScrollTrigger.isTouch !== 1) {

    ScrollSmoother.create({
      wrapper: '.page',
      content: '.scroll',
      smooth: 1.5,
      effects: true
    })

    gsap.fromTo('.hello', {
      opacity: 1
    }, {
      opacity: 0,
      scrollTrigger: {
        trigger: '.hello',
        start: 'center',
        end: '620',
        scrub: true
      }
    })

    gsap.fromTo('.about', {
      opacity: .1,
      x: -100,
    }, {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: '.about',
        start: '-450',
        end: '-200',
        scrub: true,
      }
    })

    gsap.fromTo('.portfolio', {
      opacity: .1,
      x: 100,
    }, {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: '.portfolio',
        start: '-600',
        end: '-180',
        scrub: true
      }
    })

    gsap.fromTo('.contacts', {
      opacity: .1,
    }, {
      opacity: 1,
      scrollTrigger: {
        trigger: '.contacts',
        start: '-600',
        end: '-180',
        scrub: true
      }
    })

    gsap.fromTo('.contacts__list', {
      y: 50,
    }, {
      y: 0,
      scrollTrigger: {
        trigger: '.contacts',
        start: '-600',
        end: '-180',
        scrub: true
      }
    })

    gsap.fromTo('.contacts__image', {
      y: -50,
    }, {
      y: 0,
      scrollTrigger: {
        trigger: '.contacts',
        start: '-600',
        end: '-180',
        scrub: true
      }
    })

    let itemsT = gsap.utils.toArray('.portfolio-list__title')

    itemsT.forEach(item => {
      gsap.fromTo(item, {
        opacity: .1
      }, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: item,
          start: '-820',
          end: '-320',
          scrub: true
        }
      })
    })

    let itemsA = gsap.utils.toArray('.about__item')

    itemsA.forEach(item => {
      gsap.fromTo(item, {
        opacity: 0.1,
        y: 20
      }, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: item,
          start: '-650',
          end: '-550',
          scrub: true
        }
      })
    })

    let itemsL = gsap.utils.toArray('.portfolio-swiper__image')

    itemsL.forEach(item => {
      gsap.fromTo(item, {
        opacity: 0.1,
        x: -30
      }, {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: item,
          start: '-550',
          end: '-380',
          scrub: true
        }
      })
    })

    let itemsR = gsap.utils.toArray('.portfolio-swiper__descr')

    itemsR.forEach(item => {
      gsap.fromTo(item, {
        opacity: 0.1,
        x: 30
      }, {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: item,
          start: '-550',
          end: '-380',
          scrub: true
        }
      })
    })

  }

  let anim = gsap.timeline({})

  anim
    .fromTo(".hello__title", {
      opacity: 0,
      y: 50,
    }, {
      opacity: 1,
      y: 0,
      duration: .6,
    })

  anim
    .fromTo(".hello__text", {
        opacity: 0,
        y: 50,
      }, {
        opacity: 1,
        y: 0,
        duration: .6,
      },
      "-=.3"
    )

  anim
    .fromTo(".hello__item_1", {
        opacity: 0,
      }, {
        duration: .6,
        opacity: 1,
      },
      "-=.4"
    )
  anim
    .fromTo(".hello__item_2", {
        opacity: 0,
      }, {
        duration: .6,
        opacity: 1,
      },
      "-=.4"
    )
  anim
    .fromTo(".hello__item_3", {
        opacity: 0,
      }, {
        duration: .6,
        opacity: 1,
      },
      "-=.4"
    )

  anim
    .fromTo(".hello__image", {
        opacity: 0,
        x: 50,
      }, {
        duration: .6,
        opacity: 1,
        x: 0,
      },
      "-=1.2"
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