class Cart{
    constructor(quantity,id,price,title,image){
        this.quantity=quantity;
        this.id=id;
        // this.total = this.quantity * this.price;
        this.price=price;
        this.title=title;
        this.image=image
    }
   incrementquantity(){
        this.quantity++;
    }
    decrementquantity(){
        this.quantity--;
    }
}

export default Cart;

