import "./style.css";
import "./src/croppr.css";
import "./src/prism.css";
// import { defaultimg } from "./public/exc.png";
import {
  renderEvent,
  downloadEvent,
  inputListener,
  addImageEvent,
  dragEnterListener,
  clickListener,
} from "./src/events";

import { getImage } from "./src/download";
import { inject } from "@vercel/analytics";
import {
  downloadImageToStorage,
  changePadding,
  changeMargin,
  changeBackground,
  showTab,
  changeFont,
  createGradientBackground,
  setAspectRatio,
  setTextAlignLeft,
  setTextAlignRight,
  setTextAlignCenter,
  showCurrentObject,
  setBoxWhite,
  setBoxGray,
  setBoxBlack,
  setCustomBoxColor,
  showModal,
  hideModal,
  setCustomBgColor1,
  setCustomBgColor2,
  setCustomBgColor3,
  setTextColor,
  setCustomBgColor,
  setCustomBgColor4,
  setBoxBlurr,
  shareImage,
  addColor,
} from "./src/eventFunctions";
import { controlWidgets } from "./src/controls";
import { cropImageModal } from "./src/components/modal";
import Croppr from "croppr";
import { cropImage } from "./src/components/croppimage";
import { getColor } from "./src/getColorFromImage";
import { getCodeHighlight } from "./src/code";
const select = (e) => {
  return document.querySelector(e);
};

// add controls to screen
select("#move").innerHTML = controlWidgets();
select("#modal").innerHTML = cropImageModal;

var cropperdata = null;
var cropperinstance = null;

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
  return croppr;
}

