const RenderProducts = require('./RenderProducts');
const renderProducts = new RenderProducts();

class CategoriesList {
    constructor(url) {
        this.categoriesList = document.querySelector('.sidebar__category-list');
        this.API_URL = url;
    }

    async getCategories(url) {
        const res = await fetch(url);
        const categories = await res.json();
        
        categories.forEach(category => this.createListItem(category));
    }

    createListItem(category) {
        const link = document.createElement('a');
        const listItem = document.createElement('li');

        link.setAttribute('href', `${this.API_URL}/products/category/${category}`);
        link.innerHTML = category;
        link.addEventListener('click', e => {
            e.preventDefault();
            renderProducts.getProducts(`${this.API_URL}/products/category/${category}`);
        });
        
        listItem.className = 'p-1 text-capitalize';
        listItem.append(link);

        this.categoriesList.append(listItem);
    }
}

module.exports = CategoriesList;