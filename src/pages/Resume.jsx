import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Resume() {
  return (
    <>
    <div className='my-5 text-center'>
    <h1>Create a job winning Resume in Minutes</h1>
    <div className='container my-5'>
      <div className='row justify-content-evenly'>
        <div className='col-md-4 rounded p-5 shadow text-center'>
          <FaFileAlt className='fs-1 text-primary mb-3' />
          <h4>Add Your Information</h4>
          <p>Add pre-written example to each section.</p>
          <h5>Step-1</h5>
        </div>
        <div className='col-md-4 p-5 shadow text-center'>
          <FaDownload className='fs-1 text-primary mb-3'/>
          <h4>Download Your Resume</h4>
          <p>Download and strat applying.</p>
          <h5>Step-2</h5>
        </div>
      </div>     
    </div>
     <Link to={'/form'} className='btn text-light p-3' style={{ backgroundColor: 'purple' }}>LETS START</Link>
    </div>
    </>
  )
}

export default Resume