import React, { Component } from "react"
import './VehicleList.css'

export class VehicleList extends Component {
    render() {
        return (
            <div className='ui inverted segment vehicle-list'>
                    <div class='ui inverted large horizontal divided list'>
                        <div class='item'>
                            <img
                                className='ui tiny avatar image'
                                src='https://semantic-ui.com//images/avatar2/large/matthew.png'
                                alt=''
                            />
                            <div className="description">
                                <div className="header">Planet 1</div>
                                <div>
                                Distance - 100 Megamiles
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default VehicleList
