import Controller from "./controller";
import Service from "./service";

const item = new Controller(Service);

function loadData() {
  item.findAllItems();
}

function editLink() {
  const editlink = document.getElementsByClassName("editLink");

  Array.prototype.forEach.call(editlink, editlink => {
    editlink.addEventListener("click", _ => {
      const selectedItem = editlink.dataset.attr;
      item.findItemById(selectedItem);
      document.getElementById("overlay").style.display = "block";
    });
  });
}

function init() {
  loadData();
  setTimeout(() => {
    editLink();
  }, 1000);
  document.querySelector(".close").addEventListener("click", _ => {
    event.stopPropagation();
    document.getElementById("overlay").style.display = "none";
  });
  document.querySelector("#editButton").addEventListener("click", _ => {
    event.stopPropagation();
    const selectedItem = document.querySelector(".hiddenAttr").value;
    const desc = document.querySelector(".editDesc").innerText;
    var src = document.querySelector(".editImage").src;
    const style = document.querySelector(".hiddenAttr").dataset.attr;
    const colour = document.querySelector(".editcolour").innerText;
    const size = document.querySelector(".edit .sizeList").value;
    const qty = document.querySelector(".edit .qtyList").value;
    const price = document.querySelector(".editPrice .amount").innerText;
    item.updateItem(
      selectedItem,
      src,
      desc,
      style,
      colour,
      size,
      qty,
      qty * price
    );
  });
}

window.onload = init;
