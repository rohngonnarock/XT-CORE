/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service */ \"./src/service.js\");\n\nconst service = new _service__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nclass Controller {\n  constructor(service) {\n    this.service = service;\n  }\n  editLink() {\n    document.getElementById(\"overlay\").style.display = \"block\";\n  }\n  findAllItems() {\n    service\n      .findAll()\n      .then(res => {\n        let price = 0;\n        res.forEach(element => {\n          let item = document.createElement(\"div\");\n          item.className = \"item\";\n          item.dataset.attr = element.id;\n          document.querySelector(\".item-list\").appendChild(item);\n          let imageDiv = document.createElement(\"div\");\n          imageDiv.className = \"item-image\";\n          item.appendChild(imageDiv);\n          let image = document.createElement(\"img\");\n          image.src = element.src;\n          image.height = 175;\n          image.width = 150;\n          imageDiv.appendChild(image);\n          let desc = document.createElement(\"div\");\n          desc.className = \"description\";\n          item.appendChild(desc);\n          let itemDesc = document.createElement(\"div\");\n          itemDesc.className = \"item-desc\";\n          itemDesc.innerHTML =\n            \"<p><strong>\" +\n            element.desc +\n            \"</strong></p><p>STYLE #: \" +\n            element.style +\n            \"</p><p>Colour: \" +\n            element.colour +\n            \"</p>\";\n          desc.appendChild(itemDesc);\n          let itemSize = document.createElement(\"div\");\n          itemSize.className = \"item-size\";\n          itemSize.innerHTML =\n            '<label class=\"size-label\">SIZE:</label><span>' +\n            element.size +\n            \"</span>\";\n          desc.appendChild(itemSize);\n          let itemQty = document.createElement(\"div\");\n          itemQty.className = \"item-qty\";\n          itemQty.innerHTML =\n            '<label class=\"qty-label\">QTY:</label><input type=\"text\" value=\"' +\n            element.quantity +\n            '\">';\n          desc.appendChild(itemQty);\n          let itemPrice = document.createElement(\"div\");\n          itemPrice.className = \"item-price\";\n          itemPrice.innerHTML = \"$\" + element.price + \".00\";\n          desc.appendChild(itemPrice);\n          let links = document.createElement(\"div\");\n          links.className = \"links\";\n          links.innerHTML =\n            '<ul><li><a href=\"#\" class=\"editLink\" data-attr=\"' +\n            element.id +\n            '\">EDIT</a></li><li><a href=\"#\">REMOVE</a></li><li><a href=\"#\">SAVE FOR LATER</a></li></ul>';\n          item.parentNode.appendChild(links);\n          price = eval(price + element.price);\n        });\n        document.querySelector(\".estPrice\").innerText = \"$\" + price + \".00\";\n        document.querySelector(\".totalPrice\").innerText =\n          \"$\" + (price - 7) + \".00\";\n      })\n      .catch(err => console.log(err.message));\n  }\n  findItemById(id) {\n    service\n      .findById(id)\n      .then(res => {\n        res.forEach(element => {\n          document.querySelector(\".hiddenAttr\").value = element.id;\n          document.querySelector(\".hiddenAttr\").dataset.attr = element.style;\n          document.querySelector(\".editDesc\").innerText = element.desc;\n          document.querySelector(\".editPrice .amount\").innerText =\n            element.price;\n          document.querySelector(\".editcolour\").innerHTML =\n            element.colour.toUpperCase() +\n            '<div style=\"background:' +\n            element.colour +\n            ';\"></div>';\n          document.querySelector(\".edit .sizeList\").value = element.size;\n          document.querySelector(\".edit .qtyList\").value = element.quantity;\n          document.querySelector(\".editImage\").src = element.src;\n          document.querySelector(\".editImage\").alt = element.desc;\n        });\n      })\n      .catch(err => console.log(err.message));\n  }\n  updateItem(id, src, desc, style, colour, size, qty, price) {\n    service\n      .update(id, src, desc, style, colour, size, qty, price)\n      .then(res => {\n        const newItem = document.querySelector(\n          '.item[data-attr=\"' + res.id + '\"]'\n        );\n        newItem.querySelector(\".item-size span\").innerText = size;\n        newItem.querySelector(\".item-qty input\").value = qty;\n        newItem.querySelector(\".item-price\").innerText = \"$\" + price + \".00\";\n        document.getElementById(\"overlay\").style.display = \"none\";\n      })\n      .catch(err => console.log(err.message));\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Controller);\n\n\n//# sourceURL=webpack:///./src/controller.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ \"./src/controller.js\");\n/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service */ \"./src/service.js\");\n\n\n\nconst item = new _controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_service__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\nfunction loadData() {\n  item.findAllItems();\n}\n\nfunction editLink() {\n  const editlink = document.getElementsByClassName(\"editLink\");\n\n  Array.prototype.forEach.call(editlink, editlink => {\n    editlink.addEventListener(\"click\", _ => {\n      const selectedItem = editlink.dataset.attr;\n      item.findItemById(selectedItem);\n      document.getElementById(\"overlay\").style.display = \"block\";\n    });\n  });\n}\n\nfunction init() {\n  loadData();\n  setTimeout(() => {\n    editLink();\n  }, 1000);\n  document.querySelector(\".close\").addEventListener(\"click\", _ => {\n    event.stopPropagation();\n    document.getElementById(\"overlay\").style.display = \"none\";\n  });\n  document.querySelector(\"#editButton\").addEventListener(\"click\", _ => {\n    event.stopPropagation();\n    const selectedItem = document.querySelector(\".hiddenAttr\").value;\n    const desc = document.querySelector(\".editDesc\").innerText;\n    var src = document.querySelector(\".editImage\").src;\n    const style = document.querySelector(\".hiddenAttr\").dataset.attr;\n    const colour = document.querySelector(\".editcolour\").innerText;\n    const size = document.querySelector(\".edit .sizeList\").value;\n    const qty = document.querySelector(\".edit .qtyList\").value;\n    const price = document.querySelector(\".editPrice .amount\").innerText;\n    item.updateItem(\n      selectedItem,\n      src,\n      desc,\n      style,\n      colour,\n      size,\n      qty,\n      qty * price\n    );\n  });\n}\n\nwindow.onload = init;\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/service.js":
/*!************************!*\
  !*** ./src/service.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Item {\n  constructor(id, src, desc, style, colour, size, quantity, price) {\n    this.id = id;\n    this.src = src;\n    this.desc = desc;\n    this.style = style;\n    this.colour = colour;\n    this.size = size;\n    this.quantity = quantity;\n    this.price = price;\n  }\n}\n\nclass Service {\n  constructor() {\n    this.serviceUrl = \"http://localhost:3000/item\";\n  }\n  async findAll() {\n    try {\n      const response = await fetch(this.serviceUrl);\n      if (response.status !== 200 && response.status !== 201) {\n        throw new Error(response.statusText);\n      }\n      return await response.json();\n    } catch (err) {\n      throw err;\n    }\n  }\n  async findById(id) {\n    try {\n      const response = await fetch(`${this.serviceUrl}?id=${id}`);\n      if (response.status !== 200 && response.status !== 201) {\n        throw new Error(response.statusText);\n      }\n      return await response.json();\n    } catch (err) {\n      throw err;\n    }\n  }\n  async update(id, src, desc, style, colour, size, qty, price) {\n    try {\n      const item = new Item(id, src, desc, style, colour, size, qty, price);\n      const response = await fetch(`${this.serviceUrl}/${id}`, {\n        method: \"PUT\",\n        body: JSON.stringify(item),\n        headers: {\n          \"Content-Type\": \"application/json\"\n        }\n      });\n      if (response.status !== 200 && response.status !== 201) {\n        throw new Error(response.statusText);\n      }\n      return await response.json();\n    } catch (err) {\n      throw err;\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Service);\n\n\n//# sourceURL=webpack:///./src/service.js?");

/***/ })

/******/ });