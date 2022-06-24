const content = document.querySelectorAll(".menu");
const menuRow1 = document.querySelector(".menu-row-1");
const menuRow2 = document.querySelector(".menu-row-2");
const menuRow3 = document.querySelector(".menu-row-3");
const tabBtn1 = document.querySelectorAll(".tab1");
const tabBtn2 = document.querySelectorAll(".tab2");
const tabBtn3 = document.querySelectorAll(".tab3");
const menuWrapper = document.querySelector(".menu-wrapper");
menuWrapper.addEventListener("click", function (e) {
  const tab = e.target.dataset.tab;
  const tab2 = e.target.dataset.tab2;
  // console.log(tab);
  // console.log(e.target.classList);
  // tab 1
  if (e.target.classList.contains("tab1")) {
    console.log(e.target.classList);
    // remove active from all tabs
    tabBtn2.forEach(function (tB) {
      tB.classList.remove("menu-tab-btn-active");
    });
    tabBtn3.forEach(function (tB) {
      tB.classList.remove("menu-tab-btn-active");
    });
    // remove active from all rows
    menuRow1.classList.remove("menu-row-active");
    menuRow3.classList.remove("menu-row-active");
    menuRow3.classList.add("menu-row-active");
    // remove active from all content
    content.forEach(function (cont) {
      cont.classList.remove("menu-list-active");
    });
  }
  // tab 2
  if (e.target.classList.contains("tab2")) {
    // remove active from all tabs
    tabBtn2.forEach(function (tB) {
      tB.classList.remove("menu-tab-btn-active");
    });
    tabBtn3.forEach(function (tB) {
      tB.classList.remove("menu-tab-btn-active");
    });
    // remove active from all rows
    menuRow1.classList.remove("menu-row-active");
    menuRow3.classList.remove("menu-row-active");
    menuRow1.classList.add("menu-row-active");
    // remove active from all content
    content.forEach(function (cont) {
      cont.classList.remove("menu-list-active");
    });
  }
  // tab 3
  if (e.target.classList.contains("tab3")) {
    // remove active from all tabs
    tabBtn2.forEach(function (tB) {
      tB.classList.remove("menu-tab-btn-active");
    });
    tabBtn3.forEach(function (tB) {
      tB.classList.remove("menu-tab-btn-active");
    });
    // remove active from all rows
    menuRow1.classList.remove("menu-row-active");
    menuRow3.classList.remove("menu-row-active");
    menuRow3.classList.add("menu-row-active");
    // remove active from all content
    content.forEach(function (cont) {
      cont.classList.remove("menu-list-active");
    });
  }
  // add active to tab
  var elementTab = document.getElementById(tab2);
  console.log(elementTab);
  elementTab.classList.add("menu-tab-btn-active");
  // add active to content
  var element = document.getElementById(tab);
  element.classList.add("menu-list-active");
});

// ********** set date ************
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();
