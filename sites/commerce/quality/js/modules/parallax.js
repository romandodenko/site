"use strict"


  window.onload = function () {
    const parallax = document.querySelector(".images-parallax__item")

    if (parallax) {
      const content = document.querySelector(".parallax__container");
      const clouds = document.querySelector(".images-parallax__background");

      // Коэффициенты
      const forClouds = 40;

      // Скорость анимации
      const speed = 0.05;

      // Объявление переменных
      let positionX = 0
      let positionY = 0;
      let coordXprocent = 0;
      let coordYprocent = 0;

      function setMouseParallaxStyle() {
        const distX = coordXprocent - positionX;
        const distY = coordYprocent - positionY;

        positionX = positionX + (distX * speed);
        positionY = positionY + (distY * speed)

        // Передаем стили 
        clouds.style.cssText = `transform: translate(${positionX / forClouds}%, ${positionY / forClouds}%);`;

        requestAnimationFrame(setMouseParallaxStyle);
      }
      setMouseParallaxStyle();


      parallax.addEventListener("mousemove", function (e) {
        // Получение ширины и высоты блока
        const parallaxWidth = parallax.offsetWidth;
        const parallaxHeight = parallax.offsetHeight;

        // Ноль по середине
        const coordX = e.pageX - parallaxWidth / 2;
        const coordY = e.pageY - parallaxHeight / 2;

        // Получаем проценты
        coordXprocent = coordX / parallaxWidth * 100;
        coordYprocent = coordY / parallaxHeight * 100;
      });
    }
  }
