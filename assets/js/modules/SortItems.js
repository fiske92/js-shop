class SortItems {
    constructor() {
        this.selectSorting = document.getElementById('select-sorting');
        this.selectSorting.addEventListener('change', this.sortProducts);
    }

    sortProducts() {
        console.log('test')
    }
}

module.exports = SortItems;
