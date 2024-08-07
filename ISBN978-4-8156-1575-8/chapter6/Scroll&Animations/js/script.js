// 監視対象が範囲内に現れたら実行する動作
const showKirin = () => {
  console.log('キリンさんです');
};

// 監視ロボットの設定
const kirinObserver = new IntersectionObserver(showKirin);

// #kirinを監視するように指示
kirinObserver.observe(document.querySelector('#kirin'));