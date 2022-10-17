import domtoimage from "dom-to-image";

export const getImage = (id, downloadArea, downloadImage, downloadLink) => {
  domtoimage.toPng(id).then((dataUrl) => {
    let image = new Image();
    image.src = dataUrl;
    image.classList = ["rounded-2xl"];
    image.id = "download-image";
    downloadImage.appendChild(image);
    downloadArea.classList.remove("hidden");
    window.location.href = "#download-area";

    // get link ready for download

    downloadLink.href = dataUrl;
    downloadLink.download = "merch.png";
  });
};

export const downloadImageToStorage = (link) => link.click();

export const changePadding = (e, reactor) => {
  reactor.style.padding = `${e.target.value}px`;
};
export const changeMargin = (e, reactor) => {
  reactor.style.padding = `${e.target.value}px`;
};
