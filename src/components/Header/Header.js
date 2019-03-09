import React from "react"
import "./Header.css"

export default () => {
    return (
        <div className='ui inverted segment'>
            <div className='ui inverted menu'>
                <h1 className="brand">Finding Falcon</h1>
                <div className="ui inverted menu right">
                <a className='item'>Reset</a>
                <a className='item'>GeekTrust</a>
                </div>
            </div>
        </div>
    )
}
