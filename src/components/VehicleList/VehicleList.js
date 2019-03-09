import React, { Component } from "react"
import Vehicle from "../Vehicle/Vehicle"
import "./VehicleList.css"

export class VehicleList extends Component {
    render() {
        return (
            <div className='ui inverted segment vehicle-list'>
                <div className='ui inverted large horizontal divided list'>
                    {this.props.vehicles.map(vehicle => (
                        <Vehicle
                            id={vehicle.id}
                            name={vehicle.name}
                            total_no={vehicle.total_no}
                            distance={vehicle.max_distance}
                            speed={vehicle.speed}
                            empty={vehicle.empty}
                            onDropVehicle={this.props.onDropVehicle}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default VehicleList
