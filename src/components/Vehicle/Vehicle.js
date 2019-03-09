import React, { Component } from "react"
import "../Planet/Planet.css"
export class Vehicle extends Component {
    onDragStart(e, vehicle) {
        e.dataTransfer.setData("vehicle", JSON.stringify(vehicle))
    }
    onDragOver(e) {
        e.preventDefault()
    }

    onDrop(e) {
        this.props.onDropVehicle(e)
    }

    render() {
        let item = null
        if (this.props.empty) {
            item = (
                <>
                    <div
                        className='box icon'
                        id={this.props.id}
                        onDragOver={e => {
                            this.onDragOver(e)
                        }}
                        onDrop={e => {
                            this.onDrop(e)
                        }}
                    >
                        <i className='grey small icon plus' />
                    </div>
                </>
            )
        } else {
            item = (
                <>
                    <img
                        draggable
                        onDragStart={e =>
                            this.onDragStart(e, {
                                name: this.props.name,
                                total_no: 1,
                                distance: this.props.distance,
                                speed: this.props.speed
                            })
                        }
                        className='ui tiny avatar image'
                        src='https://semantic-ui.com//images/avatar2/large/matthew.png'
                        alt=''
                    />
                    <div className='description'>
                        <div className='header'>
                            {this.props.name} X {this.props.total_no}
                        </div>
                        <div>
                            Max Distance = {this.props.distance} megamiles
                        </div>
                        <div>Speed = {this.props.speed} megamiles/hour</div>
                    </div>
                </>
            )
        }
        return (
            <>
                <div className='item'>{item}</div>
            </>
        )
    }
}

export default Vehicle
