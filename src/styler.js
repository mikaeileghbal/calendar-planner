export default function loadStyle(url) {
  let link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = url;
  let head = document.getElementsByTagName("head")[0];
  head.appendChild(link);
}

function removeStyle(url) {
  let link = document.querySelector(`link[href="${url}"]`);
  console.log(link);
  link.parentNode.removeChild(link);
}

export { removeStyle };
