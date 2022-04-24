// 100 Rectangles

// Boxes
const numberOfBoxes = 144;

for (i=0; i<numberOfBoxes; i++) {
    const boxes = document.createElement('div');
    boxes.classList.add('box')
    document.getElementById('boxes').appendChild(boxes);
}

// Selected on click
// const boxes = document.querySelectorAll('.box');

// boxes.forEach(box => {
//     box.addEventListener('click', () => {
//         box.classList.add('selected');
//     }) 
// })


// Slected every 10 minutes
const minSinceMidnight = () => {
    const now = new Date();
    const midnight = new Date().setHours(0, 0, 0, 0);
  
    return ((now - midnight) / 1000) / 60;
}
  
const fillBox = () => {
    const minElapsed = minSinceMidnight();
  
    const fullBoxes = Math.floor(minElapsed / 10);
  
    document.querySelectorAll('.box').forEach((element, index) => {
      if (index + 1 <= fullBoxes) {
        element.classList.add('selected');
      } else {
        element.classList.remove('selected');
      }
    });
    console.log(minElapsed);
}

fillBox();
setInterval(fillBox, 5000);