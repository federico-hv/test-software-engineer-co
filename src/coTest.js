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
    
    if (p.name !== 'Mega Coverage') {
      p.sellIn -=1;
    }

    switch(p.name) {
      case 'Full Coverage':
        if (p.sellIn < 0) {
          p.price += 2;
        } else {
          p.price += 1;
        }
      break;
      case 'Mega Coverage':
        return p;
      case 'Special Full Coverage':
        if (p.sellIn < 0) {
          p.price = 0;
        }
        else {
          if (p.sellIn < 10) {
            p.price += 2;
          }
          else if(p.sellIn < 5) {
            p.price += 3;
          } else {
            p.price += 1;
          }
        }
      break;
      case 'Super Sale':
        if (p.sellIn < 0) {
          p.price -= 4;
        } else {
          p.price -= 2;
        }
      break;
      default:
        if (p.sellIn < 0) {
          p.price -= 2;
        } else {
          p.price -= 1;
        }
    }

    p = this.flattenPrice(p);

    return p;
  }

  updatePrice(){
    for (var i = 0; i < this.products.length; i++) {
      this.products[i] = this.updateProduct(this.products[i]);
    }

    return this.products;
  }

}

module.exports = {
  Product,
  CarInsurance
}
