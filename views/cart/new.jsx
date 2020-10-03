const React = require("react");
const Layout = require("../layout.jsx");

class New extends React.Component {
  render() {
    return (
      <Layout title="Shopping Cart">
        <div className="add-tea-page">
          <div className="add-tea-box">
              <div className = "link">
                <a href ="/">
                  <img className = "go-back-icon" src="https://www.flaticon.com/svg/static/icons/svg/892/892639.svg"/>
                  <span className = "link-name">Back to Teas</span>
                </a>
              </div>
              <form className = "add-tea-form" action="/cart" method = "POST">
                  <div className = "form-details"><label>Tea: </label><input type="text" name = "tea" placeholder = "ex: peach bellini"/></div><br/>
                  <div className = "form-details"><label>Qty: </label><input type="number" name = "qty" placeholder = "ex: 4"/></div><br/>
                  <div className = "form-details" className = "button-box"><input className = "product-button" type="submit" name = "" value = "Add To Cart"/></div>
              </form>
            </div>
            <div className = "bottom-img-box">
            <img className = "bottom-img" src="https://lawsofpositivelifestyle.com/wp-content/uploads/2016/09/loose-leaf-premium-teas.jpg"/>
          </div>
          </div>
      </Layout>
    );
  }
}

module.exports = New;
