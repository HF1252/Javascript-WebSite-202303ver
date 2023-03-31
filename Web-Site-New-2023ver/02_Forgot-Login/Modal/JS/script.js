const buttonOpen = document.getElementById('modalOpen');
const buttonClose = document.querySelector('.modalClose');
const modal = document.getElementById('modal');

buttonOpen.addEventListener('click', () => {
    //モーダル開く
    modal.style.display = 'block';
});

buttonClose.addEventListener('click', () => {
    //モーダル閉じる
    modal.style.display = 'none';
});

document.addEventListener('click', (event) => {
    //モーダル画面外枠でも閉じる
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});
