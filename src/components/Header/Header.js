import React from "react"
import "./Header.css"

export default (props) => {
    return (
        <div className='ui inverted segment heading'>
            <div className='ui inverted menu'>
                <h1 className="brand">Finding Falcone !</h1>
                <div className="ui inverted menu right-menu">
                <a className='item' onClick ={()=>props.resetState()} >Reset</a>
                <a className='item' href="https://www.geektrust.in/" target="_blank">GeekTrust</a>
                </div>
            </div>
        </div>
    )
}
