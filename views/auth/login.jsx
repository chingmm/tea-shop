const React = require("react");
const Layout = require("../layout.jsx");

class Login extends React.Component {
  render() {
    return (
      <Layout title="LOGIN">
        <form action="/auth/login" method="post">
          <input className="user-input" type="text" name="username" placeholder="username"/>
          <input className="password-input" type="text" name="password" placeholder="password"/>
          <input className = "login-button" type="submit" value="login"/>
        </form>
        <div className = "bottom-img-box">
          <img className = "bottom-img" src="https://lawsofpositivelifestyle.com/wp-content/uploads/2016/09/loose-leaf-premium-teas.jpg"/>
        </div>
      </Layout>
    );
  }
}

module.exports = Login;
