"use strict";

export function tabs() {
  document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".catalog__button").forEach(function (tabsBtn) {
      tabsBtn.addEventListener("click", function (event) {
        const path = event.currentTarget.dataset.path
  
        document.querySelectorAll(".catalog-item").forEach(function (tabContent) {
          tabContent.classList.remove("catalog-item-active")
        })
        document.querySelector(`[data-target="${path}"]`).classList.add("catalog-item-active")
      })
    })

    document.querySelectorAll(".catalog__button").forEach(function (tabsBtn) {
      tabsBtn.addEventListener("click", function (event) {
        const path1 = event.currentTarget.dataset.path1
  
        document.querySelectorAll(".catalog__button").forEach(function (tabContent) {
          tabContent.classList.remove("catalog-button-active")
        })
        document.querySelector(`[data-target1="${path1}"]`).classList.add("catalog-button-active")
      })
    })
  })
}

/* 
            HTML


  <button class="btn" data-path="germany">Germany</button>

  <div class="content" data-target="germany">
      <div">
          <span>
            Что мы о нём знаем?
          </span>
          <p>
            Пока ничего... Зато мы точно знаем, что в галерее есть на что посмотреть!
          </p>
          <a href="">
            В галерею
          </a>
      </div>
  </div>
          
              CSS

  .content {
    opacity: 0;
    pointer-events: none;
    visibility: hidden;
  }

  .content-active {
    opacity: 1;
    pointer-events: visible;
    visibility: visible;
  } 

*/
