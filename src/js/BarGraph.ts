// --------------------------------------------------------
export function injectBar(
  wrapperClass: string,
  textClass: string,
  indicatorClass: string,
  graphTitle: string
) {
  let barGraph = `<div class="${wrapperClass}">
        <p class="${textClass}">${graphTitle}</p>
        <div class="${indicatorClass}"></div>
      </div>`;

  let app = document.querySelector(".app") as HTMLDivElement;

  let graphDiv = document.createElement("div");
  graphDiv.innerHTML = barGraph;
  insertAfter(app, graphDiv);
}

// --------------------------------------------------------
function insertAfter(referenceNode: HTMLElement, newNode: HTMLElement) {
  if (referenceNode.parentNode != null) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }
}
