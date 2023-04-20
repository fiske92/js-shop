const Abstract = require('./Abstract');

class RenderProducts extends Abstract {
    constructor() {
        super();
        this.productsContainer = document.querySelector('.products > .products__row');
        this.select = document.querySelector("#select-sorting")
    }

    async renderProducts(url) {
        const productsObj = await this.getData(url);
        productsObj && this.renderProduct(productsObj.products);

        this.select.addEventListener('change', () => this.sortItems(productsObj.products));
    }

    sortItems(products) {
        if (this.select.value === 'priceAsc') products.sort((a, b) => a.price - b.price)
        else if (this.select.value === 'priceDesc') products.sort((a, b) => b.price - a.price)
        else if (this.select.value === 'rating') products.sort((a, b) => b.rating - a.rating)

        this.renderProduct(products);
    }
}

module.exports = RenderProducts;
