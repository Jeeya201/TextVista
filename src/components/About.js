import React from 'react'
// import PropTypes from 'prop-types'

export default function About(props) {
  return (
    <div>
        <h1  align="center" className={`"aboutus" text-${props.mode==='dark'?'light':'dark'}`}>{props.heading}</h1>
        
  {/* <div className={`"accordion-item" p-3 text-${props.mode==='dark'?'black':'black'} bg-${props.mode==='dark'?'light':'light'}`} > */}

  <div className="accordion-item p-3" style={{color:props.mode==='dark'?'black':'black', backgroundColor:props.mode==='dark'?'grey':'white' }}>
    {/* <h2 className="accordion-header"> */}
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" style={{color:'black',backgroundColor:props.mode==='dark'?'grey':'white'}}>
        <strong> Analyze your text</strong>
      </button>
    {/* </h2> */}
    <div id="collapseOne" className="accordion-collapse collapse " data-bs-parent="#accordionExample">
      <div className="accordion-body">
"Text Vista is a versatile app designed to streamline text analysis with speed and efficiency. With Text Vista, you can easily perform essential tasks such as word count, text case conversion (both uppercase and lowercase), character count, and even estimate the time required to read a piece of text. Additionally, Text Vista provides valuable insights into the text's structure, including the number of sentences and more. Whether you're a writer, student, or professional, Text Vista is your go-to tool for comprehensive text analysis."      </div>
    </div>
  </div>
  {/* <div className={`"accordion-item" p-3 text-${props.mode==='dark'?'black':'black'} bg-${props.mode==='dark'?'primary':'light'}`}> */}

  <div className="accordion-item p-3" style={{color:props.mode==='dark'?'black':'black', backgroundColor:props.mode==='dark'?'grey':'white' }} >
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
<strong>Free to use</strong>      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
"Text Vista is completely free to use, making it an accessible and cost-effective utility for all users. Enjoy its powerful text analysis features without any financial constraints."      </div>
    </div>
  </div>
  {/* <div className={`"accordion-item" p-3 text-${props.mode==='dark'?'black':'black'} bg-${props.mode==='dark'?'white':'white'}`}> */}
  <div className="accordion-item p-3" style={{color:props.mode==='dark'?'black':'black', backgroundColor:props.mode==='dark'?'grey':'white' }}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" border="2x solid red">
<strong> Browser Compatible </strong>     </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
"This versatile word counter seamlessly operates across all major web browsers, including Internet Explorer, Firefox, and Chrome, ensuring compatibility for users across platforms. Whether you need to count characters in your Facebook posts, blog entries, books, Excel documents, or even PDF files, Text Vista's word counter is your reliable solution. It offers universal convenience for a wide range of text analysis needs, regardless of the platform or document type."      </div>
  </div>
</div>
</div>
    
  )
}
