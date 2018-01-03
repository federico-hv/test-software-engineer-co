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

  /**
   * lower both values for every product.
   * 
   * sellIn === 0 ---> price -= 2  (until 0 not less)
   * 
   * fullCoverage ------> price += 1 (until 50 not more)
   * 
   * megaCoverage ------> Never changes
   * 
   * specialFullCoverage 
   *                -----> price += 1 
   *       10 days or less -------> price += 2
   *       5 days or less --------> price += 3
   *       0 days        ---------> price === 0  (NOT VALID. SHOULD I REMOVE IT FROM THE ARRAY???)
   * 
   * superSale 
   */

  flattenPrice(p) {
    if (p.price > 50) {
      p.price = 50;
    }

    if (p.price < 0) {
      p.price = 0;
    }

    return p;
  }

  
  updateProduct(p) {
    p.sellIn -=1;
    switch(p) {
      default:
        if (p.sellIn < 0) {
          if (p.price >= 2) {
            p.price -= 2;
          }
          else {
            p.price = 0;
          }
        } else {
          if(p.price > 0){
            p.price -= 1;
          }
        }
    }

    if(p.name !== 'Mega Coverage'){
      p = flatPrice(p);
    }

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
