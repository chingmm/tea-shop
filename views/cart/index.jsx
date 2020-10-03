const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    const {cart} = this.props
    return (
      <Layout title="Shopping Cart">
        <div className = "shopping-cart-box">
          <h1 className = "cart-title">SHOPPING CART</h1>
          <div className = "cart-list">
              {cart.map((cart, id) => {
                  return <div key={cart._id} className = "cart-item">
                      <div className="cart-tea"><p>{cart.tea} (4oz)</p></div>
                      <div className="cart-qty"><p>qty: {cart.qty}</p></div>
                      <div className="cart-remove"><form action={`/cart/${cart._id}?_method=DELETE`} method="POST">
                          <input className = "delete-button" type="submit" value="REMOVE"/>
                      </form></div>
                      <div className="cart-edit"><form action={`/cart/edit/${cart._id}`} method="GET">
                          <input className = "edit-button" type="submit" value="EDIT QTY"/>
                      </form></div>
                    </div>
              })}
          </div>
          <div className = "bottom-img-box">
            <img className = "bottom-img" src="https://lawsofpositivelifestyle.com/wp-content/uploads/2016/09/loose-leaf-premium-teas.jpg"/>
          </div>
        </div>
      </Layout>
    );
  }
}

module.exports = Index;
