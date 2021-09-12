// hamburger menu animation
const hamburger = document.getElementById("hamburger");

const icon = document.querySelector(".icon");
const sm = document.querySelector(".sm");
// slideUp
const slideUp = (el, duration = 300) => {
  el.style.height = el.offsetHeight + "px";
  el.offsetHeight;
  el.style.transitionProperty = "height, margin, padding";
  el.style.transitionDuration = duration + "ms";
  el.style.transitionTimingFunction = "ease";
  el.style.overflow = "hidden";
  el.style.height = 0;
  el.style.paddingTop = 0;
  el.style.paddingBottom = 0;
  el.style.marginTop = 0;
  el.style.marginBottom = 0;
  setTimeout(() => {
    el.style.display = "none";
    el.style.removeProperty("height");
    el.style.removeProperty("padding-top");
    el.style.removeProperty("padding-bottom");
    el.style.removeProperty("margin-top");
    el.style.removeProperty("margin-bottom");
    el.style.removeProperty("overflow");
    el.style.removeProperty("transition-duration");
    el.style.removeProperty("transition-property");
    el.style.removeProperty("transition-timing-function");
  }, duration);
};

// slideDown
const slideDown = (el, duration = 300) => {
  el.style.removeProperty("display");
  let display = window.getComputedStyle(el).display;
  if (display === "none") {
    display = "block";
  }
  el.style.display = display;
  let height = el.offsetHeight;
  el.style.overflow = "hidden";
  el.style.height = 0;
  el.style.paddingTop = 0;
  el.style.paddingBottom = 0;
  el.style.marginTop = 0;
  el.style.marginBottom = 0;
  el.offsetHeight;
  el.style.transitionProperty = "height, margin, padding";
  el.style.transitionDuration = duration + "ms";
  el.style.transitionTimingFunction = "ease";
  el.style.height = height + "px";
  el.style.removeProperty("padding-top");
  el.style.removeProperty("padding-bottom");
  el.style.removeProperty("margin-top");
  el.style.removeProperty("margin-bottom");
  setTimeout(() => {
    el.style.removeProperty("height");
    el.style.removeProperty("overflow");
    el.style.removeProperty("transition-duration");
    el.style.removeProperty("transition-property");
    el.style.removeProperty("transition-timing-function");
  }, duration);
};

// slideToggle
const slideToggle = (el, duration = 300) => {
  if (window.getComputedStyle(el).display === "none") {
    return slideDown(el, duration);
  } else {
    return slideUp(el, duration);
  }
};
hamburger.onclick = function () {
  icon.classList.toggle("close");
  slideToggle(sm, 300);
};

function changeColor() {
  const timing = 50; //　変化するタイミングを微調整する

  const scrollY = window.pageYOffset;
  const nav = document.getElementById("nav");

  const trigger1 = document.getElementById("message");
  const trigger2 = document.getElementById("history");
  const trigger3 = document.getElementById("representative");
  const trigger4 = document.getElementById("faq");

  const trigger1Y = trigger1.getBoundingClientRect().top; // ウィンドウ上からの要素の位置
  const trigger2Y = trigger2.getBoundingClientRect().top;
  const trigger3Y = trigger3.getBoundingClientRect().top;
  const trigger4Y = trigger4.getBoundingClientRect().top;

  // 白背景の時はbodyの.bg-is-blackを削除
  // 黒背景の時はbodyに.bt-is-blackを付与
  if (trigger2Y - timing > 0 && 0 >= trigger1Y - timing) {
    nav.classList.remove("bg-is-black");
  } else if (trigger4Y - timing > 0 && 0 >= trigger3Y - timing) {
    nav.classList.remove("bg-is-black");
  } else {
    nav.classList.add("bg-is-black");
  }
}

window.addEventListener("scroll", changeColor);
