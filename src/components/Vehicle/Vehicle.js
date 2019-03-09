import React, { Component } from "react"

export class Vehicle extends Component {
    render() {
        return (
            <>
                <div class='item'>
                    <img
                        className='ui tiny avatar image'
                        src='https://semantic-ui.com//images/avatar2/large/matthew.png'
                        alt=''
                    />
                    <div className='description'>
                        <div className='header'>{this.props.name} X {this.props.units}</div>
                        <div>Max Distance = {this.props.distance} megamiles</div>
                        <div>Speed = {this.props.speed} megamiles/hour</div>
                    </div>
                </div>
            </>
        )
    }
}

export default Vehicle
