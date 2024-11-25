class Item {
    qty = 0;
    constructor(name, price, qty){
        this.name = name;
        this.price = price;
        if(qty){
            this.qty = qty;
        }
    }

    sayHello() {
        console.log("Hello from Item");
    }
}

const item = new Item("class Item", 9.74);

item.sayHello();
