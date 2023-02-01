
new Swiper('.image-slider', {
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
  },
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },

  effect: 'creative',
  loop: 'true',
  slidesPerColum: 1,
  loopedSlides: 3,
  autoplay: {
      delay: 5000,
  },
  speed: 600,
});

const icon = document.querySelector('.search-icon2');
const search = document.querySelector('.search');
const closeSearch = document.querySelector('.close-search')

closeSearch.addEventListener('click', function (e) {
  e.stopPropagation();
  search.classList.remove('open');
});



icon.onclick = function() {
  search.classList.add('open');
  closeSearch.classList.remove('open');

};

const tabsBtn   = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__item");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains('active') ) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active');
            });

            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            });

            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
}

document.querySelector('.tabs__nav-btn').click();


"use strict"


if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.body.classList.add('touch');

    let menuArrows = document.querySelectorAll('.menu-arrow');
    if (menuArrows.length > 0) {
        for (let index = 0; index < menuArrows.length; index++) {
            let menuArrow = menuArrows[index];
            menuArrow.addEventListener('click', function (e) {
                menuArrow.parentElement.classList.toggle('active-arrow');
            });
        }
    }

  } else {
    document.body.classList.add('pc');
}

// menu burger

const iconMenu = document.querySelector('.menu-icon');
const menuBody = document.querySelector('.menu-body');
if (iconMenu) {

    iconMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('lock');
        iconMenu.classList.toggle('active');
        menuBody.classList.toggle('active');
    });
}




// плавный скролл

const menuLinks = document.querySelectorAll('.menu-link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;


            if (iconMenu.classList.contains('active')) {
                document.body.classList.remove('lock');
                iconMenu.classList.remove('active');
                menuBody.classList.remove('active');
            }

            window.scroll({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}

document.querySelectorAll('.accordion-control').forEach((item) =>
item.addEventListener('click', () => {
    const parent = item.parentNode;
    if (parent.classList.contains('open-acc')) {
        parent.classList.remove('open-acc');
    }   else {
        document.querySelectorAll('.accordion-control').forEach((child) => child.classList.remove('open-acc'))


        parent.classList.add('open-acc');
    }
})
)

// const icon = document.querySelector('.search-icon');
// const search = document.querySelectorAll('.search');

// icon.onclick = function() {
//   search.classList.toggle('open');
// };
