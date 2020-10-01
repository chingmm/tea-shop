const React = require("react");

class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="/css/style.css"/>
          <script src="/js/app.js"></script>
        </head>
        <body>
          <header>
            <h1>M's Tea</h1>
            <nav>
              <span>
                <a href="/auth/signup">|SIGN UP|</a>
              </span>
              <span>
                <a href="/auth/login">|LOG IN|</a>
              </span>
              <span>
                <a href="/auth/logout">|LOG OUT|</a>
              </span>
            </nav>
          </header>
          <main>{this.props.children}</main>
          <footer>
            {/* <h1>This is my footer</h1> */}
          </footer>
        </body>
      </html>
    );
  }
}

module.exports = Layout;