import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addSmurf } from '../store/actions/smurfActions'

function Form(props) {

    const [smurf, setSmurf] = useState({
        name:'',
        age: '',
        height: ''
    })
    // console.log(props)
    const handleChange = (e) => {
        setSmurf({
            ...smurf,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        props.addSmurf(smurf)
        setSmurf({
            name:'',
            age: '',
            height: ''
        })
    }


    return (
        <form onSubmit={handleSubmit}>
            <input 
            name='name'
            type="text"
            onChange={handleChange}
            value ={smurf.name}
            placeholder='name'
            />
            <input 
            name='age'
            type="text"
            onChange={handleChange}
            value ={smurf.age}
            placeholder='age'
            />
            <input 
            name='height'
            type="text"
            onChange={handleChange}
            value ={smurf.height}
            placeholder='height'
            />
            <button type='submit'>Add Smurf</button>
        </form>
    )
}

export default connect(null, { addSmurf })(Form)