// --------------------------------------------------------
export function injectBar(wrapperClass, textClass, indicatorClass, graphTitle) {
    let barGraph = `<div class="${wrapperClass}">
        <p class="${textClass}">${graphTitle}</p>
        <div class="${indicatorClass}"></div>
      </div>`;
    let app = document.querySelector(".app");
    let graphDiv = document.createElement("div");
    graphDiv.innerHTML = barGraph;
    insertAfter(app, graphDiv);
}
// --------------------------------------------------------
function insertAfter(referenceNode, newNode) {
    if (referenceNode.parentNode != null) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }
}
//# sourceMappingURL=BarGraph.js.map