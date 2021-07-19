ganbare.onclick = function () {
  ganbare.textContent = "ありがとう！";
};

//oshiのスライドショーつくりたい
const img_src = [
  {
    picture: "jimin.jpg",
    url: "https://www.instagram.com/jimin_bighitentertainment/",
  },
  {
    picture: "yeonjun.jpg",
    url: "https://www.instagram.com/txt_bighit/?hl=ja",
  },
  {
    picture: "lauv.jpg",
    url: "https://www.youtube.com/channel/UCfLdIEPs1tYj4ieEdJnyNyw",
  },
  { picture: "tzuyu.jpg", url: "https://www.instagram.com/twicetagram/?hl=ja" },
  { picture: "sana.jpg", url: "https://www.instagram.com/twicetagram/?hl=ja" },
  { picture: "hwasa.jpg", url: "https://www.instagram.com/_mariahwasa/?hl=ja" },
  {
    picture: "dovecameron.jpg",
    url: "https://www.instagram.com/dovecameron/?hl=ja",
  },
];

//最初numを0にしておく。画像の配列は0からある
let num = 0;
//numが6、つまり最後の画像になったとき、もう1度num＝0つまり最初から繰り返す
function slide_time() {
  if (num === 6) {
    num = 0;
    //それ以外はnumを追加していく。スライドの画像を次に次に動かす
  } else {
    num++;
  }
  //ここの一文よくわからない
  const slideImg = document.getElementById("slide_img");
  slideImg.src = img_src[num];
}
//表示する時間を切り替える
setInterval(slide_time, 10000);

slideImg.onclick = function () {
  window.open(img_src[num].url);
};
