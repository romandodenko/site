"use strict";

export function contactsMap() {
  document.addEventListener("DOMContentLoaded", function () {


    const heroMap = document.querySelector(".hero__map-map")
    const contactsMap = document.querySelector(".contacts__map")
    if (heroMap) {
      ymaps.ready(init);

      function init() {
        const myMap = new ymaps.Map(
          "map", {
            center: [60.123899563931566,30.442503500000004],
            zoom: 15,
          },
        );
        myMap.controls.remove('geolocationControl'); // удаляем геолокацию
        myMap.controls.remove('searchControl'); // удаляем поиск
        myMap.controls.remove('trafficControl'); // удаляем контроль трафика
        myMap.controls.remove('typeSelector'); // удаляем тип
        myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
        myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
        myMap.controls.remove('rulerControl'); // удаляем контрол правил
      }
    }

 if (contactsMap) {
  ymaps.ready(init);

  function init() {

    const myMapContacts = new ymaps.Map(
      "contactsMap", {
        center: [60.123899563931566,30.442503500000004],
        zoom: 15,
      },
    );
    myMapContacts.controls.remove('geolocationControl'); // удаляем геолокацию
    myMapContacts.controls.remove('searchControl'); // удаляем поиск
    myMapContacts.controls.remove('trafficControl'); // удаляем контроль трафика
    myMapContacts.controls.remove('typeSelector'); // удаляем тип
    myMapContacts.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    myMapContacts.controls.remove('zoomControl'); // удаляем контрол зуммирования
    myMapContacts.controls.remove('rulerControl'); // удаляем контрол правил
  }
 }



    // для позднего появления карты 

    // let flag = 0; 

    // window.addEventListener("scroll", function () { 
    //   let scrollY = window.scrollY;
    //   let mapOffset = this.document.querySelector("#map").offsetTop;
    //   if (scrollY >= mapOffset - 1000 && flag == 0) {
    //     ymaps.ready(init);

    //       function init() {
    //       const myMap = new ymaps.Map(
    //         "map",
    //         { 
    //           center: [55.76963601332982,37.63668850000002],
    //           zoom: 14,
    //         },
    //       );
    //       var myPlacemark = new ymaps.Placemark([55.76963601332982,37.63668850000002], {}, {
    //         iconLayout: 'default#image',
    //         iconImageHref: '../../img/baloon.png',
    //         iconImageSize: [12, 12],
    //       });

    //       myMap.geoObjects.add(myPlacemark);
    //     }
    //     flag = 1;
    //   }

    // })
  })
}