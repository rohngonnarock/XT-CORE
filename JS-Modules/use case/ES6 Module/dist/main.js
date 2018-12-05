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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_profileService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/profileService */ \"./src/profileService.js\");\n/* harmony import */ var _src_profileComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/profileComponent */ \"./src/profileComponent.js\");\n\r\n\r\n\r\nlet component = new _src_profileComponent__WEBPACK_IMPORTED_MODULE_1__[\"default\"](new _src_profileService__WEBPACK_IMPORTED_MODULE_0__[\"default\"]())\r\n\r\ncomponent.findAll().then(res => console.log(res))\r\n\r\nconsole.log('test')\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./src/profile.js":
/*!************************!*\
  !*** ./src/profile.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Profile; });\nclass Profile {\r\n    constructor(name, city) {\r\n        Profile.nextId++;\r\n        this.id = Profile.nextId; // auto_increment\r\n        this.name = name;\r\n        this.city = city;\r\n    }\r\n}\r\n\r\nProfile.nextId = 0;\n\n//# sourceURL=webpack:///./src/profile.js?");

/***/ }),

/***/ "./src/profileComponent.js":
/*!*********************************!*\
  !*** ./src/profileComponent.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ProfileComponent; });\nclass ProfileComponent {\r\n\r\n    constructor(service) {\r\n        this.service = service;\r\n    }\r\n    save(name, city) {\r\n        return this.service.save(name, city)\r\n    }\r\n\r\n    findAll() {\r\n        return this.service.findAll();\r\n    }\r\n\r\n    findById(id) {\r\n        return this.service.findById(id)\r\n    }\r\n\r\n    update(id, name, city) {\r\n        return this.service.update(id, name, city)\r\n    }\r\n\r\n    remove(id) {\r\n        return this.service.remove(id)\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/profileComponent.js?");

/***/ }),

/***/ "./src/profileService.js":
/*!*******************************!*\
  !*** ./src/profileService.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ProfileService; });\n/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile */ \"./src/profile.js\");\n\r\n\r\nclass ProfileService {\r\n    constructor() {\r\n        this.url = 'http://localhost:3000/profile';\r\n    }\r\n\r\n    async save(name, city) {\r\n        try {\r\n            let apiData = await this.findAll();\r\n            _profile__WEBPACK_IMPORTED_MODULE_0__[\"default\"].nextId = apiData.length;\r\n\r\n            let data = new _profile__WEBPACK_IMPORTED_MODULE_0__[\"default\"](name, city)\r\n            let res = await fetch(this.url, {\r\n                method: 'POST',\r\n                body: JSON.stringify(data),\r\n                headers: {\r\n                    'Content-Type': 'application/json'\r\n                }\r\n            })\r\n\r\n            return res.json();\r\n\r\n        } catch (error) {\r\n            throw error\r\n        }\r\n    }\r\n    async findAll() {\r\n        try {\r\n            let res = await fetch(this.url)\r\n            return res.json();\r\n        } catch (error) {\r\n            throw error\r\n        }\r\n    }\r\n\r\n    async findById(id) {\r\n        try {\r\n            let res = await fetch(`${this.url}?id=${id}`)\r\n            return res.json();\r\n        } catch (error) {\r\n            throw error\r\n        }\r\n    }\r\n\r\n    async update(id, name, city) {\r\n        try {\r\n            let data = new _profile__WEBPACK_IMPORTED_MODULE_0__[\"default\"](name, city)\r\n            let res = await fetch(`${this.url}/${id}`, {\r\n                method: 'PATCH',\r\n                body: JSON.stringify(data),\r\n                headers: {\r\n                    'Content-Type': 'application/json'\r\n                }\r\n            })\r\n            return res.json();\r\n        } catch (error) {\r\n            throw error\r\n        }\r\n\r\n    }\r\n\r\n    async remove(id) {\r\n        try {\r\n            let res = await fetch(`${this.url}/${id}`, {\r\n                method: 'DELETE'\r\n            })\r\n            return res.json();\r\n        } catch (error) {\r\n            throw error\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/profileService.js?");

/***/ })

/******/ });