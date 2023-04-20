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

eval("const RenderProducts = __webpack_require__(/*! ./modules/RenderProducts */ \"./assets/js/modules/RenderProducts.js\");\nconst CategoriesList = __webpack_require__(/*! ./modules/CategoriesList */ \"./assets/js/modules/CategoriesList.js\");\nconst NavigationLinks = __webpack_require__(/*! ./modules/NavigationLinks */ \"./assets/js/modules/NavigationLinks.js\");\nconst API_URL = 'https://dummyjson.com';\n\nconst products = new RenderProducts();\nproducts.renderProducts(`${API_URL}/products`);\n\nconst categoriesList = new CategoriesList(API_URL);\ncategoriesList.getCategories(`${API_URL}/products/categories`);\n\nconst navigationLinks = new NavigationLinks(API_URL);\n\nconst subMenu = document.querySelectorAll('.navigation__items__has-child__child-menu');\nsubMenu.forEach(menu => {\n   menu.setAttribute('style', `--tooltip-height: ${menu.scrollHeight}px`);\n})\n\n\n//# sourceURL=webpack://y/./assets/js/index.js?");

/***/ }),

/***/ "./assets/js/modules/Abstract.js":
/*!***************************************!*\
  !*** ./assets/js/modules/Abstract.js ***!
  \***************************************/
/***/ ((module) => {

eval("class Abstract {\n    constructor() {\n        if (this.constructor === Abstract) throw new Error('Abstract classes cannot be instantiated!');\n    }\n\n    async getData(url) {\n        const res = await fetch(url);\n        const products = await res.json();\n\n        return products;\n    }\n\n    renderProduct(products) {\n        this.productsContainer.innerHTML = products.map(product => {\n            return this._singleProductHtml(product)\n        }).join('');\n    }\n\n    _singleProductHtml(product) {\n        const singleProductHtml = `\n            <article class=\"products__row__single-product p-3 position-relative\">\n                <a href=\"${this.API_URL}/products/${product.id}\" class=\"d-block\" data-discount=\"-${Math.round(product.discountPercentage)}%\">\n                    <img src=\"${product.thumbnail ? product.thumbnail : ''}\" alt=\"${product.title}\">\n                </a>\n                <div class=\"products__row__single-product__info\">\n                        <h4 class=\"text-start mb-1\"><a href=\"${this.API_URL}/products/${product.id}\">${product.title}</a></h4>\n                    <div class=\"products__row__single-product__info__recensie mb-3\">\n                        <div class=\"stars mb-3\">\n                            ${this._generateRatingStars()}\n                            <div class=\"cover\" style=\"width: ${this._calculateRating(product.rating)}%;\"></div>\n                        </div>\n                    </div>\n                    <div class=\"d-flex justify-content-between align-items-center\">\n                        ${product.discountPercentage\n                ? this._showDiscountPrice(product.price, product.discountPercentage / 100)\n                : `<p class=\"text-center fs-5 fw-bold\">$${product.price}</p>`}\n                        <a href=\"#\" class=\"cart\"><img src=\"assets/img/cart.svg\" alt=\"cart\"></a>\n                    </div>\n                </div>\n                </a>\n            </article>`\n\n        return singleProductHtml;\n    }\n\n    _calculateRating(rating) {\n        let ratingPercent = 20 * rating;\n        return 100 - ratingPercent;\n    }\n\n    _showDiscountPrice(price, discount) {\n        const discountedPrice = price - (price * discount);\n        let discountPriceHTML = `\n            <p class=\"text-center fs-5 d-flex flex-column align-items-start\">\n                <span class=\"fw-bold\">$${discountedPrice.toFixed(2)}\n                    <del class=\"fs-6 ms-2\">$${price}</del> \n                </span>\n                <span class=\"fs-6 text-uppercase text-danger\">Savings: $${(price - discountedPrice).toFixed(2)}</span>\n            </p>\n            `;\n\n        return discountPriceHTML;\n    }\n\n    _generateRatingStars() {\n        let starsHtml = '';\n\n        for (let i = 0; i < 5; i++) {\n            starsHtml += `\n                <svg viewBox=\"0 0 576 512\" width=\"100\" title=\"star\">\n                    <path d=\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\" />\n                </svg>\n            `\n        }\n        return starsHtml;\n    }\n}\n\nmodule.exports = Abstract;\n\n\n//# sourceURL=webpack://y/./assets/js/modules/Abstract.js?");

/***/ }),

