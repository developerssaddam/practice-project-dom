// Get all btn event.
const allBtn = document.querySelectorAll(".addBtn");

// Get single btn
for (const btn of allBtn) {
  btn.addEventListener("click", function (e) {
    const totalBudget = getValue("budget");
    const costPrice = parseInt(
      e.target.parentNode.childNodes[3].childNodes[1].innerText
    );
    const placeName = e.target.parentNode.childNodes[1].innerText;

    if (totalBudget - costPrice < 0) {
      alert("Sorry! Your budget is low.");
      return;
    }

    // validate btn again click.
    e.target.setAttribute("disabled", true);

    // Update Select PlaceCount.
    const count = getValue("cartCount");
    setInnerText("cartCount", count + 1);

    // Update total budget.
    setInnerText("budget", totalBudget - costPrice);

    // Update total cost.
    const totalCost = getValue("totalCost");
    setInnerText("totalCost", totalCost + costPrice);

    // Update grandTotal.
    const grandTotal = getValue("grandTotal");
    setInnerText("grandTotal", grandTotal + costPrice);

    // Append Child li.
    const li = document.createElement("li");
    const p = document.createElement("p");
    const p1 = document.createElement("p");
    p.innerText = placeName;
    p1.innerText = costPrice;
    li.appendChild(p);
    li.appendChild(p1);
    const ul = document.getElementById("selected-place-container");
    ul.appendChild(li);
  });
}

// Get allCategoryBtn.
const allCategoryBtn = document.getElementsByClassName("category-btn");

for (const cBtn of allCategoryBtn) {
  cBtn.addEventListener("click", function (e) {
    const btnTextValue = e.target.innerText.split(" ")[2];
    const categoryName = e.target.innerText.split(" ")[0];
    const btnNumberValue = parseInt(btnTextValue);

    // Update grandTotal.
    const grandTotal = getValue("grandTotal");
    if (categoryName == "bus") {
      setInnerText("grandTotal", grandTotal + btnNumberValue);
    } else if (categoryName == "Train") {
      setInnerText("grandTotal", grandTotal - btnNumberValue);
    } else {
      setInnerText("grandTotal", grandTotal + btnNumberValue);
    }
  });
}

// Get InnerText.
function getValue(id) {
  const elementText = document.getElementById(id).innerText;
  const value = parseInt(elementText);
  return value;
}

// Set InnerText.
function setInnerText(id, value) {
  const element = document.getElementById(id);
  element.innerText = value;
}
