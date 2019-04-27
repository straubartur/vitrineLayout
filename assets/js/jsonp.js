let globalData;
const IMAGE_URL = "https://www.pontofrio-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=870303323";
const creteField = (tagname, value, classname) => {
  const field = document.createElement(tagname);
  field.innerHTML = value;
  field.className = classname;
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
  // this link is not working
  img.src = IMAGE_URL
  img.className = "vitrine-item-img"
  img.alt = "TABLET_IMG"

  containerdiv.appendChild(img);
  containerdiv.appendChild(creteField("div", name, "itemName"));
  containerdiv.appendChild(creteField("div", `De: ${oldPrice}`, "fromPrice"));
  containerdiv.appendChild(creteField("div", `Por: ${price}`, "price"));
  containerdiv.appendChild(creteField("div", paymentConditions, "conditions"));
  return containerdiv;
}

const X = (fetchData) => {
  const referenceDiv = document.getElementById("reference");
  const referenceContent = createElementHtml(fetchData.data.reference.item);
  referenceContent.className = "col"
  referenceDiv.appendChild(referenceContent)

  globalData = fetchData;

}
