import React, { Component } from "react"
import history from "../../history"
export class Result extends Component {
    navigate = () => {
        this.props.resetState()
        history.push("/")
    }

    render() {
        let result = null
        if (this.props.resultStatus === null) {
            result = <div>No Result Found. Start a new Misson.</div>
        } else if (this.props.resultStatus.status === "false") {
            result = <div>Misson Failed ! Don't Loose Hope. Try Again.</div>
        } else {
            result = (
                <div>
                    Misson Succes! Congratulations on Finding Falcone. King Shan
                    is mighty Pleased.
                    <br />
                    Time Taken : {this.props.timeTaken}
                    <br />
                    Planet Found: {this.props.resultStatus.planet_name}
                </div>
            )
        }
        return (
            <div className='ui container'>
                {result}
                <button
                    onClick={this.navigate}
                    className='ui massive black button'
                >
                    Start Again
                </button>
            </div>
        )
    }
}

export default Result
