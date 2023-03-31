const img_src = [
    './SliderAutomatic/Img/1.jpeg',
    './SliderAutomatic/Img/2.jpeg',
    './SliderAutomatic/Img/3.jpeg',
    './SliderAutomatic/Img/4.jpeg',
];
let num = -1;

function slide_time() {
    if (num === 3) {
        num = 0;
    } else {
        num++;
    }
    document.getElementById('slide_img').src = img_src[num];
}

setInterval(slide_time, 3000);
