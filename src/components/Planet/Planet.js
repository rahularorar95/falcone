import React, { Component } from "react"

export class Planet extends Component {
    render() {
        return (
            <>
                <div className='item'>
                    <img
                        className='ui tiny avatar image'
                        src='https://semantic-ui.com//images/avatar2/large/matthew.png'
                        alt=''
                    />
                    <div className='description'>
                        <div className='header'>{this.props.name}</div>
                        <div>Distance - {this.props.distance} megamiles</div>
                    </div>
                </div>
            </>
        )
    }
}

export default Planet
