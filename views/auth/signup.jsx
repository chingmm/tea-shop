const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    return (
      <Layout title="SIGNUP">
        <form action="/auth/signup" method="post">
          <input type="text" name="username" placeholder="username" />
          <input type="text" name="password" placeholder="password" />
          <input className = "signup-button" type="submit" value="signup" />
        </form>
        <div className = "bottom-img-box">
          <img className = "bottom-img" src="https://lawsofpositivelifestyle.com/wp-content/uploads/2016/09/loose-leaf-premium-teas.jpg"/>
        </div>
      </Layout>
    );
  }
}

module.exports = Index;
