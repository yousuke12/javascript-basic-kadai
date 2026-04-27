const btn = document.getElementById('btn');
const text = document.getElementById('text');


btn.addEventListener('click', () => {
  setTimeout(() => {
    const Text = document.getElementById('text');

    text.innerText = 'ボタンをクリックしました';
  }, 2000);
});