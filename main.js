//oshiのスライドショーつくりたい
const slideImg = document.getElementById("slide_img");
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
  //slideImgは6行目で定義づけたやつ。.srcは.textcontentみたいなやつよ。
  //img_src[num]はimg_srcのnum番目という意味。このままだとオブジェクトなので、画像のURLをとってくるために、picture8~26行目のやつをかく。

  slideImg.src = img_src[num].picture;
}

//表示する時間を切り替える
setInterval(slide_time, 1000);
slideImg.onclick = function () {
  window.open(img_src[num].url);
};

const displayjikosyoukai = document.getElementById("display-jikosyoukai");
const jikosyoukai = document.getElementById("jikosyoukai");
hangkok.onclick = function () {
  jikosyoukai.textContent =
    "안녕하세요! 나나코입니다. 1999생이고 21살입니다. 어느새 졸업까지 몇달도 남지 않습니다. 고향은 시가, 엄청 큰 호수 비와호가 있습니다. 한국요리와 달달한 스위트를 좋아하고 게임도 너무 좋아합니다. 달성하고 싶은 목표는 프로그래밍은 잘하기, 살 빼기 그리고 졸업하기입니다. 제가 discord 있을 때 언제든지 같이 얘기 하거나 공부합시다!";
};
english.onclick = function () {
  jikosyoukai.textContent =
    "Hi！I‘m Nanako. I was born in 1999 and I am 21 years old. I still have some months left before graduating from university. I’m from Shiga prefecture which has Biwa lake. I love Korean-food, sweets and gaming. What I want to achieve in this year is being a good programmer, losing weight and graduating from my university. When I am in discord, feel free to join me!";
};

japanese.onclick = function () {
  jikosyoukai.textContent =
    "こんにちは！ななこです！1999年うまれの21歳。いつの間にか大学卒業まであと数か月です。出身は滋賀県です。琵琶湖しかない場所です。好きなものは韓国料理と甘いものとゲームです。2021年達成したいことはプログラミングをうまくなること、ダイエット達成、大学を無事卒業することです！discordにいるときは誰でも話にきてくれたらうれしいです！";
};
