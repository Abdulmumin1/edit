function rgbToHex(r, g, b) {
  return ((r << 16) | (g << 8) | b).toString(16).padStart(6, "0");
}

export function getColorFromCanvas(canvas, event, destination) {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  const ctx = canvas.getContext("2d");
  const pixelData = ctx.getImageData(x, y, 1, 1).data;
  const hex = "#" + rgbToHex(pixelData[0], pixelData[1], pixelData[2]);

  // Use the obtained color data as needed
  console.log("Color:", hex);
  destination.style.backgroundColor = hex;
}

// Replace 'yourCanvasID' with your actual canvas ID
// const canvas = document.getElementById('yourCanvasID');

// canvas.addEventListener('mousemove', (event) => {
//   getColorFromCanvas(canvas, event);
// });