/***/ "./assets/js/modules/CategoriesList.js":
/*!*********************************************!*\
  !*** ./assets/js/modules/CategoriesList.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Abstract = __webpack_require__(/*! ./Abstract */ \"./assets/js/modules/Abstract.js\")\nconst RenderProducts = __webpack_require__(/*! ./RenderProducts */ \"./assets/js/modules/RenderProducts.js\");\nconst renderProducts = new RenderProducts();\n\nclass CategoriesList extends Abstract {\n    constructor(url) {\n        super();\n        this.categoriesList = document.querySelector('.sidebar__category-list');\n        this.API_URL = url;\n        this.showAllProducts = document.querySelector('#show-all-products');\n        this.showAllProducts.addEventListener('click', e => {\n            e.preventDefault();\n            renderProducts.renderProducts(`${this.API_URL}/products`);\n        });\n    }\n\n    async getCategories(url) {\n        const categories = await this.getData(url)\n        categories.forEach(category => this.createListItem(category));\n    }\n\n    createListItem(category) {\n        const link = document.createElement('a');\n        const listItem = document.createElement('li');\n\n        link.setAttribute('href', `${this.API_URL}/products/category/${category}`);\n        link.innerHTML = category;\n        link.addEventListener('click', e => {\n            e.preventDefault();\n            renderProducts.renderProducts(`${this.API_URL}/products/category/${category}`);\n\n            const select = document.querySelector('#select-sorting');\n            select.selectedIndex = 0\n        });\n\n        listItem.className = 'p-1 text-capitalize';\n        listItem.append(link);\n\n        this.categoriesList.append(listItem);\n    }\n}\n\nmodule.exports = CategoriesList;\n\n\n//# sourceURL=webpack://y/./assets/js/modules/CategoriesList.js?");

/***/ }),

/***/ "./assets/js/modules/NavigationLinks.js":
/*!**********************************************!*\
  !*** ./assets/js/modules/NavigationLinks.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const RenderProducts = __webpack_require__(/*! ./RenderProducts */ \"./assets/js/modules/RenderProducts.js\");\nconst renderProducts = new RenderProducts();\n\nclass Navigation {\n   constructor(url) {\n      this.API_URL = url;\n      this.childLinks = document.querySelectorAll('.navigation__items__has-child__child-menu a');\n      this.subMenus = document.querySelectorAll('.navigation__items__has-child__child-menu');\n      this.setLink();\n   }\n\n   setLink() {\n      this.childLinks.forEach(link => {\n         link.setAttribute('href', `${this.API_URL}/products/category/${link.innerText.toLowerCase()}`);\n\n         link.addEventListener('click', e => {\n            e.preventDefault();\n            this.renderLinkProducts(`${this.API_URL}/products/category/${link.innerText.toLowerCase()}`);\n         })\n      })\n   }\n\n   renderLinkProducts(url) {\n      renderProducts.renderProducts(url);\n   }\n}\n\nmodule.exports = Navigation;\n\n\n//# sourceURL=webpack://y/./assets/js/modules/NavigationLinks.js?");

/***/ }),

/***/ "./assets/js/modules/RenderProducts.js":
/*!*********************************************!*\
  !*** ./assets/js/modules/RenderProducts.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Abstract = __webpack_require__(/*! ./Abstract */ \"./assets/js/modules/Abstract.js\");\n\nclass RenderProducts extends Abstract {\n    constructor() {\n        super();\n        this.productsContainer = document.querySelector('.products > .products__row');\n        this.select = document.querySelector(\"#select-sorting\")\n    }\n\n    async renderProducts(url) {\n        const productsObj = await this.getData(url);\n        productsObj && this.renderProduct(productsObj.products);\n\n        this.select.addEventListener('change', () => this.sortItems(productsObj.products));\n    }\n\n    sortItems(products) {\n        if (this.select.value === 'priceAsc') products.sort((a, b) => a.price - b.price)\n        else if (this.select.value === 'priceDesc') products.sort((a, b) => b.price - a.price)\n        else if (this.select.value === 'rating') products.sort((a, b) => b.rating - a.rating)\n\n        this.renderProduct(products);\n    }\n}\n\nmodule.exports = RenderProducts;\n\n\n//# sourceURL=webpack://y/./assets/js/modules/RenderProducts.js?");

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