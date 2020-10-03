const React = require('react')
const Layout = require("../layout.jsx");

class Show extends React.Component {
    render() {
        return (
            <Layout title="Tea Details">
                <div className = "order-confirmation-box">
                    <h2>Thanks for your order!</h2>
                    <h3><a href="/">Back to Tea Selection</a></h3>
                </div>
                <div className = "bottom-img-box">
                    <img className = "bottom-img" src="https://lawsofpositivelifestyle.com/wp-content/uploads/2016/09/loose-leaf-premium-teas.jpg"/>
                </div>
            </Layout>
        )
    }
}

module.exports = Show