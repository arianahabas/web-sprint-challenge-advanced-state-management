import React from 'react'

function SmurfCard(props) {

    const { name, age, height } = props.smurf

    return (
        <div>
            <h2> {name} </h2>
            <h2> {age} </h2>
            <h2> {height} </h2>
        </div>
    )
}

export default SmurfCard