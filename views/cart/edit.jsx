const React = require("react");
const Layout = require("../layout.jsx");

class Edit extends React.Component {
  render() {
    const {cart} = this.props
    return (
      <Layout title="Shopping Cart">
        <form action={`/cart/edit/${cart._id}?_method=PUT`} method="POST">
        {"Tea: "}
        <input type="text" name="tea" defaultValue={cart.tea}/>
        <br/>
        {"Qty: "}
        <input type="number" name="qty" defaultValue={cart.qty}/>
        <br/>
        <input type="submit" value="UPDATE" />
        </form>
      </Layout>
    );
  }
}

module.exports = Edit;
