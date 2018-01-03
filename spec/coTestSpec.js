const expect = require('chai').expect;
const coTest = require('../src/coTest');
const CarInsurance = coTest.CarInsurance;
const Product = coTest.Product;

describe("Co Test", function() {

  it("should update price for Medium Coverage", function() {
    const ci = new CarInsurance([
      new Product('Medium Coverage', 10, 20)
    ]);
    const products = ci.updatePrice();

    expect(ci.products[0]).to.deep.equal({
      name: 'Medium Coverage',
      sellIn: 9,
      price: 19
    });
  });


  it("should update price for Full Coverage", function() {
    const ci = new CarInsurance([
      new Product('Full Coverage', 2, 0)
    ]);
    const products = ci.updatePrice();

    expect(ci.products[0]).to.deep.equal({
      name: 'Full Coverage',
      sellIn: 1,
      price: 1
    });
  });


  it("should update price for Low Coverage", function() {
    const ci = new CarInsurance([
      new Product('Low Coverage', 5, 7)
    ]);
    const products = ci.updatePrice();

    expect(ci.products[0]).to.deep.equal({
      name: 'Low Coverage',
      sellIn: 4,
      price: 6
    });
  });

  it("should update price for Mega Coverage", function() {
    const ci = new CarInsurance([
      new Product('Mega Coverage', 0, 80)
    ]);
    const products = ci.updatePrice();

    expect(ci.products[0]).to.deep.equal({
      name: 'Mega Coverage',
      sellIn: 0,
      price: 80
    });
  });
  
  it("should update price for Special Full Coverage", function() {
    const ci = new CarInsurance([
      new Product('Special Full Coverage', 15, 20)
    ]);
    const products = ci.updatePrice();

    expect(ci.products[0]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: 14,
      price: 21
    });
  });

  it("should update price for Super Sale", function() {
    const ci = new CarInsurance([
      new Product('Super Sale', 3, 6)
    ]);
    const products = ci.updatePrice();

    expect(ci.products[0]).to.deep.equal({
      name: 'Super Sale',
      sellIn: 2,
      price: 4
    });
  });

  it("should flatten upper price", function() {
    const ci = new CarInsurance([]);
    expect(ci.flattenPrice(new Product('Medium Coverage', 10, 55))).to.deep.equal({ name: 'Medium Coverage', sellIn: 10, price: 50 });
  });

  it("should flatten lower price", function() {
    const ci = new CarInsurance([]);
    expect(ci.flattenPrice(new Product('Medium Coverage', 10, -12))).to.deep.equal({ name: 'Medium Coverage', sellIn: 10, price: 0 });
  });

});
