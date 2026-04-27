const btn = document.getElementById('btn');
const text = document.getElementById('text');

setTimeout(() => {
btn.addEventListener('click', () => {
const Text = document.getElementById('text');

Text.innerText = 'ボタンをクリックしました';

});
}, 2000);

btn.addEventListener('click', () => {
  setTimeout(() => {
    const Text = document.getElementById('text');
    
    text.innerText = 'ボタンをクリックしました';
  }, 2000);
});