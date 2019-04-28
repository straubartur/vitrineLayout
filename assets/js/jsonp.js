const createElement = (tagname, value, classname) => {
  const field = document.createElement(tagname);
  field.innerHTML = value;
  field.className = classname;
  return field;
}

window.createProduct = recommendation => {
  console.log(recommendation)
  const {
    detailUrl,
    name,
    imageName,
    oldPrice,
    price,
    productInfo: {
      paymentConditions
    }
  } = recommendation;

  const containerdiv = document.createElement("div");
  const imageDiv = document.createElement("div")
  const img = document.createElement("img");
  img.src = `https:${imageName}`;
  img.className = "vitrine-item-img"
  img.alt = name;

  imageDiv.className = "img-container"
  imageDiv.appendChild(img);
  containerdiv.appendChild(imageDiv);
  containerdiv.appendChild(createElement("p", name, "itemName"));
  containerdiv.appendChild(createElement("p", `De: ${oldPrice}`, "fromPrice"));
  containerdiv.appendChild(createElement("p", `Por: ${price}`, "price"));
  containerdiv.appendChild(createElement("p", paymentConditions, "conditions"));
  containerdiv.addEventListener("click", () => {
    window.location = `https:${detailUrl}`;
  })
  return containerdiv;
}

window.X = recommendations => {
  const referenceDiv = document.getElementById("reference");
  const referenceContent = createProduct(
    recommendations
    && recommendations.data
    && recommendations.data.reference
    && recommendations.data.reference.item
  );
  referenceContent.className = "product col reference"
  referenceDiv.appendChild(referenceContent)

  main(recommendations)

}
