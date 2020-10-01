const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    const {cart} = this.props
    return (
      <Layout title="Shopping Cart">
      <h1>SHOPPING CART</h1>
      <div>
          {cart.map((cart, id) => {
              return <div key={cart._id}>
                  <h3>{cart.tea}</h3>
                  <h3>{cart.qty}</h3>
                  <form action={`/cart/${cart._id}?_method=DELETE`} method="POST">
                      <input className = "delete-button" type="submit" value="REMOVE"/>
                  </form>
                  <form action={`/cart/edit/${cart._id}`} method="GET">
                      <input className = "delete-button" type="submit" value="EDIT QTY"/>
                  </form>
              </div>
          })}
      </div>
      </Layout>
    );
  }
}

module.exports = Index;
