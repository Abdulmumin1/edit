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

export const createGradientBackground = (
  reactor,
  colorone,
  colortwo,
  angle
) => {
  reactor.style.background = `linear-gradient(${angle.value}deg, ${colorone.value}, ${colortwo.value})`;
};

export const showTab = (e = undefined, other = undefined, show, hide) => {
  e.target.classList.add("bg-white");
  e.target.classList.add("shadow-md");

  other.classList.remove("bg-white");
  other.classList.remove("shadow-md");

  show.classList.remove("hidden");
  hide.classList.add("hidden");
};

export const showCurrentObject = (show, hide) => {
  show.classList.remove("hidden");
  hide.classList.add("hidden");
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

export const setAspectRatio = (e, reactor) => {
  if (e.target.innerText == "16:9") {
    console.log("this is 3.3kl");
    reactor.style.aspectRatio = "16/9";
  } else if (e.target.innerText == "4:3") {
    reactor.style.aspectRatio = "4/3";
  } else if (e.target.innerText == "3:2") {
    reactor.style.aspectRatio = "3/2";
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

export const setBoxWhite = (reactor, text) => {
  console.log("rejkfdkls");
  reactor.style.backgroundColor = "white";
  text.style.color = "black";
};
export const setBoxGray = (reactor, text) => {
  console.log("gray");
  reactor.style.backgroundColor = "rgb(31,41,55)";
  text.style.color = "white";
};
export const setBoxBlack = (reactor, text) => {
  reactor.style.backgroundColor = "black";
  text.style.color = "white";
};

export const setCustomBoxColor = (e, reactor) => {
  reactor.style.background = e.target.value;
};
