import React, { useState } from 'react'
import { ChromePicker } from 'react-color';
function Changer() {
    const [picker, setPicker] = useState(null)
    const [color, setColor] = useState("#fffff")

    const handleChangeColor = (newColor = { hex: "#331c1c" }) => {
        setColor(newColor.hex)
        console.log(newColor)
        document.body.style.backgroundColor = newColor.hex
    }

    return (
  

            <div>
                <button onClick={() => {
                    setPicker(!picker)
                }}
                >
                    {picker ? 'Hide Color Picker' : 'Show Color Picker'}
                </button>
               <div> {picker && (<div style={{ marginTop: '10px' }}>
                    <ChromePicker color={color} onChange={handleChangeColor} />
                </div>)}</div>


            </div>


    
    )
}


export default Changer