import React, { useState } from 'react';

export default function Textbar(props) {
    const [text, setText] = useState('Enter text here');

    const handleUpClick = () => {
        console.log("Uppercase was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText);
        
    };

    const handleLoClick = () => {
        console.log("Lowercase was clicked: " + text);
        let newText = text.toLowerCase();
        setText(newText);
        
    };

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    };

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea 
                        className="form-control" 
                        value={text} 
                        onChange={handleOnChange}  
                        style={{
                            backgroundColor: props.mode === 'light' ? 'white' : 'grey',
                            color: props.mode === 'dark' ? 'white' : 'black'
                        }}
                        id="mybox" 
                        rows="6"
                    ></textarea>
                </div>
                <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to Lowercase</button>
            </div>

            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").filter(word => word.length !== 0).length} words and {text.length} letters</p>
                <p>{(0.008 * text.split(" ").filter(word => word.length !== 0).length).toFixed(2)} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the textbox to preview"}</p>
            </div>
        </>
    );
}
