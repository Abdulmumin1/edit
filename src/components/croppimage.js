let cropperdata = null;
function createCropInstance(image) {
  var croppr = new Croppr(image, {
    onInitialize: (instance) => {
      console.log(instance);
    },
    onCropStart: (data) => {
      console.log("start", data);
      cropperdata = data;
    },
    onCropEnd: (data) => {
      cropperdata = data;
    },
    onCropMove: (data) => {
      console.log("move", data);
      cropperdata = data;
    },
  });
}
function cropImage(imagePath, newX, newY, newWidth, newHeight) {
  //create an image object from the path

  const originalImage = new Image();
  originalImage.src = imagePath;

  //initialize the canvas object
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  //wait for the image to finish loading
  originalImage.addEventListener("load", function () {
    //set the canvas size to the new width and height
    canvas.width = newWidth;
    canvas.height = newHeight;

    //draw the image
    ctx.drawImage(
      originalImage,
      newX,
      newY,
      newWidth,
      newHeight,
      0,
      0,
      newWidth,
      newHeight
    );
  });
}
export const getCroppedImage = (image) => {
  let cp = createCropInstance(image);
  cropImage(
    image,
    cropperdata.x,
    cropperdata.y,
    cropperdata.width,
    cropperdata.height
  );
};
