import React from 'react'

export default class Bar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        const barStyle = {
            height: `${this.props.value*55}px`,
            width: "100px",
            backgroundColor: "seagreen",
            alignSelf: "flex-end",
            margin: "2px"
        }

        return (
            <div style={barStyle}>
                {this.props.value}
            </div>
        )
    }
}