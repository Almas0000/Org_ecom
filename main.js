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
