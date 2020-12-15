"use strict";
// Для изображений

function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document
      .querySelector("body")
      .classList.add("webp");
  } else {
    document
      .querySelector("body")
      .classList.add("no-webp");
  }
});

// Кнопка с выезжающим меню

const menu = document.querySelector(
    ".main__pull-out-menu"
  ),
  menuButtonUp = document.querySelector(
    ".main__pull-out-menu-button-up"
  ),
  menuButtonDown = document.querySelector(
    ".main__pull-out-menu-button-down"
  ),
  dots = document.querySelector(
    ".main__dots"
  );

menuButtonUp.addEventListener(
  "click",
  () => {
    menu.classList.toggle(
      "main__pull-out-menu--active"
    );
    dots.classList.toggle(
      "visually-hidden"
    );
    menuButtonUp.classList.toggle(
      "visually-hidden"
    );
    menuButtonDown.classList.toggle(
      "visually-hidden"
    );
  }
);
menuButtonDown.addEventListener(
  "click",
  () => {
    menu.classList.toggle(
      "main__pull-out-menu--active"
    );
    setTimeout(function () {
      dots.classList.toggle(
        "visually-hidden"
      );
      menuButtonUp.classList.toggle(
        "visually-hidden"
      );
      menuButtonDown.classList.toggle(
        "visually-hidden"
      );
    }, 1000);
  }
);

//IE браузер фиксы

function isInternetExplorer() {
  return (
    window.navigator.userAgent.indexOf(
      "MSIE "
    ) > -1 ||
    window.navigator.userAgent.indexOf(
      "Trident/"
    ) > -1
  );
}

const headerMainWrap = document.querySelector(
  ".header-main-wrap"
);
if (isInternetExplorer() === true) {
  headerMainWrap.style.height = "100vh";
  headerMainWrap.style.minHeight =
    "700px";
}

// popup

const headerRegBtn = document.querySelector(
    ".header__reg-btn"
  ),
  popup = document.querySelector(
    ".popup-wrap"
  ),
  popupClose = document.querySelector(
    ".popup__close"
  );

headerRegBtn.addEventListener(
  "click",
  () => {
    popup.classList.toggle(
      "visually-hidden"
    );
  }
);

popupClose.addEventListener(
  "click",
  () => {
    popup.classList.toggle(
      "visually-hidden"
    );
  }
);

//slider

const dotsItem1 = document.querySelector(
    ".main__dots-item-1"
  ),
  dotsItem2 = document.querySelector(
    ".main__dots-item-2"
  ),
  dotsItem3 = document.querySelector(
    ".main__dots-item-3"
  ),
  main = document.querySelector(
    ".main"
  );

dotsItem1.addEventListener(
  "click",
  () => {
    main.style.backgroundImage =
      "url('img/bg-pic-1.jpg')";
    dotsItem1.style.backgroundColor =
      "#e2d1a6";
    dotsItem2.style.backgroundColor =
      "#fff";
    dotsItem3.style.backgroundColor =
      "#fff";
  }
);
dotsItem2.addEventListener(
  "click",
  () => {
    main.style.backgroundImage =
      "url('img/bg-pic-2.jpg')";
    dotsItem1.style.backgroundColor =
      "#fff";
    dotsItem2.style.backgroundColor =
      "#e2d1a6";
    dotsItem3.style.backgroundColor =
      "#fff";
  }
);
dotsItem3.addEventListener(
  "click",
  () => {
    main.style.backgroundImage =
      "url('img/bg-pic-3.jpg')";
    dotsItem1.style.backgroundColor =
      "#fff";
    dotsItem2.style.backgroundColor =
      "#fff";
    dotsItem3.style.backgroundColor =
      "#e2d1a6";
  }
);
