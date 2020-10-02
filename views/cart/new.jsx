const React = require("react");
const Layout = require("../layout.jsx");

class New extends React.Component {
  render() {
    return (
      <Layout title="Shopping Cart">
            <a href ="/"><h4 className = "link-name">Back to Teas</h4></a>
            <form className = "details-box" action="/cart" method = "POST">
                <div className = "form-details"><label>Tea: </label><input type="text" name = "tea"/></div><br/>
                <div className = "form-details"><label>Qty: </label><input type="text" name = "qty"/></div><br/>
                <div className = "form-details" className = "button-box"><input className = "product-button" type="submit" name = "" value = "Add To Cart"/></div>
            </form>
      </Layout>
    );
  }
}

module.exports = New;