const codeTabFeature = (codeTabButton, code, boxGray) => {
  let codeTab = select("#code-tab-items");
  clickListener(codeTabButton, (e) => {
    showTab(e, codeTab);
    code.innerHTML = getCodeHighlight(code.innerText);
    showCurrentObject(code, select("#win-action"));
    boxGray.click();
  });

  clickListener(select("#code-format"), (e) => {
    code.innerHTML = getCodeHighlight(code.innerText, select("#code-language"));
  });
  inputListener(select("#code-language"), (e) => {
    // code.innerHTML = select("#code-language").value;
    code.innerHTML = getCodeHighlight(code.innerText, select("#code-language"));
  });
};
const labelEventListeners = () => {
  // box event listeners
  let box = select("#box");
  let outerbox = select("#outer-box");
  let insetSlider = select("#inset");
  let marginSlider = select("#margin");
  let imageBackground = select("#background");
  let selectImage = select("#add-image");
  let image = select("#image");

  // create object tabs
  let textTabButton = select("#createtext");
  let imageTabButton = select("#createimage");
  let textFontSlider = select("#text-font");
  let dropZone = select("#dropzone");
  let text = select("#text");
  let code = select("#code");
  let codeTabButton = select("#createcode");

  let imageTab = select("#image-tab-items");
  let textTab = select("#text-tab-items");

  // change background tab
  let gradientTabButton = select("#gradient");
  let solidBackgroundTabButton = select("#solid");

  let gradientTab = select("#gradient-tab");
  let solidTab = select("#solid-tab");

  // gradient background widgets
  let gradientColorSlider = select("#gradient-slider");

  // image size widgets
  let sixbynine = select("#sixbynine");
  let fourbythree = select("#fourbythree");
  let threebytwo = select("#threebytwo");
  let square = select("#square");

  //text color
  let textColorChange = select("#text-color-input");
  // text align widgets
  let alignLeft = select("#text-left");
  let alignCenter = select("#text-center");
  let alignRight = select("#text-right");

  // box background widgets
  let boxBlurr = select("#box-blur");
  let boxWhite = select("#box-white");
  let boxGray = select("#box-gray");
  let boxBlack = select("#box-black");
  let customBoxColor = select("#custom-box-color");

  //preloaded background
  let customBg1 = select("#cbg-1");
  let customBg2 = select("#cbg-2");
  let customBg3 = select("#cbg-3");
  let customBg4 = select("#cbg-4");
  //modal
  let cropAction = select("#crop-image-action");
  let modal = select("#modal");
  let cropOk = select("#crop-ok");
  let modalImage = select("#modal-image");

  //share
  let shareBtn = select("#share-image");

  inputListener(insetSlider, (e) => changePadding(e, box));
  inputListener(marginSlider, (e) => changeMargin(e, box));
  inputListener(imageBackground, (e) => changeBackground(e, outerbox));
  inputListener(textFontSlider, (e) => changeFont(e, text));

  clickListener(textTabButton, (e) => {
    showTab(e, textTab);
    showCurrentObject(text);
  });

  clickListener(imageTabButton, (e) => {
    showTab(e, imageTab);
    showCurrentObject(image);
  });

  clickListener(gradientTabButton, (e) => showTab(null, gradientTab));
  clickListener(solidBackgroundTabButton, (e) => showTab(null, solidTab));

  inputListener(gradientColorSlider, (e) =>
    createGradientBackground(
      outerbox,
      select("#gradient-colors"),
      gradientColorSlider
    )
  );

  [sixbynine, fourbythree, threebytwo, square].forEach((element) => {
    clickListener(element, (e) =>
      setAspectRatio(e, outerbox, select("#rotate"))
    );
  });

  clickListener(alignLeft, (e) => setTextAlignLeft(text));
  clickListener(alignCenter, (e) => setTextAlignCenter(text));
  clickListener(alignRight, (e) => setTextAlignRight(text));

  clickListener(boxBlurr, (e) => setBoxBlurr(box));
  clickListener(boxWhite, (e) => setBoxWhite(box, text, code));
  clickListener(boxGray, (e) => setBoxGray(box, text, code));
  clickListener(boxBlack, (e) => setBoxBlack(box, text, code));
  inputListener(customBoxColor, (e) => setCustomBoxColor(e, box));

  clickListener(customBg1, (e) => setCustomBgColor1(outerbox));
  clickListener(customBg2, (e) => setCustomBgColor2(outerbox));
  clickListener(customBg3, (e) => setCustomBgColor3(outerbox));
  clickListener(customBg4, (e) => setCustomBgColor4(outerbox));

  inputListener(textColorChange, (e) => setTextColor(e, text));
  clickListener(cropAction, (e) => {
    showModal(modal, select("#event-playground"));
    if (cropperinstance != null) {
      cropperinstance.destroy();
    }
    cropperinstance = createCropInstance(modalImage);
  });

  clickListener(cropOk, (e) => {
    cropImage(
      modalImage.src,
      cropperdata.x,
      cropperdata.y,
      cropperdata.width,
      cropperdata.height,
      image
    );

    // createCropInstance(modalImage);
    hideModal(modal, select("#event-playground"));
  });
  document.querySelectorAll(".close-modal").forEach((element) => {
    clickListener(element, (e) =>
      hideModal(modal, select("#event-playground"))
    );
  });

  // clickListener(image, (e) => getColor(e, image, box));
  // getColor(image, box);

  // inputListener(code, (e) => {
  //   console.log("jkfdkslafjkdsajkf");
  //   getCodeHighlight(e.target.value, select("#code-language"));
  // });

  clickListener(image, (e) => getColor(e, image, box));
  solidBackgroundTabButton.click();
  imageTabButton.click();

  // codeTabFeature(codeTabButton, code, boxGray);
  // cropImage(
  //   image,
  //   cropperdata.x,
  //   cropperdata.y,
  //   cropperdata.width,
  //   cropperdata.height
  // );
  // outerbox.style.height = `calc(${outerbox.style.width} * 9/16)`;

  clickListener(shareBtn, (e) => shareImage(select("#download-image")));

  let add_color = select("#add-color");
  clickListener(add_color, (e) => addColor(select("#gradient-colors")));
  document.querySelectorAll("#gradient-colors").forEach((colour) => {
    inputListener(colour, (e) =>
      createGradientBackground(
        outerbox,
        select("#gradient-colors"),
        gradientColorSlider
      )
    );
  });
};

function statupimage(canvas, modalimage) {
  let image = new Image();
  image.src = "/exc.png";
  let ctx = canvas.getContext("2d");
  image.addEventListener("load", function () {
    //set the canvas size to the new width and height
    canvas.width = image.width;
    canvas.height = image.height;

    //draw the image
    ctx.drawImage(image, 0, 0);
  });
  modalimage.src = image.src;
}

const startupEvents = () => {
  // start event listeners

  labelEventListeners();
  let selectImage = select("#add-image");
  let image = select("#image");
  addImageEvent(
    selectImage,
    image,
    select("#modal-image"),
    select("#box-black"),
    cropperinstance
  );

  addImageEvent(
    select("#dropzone2"),
    image,
    select("#modal-image"),
    select("#box-black"),
    cropperinstance
  );

  statupimage(image, select("#modal-image"));
  // dragEnterListener(select("#box"), image, select("#modal-image"));
  renderEvent(select("#download"), () =>
    getImage(
      select("#outer-box"),
      select("#download-area"),
      select("#download-image"),
      select("#download-link"),
      select("#spinner"),
      select("#download")
    )
  );

  // downloadEvent(select("#download-btn"), () =>
  //   downloadImageToStorage(select("#download-link"))
  // );
};

inject();
/* Only register a service wappendChildorker if it's supported */
// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker.register("/service-worker.js");
// }
window.addEventListener("load", startupEvents, false);
