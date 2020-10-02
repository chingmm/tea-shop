const React = require("react");

class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous"></link>
          <link rel="stylesheet" href="/css/style.css"/>
          <script src="/js/app.js"></script>
        </head>
        <body>
          <div className="container-fluid">
          <header>
            <div className="row">
              <div className="col-sm-4">
                <nav><a href="/"><h1 className="store-name">M's Tea</h1></a></nav>
              </div>
              <div className="col-sm-8">
                <nav className="navbar-right sticky-top navbar-dark bg-dark">
              <span>
                <a className="navbar-brand" href="/cart">CART</a>
              </span>
              <span>
                <a className="navbar-brand" href="/auth/signup">SIGN UP</a>
              </span>
              <span>
                <a className="navbar-brand" href="/auth/login">LOG IN</a>
              </span>
              <span>
                <a className="navbar-brand" href="/auth/logout">LOG OUT</a>
              </span>
            </nav>
            </div>
            </div>
          </header>
          <main>{this.props.children}</main>
          <footer>
            {/* <h1>This is my footer</h1> */}
          </footer>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Layout;
