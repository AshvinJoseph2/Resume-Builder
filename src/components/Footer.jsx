import React from 'react'
import { MdAttachEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div style={{height:'400px',backgroundColor:'purple'}} className='justify-content-center align-items-center text-light d-flex flex-column p-5 '>
        <h1 className='mb-5'>Contact Us</h1>
        <h5><MdAttachEmail className='me-1' />resumebuilder@gmail.com</h5>
        <h5><FaPhoneAlt className='me-1' />9074883788</h5>
        <h4 className='mt-3'>Connect With Us</h4>
        <div className='d-flex justify-content-center mt-2 fs-4'>
          <FaWhatsapp className='me-1' />
          <MdFacebook className='me-1' />
          <FaInstagram className='me-1' />
        </div>
        <p className='mt-5'>Designed & build with ❤️ using React</p>
    </div>
  )
}

export default Footer