let t = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  let spacing = 20;
  let rows = height / spacing;

  for (let y = 0; y < rows; y++) {
    let x1 = noise(y, t) * width;
    let y1 = y * spacing;
    let x2 = noise(y, t + 100) * width;
    let y2 = y * spacing;
    let brightnessNoise = noise(y, t + 200);
    let brightness = map(brightnessNoise, 0, 1, 50, 255);
    stroke(brightness, 200, 230); // Set stroke color to an orange hue
    line(x1, y1, x2, y2);
  }

  t += 0.001;
}
