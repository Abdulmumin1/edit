import "./style.css";
import {
  renderEvent,
  downloadEvent,
  inputListener,
  addImageEvent,
  dragEnterListener,
} from "./src/events";
import {
  getImage,
  downloadImageToStorage,
  changePadding,
  changeMargin,
} from "./src/download";
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
  inputListener(select("#inset"), (e) => changePadding(e, box));
  inputListener(select("#margin"), (e) => changeMargin(e, outerbox));

  addImageEvent(select("#add-image"), select("#image"));
};

const startupEvents = () => {
  labelEventListeners();
  dragEnterListener(select("#dropzone"), select("#image"));
  renderEvent(select("#download"), () =>
    getImage(
      select("#playground"),
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
