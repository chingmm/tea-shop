const React = require('react')
const Layout = require("../layout.jsx");

class Show extends React.Component {
    render() {
        const {teas} = this.props
        return (
            <Layout title="Tea Details">
                <div className = "details-box">
                    <div className = "img-box"><img className = "tea-img" src={teas.img}/></div>
                    <div className = "description-box">
                        <h2 className = "details-title">{teas.name}</h2>
                        <h4>{teas.description}</h4> 
                        <h3>${teas.price}</h3>
                        <h3>{teas.size}</h3>
                        <a href="/cart/new"><button type="button" className="btn btn-dark" className="cart-button">ADD TO CART</button></a>
                    </div>
                </div>
            </Layout>
        )
    }
}

module.exports = Show