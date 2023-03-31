const titles = [...document.querySelectorAll('.comment')];
const titleMessage = document.querySelector('.title');

//対象場所にて、activeを負荷
const setItemActive = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
};

const options = {
    rootMargin: '0px',
    threshold: 0.5,
};

//特定の位置にて、関数を呼ぶ
const observer = new IntersectionObserver(setItemActive, options);

observer.observe(titleMessage);

//img-wrapは偶数と奇数で出現場所が違う処理
titles.map((title, index) => {
    index % 2 == 0 ? (title.style.left = '20%') : (title.style.left = '18%');
    observer.observe(title);
});
