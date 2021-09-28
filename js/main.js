// hamburger menu animation
const hamburger = document.getElementById("hamburger");
const icon = document.querySelector(".icon");
const sm = document.querySelector(".sm");
const MessageNav = document.getElementById("message-nav");
const MoviesNav = document.getElementById("movies-nav");
const NewsNav = document.getElementById("news-nav");
const HistoryNav = document.getElementById("history-nav");
const FaqNav = document.getElementById("faq-nav");
const ContactNav = document.getElementById("contact-nav");

// slideUp
const slideUp = (el, duration = 700) => {
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
const slideDown = (el, duration = 700) => {
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
const slideToggle = (el, duration = 700) => {
  if (window.getComputedStyle(el).display === "none") {
    return slideDown(el, duration);
  } else {
    return slideUp(el, duration);
  }
};
hamburger.onclick = function () {
  icon.classList.toggle("close");
  slideToggle(sm, 700);
};
MoviesNav.onclick = function () {
  slideToggle(sm, 700);
};
NewsNav.onclick = function () {
  slideToggle(sm, 700);
};
HistoryNav.onclick = function () {
  slideToggle(sm, 700);
};
FaqNav.onclick = function () {
  slideToggle(sm, 700);
};
ContactNav.onclick = function () {
  slideToggle(sm, 700);
};

// header color change
function changeColor() {
  const timing = 130; //　変化するタイミングを微調整する

  const scrollY = window.pageYOffset;
  // header取得
  const nav = document.querySelector(".pc");

  // 各セクション情報取得
  const trigger1 = document.getElementById("mainvisual");
  const trigger2 = document.getElementById("message");
  const trigger3 = document.getElementById("movies");
  const trigger4 = document.getElementById("movies2");
  const trigger5 = document.getElementById("history");
  const trigger6 = document.getElementById("history2");
  const trigger7 = document.getElementById("faq");
  const trigger8 = document.getElementById("faq2");
  const trigger9 = document.getElementById("contact");
  const trigger10 = document.getElementById("contact2");

  // 各セクションの位置を取得
  const trigger1Y = trigger1.getBoundingClientRect().top; // ウィンドウ上からの要素の位置
  const trigger2Y = trigger2.getBoundingClientRect().top;
  const trigger3Y = trigger3.getBoundingClientRect().top;
  const trigger4Y = trigger4.getBoundingClientRect().top;
  const trigger5Y = trigger5.getBoundingClientRect().top;
  const trigger6Y = trigger6.getBoundingClientRect().top;
  const trigger7Y = trigger7.getBoundingClientRect().top;
  const trigger8Y = trigger8.getBoundingClientRect().top;
  const trigger9Y = trigger9.getBoundingClientRect().top;
  const trigger10Y = trigger10.getBoundingClientRect().top;

  // 白背景の時はnavの.bg-is-blackを削除
  // 黒背景の時はnavに.bg-is-blackを付与
  if (trigger2Y - timing > 0 && 0 >= trigger1Y - timing) {
    nav.classList.remove("bg-is-black");
  } else if (
    // 4,6,8,10は各id2
    (trigger4Y - timing > -10 && -90 >= trigger3Y - timing) ||
    (trigger6Y - timing > 140 && -90 >= trigger5Y - timing) ||
    (trigger8Y - timing > 110 && -90 >= trigger7Y - timing) ||
    (trigger10Y - timing > 80 && -90 >= trigger9Y - timing)
  ) {
    nav.classList.remove("bg-is-black");
  } else {
    nav.classList.add("bg-is-black");
  }
}

window.addEventListener("scroll", changeColor);
