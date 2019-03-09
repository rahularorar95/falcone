import React, { Component } from "react"
import Planet from "../Planet/Planet"

export class PlanetList extends Component {
    state = [
        {
            name: "Donlon",
            distance: 100
        },
        {
            name: "Enchai",
            distance: 200
        }
    ]
    render() {
        return (
            <div className='ui inverted segment'>
                <div className='ui inverted large horizontal divided list'>
                    {this.state.map(planet => (
                        <Planet name={planet.name} distance={planet.distance} />
                    ))}
                </div>
            </div>
        )
    }
}

export default PlanetList
