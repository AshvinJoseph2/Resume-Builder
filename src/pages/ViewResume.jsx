import React from 'react'
import Preview from '../components/Preview'
import { FaBackward } from "react-icons/fa6";
import { FaFileDownload } from "react-icons/fa";
import { IoReload } from "react-icons/io5";
import { MdEditDocument } from 'react-icons/md';
import { Link } from 'react-router-dom';

function ViewResume() {
  return (
    <div className='continer'>
        <div className='row my-5'>
            <div className='col-md-2'></div>
            <div className='col-md-8'>
                <div className='d-flex justify-content-center align-items-center'>
                    <button className='btn text-danger fs-2 me-2'><FaFileDownload/></button>
                    <button className='btn text-warning fs-2 me-2'><MdEditDocument/></button>
                    <button className='btn text-success fs-2 me-2'><IoReload/></button>
                    <Link to={'/resume'} className="btn text-primary fs-2 me-2"><FaBackward/></Link>
                </div>
                <Preview/>
            </div>
            <div className="col-md-2"></div>
        </div>
    </div>
  )
}

export default ViewResume