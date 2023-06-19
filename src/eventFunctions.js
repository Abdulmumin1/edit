export const downloadImageToStorage = (link) => link.click();

export const changePadding = (e, reactor) => {
  reactor.style.padding = `${e.target.value}px`;
};
export const changeMargin = (e, reactor) => {
  reactor.style.width = `${e.target.value}%`;
};

export const changeFont = (e, reactor) => {
  reactor.style.fontSize = `${e.target.value}px`;
};
export const changeBackground = (e, reactor) => {
  reactor.style.background = `${e.target.value}`;
};

export const createGradientBackground = (reactor, backgrounds, angle) => {
  let colorInput = backgrounds.querySelectorAll('input[type="color"]');
  let colors = Array.from(colorInput).map((input) => input.value);

  reactor.style.background = `linear-gradient(${angle.value}deg, ${colors.join(
    ", "
  )})`;
};

export const showTab = (e = undefined, show) => {
  if (e) {
    for (const child of e.target.parentElement.children) {
      child.classList.remove("bg-white");
      child.classList.remove("shadow-md");
    }
    e.target.classList.add("bg-white");
    e.target.classList.add("shadow-md");
  }

  for (const child of show.parentElement.children) {
    child.classList.add("hidden");
  }
  show.classList.remove("hidden");
};

export const showCurrentObject = (show, add = null) => {
  for (const child of show.parentElement.children) {
    child.classList.add("hidden");
  }
  show.classList.remove("hidden");
  add.classList.remove("hidden");
};

export const showModal = (modal, eventPlayground) => {
  modal.classList.toggle("hidden");
  eventPlayground.classList.toggle("hidden");
};

export const hideModal = (modal, eventPlayground) => {
  modal.classList.toggle("hidden");
  eventPlayground.classList.toggle("hidden");
};
// export const imageTab = (e, imagetab, texttab) => {
//   imagetab.classList.remove("hidden");
//   texttab.classList.add("hidden");
// };

// export const showGradientTab = (e, gradientTab, solidTab) => {
//   gradientTab.classList.remove("hidden");
//   solidTab.classList.add("hidden");
// };

// export const showSolidTab = (e, gradientTab, solidTab) => {
//   gradientTab.classList.add("hidden");
//   solidTab.classList.remove("hidden");
// };

//image sizes


export const setAspectRatio = (e, reactor, r) => {
  let i = r.checked

  if (e.target.innerText == "16:9") {
    if (i){
      reactor.style.aspectRatio = "9/16";
    }else{

      reactor.style.aspectRatio = "16/9";
    }
  } else if (e.target.innerText == "4:3") {
    if (i){
      reactor.style.aspectRatio = "3/4";
    }else{

      reactor.style.aspectRatio = "4/3";
    }
  } else if (e.target.innerText == "3:2") {
    if (i){
      reactor.style.aspectRatio = "2/3";
    }else{

      reactor.style.aspectRatio = "3/2";
    }
  } else if (e.target.innerText == "square") {
    reactor.style.aspectRatio = "2/2";
  }
};

export const setTextAlignLeft = (reactor) => {
  reactor.style.textAlign = "left";
};
export const setTextAlignCenter = (reactor) => {
  reactor.style.textAlign = "center";
};
export const setTextAlignRight = (reactor) => {
  reactor.style.textAlign = "right";
};

export const setTextColor = (e, reactor) => {
  reactor.style.color = e.target.value;
};

export const setBoxWhite = (reactor, text, code) => {
  console.log("rejkfdkls");
  reactor.style.backgroundColor = "white";
  text.style.color = "black";
  code.style.color = "black";
};
export const setBoxGray = (reactor, text, code) => {
  reactor.style.backgroundColor = "rgb(31,41,55)";
  text.style.color = "white";
  code.style.color = "white";
};
export const setBoxBlack = (reactor, text, code) => {
  reactor.style.backgroundColor = "black";
  text.style.color = "white";
  code.style.color = "white";
};
export const setBoxBlurr = (reactor) => {
  reactor.style = `backdrop-filter: blur(50px); background-color: rgba(255, 255, 255, 0.222); `;
};

export const setCustomBoxColor = (e, reactor) => {
  reactor.style.background = e.target.value;
};

export const setCustomBgColor = (e, target) => {
  target.style.background = e.target.background;
};
export const setCustomBgColor1 = (reactor) => {
  // reactor.classList.remove(reactor.classList[reactor.classList.length - 1]);
  // reactor.classList.add("custom-background-1");
  reactor.style.background =
    "linear-gradient(30deg, #acc1e2, #8fecac, #f9fa6e)";
};
export const setCustomBgColor2 = (reactor) => {
  // reactor.classList.remove(reactor.classList[reactor.classList.length - 1]);
  // reactor.classList.add("custom-background-2");
  reactor.style.background =
    "linear-gradient(190deg, rgba(63,94,251,1) 0%,  rgba(166,191,199,1) 64%, rgba(255,61,113,1) 80%, rgba(254,8,58,1) 97%);";
};
export const setCustomBgColor3 = (reactor) => {
  // reactor.classList.remove(reactor.classList[reactor.classList.length - 1]);
  // reactor.classList.add("custom-background-3");
  reactor.style.background =
    "linear-gradient(30deg, #d5cff6, #f69bd6, #ffb75f)";
};
export const setCustomBgColor4 = (reactor) => {
  // reactor.classList.remove(reactor.classList[reactor.classList.length - 1]);
  // reactor.classList.add("custom-background-4");
  reactor.style.background =
    "linear-gradient(225deg, #ffdddd, #e2c3ff, #aafdff)";
};

export const addThumbnail = () => {
  let el = `<p class="absolute bottom-0 right-0 m-5 text-gray-600">
              Screenshot by Edit
            </p>`;
};

export function shareImage(imageUrl) {
  if (navigator.share) {
    navigator
      .share({
        title: "editss",
        text: "image",
        files: [imageUrl],
      })
      .then(() => console.log("Image shared successfully."))
      .catch((error) => console.error("Error sharing image:", error));
  } else {
    console.error("Web Share API not supported.");
  }
}

export const addColor = (body) => {
  let color = document.createElement("input");
  color.classList = [
    "w-full h-full rounded-2xl overflow-hidden cursor-pointer",
  ];
  color.type = "color";
  body.insertBefore(color, body.lastElementChild);
};
