/*
ローディングから画面遷移
================================================== */
const loadingAreaGrey = document.querySelector('#loading');
const loadingAreaGreen = document.querySelector('#loading-screen');
const loadingText = document.querySelector('#loading p');

window.addEventListener('load', () => {
  // ローディング中（グレースクリーン）
  loadingAreaGrey.animate(
    {
      opacity: [1, 0],
      visibility: 'hidden',
    },
    {
      duration: 2000,
      delay: 1200,
      easing: 'ease',
      fill: 'forwards',
    }
  );

  // ローディング中（薄緑スクリーン）
  loadingAreaGreen.animate(
    {
      translate: ['0 100vh', '0 0', '0 -100vh'],
    },
    {
      duration: 2000,
      delay: 800,
      easing: 'ease',
      fill: 'forwards',
    }
  );

  // ローディング中のテキスト
  loadingText.animate(
    [
      {
        opacity: 1,
        offset: 0.8, // 80%
      },
      {
        opacity: 0,
        offset: 1, // 100%
      }
    ],
    {
      duration: 1200,
      easing: 'ease',
      fill: 'forwards',
    }
  );
});

/*
スライドメニュー
================================================== */
const menuOpen = document.querySelector('#menu-open');
const menuClose = document.querySelector('#menu-close');
const menuPanel = document.querySelector('#menu-panel');
const menuItems = document.querySelectorAll('#menu-panel li');
const menuOptions = {
  duration: 1200,
  easing: 'ease',
  fill: 'forwards',
};

// メニューを開く
menuOpen.addEventListener('click', () => {
  menuPanel.animate({translate: ['100vw', 0]}, menuOptions);

  // リンクをひとつずつ順に表示
  menuItems.forEach((menuItem, index) => {
    menuItem.animate(
      {
        opacity: [0, 1],
        translate: ['2rem', 0],
      },
      {
        duration: 2400,
        delay: 300 * index,
        easing: 'ease',
        fill: 'forwards',
      }
    );
  });
});

// メニューを閉じる
menuClose.addEventListener('click', () => {
  menuPanel.animate({translate: [0, '100vw']}, menuOptions);
  menuItems.forEach((menuItem) => {
    menuItem.animate({opacity: [1, 0]}, menuOptions);
  });
});

/*
画像ギャラリー
================================================== */
const mainImage = document.querySelector('.gallery-image img');
const thumbImages = document.querySelectorAll('.gallery-thumbnails img');

thumbImages.forEach((thumbImage) => {
  thumbImage.addEventListener('mouseover', (event) => {
    mainImage.src = event.target.src;
    mainImage.animate({ opacity: [0, 1] }, 500);
  });
});

/*
スクロールで要素を表示
================================================== */
// 監視対象が範囲内に現れたら実行する動作
const animateFade = () => {};

// 監視設定
const fadeObserver = new IntersectionObserver(animateFade);

// .fadeinを監視するように指示
const fadeElements = document.querySelectorAll('.fadein');
fadeElements.forEach((fadeElement) => {
  fadeObserver.observe(fadeElement);
});