// 100 Rectangles
// const text = document.createTextNode("Hello");
// boxes.appendChild(text);






for (i=0; i<100; i++) {
    const boxes = document.createElement("div");
    boxes.classList.add("box")
    document.getElementById("boxes").appendChild(boxes);
}

