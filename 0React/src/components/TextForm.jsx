import React, { useState } from 'react'

function TextForm() {
    const [text, setText] = useState("");

    const handleOnChange = (e) => {
        setText(e.target.value)
    }

    const ConvertUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    
    const ConvertLowerCase = () => { 
        let newText = text.toLowerCase()
        setText(newText)
    }
    // const ConvertTocapitilize = () => { 
    //     let newText = text.toLocaleUpperCase();
    //     setText(newText)
    // }
    return (
        <>
            <div className="container my-5">
                <h1>Convert Your Data into UpperCase</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myText" rows="8"></textarea>
                </div>
                <div className="container">

                    <button className="btn btn-outline-danger mx-1" onClick={ConvertUpperCase}>ConvertUpperCase</button>
                    <button className="btn btn-outline-danger mx-1" onClick={ConvertLowerCase}>ConvertLowerCase</button>
                    {/* <button className="btn btn-outline-danger mx-1" onClick={ConvertTocapitilize}>Textcapitilize</button> */}
                </div>
            </div>
            <div className="container my-3">
                <h4 className='my-1'>Countintg your words & Characters</h4>
                <p className='ms-5'>Total Words == {text.split(" ").length}</p> 
                <p className=' ms-5'>Total Characters == {text.length}</p>
                <h4 className='my-1'>Preview</h4>
                <p>{text}</p>
            </div>
           
        </>
    )
}

export default TextForm