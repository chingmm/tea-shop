const React = require('react')
const Layout = require("../layout.jsx");

class Show extends React.Component {
    render() {
        const {teas} = this.props
        return (
            <Layout title="Tea Details">
                <div className = "details-box">
                    <a href ="/teas"><h4 className = "link-name">Back to Teas</h4></a>
                    <h2>{teas.name}</h2>
                    <h2>{teas.description}</h2> 
                    <div className = "img-box"><img className = "tea-img" src={teas.img}/></div>
                    <h3>${teas.price}</h3>
                    <h3>{teas.size}</h3>
                    <button>ADD TO CART</button>
                </div>
                <h2>CUSTOMER REVIEWS</h2>
            </Layout>
        )
    }
}

module.exports = Show