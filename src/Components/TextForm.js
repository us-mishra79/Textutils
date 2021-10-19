import React, {useState}from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("onClick was clicked");
        let newText  = text.toLocaleUpperCase()
        setText(newText);
    }
    const handleLoClick = () => {
        // console.log("onClick was clicked");
        let newText  = text.toLocaleLowerCase();
        setText(newText);
    }
    const handleCopy =() => {
        console.log('I\'m copy');
        let text = document.getElementById('myBox')
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied to Clipboard!", "success")
    }
    const handleOnChange =  (event) => {
        // console.log("Onchange is fired");
        setText(event.target.value)
    }

    const handleOnClear = () =>{
        let newText = "";
        setText(newText)
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+ /);
        setText(newText.join(' '))
    }
    const emptyText= () => {
        setText('')
    }
     const [text, setText] = useState("Enter your Text");
    return (
        <div>
            <div className="mb-3" style= {{ color: props.mode==='light' ? '#042743' : 'white'}}>
                <h1>{props.heading}</h1>
                <textarea
                 className="form-control" value ={text}
                 onClick={emptyText}
                onChange = {handleOnChange}
                style= {{backgroundColor: props.mode==='dark || primary || secondary || success || danger' ? '#13466e' : 'white',
                color: props.mode==='light' ? '#042743' : 'white'
                        }}
                id="myBox" rows="8"></textarea>
            </div>
            <button className={`btn btn-${props.mode ==="dark" ? "secondary" : "dark" } mx-2 my-2`} onClick = {handleUpClick}>Convert to Uppercase</button>
            <button className={`btn btn-${props.mode ==="dark" ? "secondary" : "dark" } mx-2 my-2`} onClick = {handleLoClick}>Convert to Uppercase</button>
            <button className={`btn btn-${props.mode ==="dark" ? "secondary" : "dark" } mx-2 my-2`} onClick = {handleOnClear}>Clear</button>
            <button className={`btn btn-${props.mode ==="dark" ? "secondary" : "dark" } mx-2 my-2`} onClick = {handleCopy}>Copy Text</button>
            <button className={`btn btn-${props.mode ==="dark" ? "secondary" : "dark" } mx-2 my-2`} onClick = {handleExtraSpaces}>Remove extra space</button>
        
            <div className="container my-3" style={{ color: props.mode==='light' ? '#042743' : 'white'}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(/\s+/).filter((element) => {return element.length !==0}).length} Words and {text.length} Characters</p>
                <p>{0.008*text.split(" ").filter((element) => {return element.length !==0}).length} minutes need to take the whole paragraph</p>
                <h3>Preview</h3>
                <p>{text.length> 0? text: "Enter Something to preview Here!"}</p>
            </div>
        </div>
    )
}
