import Prism from "prismjs";

export const getPreset = (element) => {
  if (element.value == "js") {
    return [Prism.languages.javascript, "javascript"];
  } else if (element.value == "html") {
    return [Prism.languages.html, "html"];
  } else if (element.value == "python") {
    return [Prism.languages.python, "python"];
  } else if (element.value == "css") {
    return [Prism.languages.css, "css"];
  }
};

export const getCodeHighlight = (code, element = null) => {
  if (element) {
    let preset = getPreset(element);
    var language = preset[0];
    var languagename = preset[1];
  } else {
    language = Prism.languages.javascript;

    languagename = "javascript";
  }

  const html = Prism.highlight(code, language, languagename);

  return html;
};
