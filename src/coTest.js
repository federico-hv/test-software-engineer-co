class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }
}

class CarInsurance {
  constructor(products = []) {
    this.products = products;
  }
  
  updateProduct(p) {
    return p;
  }

  updatePrice(){
    for (var i = 0; i < this.products.length; i++) {
      this.product[i] = updateProduct(this.products[i]);
    }
  }
}

module.exports = {
  Product,
  CarInsurance
}
