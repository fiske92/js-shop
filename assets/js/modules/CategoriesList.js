const Abstract = require('./Abstract')
const RenderProducts = require('./RenderProducts');
const renderProducts = new RenderProducts();

class CategoriesList extends Abstract {
    constructor(url) {
        super();
        this.categoriesList = document.querySelector('.sidebar__category-list');
        this.API_URL = url;
        this.showAllProducts = document.querySelector('#show-all-products');
        this.showAllProducts.addEventListener('click', e => {
            e.preventDefault();
            renderProducts.renderProducts(`${this.API_URL}/products`);
        });
    }

    async getCategories(url) {
        const categories = await this.getData(url)
        categories.forEach(category => this.createListItem(category));
    }

    createListItem(category) {
        const link = document.createElement('a');
        const listItem = document.createElement('li');

        link.setAttribute('href', `${this.API_URL}/products/category/${category}`);
        link.innerHTML = category;
        link.addEventListener('click', e => {
            e.preventDefault();
            renderProducts.renderProducts(`${this.API_URL}/products/category/${category}`);

            const select = document.querySelector('#select-sorting');
            select.selectedIndex = 0
        });

        listItem.className = 'p-1 text-capitalize';
        listItem.append(link);

        this.categoriesList.append(listItem);
    }
}

module.exports = CategoriesList;
