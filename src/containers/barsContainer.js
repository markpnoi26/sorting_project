import React from 'react'
import Bar from '../components/bar'



export default class BarsContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            values: [3,3.5,1,1.5, 2,2.5, 5,5.5, 10,10.5, 4,4.5, 9,9.5,7,7.5, 6,6.5, 8,8.5],
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

        const jumble = (array) => {

            let currentIndex = array.length, temporaryValue, randomIndex;
            
            // While there remain elements to shuffle...
            while (0 !== currentIndex) {
            
                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
            
                // And swap it with the current element.
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }
            
            return array;

        }

        this.setState({
            values: jumble(this.state.values.slice())
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