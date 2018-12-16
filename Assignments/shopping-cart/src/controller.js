import Service from "./service";
const service = new Service();
class Controller {
  constructor(service) {
    this.service = service;
  }
  editLink() {
    document.getElementById("overlay").style.display = "block";
  }
  findAllItems() {
    service
      .findAll()
      .then(res => {
        let price = 0;
        res.forEach(element => {
          let item = document.createElement("div");
          item.className = "item";
          item.dataset.attr = element.id;
          document.querySelector(".item-list").appendChild(item);
          let imageDiv = document.createElement("div");
          imageDiv.className = "item-image";
          item.appendChild(imageDiv);
          let image = document.createElement("img");
          image.src = element.src;
          image.height = 175;
          image.width = 150;
          imageDiv.appendChild(image);
          let desc = document.createElement("div");
          desc.className = "description";
          item.appendChild(desc);
          let itemDesc = document.createElement("div");
          itemDesc.className = "item-desc";
          itemDesc.innerHTML =
            "<p><strong>" +
            element.desc +
            "</strong></p><p>STYLE #: " +
            element.style +
            "</p><p>Colour: " +
            element.colour +
            "</p>";
          desc.appendChild(itemDesc);
          let itemSize = document.createElement("div");
          itemSize.className = "item-size";
          itemSize.innerHTML =
            '<label class="size-label">SIZE:</label><span>' +
            element.size +
            "</span>";
          desc.appendChild(itemSize);
          let itemQty = document.createElement("div");
          itemQty.className = "item-qty";
          itemQty.innerHTML =
            '<label class="qty-label">QTY:</label><input type="text" value="' +
            element.quantity +
            '">';
          desc.appendChild(itemQty);
          let itemPrice = document.createElement("div");
          itemPrice.className = "item-price";
          itemPrice.innerHTML = "$" + element.price + ".00";
          desc.appendChild(itemPrice);
          let links = document.createElement("div");
          links.className = "links";
          links.innerHTML =
            '<ul><li><a href="#" class="editLink" data-attr="' +
            element.id +
            '">EDIT</a></li><li><a href="#">REMOVE</a></li><li><a href="#">SAVE FOR LATER</a></li></ul>';
          item.parentNode.appendChild(links);
          price = eval(price + element.price);
        });
        document.querySelector(".estPrice").innerText = "$" + price + ".00";
        document.querySelector(".totalPrice").innerText =
          "$" + (price - 7) + ".00";
      })
      .catch(err => console.log(err.message));
  }
  findItemById(id) {
    service
      .findById(id)
      .then(res => {
        res.forEach(element => {
          document.querySelector(".hiddenAttr").value = element.id;
          document.querySelector(".hiddenAttr").dataset.attr = element.style;
          document.querySelector(".editDesc").innerText = element.desc;
          document.querySelector(".editPrice .amount").innerText =
            element.price;
          document.querySelector(".editcolour").innerHTML =
            element.colour.toUpperCase() +
            '<div style="background:' +
            element.colour +
            ';"></div>';
          document.querySelector(".edit .sizeList").value = element.size;
          document.querySelector(".edit .qtyList").value = element.quantity;
          document.querySelector(".editImage").src = element.src;
          document.querySelector(".editImage").alt = element.desc;
        });
      })
      .catch(err => console.log(err.message));
  }
  updateItem(id, src, desc, style, colour, size, qty, price) {
    service
      .update(id, src, desc, style, colour, size, qty, price)
      .then(res => {
        const newItem = document.querySelector(
          '.item[data-attr="' + res.id + '"]'
        );
        newItem.querySelector(".item-size span").innerText = size;
        newItem.querySelector(".item-qty input").value = qty;
        newItem.querySelector(".item-price").innerText = "$" + price + ".00";
        document.getElementById("overlay").style.display = "none";
      })
      .catch(err => console.log(err.message));
  }
}

export default Controller;
