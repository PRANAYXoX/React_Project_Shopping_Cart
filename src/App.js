import React from "react";
import Cart from "./cart";
import Nav from "./navbar";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      product: [
        {
          title: "NIKE X-COM RNR",
          price: 8999,
          qty: 1,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUmHYEmthan-WBpPyAPlvQV1kGDpmoSd9sZA&usqp=CAU",
          key: 1,
        },
        {
          title: "REEBOOK X-COM RNR",
          price: 6999,
          qty: 1,
          img: "https://demo.sirv.com/demo/DSC001.jpg/adidas-superstar-white-shoe.jpg?w=300&scale.option=fill&h=0&cw=100.0000%25&ch=100.0000%25",
          key: 2,
        },
        {
          title: "ADIDAS X-COM RNR",
          price: 12999,
          qty: 1,
          img: "https://cdn.shopify.com/s/files/1/0020/5953/4449/products/bla-tj-1926a-3-b-brn-1_large.jpg?v=1645212608",
          key: 3,
        },
      ],
    };
  }
  increaseQty = (item) => {
    const { product } = this.state;
    const index = product.indexOf(item);
    product[index].qty += 1;
    //const qty = product[index].qty + 1;
    this.setState({
      product,
    });
  };
  decreaseQty = (item) => {
    const { product } = this.state;
    const index = product.indexOf(item);
    if (product[index].qty > 1) {
      product[index].qty -= 1;
      //const qty = product[index].qty + 1;
      this.setState({
        product,
      });
    }
  };
  deleteItem = (id) => {
    console.log(id);
    const { product } = this.state;
    let newList = product.filter((item) => {
      if (item.key != id) return item;
    });
    console.log(newList);
    this.setState({
      product: newList,
    });
  };
  productCount = () => {
    const { product } = this.state;
    let count = 0;
    product.map((item) => {
      count += item.qty;
    });
    console.log(count);
    return count;
  };
  render() {
    const { product } = this.state;
    return (
      <div className="App">
        <Nav count={this.productCount()} />
        <Cart
          product={product}
          key={product.key}
          increaseQty={this.increaseQty}
          decreaseQty={this.decreaseQty}
          deleteItem={this.deleteItem}
        />
      </div>
    );
  }
}

export default App;
