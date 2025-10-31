import React from 'react'
import { IoMdArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';


function Pgnf() {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column p-5'>
      <h4>404!</h4>
      <img className='w-25' src="https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif" alt="page not found" />
      <h3>Page Not Found</h3>
      <p>Sorry We could'nt find the page you're looking for.</p>
      <Link to={'/'} className='btn text-success fw-bolder'><IoMdArrowBack className='me-1'/>Back to Home</Link>
    </div>
  )
}

export default Pgnf