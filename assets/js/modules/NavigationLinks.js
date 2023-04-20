const RenderProducts = require('./RenderProducts');
const renderProducts = new RenderProducts();

class Navigation {
   constructor(url) {
      this.API_URL = url;
      this.childLinks = document.querySelectorAll('.navigation__items__has-child__child-menu a');
      this.subMenus = document.querySelectorAll('.navigation__items__has-child__child-menu');
      this.setLink();
   }

   setLink() {
      this.childLinks.forEach(link => {
         link.setAttribute('href', `${this.API_URL}/products/category/${link.innerText.toLowerCase()}`);

         link.addEventListener('click', e => {
            e.preventDefault();
            this.renderLinkProducts(`${this.API_URL}/products/category/${link.innerText.toLowerCase()}`);
         })
      })
   }

   renderLinkProducts(url) {
      renderProducts.renderProducts(url);
   }
}

module.exports = Navigation;
