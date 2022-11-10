function rgbToHex(r, g, b) {
  if (r > 255 || g > 255 || b > 255) throw "Invalid color component";
  return ((r << 16) | (g << 8) | b).toString(16);
}

function getElementPosition(obj) {
  var curleft = 0,
    curtop = 0;
  if (obj.offsetParent) {
    do {
      curleft += obj.offsetLeft;
      curtop += obj.offsetTop;
    } while ((obj = obj.offsetParent));
    return { x: curleft, y: curtop };
  }
  return undefined;
}

function getEventLocation(element, event) {
  // Relies on the getElementPosition function.
  var pos = getElementPosition(element);

  return {
    x: event.pageX - pos.x,
    y: event.pageY - pos.y,
  };
}

export function getColor(e, element, destination) {
  // element.addEventListener(
  //   "mousemove",
  //   function (e) {
  var eventLocation = getEventLocation(element, e);
  var coord = "x=" + eventLocation.x + ", y=" + eventLocation.y;

  // Get the data of the pixel according to the location generate by the getEventLocation function
  var context = element.getContext("2d");
  var pixelData = context.getImageData(
    eventLocation.x,
    eventLocation.y,
    1,
    1
  ).data;

  // If transparency on the image
  if (
    pixelData[0] == 0 &&
    pixelData[1] == 0 &&
    pixelData[2] == 0 &&
    pixelData[3] == 0
  ) {
    coord += " (Transparent color detected, cannot be converted to HEX)";
  }

  var hex =
    "#" +
    ("000000" + rgbToHex(pixelData[0], pixelData[1], pixelData[2])).slice(-6);

  // Draw the color and coordinates.
  destination.style.backgroundColor = hex;
  //   },
  //   false
  // );
}
