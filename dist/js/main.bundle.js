/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/index.js":
/*!****************************!*\
  !*** ./assets/js/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const RenderProducts = __webpack_require__(/*! ./modules/RenderProducts */ \"./assets/js/modules/RenderProducts.js\");\r\nconst CategoriesList = __webpack_require__(/*! ./modules/CategoriesList */ \"./assets/js/modules/CategoriesList.js\");\r\nconst SortItems = __webpack_require__(/*! ./modules/SortItems */ \"./assets/js/modules/SortItems.js\");\r\nconst API_URL = 'https://dummyjson.com';\r\nlet currentProducts = [];\r\n\r\nconst products = new RenderProducts(currentProducts);\r\nproducts.getProducts(`${API_URL}/products`);\r\n\r\nconst categoriesList = new CategoriesList(currentProducts);\r\ncategoriesList.getCategories(`${API_URL}/products/categories`);\r\n\r\nconst sortItems = new SortItems(currentProducts);\n\n//# sourceURL=webpack://js-shop/./assets/js/index.js?");

/***/ }),

/***/ "./assets/js/modules/CategoriesList.js":
/*!*********************************************!*\
  !*** ./assets/js/modules/CategoriesList.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const RenderProducts = __webpack_require__(/*! ./RenderProducts */ \"./assets/js/modules/RenderProducts.js\");\r\nconst renderProducts = new RenderProducts();\r\n\r\nclass CategoriesList {\r\n    constructor() {\r\n        this.categoriesList = document.querySelector('.sidebar__category-list');\r\n        this.API_URL = 'https://dummyjson.com';\r\n    }\r\n\r\n    async getCategories(url) {\r\n        const res = await fetch(url);\r\n        const categories = await res.json();\r\n        \r\n        categories.forEach(category => this.createListItem(category))\r\n    }\r\n\r\n    createListItem(category) {\r\n        const link = document.createElement('a');\r\n        const listItem = document.createElement('li');\r\n\r\n        link.setAttribute('href', `${this.API_URL}/products/category/${category}`);\r\n        link.innerHTML = category\r\n        link.addEventListener('click', e => {\r\n            e.preventDefault();\r\n            renderProducts.getProducts(`${this.API_URL}/products/category/${category}`);\r\n        });\r\n        \r\n        listItem.className = 'p-1 text-capitalize';\r\n        listItem.append(link);\r\n\r\n        this.categoriesList.append(listItem);\r\n    }\r\n}\r\n\r\nmodule.exports = CategoriesList;\n\n//# sourceURL=webpack://js-shop/./assets/js/modules/CategoriesList.js?");

/***/ }),

/***/ "./assets/js/modules/RenderProducts.js":
/*!*********************************************!*\
  !*** ./assets/js/modules/RenderProducts.js ***!
  \*********************************************/
/***/ ((module) => {

eval("class RenderProducts {\r\n    constructor(products) {\r\n        this.productsContainer = document.querySelector('.products > .products__row');\r\n        products = 'test'\r\n    }\r\n\r\n    async getProducts(url) {\r\n        const res = await fetch(url);\r\n        const productsObj = await res.json();\r\n\r\n        productsObj && this.renderProduct(productsObj.products);\r\n    }\r\n\r\n    renderProduct(products) {\r\n        this.productsContainer.innerHTML = products.map(product => {\r\n            return `\r\n                <article class=\"products__row__single-product p-3 position-relative\">\r\n                    <a href=\"${this.API_URL}/products/${product.id}\" class=\"d-block\" data-discount=\"-${Math.round(product.discountPercentage)}%\">\r\n                        <img src=\"${product.thumbnail ? product.thumbnail : ''}\" alt=\"test\">\r\n                    </a>\r\n                    <div class=\"products__row__single-product__info\">\r\n                        <a href=\"${this.API_URL}/products/${product.id}\">\r\n                            <h4 class=\"text-start mb-1\">${product.title}</h4>\r\n                        </a>\r\n                        <div class=\"products__row__single-product__info__recensie mb-3\">\r\n                            <div class=\"stars mb-3\">\r\n                                <svg viewBox=\"0 0 576 512\" width=\"100\" title=\"star\">\r\n                                <path d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" />\r\n                                </svg><svg viewBox=\"0 0 576 512\" width=\"100\" title=\"star\">\r\n                                <path d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" />\r\n                                </svg><svg viewBox=\"0 0 576 512\" width=\"100\" title=\"star\">\r\n                                <path d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" />\r\n                                </svg><svg viewBox=\"0 0 576 512\" width=\"100\" title=\"star\">\r\n                                <path d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" />\r\n                                </svg><svg viewBox=\"0 0 576 512\" width=\"100\" title=\"star\">\r\n                                <path d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" />\r\n                                </svg>\r\n                            \r\n                                <div class=\"cover\" style=\"width: ${this.calculateRating(product.rating)}%;\"></div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-between align-items-center\">\r\n                            ${product.discountPercentage \r\n                                ? this.showDiscountPrice(product.price, product.discountPercentage / 100) \r\n                                : `<p class=\"text-center fs-5 fw-bold\">$${product.price}</p>`}\r\n                            <a href=\"#\" class=\"cart\"><img src=\"assets/img/cart.svg\" alt=\"cart\"></a>\r\n                        </div>\r\n                    </div>\r\n                </article>`\r\n            }).join('');\r\n    }\r\n\r\n    calculateRating(rating) {\r\n        let ratingPercent = (100 / 20) * rating;\r\n        return 100 - ratingPercent\r\n    }\r\n\r\n    showDiscountPrice(price, discount) {\r\n        const discountedPrice = price - (price * discount);\r\n        let discountPriceHTML = `\r\n            <p class=\"text-center fs-5 d-flex flex-column align-items-start\">\r\n                <span class=\"fw-bold\">$${discountedPrice.toFixed(2)}\r\n                    <del class=\"fs-6 ms-2\">$${price}</del> \r\n                </span>\r\n                <span class=\"fs-6 text-uppercase text-danger\">Savings: $${(price - discountedPrice).toFixed(2)}</span>\r\n            </p>\r\n            `;\r\n\r\n        return discountPriceHTML;\r\n    }\r\n}\r\n\r\nmodule.exports = RenderProducts;\r\n\n\n//# sourceURL=webpack://js-shop/./assets/js/modules/RenderProducts.js?");

/***/ }),

/***/ "./assets/js/modules/SortItems.js":
/*!****************************************!*\
  !*** ./assets/js/modules/SortItems.js ***!
  \****************************************/
/***/ ((module) => {

eval("class SortItems {\r\n    constructor() {\r\n        this.selectSorting = document.getElementById('select-sorting');\r\n        this.selectSorting.addEventListener('change', this.sortProducts);\r\n    }\r\n\r\n    sortProducts() {\r\n        console.log('test')\r\n    }\r\n}\r\n\r\nmodule.exports = SortItems;\r\n\n\n//# sourceURL=webpack://js-shop/./assets/js/modules/SortItems.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/js/index.js");
/******/ 	
/******/ })()
;