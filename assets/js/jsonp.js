let globalData;

const creteField = (tagname, value, classname) => {
  const field = document.createElement(tagname);
  field.innerHTML = value;
  return field;
}

const createElementHtml = recommendation => {
  const {
    detailUrl,
    name,
    oldPrice,
    price,
    productInfo: {
      paymentConditions
    }
  } = recommendation;

  const containerdiv = document.createElement("div");
  const img = document.createElement("img");
  //img.src = `https:${detailUrl}`;
  img.alt = "TABLET_IMG"

  containerdiv.appendChild(img);
  containerdiv.appendChild(creteField("div", name));
  containerdiv.appendChild(creteField("div", `De: ${oldPrice}`));
  containerdiv.appendChild(creteField("div", `Por: ${price}`));
  containerdiv.appendChild(creteField("div", paymentConditions));
  return containerdiv;
}

const X = (fetchData) => {
  const referenceDiv = document.getElementById("reference");
  const referenceContent = createElementHtml(fetchData.data.reference.item);
  referenceDiv.appendChild(referenceContent)

  globalData = fetchData;

}
