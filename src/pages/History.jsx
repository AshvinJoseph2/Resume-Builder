import { Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { MdDelete } from "react-icons/md";

function History() {
  return (
    <div>
      <h1 className='text-center my-5'>Downloaded Resume History</h1>
      <Link to={'/form'} className='float-end mx-5' style={{ marginTop: '-80px' }}>Back</Link>
      <Stack direction={'row'} sx={{ flexWrap: 'wrap', gap: '10px', m:5 }}>
        <div className='shadow p-5 text-center rounded'>
          <div className='d-flex align-items-center mb-2'>
            <h5>Review At : date&time</h5>
            <button className='btn text-danger fs-4'><MdDelete/></button>
          </div>
       <img width={'250px'} height={'250px'} className='border' src="https://www.resumebuilder.com/wp-content/themes/resumebuilder/getPdfThumbnail.php?pdf=https://www.resumebuilder.com/wp-content/uploads/2020/03/College-Student_Entry-level.pdf" alt="resume" />
        </div>
      </Stack>
    </div>
  )
}

export default History