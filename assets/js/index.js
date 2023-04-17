const RenderProducts = require('./modules/RenderProducts');
const CategoriesList = require('./modules/CategoriesList');
const SortItems = require('./modules/SortItems');
const API_URL = 'https://dummyjson.com';
let currentProducts = [];

const products = new RenderProducts(currentProducts);
products.getProducts(`${API_URL}/products`);

const categoriesList = new CategoriesList(currentProducts);
categoriesList.getCategories(`${API_URL}/products/categories`);

const sortItems = new SortItems(currentProducts);