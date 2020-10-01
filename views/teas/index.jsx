const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    const {teas} = this.props
    return (
      <Layout title="Tea Selection">
      <div className = "tea-gallery">
          {teas.map((tea, id) => {
              return <div className = "tea-box">
                  <h3>{tea.name}</h3>
                  <a key={tea._id} href={`/teas/${tea.id}`}>
                  <img className = "gallery-img" src={tea.img}/></a>
              </div>
          })}
      </div>
      </Layout>
    );
  }
}

module.exports = Index;
