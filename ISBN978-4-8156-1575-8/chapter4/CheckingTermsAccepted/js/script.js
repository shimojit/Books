const isAgreed = document.querySelector('#check');
const btn = document.querySelector('#btn');

isAgreed.addEventListener('change', () => {
  // チェックボックスにチェックが入っている場合
  // if (isAgreed.checked) {
  //   btn.disabled = false;
  // } else {
  //   btn.disabled = true;
  // }

  // チェックボックスにチェックが入っている場合
  btn.disabled = !isAgreed.checked;
});