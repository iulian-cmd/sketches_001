// Import the library
const canvasSketch = require('canvas-sketch');
// Grab all math utils
const math = require('canvas-sketch-util/math');
// Grab random
const random = require('canvas-sketch-util/random');

// Specify some output parameters
const settings = {
  // The [ width, height ] of the artwork in pixels
  dimensions: [1080, 1080]
};

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


// Start the sketch
const sketch = () => {
  return (props) => {
    // Destructure what we need from props
    const { context, width, height } = props;

    // Fill the canvas with pink
    context.fillStyle = 'pink';
    context.fillRect(0, 0, width, height);

    const cx = width * 0.5;
    const cy = height * 0.5;

    const w = width * 0.005;
    const h = height * 0.5;
    let x, y;

    const num = 40;
    const radius = width * 0.2;

    for (let i = 0; i < num; i++) {
      const slice = math.degToRad(360 / num);
      const angle = slice * i;

      x = cx + radius * Math.sin(angle);
      y = cy + radius * Math.cos(angle);

      // Block of code to draw a rectangle
      context.save();
      context.translate(x, y);
      context.rotate(-angle); // rotate the context
      context.scale(random.range(0.1, 2), random.range(0.2, 0.5)); // scale the context
      context.beginPath();
      context.rect(- w * 0.5, random.range(0, -h * 0.5), w, h); // draw a rectangle
      context.fillStyle = getRandomColor();
      context.fill();
      context.restore();

      for (let j = 0; j < num; j++) {
        // Block of code to draw an arc
        context.save();
        context.translate(cx + 0.1 * j, cy + 0.1 * j);  // translate the context
        context.rotate(-angle); // rotate the context
        context.lineWidth = random.range(0.5, num);
        context.beginPath();
        context.arc(0, 0, radius * random.range(7, 0.1 * j), slice * random.range(0.01, -0.8 * j), slice * random.range(1, 5)); // draw an arc
        context.strokeStyle = getRandomColor();
        context.stroke();
        context.restore();
      }
    }
  };
};

// Start the sketch with parameters
canvasSketch(sketch, settings);