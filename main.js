import "./style.css";
import {
  renderEvent,
  downloadEvent,
  inputListener,
  addImageEvent,
  dragEnterListener,
  clickListener,
} from "./src/events";

import { getImage } from "./src/download";

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
} from "./src/eventFunctions";
import { labelControls } from "./src/components";

const select = (e) => {
  return document.querySelector(e);
};

// add controls to screen
select("#move").innerHTML = labelControls();

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

  let imageTab = select("#image-tab-items");
  let textTab = select("#text-tab-items");

  // change background tab
  let gradientTabButton = select("#gradient");
  let solidBackgroundTabButton = select("#solid");

  let gradientTab = select("#gradient-tab");
  let solidTab = select("#solid-tab");

  // gradient background widgets
  let gradientColorOne = select("#gradient-one");
  let gradientColorTwo = select("#gradient-two");
  let gradientColorSlider = select("#gradient-slider");

  // image size widgets
  let sixbynine = select("#sixbynine");
  let fourbythree = select("#fourbythree");
  let threebytwo = select("#threebytwo");
  let square = select("#square");

  // text align widgets
  let alignLeft = select("#text-left");
  let alignCenter = select("#text-center");
  let alignRight = select("#text-right");

  // text align widgets
  let boxWhite = select("#box-white");
  let boxGray = select("#box-gray");
  let boxBlack = select("#box-black");
  let customBoxColor = select("#custom-box-color");

  inputListener(insetSlider, (e) => changePadding(e, box));
  inputListener(marginSlider, (e) => changeMargin(e, box));
  inputListener(imageBackground, (e) => changeBackground(e, outerbox));
  inputListener(textFontSlider, (e) => changeFont(e, text));
  addImageEvent(selectImage, image);

  clickListener(textTabButton, (e) => {
    showTab(e, imageTabButton, textTab, imageTab);
    showCurrentObject(text, image);
  });
  clickListener(imageTabButton, (e) => {
    showTab(e, textTabButton, imageTab, textTab);
    showCurrentObject(image, text);
  });

  clickListener(gradientTabButton, (e) =>
    showTab(e, solidBackgroundTabButton, gradientTab, solidTab)
  );
  clickListener(solidBackgroundTabButton, (e) =>
    showTab(e, gradientTabButton, solidTab, gradientTab)
  );

  inputListener(gradientColorOne, (e) =>
    createGradientBackground(
      outerbox,
      gradientColorOne,
      gradientColorTwo,
      gradientColorSlider
    )
  );

  inputListener(gradientColorTwo, (e) =>
    createGradientBackground(
      outerbox,
      gradientColorOne,
      gradientColorTwo,
      gradientColorSlider
    )
  );

  inputListener(gradientColorSlider, (e) =>
    createGradientBackground(
      outerbox,
      gradientColorOne,
      gradientColorTwo,
      gradientColorSlider
    )
  );

  [sixbynine, fourbythree, threebytwo, square].forEach((element) => {
    clickListener(element, (e) => setAspectRatio(e, outerbox));
  });

  clickListener(alignLeft, (e) => setTextAlignLeft(text));
  clickListener(alignCenter, (e) => setTextAlignCenter(text));
  clickListener(alignRight, (e) => setTextAlignRight(text));

  clickListener(boxWhite, (e) => setBoxWhite(box, text));
  clickListener(boxGray, (e) => setBoxGray(box, text));
  clickListener(boxBlack, (e) => setBoxBlack(box, text));
  inputListener(customBoxColor, (e) => setCustomBoxColor(e, box));
  gradientTabButton.click();
  imageTabButton.click();

  // outerbox.style.height = `calc(${outerbox.style.width} * 9/16)`;
};

const startupEvents = () => {
  // start event listeners
  labelEventListeners();
  renderEvent(select("#download"), () =>
    getImage(
      select("#outer-box"),
      select("#download-area"),
      select("#download-card"),
      select("#download-link")
    )
  );

  downloadEvent(select("#download-btn"), () =>
    downloadImageToStorage(select("#download-link"))
  );
};

window.addEventListener("load", startupEvents, false);
