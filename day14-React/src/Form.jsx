import React, { useState } from 'react'

const Form = () => {
    const [name, setName] = useState("");
    const [show, setShow] = useState(false);
    const handleChange = (e) => {
        setName(e.target.value);
    }

    const showCard = () => {
        setShow(true);
    }
    return (
        <div>
            {!show ?
                (<div>
                    <input placeholder='Enter your name...' type="text" onChange={handleChange} />
                    <button onClick={showCard}>Show card</button>
                </div>)
                :
                (
                    <div>Name : {name}</div>
                )
            }
        </div>
    )
}

export default Form