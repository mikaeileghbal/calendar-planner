export function createElement(type, id = "", className = "", text = "") {
  const element = document.createElement(type);
  if (id && id !== "") {
    element.setAttribute("id", id);
  }
  if (className && className !== "") {
    element.setAttribute("class", className);
  }
  if (text && text !== "") {
    const textNode = document.createTextNode(text);
    element.appenChild(textNode);
  }
  return element;
}
