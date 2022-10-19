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
  let textTabButton = select("#createtext");
  let imageTabButton = select("#createimage");
  let textFontSlider = select("#text-font");
  let dropZone = select("#dropzone");
  let text = select("#text");

  inputListener(insetSlider, (e) => changePadding(e, box));
  inputListener(marginSlider, (e) => changeMargin(e, outerbox));
  inputListener(imageBackground, (e) => changeBackground(e, outerbox));
  inputListener(textFontSlider, (e) => changeFont(e, text));
  addImageEvent(selectImage, image);
  clickListener(textTabButton, (e) =>
    textTab(e, textFontSlider, dropZone, image, text)
  );
  clickListener(imageTabButton, (e) =>
    imageTab(e, textFontSlider, dropZone, image, text)
  );
};

const startupEvents = () => {
  labelEventListeners();
  // dragEnterListener(select("#dropzone"), select("#image"));
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
