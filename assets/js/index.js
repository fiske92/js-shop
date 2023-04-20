const RenderProducts = require('./modules/RenderProducts');
const CategoriesList = require('./modules/CategoriesList');
const NavigationLinks = require('./modules/NavigationLinks');
const API_URL = 'https://dummyjson.com';

const products = new RenderProducts();
products.renderProducts(`${API_URL}/products`);

const categoriesList = new CategoriesList(API_URL);
categoriesList.getCategories(`${API_URL}/products/categories`);

const navigationLinks = new NavigationLinks(API_URL);

const subMenu = document.querySelectorAll('.navigation__items__has-child__child-menu');
subMenu.forEach(menu => {
   menu.setAttribute('style', `--tooltip-height: ${menu.scrollHeight}px`);
})
