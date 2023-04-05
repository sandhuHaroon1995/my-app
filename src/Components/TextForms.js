import {React,useState} from "react";


export const TextForms = (props) => {
    const handleUpClick=()=>{
        let myText=text.toUpperCase()
        console.log('Up case was clicked')
        setText(myText);
        props.showAlert('Converted to Upper Case','success');
    }
    const handleLoClick=()=>{
        let myText=text.toLowerCase()
        console.log('Lower case was clicked')
        setText(myText)
        props.showAlert('Converted to Lower Case','success');
    }
    const handleOnChange=(e)=>{
        setText(e.target.value)
    }
    const [text,setText]=useState('');
  return (
    <>
      <div className="container mb-6" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <label htmlFor="myBox" className="form-label">
            Enter in text Area
        </label>
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleOnChange}
          style={{background:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#042743'}}
        ></textarea>
        <button className="btn btn-primary my-3 mx-3" onClick={handleUpClick}>Convert to Upper Case</button>
        <button className="btn btn-primary my-3 mx-3" onClick={handleLoClick}>Convert to Lowerer Case</button>
      </div>
        <h1 style={{color:props.mode==='dark'?'white':'#042743'}}>{props.heading}</h1>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>Your text Summary</h1>
        <p>{text.split(" ").length} words & {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter your text inside the box above'}</p>
      </div>
    </> 
  );
};
