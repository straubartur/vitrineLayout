// this is an outside method to avoid multiple methods calls
function debounce(func, wait, immediate) {
  var timeout;
  return function executedFunction() {
    var context = this;
    var args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

window.main = (apiResult) => {
  const maxItens = 3;
  const mobileMaxItens = 2;
  let currentIndex = 0;
  const widgetSize = apiResult.data.widget.size
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");

  prevButton
  && prevButton
    .addEventListener("click", () => {
      if(currentIndex === 0) {
        currentIndex = 0;
      } else {
        currentIndex--;
      }
      renderItems(apiResult, maxItens, currentIndex);
    });

  nextButton
  && nextButton
    .addEventListener("click", () => {
      if(currentIndex >= widgetSize) {
        currentIndex = widgetSize;
      } else {
        currentIndex++;
      }
      renderItems(apiResult, maxItens, currentIndex);
    });

  addEventListener("resize", debounce(() => {
    if(window.innerWidth < 1001) {
      renderItems(apiResult, mobileMaxItens, currentIndex);
    } else {
      renderItems(apiResult, maxItens, currentIndex);
    }
  }, 150))

  renderItems(apiResult, maxItens, currentIndex);
  };

const renderItems = (apiResult, maxItens, currentIndex) => {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";

  apiResult
  && apiResult.data
  && apiResult.data.recommendation
    .filter((_, index) => {
      return (
        (index <= (currentIndex + maxItens))
        && (index > currentIndex)
      )
    })
    .forEach(recommendation => {
      childElement = createProduct(recommendation)
      childElement.className = "col s6 l4 product"
      appendChildElement = contentDiv.appendChild(childElement)
    })
};
