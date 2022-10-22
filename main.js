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
  textTab,
  imageTab,
  changeFont,
  showGradientTab,
  showSolidTab,
  createGradientBackground,
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

  // change background tab
  let gradientTabButton = select("#gradient");
  let solidBackgroundTabButton = select("#solid");

  let gradientTab = select("#gradient-tab");
  let solidTab = select("#solid-tab");

  // gradient background listenters
  let gradientColorOne = select("#gradient-one");
  let gradientColorTwo = select("#gradient-two");
  let gradientColorSlider = select("#gradient-slider");

  inputListener(insetSlider, (e) => changePadding(e, box));
  inputListener(marginSlider, (e) => changeMargin(e, box));
  inputListener(imageBackground, (e) => changeBackground(e, outerbox));
  inputListener(textFontSlider, (e) => changeFont(e, text));
  addImageEvent(selectImage, image);
  clickListener(textTabButton, (e) =>
    textTab(e, textFontSlider, dropZone, image, text)
  );
  clickListener(imageTabButton, (e) =>
    imageTab(e, textFontSlider, dropZone, image, text)
  );

  clickListener(gradientTabButton, (e) =>
    showGradientTab(e, gradientTab, solidTab)
  );
  clickListener(solidBackgroundTabButton, (e) =>
    showSolidTab(e, gradientTab, solidTab)
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

  // imageTabButton.click();

  // outerbox.style.height = `calc(${outerbox.style.width} * 9/16)`;
};

const startupEvents = () => {
  // start event listeners
  labelEventListeners();
  renderEvent(select("#download"), () =>
    getImage(
      select("#outer-box"),
      select("#download-area"),
      select("#download-image-box"),
      select("#download-link")
    )
  );

  downloadEvent(select("#download-btn"), () =>
    downloadImageToStorage(select("#download-link"))
  );
};

window.addEventListener("load", startupEvents, false);
