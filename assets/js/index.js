const RenderProducts = require('./modules/RenderProducts');
const CategoriesList = require('./modules/CategoriesList');
const API_URL = 'https://dummyjson.com';

const products = new RenderProducts();
products.getProducts(`${API_URL}/products`);

const categoriesList = new CategoriesList(API_URL);
categoriesList.getCategories(`${API_URL}/products/categories`);
