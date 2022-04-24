// 100 Rectangles

for (i=0; i<100; i++) {
    const boxes = document.createElement('div');
    boxes.classList.add('box')
    document.getElementById('boxes').appendChild(boxes);
}

const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('click', () => {
        box.classList.add('selected');
    }) 
})
