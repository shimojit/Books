const text = document.querySelector('#text');
const count = document.querySelector('#count');

text.addEventListener('keyup', () => {
  // キーが入力されたときの処理
  count.textContent = text.value.length;

  // 文字数が100文字を超えた場合
  if (text.value.length > 100) {
    count.classList.add('alert');
  } else {
    count.classList.remove('alert');
  }
});