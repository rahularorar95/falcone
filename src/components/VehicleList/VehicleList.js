import React, { Component } from "react"
import Vehicle from "../Vehicle/Vehicle"
import "./VehicleList.css"

export class VehicleList extends Component {
    state = [
        {
            name: "Space Pod",
            total_no: 2,
            max_distance: 200,
            speed: 2
        },
        {
            name: "Space rocket",
            total_no: 1,
            max_distance: 300,
            speed: 4
        }
    ]
    render() {
        return (
            <div className='ui inverted segment vehicle-list'>
                <div class='ui inverted large horizontal divided list'>
                    {this.state.map(vehicle => (
                        <Vehicle
                            name={vehicle.name}
                            units={vehicle.total_no}
                            distance={vehicle.max_distance}
                            speed={vehicle.speed}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default VehicleList
