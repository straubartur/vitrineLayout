let maxItens = 4;
let currentIndex = 0;
const widgetSize = globalData.data.widget.size

const main = () => {
  document.getElementById("prevButton").addEventListener("click", () => {
    if(currentIndex === 0) {
      currentIndex = 0;
    } else {
      currentIndex--;
    }
    renderItems();
  });

  document.getElementById("nextButton").addEventListener("click", () => {
    if(currentIndex >= widgetSize) {
      currentIndex = widgetSize;
    } else {
      currentIndex++;
    }
    renderItems();
  });
};

const renderItems = () => {
  const contentDiv = document.getElementById("content");
  while (contentDiv.firstChild) {
    contentDiv.removeChild(contentDiv.firstChild);
  }

  globalData.data.recommendation
  .filter((_, index) => {
    return (
      (index <= (currentIndex + maxItens))
      && (index > currentIndex)
    )
  })
  .map(recommendation => {
    childElement = createElementHtml(recommendation)
    childElement.className = "col s3"
    appendChildElement = contentDiv.appendChild(childElement)
  })
};

main();
