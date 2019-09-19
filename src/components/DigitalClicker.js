import React from 'react'


export default class DigitalClicker extends React.Component{

    state = {
        timesClicked: 0
    }

    clickIncrement = (e) => {
        this.setState(prevState => ({
            timesClicked: prevState.timesClicked +1
        })
    )
    }

    render(){
        return(
            <div>
                <button onClick = {this.clickIncrement}>{this.state.timesClicked}</button>
            </div>
        )
    
        }
}