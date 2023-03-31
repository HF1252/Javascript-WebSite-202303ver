const imagesItems = [...document.querySelectorAll('.img-wrap')];
console.log(imagesItems);
const titles = [...document.querySelectorAll('.comment')];
const titleMessage = document.querySelector('.subtitle');

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
imagesItems.map((item, index) => {
    //console.log(item, index);
    item.children[0].style.backgroundImage = `url(./AnimationScroll/Img/${
        index + 1
    }.jpeg)`;

    const q = window.matchMedia('(min-width:1024px)');
    console.log(q);
    if (q.matches) {
        index % 2 == 0 ? (item.style.left = '55%') : (item.style.left = '5%');
    } else {
        index % 2 == 0 ? (item.style.left = '0%') : (item.style.left = '0%');
    }
    onload = imagesItems;
    onresize = imagesItems;
    observer.observe(item);
});

titles.map((subtitle, index) => {
    index % 2 == 0
        ? (subtitle.style.left = '45%')
        : (subtitle.style.left = '35%');
    observer.observe(subtitle);
});
