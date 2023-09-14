import React, { useState } from 'react'
export default function TextForm(props) {

    // const [mystyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })

    // const [btnState, setBtnState] = useState("Enable Dark Mode")

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
    // const handleDarkClick = () => {
    //     if (mystyle.color === 'white') {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white',
    //             border: "2px solid black"
    //         })
    //         setBtnState("Enable Light Mode")
    //     }


    //     else {
    //         setMyStyle(
    //             {
    //                 color: 'white',
    //                 backgroundColor: 'black'
    //             })
    //         setBtnState("Enable Dark Mode")

    //     }
    // }
    // const handleLightClick=()=>{
    //     let newStyle1={
    //         color:"black",
    //         backgroundColor:"white"
    //     }
    //     setMyStyle(newStyle1);
    // }
    // const handleLightClick = () => {
    //     if (mystyle.color ===)
    // }
    const [text, setText] = useState('Enter text here');
    return (
        <>
        <div className="container"style={{color:props.mode==='dark'?'white':'black'}}>
        {/* <div className={`container-${props.mode} bg-${props.mode}`}> */}

            <h1>{props.heading}</h1>

            <div className="mb-3" >
                <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} id="mybox" rows="6"></textarea>
            </div>
            
            <button type="button" className="btn  btn-outline-primary"   onClick=
                {handleUpClick}>Convert to UpperCase</button>
                

            <button type="button" class="btn mx-3 btn-outline-success "  onClick={handleLowClick}>Convert to Lower Case</button>
            <button className="btn  mx-2 btn-outline-danger" onClick={handleClrClick}>Clear text</button>
            {/* <button className="btn btn-primary mx-2 my-2" onClick={handleDarkClick} style={mystyle}>{btnState}</button> */}
            {/* <button className="btn btn-primary my-2" style={mystyle} onClick={handleLightClick}>{btnState} </button> */}
            <div className="container my-1"   >
                <h1 align="center">Text Summary</h1>
                <h3>Count : </h3>
                <p>{text.length} Characters and {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Words</p>
            </div>
            <div className="container my-6"   >
                <h3>Time required : </h3>
                <p> You will take {text.length * 0.008} Minutes , {text.split(" ").length
                    * 0.008 * 60} Seconds to read the above text</p>
            </div>
            
            <div className="container"  >
                <h3>Number of sentences : </h3>
                <p>{text.split(".").length - 1} Sentences </p>
                </div> 
                </div>
        </>

    )
}   
