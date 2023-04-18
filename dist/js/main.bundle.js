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

eval("const RenderProducts = __webpack_require__(/*! ./modules/RenderProducts */ \"./assets/js/modules/RenderProducts.js\");\r\nconst CategoriesList = __webpack_require__(/*! ./modules/CategoriesList */ \"./assets/js/modules/CategoriesList.js\");\r\nconst API_URL = 'https://dummyjson.com';\r\n\r\nconst products = new RenderProducts();\r\nproducts.renderProducts(`${API_URL}/products`);\r\n\r\nconst categoriesList = new CategoriesList(API_URL);\r\ncategoriesList.getCategories(`${API_URL}/products/categories`);\r\n\n\n//# sourceURL=webpack://js-shop/./assets/js/index.js?");

/***/ }),

/***/ "./assets/js/modules/Abstract.js":
/*!***************************************!*\
  !*** ./assets/js/modules/Abstract.js ***!
  \***************************************/
/***/ ((module) => {

eval("class Abstract {\r\n    constructor() {\r\n        if (this.constructor === Abstract) throw new Error('Abstract classes cannot be instantiated!');\r\n    }\r\n\r\n    async getProducts(url) {\r\n        const res = await fetch(url);\r\n        const products = await res.json();\r\n\r\n        return products;\r\n    }\r\n\r\n    singleProduct(products) {\r\n        this.productsContainer.innerHTML = products.map(product => {\r\n            return this.singleProductHtml(product)\r\n            }).join('');\r\n    }\r\n    \r\n    singleProductHtml(product) {\r\n        const singleProductHtml = `\r\n            <article class=\"products__row__single-product p-3 position-relative\">\r\n                <a href=\"${this.API_URL}/products/${product.id}\" class=\"d-block\" data-discount=\"-${Math.round(product.discountPercentage)}%\">\r\n                    <img src=\"${product.thumbnail ? product.thumbnail : ''}\" alt=\"${product.title}\">\r\n                </a>\r\n                <div class=\"products__row__single-product__info\">\r\n                        <h4 class=\"text-start mb-1\"><a href=\"${this.API_URL}/products/${product.id}\">${product.title}</a></h4>\r\n                    <div class=\"products__row__single-product__info__recensie mb-3\">\r\n                        <div class=\"stars mb-3\">\r\n                            ${this.generateRatingStars()}\r\n                            <div class=\"cover\" style=\"width: ${this.calculateRating(product.rating)}%;\"></div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"d-flex justify-content-between align-items-center\">\r\n                        ${product.discountPercentage \r\n                            ? this.showDiscountPrice(product.price, product.discountPercentage / 100) \r\n                            : `<p class=\"text-center fs-5 fw-bold\">$${product.price}</p>`}\r\n                        <a href=\"#\" class=\"cart\"><img src=\"assets/img/cart.svg\" alt=\"cart\"></a>\r\n                    </div>\r\n                </div>\r\n                </a>\r\n            </article>`\r\n        \r\n        return singleProductHtml;\r\n    }\r\n\r\n    calculateRating(rating) {\r\n        let ratingPercent = 20 * rating;\r\n        return 100 - ratingPercent;\r\n    }\r\n\r\n    showDiscountPrice(price, discount) {\r\n        const discountedPrice = price - (price * discount);\r\n        let discountPriceHTML = `\r\n            <p class=\"text-center fs-5 d-flex flex-column align-items-start\">\r\n                <span class=\"fw-bold\">$${discountedPrice.toFixed(2)}\r\n                    <del class=\"fs-6 ms-2\">$${price}</del> \r\n                </span>\r\n                <span class=\"fs-6 text-uppercase text-danger\">Savings: $${(price - discountedPrice).toFixed(2)}</span>\r\n            </p>\r\n            `;\r\n\r\n        return discountPriceHTML;\r\n    }\r\n\r\n    generateRatingStars() {\r\n        let starsHtml = '';\r\n\r\n        for(let i = 0; i < 5; i++) {\r\n            starsHtml += `\r\n                <svg viewBox=\"0 0 576 512\" width=\"100\" title=\"star\">\r\n                    <path d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" />\r\n                </svg>\r\n            `\r\n        }\r\n        return starsHtml;\r\n    }\r\n}\r\n\r\nmodule.exports = Abstract;\n\n//# sourceURL=webpack://js-shop/./assets/js/modules/Abstract.js?");

/***/ }),

/***/ "./assets/js/modules/CategoriesList.js":
/*!*********************************************!*\
  !*** ./assets/js/modules/CategoriesList.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Abstract = __webpack_require__(/*! ./Abstract */ \"./assets/js/modules/Abstract.js\")\r\nconst RenderProducts = __webpack_require__(/*! ./RenderProducts */ \"./assets/js/modules/RenderProducts.js\");\r\nconst renderProducts = new RenderProducts();\r\n\r\nclass CategoriesList extends Abstract {\r\n    constructor(url) {\r\n        super();\r\n        this.categoriesList = document.querySelector('.sidebar__category-list');\r\n        this.API_URL = url;\r\n    }\r\n\r\n    async getCategories(url) {\r\n        const categories = await this.getProducts(url) \r\n        categories.forEach(category => this.createListItem(category));\r\n    }\r\n\r\n    createListItem(category) {\r\n        const link = document.createElement('a');\r\n        const listItem = document.createElement('li');\r\n\r\n        link.setAttribute('href', `${this.API_URL}/products/category/${category}`);\r\n        link.innerHTML = category;\r\n        link.addEventListener('click', e => {\r\n            e.preventDefault();\r\n            renderProducts.renderProducts(`${this.API_URL}/products/category/${category}`);\r\n            \r\n            const select = document.querySelector('#select-sorting');\r\n            select.selectedIndex = 0\r\n        });\r\n        \r\n        listItem.className = 'p-1 text-capitalize';\r\n        listItem.append(link);\r\n\r\n        this.categoriesList.append(listItem);\r\n    }\r\n}\r\n\r\nmodule.exports = CategoriesList;\n\n//# sourceURL=webpack://js-shop/./assets/js/modules/CategoriesList.js?");

/***/ }),

/***/ "./assets/js/modules/RenderProducts.js":
/*!*********************************************!*\
  !*** ./assets/js/modules/RenderProducts.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Abstract = __webpack_require__(/*! ./Abstract */ \"./assets/js/modules/Abstract.js\");\r\n\r\nclass RenderProducts extends Abstract {\r\n    constructor() {\r\n        super();\r\n        this.productsContainer = document.querySelector('.products > .products__row');\r\n        this.select = document.querySelector(\"#select-sorting\")\r\n    }\r\n\r\n    async renderProducts(url) {\r\n        const productsObj = await this.getProducts(url);\r\n        productsObj && await this.singleProduct(productsObj.products);\r\n        \r\n        this.select.addEventListener('change', () => {\r\n            this.sortItems(productsObj.products)\r\n        })\r\n    }\r\n    \r\n    sortItems(products) {\r\n        if (this.select.value === 'priceAsc') {\r\n            products.sort((a, b) => a.price - b.price)\r\n        } else if (this.select.value === 'priceDesc') {\r\n            products.sort((a, b) => b.price - a.price)\r\n        } else if (this.select.value === 'rating') {\r\n            products.sort((a, b) => b.rating - a.rating)\r\n        }\r\n\r\n        this.singleProduct(products);\r\n    }\r\n}\r\n\r\nmodule.exports = RenderProducts;\r\n\n\n//# sourceURL=webpack://js-shop/./assets/js/modules/RenderProducts.js?");

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