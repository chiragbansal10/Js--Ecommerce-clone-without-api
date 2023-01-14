const maincart = document.createElement("div");
maincart.className = "mainCart";

const itemsInCart = document.createElement("div");
itemsInCart.className = "itemsInCart";
maincart.appendChild(itemsInCart);

const header1 = document.createElement("header");
itemsInCart.appendChild(header1);
header1.innerText = "Items in cart";

const itemsouter = document.createElement("div");
itemsInCart.appendChild(itemsouter);

const items = document.createElement("div");
items.className = "items";
itemsouter.appendChild(items);

const itemsimages = document.createElement("div");
itemsimages.className = "items-images";
items.appendChild(itemsimages);

const img = document.createElement("img");
itemsimages.appendChild(img);
img.src = "";

const itemsdetails = document.createElement("div");
itemsdetails.className = "item-detail";
items.appendChild(itemsdetails);

const itemsdetailsTitle = document.createElement("div");
itemsdetailsTitle.innerText = "Superman dress";
itemsdetails.appendChild(itemsdetailsTitle);

const itemsdetailsPrice = document.createElement("div");
itemsdetailsPrice.innerText = "$15";
itemsdetails.appendChild(itemsdetailsPrice);

const itemsdetailsDelete = document.createElement("div");
itemsdetails.appendChild(itemsdetailsDelete);

const itemsdetailsDeleteButton = document.createElement("button");
itemsdetailsDelete.appendChild(itemsdetailsDeleteButton);

const itemQty = document.createElement("div");
itemQty.className = "item-qty";
items.appendChild(itemQty);

const itemQtyMinusButton = document.createElement("button");
itemQtyMinusButton.innerText = "-";
itemQty.appendChild(itemQtyMinusButton);

const itemQtyInput = document.createElement("input");
itemQtyInput.type = "text";
itemQty.appendChild(itemQtyInput);

const itemQtyPlusButton = document.createElement("button");
itemQtyPlusButton.innerText = "+";
itemQty.appendChild(itemQtyPlusButton);

const summary = document.createElement("div");
summary.className = "summary";
maincart.appendChild(summary);

const summaryHeader = document.createElement("header");
summaryHeader.innerText = "Summary";
summary.appendChild(summaryHeader);

const costOuterDiv = document.createElement("div");
summary.appendChild(costOuterDiv);

const costDiv = document.createElement("div");
costDiv.className = "cost";
costOuterDiv.appendChild(costDiv);

const costDiv1 = document.createElement("div");
costDiv1.innerText = "Cost";
costDiv.appendChild(costDiv1);

const costPriceDiv = document.createElement("div");
costPriceDiv.innerText = "$15";
costDiv.appendChild(costPriceDiv);

const shippingDiv = document.createElement("div");
shippingDiv.className = "shipping";
costOuterDiv.appendChild(shippingDiv);

const shippingDiv1 = document.createElement("div");
shippingDiv1.innerText = "Shipping";
shippingDiv.appendChild(shippingDiv1);

const costPriceDiv1 = document.createElement("div");
costPriceDiv1.innerText = "$5";
shippingDiv.appendChild(costPriceDiv1);

const hr = document.createElement("hr");
costOuterDiv.appendChild(hr);

const totalDiv = document.createElement("div");
totalDiv.className = "total";
summary.appendChild(totalDiv);

const totalDiv1 = document.createElement("div");
totalDiv1.innerText = "Total";
totalDiv.appendChild(totalDiv1);

const totalPriceDiv = document.createElement("div");
totalPriceDiv.innerText = "$20";
totalDiv.appendChild(totalPriceDiv);

const summaryDetail = document.createElement("div");
summaryDetail.className = "summary-detail";
summary.appendChild(summaryDetail);

const summaryDetailButton = document.createElement("button");
summaryDetailButton.innerText = "Checkout";
summaryDetail.appendChild(summaryDetailButton);

const htmlid = document.getElementById("cart");
htmlid.appendChild(maincart);
