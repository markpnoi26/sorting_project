import React from 'react'
import Bar from '../components/bar'



export default class BarsContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            values: [3,1, 2, 5, 10, 4, 9,7, 6, 8],
            maxValueInValues: 10,
            maxHeight: 600,
            maxWidth: 800
        }
    }

    handleSort = () => {
        this.setState({
            values: this.state.values.slice().sort((a,b) => a-b)
        })
    }

    handleJumble = () => {
        this.setState({
            values: [3,1, 2, 5, 10, 4, 9,7, 6, 8]
        })
    }

    render() {
        const barsContainerStyle = {
            display: "flex",
            width: `${this.state.maxWidth}px`,
            height: `${this.state.maxHeight}px`
        }
        return(
            <div>
                <div style={barsContainerStyle}>   
                {this.state.values.map((value, valueIdx) => {
                    return <Bar key={valueIdx} value={value} />
                })}
 
                </div>
                <button onClick={this.handleSort}> Sort Me </button>
                <button onClick={this.handleJumble}> Jumble Me </button>
            </div>
        )
    } 
}