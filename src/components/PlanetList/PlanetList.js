import React, { Component } from "react"
import Planet from "../Planet/Planet"

export class PlanetList extends Component {
    render() {
        return (
            <div className='ui inverted segment'>
                <div className='ui inverted large horizontal divided list'>
                    {this.props.planets.map(planet => (
                        <Planet
                            id={planet.id}
                            name={planet.name}
                            distance={planet.distance}
                            empty={planet.empty}
                            onDropPlanet={this.props.onDropPlanet}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default PlanetList
