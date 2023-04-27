import domtoimage from "dom-to-image";

var scale = 6;
export const getImage = (id, downloadArea, image, downloadLink) => {
  domtoimage
    .toPng(id, {
      width: id.clientWidth * scale,
      height: id.clientHeight * scale,
      style: {
        transform: `scale(${scale})`,
        transformOrigin: "top left",
        width: id.clientWidth + "px", // use original width of DOM element to avoid part of the image being cropped out
        height: id.clientHeight + "px", // use original height of DOM element
      },
    })
    .then((dataUrl) => {
      // let image = new Image();
      image.src = dataUrl;
      // image.classList = ["rounded-2xl h-full object-contain"];
      // image.id = "download-image";
      // downloadCard.insertBefore(image, downloadLink.parentElement);
      downloadArea.classList.remove("hidden");
      window.location.href = "#share-image";

      // get link ready for download

      downloadLink.href = dataUrl;
      downloadLink.download = "image.png";
    });
};
