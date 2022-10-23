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
  console.log("fdaklfdajklfdklasf jkdas f9odsajkfdkslaf djlks");
  reactor.style.background = `linear-gradient(${angle.value}deg, ${colorone.value}, ${colortwo.value})`;
};

export const textTab = (e, fontslider, dropzone, image, text) => {
  fontslider.classList.remove("hidden");
  text.classList.remove("hidden");

  dropzone.classList.add("hidden");
  image.classList.add("hidden");
};

export const imageTab = (e, fontslider, dropzone, image, text) => {
  fontslider.classList.add("hidden");
  text.classList.add("hidden");

  dropzone.classList.remove("hidden");
  image.classList.remove("hidden");
};

export const showGradientTab = (e, gradientTab, solidTab) => {
  gradientTab.classList.remove("hidden");
  solidTab.classList.add("hidden");
};

export const showSolidTab = (e, gradientTab, solidTab) => {
  gradientTab.classList.add("hidden");
  solidTab.classList.remove("hidden");
};

//image sizes

export const setAspectRatio = (e, reactor) => {
  console.log(e.target.innerText);
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
