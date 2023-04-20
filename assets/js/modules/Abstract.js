class Abstract {
    constructor() {
        if (this.constructor === Abstract) throw new Error('Abstract classes cannot be instantiated!');
    }

    async getData(url) {
        const res = await fetch(url);
        const products = await res.json();

        return products;
    }

    renderProduct(products) {
        this.productsContainer.innerHTML = products.map(product => {
            return this._singleProductHtml(product)
        }).join('');
    }

    _singleProductHtml(product) {
        const singleProductHtml = `
            <article class="products__row__single-product p-3 position-relative">
                <a href="${this.API_URL}/products/${product.id}" class="d-block" data-discount="-${Math.round(product.discountPercentage)}%">
                    <img src="${product.thumbnail ? product.thumbnail : ''}" alt="${product.title}">
                </a>
                <div class="products__row__single-product__info">
                        <h4 class="text-start mb-1"><a href="${this.API_URL}/products/${product.id}">${product.title}</a></h4>
                    <div class="products__row__single-product__info__recensie mb-3">
                        <div class="stars mb-3">
                            ${this._generateRatingStars()}
                            <div class="cover" style="width: ${this._calculateRating(product.rating)}%;"></div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                        ${product.discountPercentage
                ? this._showDiscountPrice(product.price, product.discountPercentage / 100)
                : `<p class="text-center fs-5 fw-bold">$${product.price}</p>`}
                        <a href="#" class="cart"><img src="assets/img/cart.svg" alt="cart"></a>
                    </div>
                </div>
                </a>
            </article>`

        return singleProductHtml;
    }

    _calculateRating(rating) {
        let ratingPercent = 20 * rating;
        return 100 - ratingPercent;
    }

    _showDiscountPrice(price, discount) {
        const discountedPrice = price - (price * discount);
        let discountPriceHTML = `
            <p class="text-center fs-5 d-flex flex-column align-items-start">
                <span class="fw-bold">$${discountedPrice.toFixed(2)}
                    <del class="fs-6 ms-2">$${price}</del> 
                </span>
                <span class="fs-6 text-uppercase text-danger">Savings: $${(price - discountedPrice).toFixed(2)}</span>
            </p>
            `;

        return discountPriceHTML;
    }

    _generateRatingStars() {
        let starsHtml = '';

        for (let i = 0; i < 5; i++) {
            starsHtml += `
                <svg viewBox="0 0 576 512" width="100" title="star">
                    <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                </svg>
            `
        }
        return starsHtml;
    }
}

module.exports = Abstract;
