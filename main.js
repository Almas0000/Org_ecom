function copyMenu() {
  // copy inside .dpt-cat to .department
  const dptcategory = document.querySelector(".dpt-cat");
  const departmentplace = document.querySelector(".department");
  if (dptcategory && departmentplace) {
    departmentplace.innerHTML = dptcategory.innerHTML;
  }

  //copy inside nav to nav
  const mainNav = document.querySelector(".header-nav nav");
  const navPlace = document.querySelector(".off-canvas nav");
  if (mainNav && navPlace) {
    navPlace.innerHTML = mainNav.innerHTML;
  }

  //copy .header-top .wrapper to .thetop-nav
  const topNav = document.querySelector(".header-top .wrapper");
  const topNavPlace = document.querySelector("off-canvas .thetop-nav");
  if (topNav && topNavPlace) {
    topNavPlace.innerHTML = topNav.innerHTML;
  }
}
