// 100 Rectangles

// Boxes
for (i=0; i<100; i++) {
    const boxes = document.createElement('div');
    boxes.classList.add('box')
    document.getElementById('boxes').appendChild(boxes);
}

// Selected
const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('click', () => {
        box.classList.add('selected');
    }) 
})
