//Zadanie 0
function Basket() {
    this.products = [];
    this.sum = 0;
}

Basket.prototype.addProduct = function(name1, price1){
    this.products.push({name:name1, price:price1});
    this.sum += price1
}

Basket.prototype.showBasket = function () {
    console.log("Products: ");
    console.log(this.products);
    console.log("Sum: " + this.sum)
}

var aliceBasket = new Basket();
aliceBasket.addProduct("pomidor", 10);
aliceBasket.addProduct("arbuz", 40);
aliceBasket.showBasket();

var bruceBasket = new Basket();
bruceBasket.addProduct("rice", 10);
bruceBasket.addProduct("grzyby mun", 50);
bruceBasket.addProduct("tofu", 20);
bruceBasket.showBasket();