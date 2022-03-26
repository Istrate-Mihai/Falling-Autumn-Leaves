let posX = 0;
let posY = 0;
let objects = [];
let posX_ = [];
let posY_ = [];

for (let i = 0; i < 42; i++) {
  let newElement = document.createElement("div");
  newElement.style.position = "relative";
  newElement.style.width = Math.random() * 55;
  newElement.style.height = Math.random() * 100;
  newElement.style.backgroundImage = "url('leaf.png')";
  newElement.style.backgroundSize = "contain";
  newElement.style.backgroundRepeat = "no-repeat";
  objects.push(newElement);
}

for (let i = 0; i < objects.length; i++) {
  posX = Math.random() * 10 + 5;
  posY = Math.random() * 500 + 100;
  objects[i].style.float = "left";
  objects[i].style.top = posY + "px";
  objects[i].style.left = posX + "px";
  document.body.appendChild(objects[i]);
}

for (let i = 0; i < objects.length; i++) {
  posX_[i] = Math.random() * 6;
  posY_[i] = Math.random() * 6;
}

setInterval(() => {
  for (let i = 0; i < objects.length; i++) {
    posX_[i] += Math.random() * 200;
    posY_[i] += Math.random() * 200;
  }

  for (let i = 0; i < objects.length; i++) {
    if (posX_[i] > 500) posX_[i] *= -1;
    if (posY_[i] > 800) posY_[i] *= -1;
    objects[i].style.top = posY_[i] + "px";
    objects[i].style.left = posX_[i] + "px";
  }
}, 250);
