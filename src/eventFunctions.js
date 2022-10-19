export const downloadImageToStorage = (link) => link.click();

export const changePadding = (e, reactor) => {
  reactor.style.padding = `${e.target.value}px`;
};
export const changeMargin = (e, reactor) => {
  reactor.style.padding = `${e.target.value}px`;
};

export const changeFont = (e, reactor) => {
  reactor.style.fontSize = `${e.target.value}px`;
};
export const changeBackground = (e, reactor) => {
  reactor.style.background = `${e.target.value}`;
};

export const createText = (e, fontslider, dropzone, image, text) => {
  fontslider.classList.remove("hidden");
  text.classList.remove("hidden");

  dropzone.classList.add("hidden");
  image.classList.add("hidden");
};
