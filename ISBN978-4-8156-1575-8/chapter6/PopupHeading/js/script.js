const heading = document.querySelector('#heading');

const keyframes = {
  // 下からポップアップ
  //opacity: [0, 1],
  //translate: ['0 50px', 0],

  // x軸360度回転
  //rotate: ['x 360deg', 0],

  // 色の変化
  //color: ['#f66', '#fc2', '#0c6', '#0bd'],

  // 背景が伸びるように変化
  //color: ['transparent', '#fff'],
  //backgroundPosition: ['100% 0%', '0% 0%'],

  // ふよふよ動くように変化
  borderRadius: [
    '20% 50% 50% 70%/50% 50% 70% 50%',
    '50% 20% 50% 50%/40% 40% 60% 60%',
    '50% 40% 20% 40%/40% 50% 50% 80%',
    '50% 50% 50% 20%/40% 40% 60% 60%',
  ],
};

const options = {
  // 必須
  duration: 8000,

  // 変化の速度調整
  //easing: 'ease',

  // アニメーションの実行方向
  direction: 'alternate',

  // アニメーションの繰り返し回数
  iterations: Infinity,
};

heading.animate(keyframes, options);