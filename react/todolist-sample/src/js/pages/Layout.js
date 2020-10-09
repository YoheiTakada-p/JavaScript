import React from "react"
import { Link, withRouter } from "react-router-dom"

import Nav from "../components/Nav"
import Footer from "../components/Footer"

class Layout extends React.Component {
    render() {
        const containerStayle = {
            marginTop: "30px",
            padding: "15px"
        }

        return(
            <div>
                <Nav />
                    <div style={containerStayle}>
                        {this.props.children}
                    </div>
                <Footer />
            </div>
        )
    }
}

export default withRouter(Layout)