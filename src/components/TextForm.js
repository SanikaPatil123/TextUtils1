import React, { useState } from 'react'

export default function TextForm(props) {

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("converted to uppercase","success");
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("converted to lowercase","success");
  }

  const handleClearClick = () => {
    let newText = '';
    setText(newText)
     props.showAlert("Text Cleared","success");
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
     props.showAlert("Text copy on the clipboard","success");
  }

  const handleExtraspaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
     props.showAlert("Extra space removed","success");
  }

  const [text, setText] = useState('');

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === 'dark' ? 'white' : 'black' }}
      >

        <h3>{props.heading}</h3>

        <div className="mb-3">

          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === 'dark' ? '#343a40' : 'white',
              color: props.mode === 'dark' ? 'white' : 'black'
            }}
            id="myBox"
            rows="8"
          ></textarea>

        </div>

        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Upper Case
        </button>

        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to Lower Case
        </button>

        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>

        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy Text
        </button>

        <button className="btn btn-primary mx-1" onClick={handleExtraspaces}>
          Remove Extra Spaces
        </button>

      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === 'dark' ? 'white' : 'black' }}
      >

        <h3>Your Text Summary</h3>

        <p>
          {text.split(/\s+/).filter((element) => element.length !== 0).length} words and {text.length} characters
        </p>

        <p>
          {0.008 * text.split(/\s+/).filter((element) => element.length !== 0).length} Minutes read
        </p>

        <h4>Preview</h4>

        <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>

      </div>
    </>
  )
}