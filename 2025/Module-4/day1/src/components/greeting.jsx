import { useState } from 'react'



export default function Greeting({ name }) {

    const [isHello, setIsHello] = useState(true)
    
    const buttonStyling = {
        borderRadius: "50px",
        backgroundColor: "green",
        height: "500px",
        width: "500px",
    }

    return (
        <>
            <div style={{borderRadius: "50px", backgroundColor: "green", height: "100px", width: "100px"}}>

            </div>
            {isHello ? `Hello ${name}` : `Goodbye ${name}`}
            <button className='btn' onClick={() => setIsHello(!isHello)}>Update Hello</button>
        </>
    )
}