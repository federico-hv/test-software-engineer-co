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
      case 'Full Coverage':
        if (p.sellIn < 0) {
          p.price += 2;
        } else {
          p.price += 1;
        }
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
