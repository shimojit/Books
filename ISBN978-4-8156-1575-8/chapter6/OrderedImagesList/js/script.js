const items = document.querySelectorAll('.img-item');

for (let i = 0; i < items.length; i++) {
  const keyframes = {
    //opacity: [0, 1],

    // 画像を回転させる場合
    //rotate: ['x 90deg', 0],

    // 下からポップアップさせる場合
    //translate: ['0 50px', 0],

    // ふわふわと落ちてくるような画像の場合
    //rotate: ['5deg', 0],
    //scale: [1.1, 1],

    // ぼかしからクリアになる場合
    filter: ['blur(20px)', 'blur(0)'],
  };

  const options = {
    duration: 600,
    delay: i * 300,
    fill: 'forwards',
  };

  items[i].animate(keyframes, options);
}