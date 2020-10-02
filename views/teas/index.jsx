const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    const {teas} = this.props
    return (
      <Layout title="Tea Selection">
        <div className="top-img-box">
          <img className="top-img" src="http://pinstor.us/wp-content/uploads/2017/08/ice-tea-splash.jpg"/>
        </div>
        <h1 className="tea-title">SHOP TEA VARIETIES</h1>
        <div className = "tea-gallery">
            {teas.map((tea, id) => {
                return <div className = "tea-box">
                    <a key={tea._id} href={`/${tea.id}`}>
                      <img className = "gallery-img" src={tea.img}/>
                    </a>
                    <h3 className="tea-name">{tea.name}</h3>
                </div>
            })}
        </div>
      </Layout>
    );
  }
}

module.exports = Index;
