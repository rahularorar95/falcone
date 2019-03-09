import React, { Component } from "react"
import "./Planet.css"
export class Planet extends Component {
    onDragStart(e, planet) {
        e.dataTransfer.setData("planet", JSON.stringify(planet))
    }
    onDragOver(e) {
        e.preventDefault()
    }

    onDrop(e) {
        this.props.onDropPlanet(e)
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
                                distance: this.props.distance
                            })
                        }
                        className='ui tiny avatar image'
                        src='https://semantic-ui.com//images/avatar2/large/matthew.png'
                        alt=''
                    />
                    <div className='description'>
                        <div className='header'>{this.props.name}</div>
                        <div>Distance - {this.props.distance} megamiles</div>
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

export default Planet
