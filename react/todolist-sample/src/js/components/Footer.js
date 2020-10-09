import React from "react"
import ReactDOM from "react-dom"

export default class Footer extends React.Component {
    render() {
        const footerStyle = {
            marginTop: "30px",
            padding: "15px"
        }

        return (
            <footer style={footerStyle}>
                <div>
                    <div>
                        <p>Copyright &copy; 2020 yohei</p>
                    </div>
                </div>
            </footer>
        )
    }
}