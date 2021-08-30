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
