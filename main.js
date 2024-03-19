function copyMenu() {
  // Copy inside .dpt-cat to .department
  var departmentCategory = document.querySelector(".dpt-cat");
  var departmentPlace = document.querySelector(".departments");
  departmentPlace.innerHTML = departmentCategory.innerHTML;

  // Copy inside nav to nav
  var mainNav = document.querySelector(".header-nav nav");
  var navPlace = document.querySelector(".off-canvas nav");
  navPlace.innerHTML = mainNav.innerHTML;

  // Copy .header-top .wrapper to .thetop-nav
  var topNav = document.querySelector(".header-top .wrapper");
  var topPlace = document.querySelector(".off-canvas .thetop-nav");
  topPlace.innerHTML = topNav.innerHTML;
}
copyMenu();

// show mobile menu
const menuButton = document.querySelector(".trigger");
const closeButton = document.querySelector(".t-close");
const siteElement = document.querySelector(".site");

menuButton.addEventListener("click", function () {
  siteElement.classList.toggle("showmenu");
});

closeButton.addEventListener("click", function () {
  siteElement.classList.remove("showmenu");
});
// Show sub menu on mobile
const subMenus = document.querySelectorAll(".has-child .icon-small");
subMenus.forEach((menu) => menu.addEventListener("click", toggle));

function toggle(e) {
  e.preventDefault();
  subMenus.forEach((item) => {
    if (item !== this) {
      item.closest(".has-child").classList.remove("expand");
    }
  });

  if (this.closest(".has-child").classList.contains("expand")) {
    this.closest(".has-child").classList.remove("expand");
  } else {
    this.closest(".has-child").classList.add("expand");
  }
}
// import swiper
const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});
// show bottom menu search box
const searchButton = document.querySelector(".t-search"),
  tClose = document.querySelector(".search-close"),
  showClass = document.querySelector(".site");
searchButton.addEventListener("click", function () {
  showClass.classList.toggle("showsearch");
});
tClose.addEventListener("click", function () {
  showClass.classList.remove("showsearch");
});
// show dpt menu
const dptButton = document.querySelector(".dpt-cat .dpt-trigger"),
  dptClass = document.querySelector(".site");
dptButton.addEventListener("click", function () {
  dptClass.classList.toggle("showdpt");
});

// the single page products image slider

var productsThumb = new Swiper(".small-image", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 3, // Corrected typo (slidesPreView to slidesPerView)
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    481: {
      spaceBetween: 32,
    },
  },
});

var productBig = new Swiper(".big-image", {
  loop: true,
  autoHeight: true,
  navigation: {
    nextEl: ".swiper-button-next", // Corrected typo (nexEl to nextEl)
    prevEl: ".swiper-button-prev", // Corrected typo (preEl to prevEl)
  },
  thumbs: {
    swiper: productsThumb,
  },
});
