const body = document.querySelector("body");

const IMG_NUM = 4;

function handleImgLoad() {
  console.log("finished loaded");
}

function paintImg(imgNum) {
  const img = new Image();
  img.src = `imgs/${imgNum + 1}.jpg`;
  img.classList.add("bgImg");
  body.appendChild(img);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUM);
  return number;
}

function init() {
  const randomNum = genRandom();
  paintImg(randomNum);
}

init();
