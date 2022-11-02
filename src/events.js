export const addImageEvent = (triggerer, reactor, modalimage) => {
  const updateImage = (e) => {
    if (!e.target.value) return;
    let image = new Image();
    image.src = URL.createObjectURL(e.target.files[0]);
    reactor.src = image.src;
    modalimage.src = image.src;
  };
  triggerer.addEventListener("input", updateImage, false);
};

export const renderEvent = (triggerer, func) => {
  triggerer.addEventListener("click", func, false);
};
export const downloadEvent = (triggerer, func) => {
  console.log("clicked");
  triggerer.addEventListener("click", func, false);
};

export const inputListener = (triggerer, func) => {
  triggerer.addEventListener("input", func, false);
};

export const clickListener = (triggerer, func) => {
  triggerer.addEventListener("click", func, false);
};

export const dragEnterListener = (triggerer, reactor) => {
  const accept = (e) => {
    e.preventDefault();
    e.stopPropagation();
    let data = e.datatransfer;
    reactor.src = URL.createObjectURL(data.files[0]);
  };
  triggerer.addEventListener("drop", accept, false);
};
