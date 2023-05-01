import React, { useState } from 'react'
export default function TextForm(props) {

const[mystyle,setMyStyle]=useState({
    color:'black',
    backgroundColor:'white'
})

const[btnState,setBtnState]=useState("Enable Dark Mode")

    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);
    }
    const handleUpClick = () => {
        // console.log("Uppercase Clicked !");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = (event) => {
        let newText2 = text.toLowerCase();
        setText(newText2);
    }
    const handleClrClick = () => {
        let newText3 = "";
        setText(newText3);
    }
    const handleDarkClick=()=>{
        if(mystyle.color==='white')
        {
            setMyStyle({
                color:'black',
                backgroundColor:'white',
                border:"2px solid black"
            })
            setBtnState("Enable Dark Mode")
        }
       

else
{
    setMyStyle(
     {   color:'white',
        backgroundColor:'black'
    })
    setBtnState("Enable Light Mode")

}
    }
    // const handleLightClick=()=>{
    //     let newStyle1={
    //         color:"black",
    //         backgroundColor:"white"
    //     }
    //     setMyStyle(newStyle1);
    // }
    const [text, setText] = useState('Enter text here');
    return (
        <>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" style={mystyle} value={text} onChange={handleOnChange} id="mybox" rows="6"></textarea>
            </div>
            <button className="btn btn-primary mx-2" style={mystyle} onClick=
                {handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-6" style={mystyle}  onClick={handleLowClick}>Convert to Lower Case</button>
            <button className="btn btn-primary mx-2" style={mystyle}  onClick={handleClrClick}>Clear text</button>
            <button className="btn btn-primary mx-2" onClick={handleDarkClick} style={mystyle}>{btnState}</button>
            {/* <button className="btn btn-primary my-2" style={mystyle} onClick={handleLightClick}>Enable Light Mode </button> */}
            <div className="container my-1" style={mystyle} >
                <h1>Text Summary</h1>
                <p>{text.length} Characters and {text.split(" ").length-1} Words</p>
            </div>
            <div className="container my-6" style={mystyle} >
                <h1>Time required : </h1>
                <p> You will take {text.length * 0.008} Minutes , that is {text.split(" ").length
                    * 0.008 * 60} Seconds to read the above text</p>
            </div>
            <div className="container" style={mystyle} >
                <h1>Number of sentences : </h1>
                <p>{text.split(".").length - 1} Sentences </p>
            </div>

        </>

    )
}   
