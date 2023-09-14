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
        Text Utils gives you a way to analyze your tet quickly and efficiently. Be it word count , converting it to uppercase or lowercase , character count.
      </div>
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
        It is a free to use utility ! 
      </div>
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
        This word  counter works in anybrowser : internet explorer, firfox, chrome etc.It suits  to count characters in facebook, nblog,books,excel document , pdf document ,etc
      </div>
  </div>
</div>
</div>
    
  )
}
