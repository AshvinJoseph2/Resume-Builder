import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
function Preview({resumeDetails}) {
  return (
    <>
    <Box component="section" className='my-5 text-center p-5'>
      <Paper elevation={3} className=' text-center p-5'>
      <h2>{resumeDetails?.fullName}</h2>
      <h5>{resumeDetails?.jobTitle}</h5>
      <p><span>{resumeDetails?.locaton}</span> | <span>{resumeDetails?.email}</span> | <span>{resumeDetails?.phone}</span></p>
      <p>
        <a href={resumeDetails?.github} target='-blank' className='me-1'>{resumeDetails?.github}</a>
        <a href={resumeDetails?.linkedin} target='-blank' className='me-1'>{resumeDetails?.linkedin}</a>
        <a href={resumeDetails?.portfolio} target='-blank' className='me-1'>{resumeDetails?.portfolio}</a>
      </p>
     
      <Divider sx={{fontSize:'25px'}}>Summary</Divider>
      <p style={{textAlign:'justify'}}>{resumeDetails?.summary}</p>
      <Divider sx={{fontSize:'25px'}}>Education</Divider>
      <h5>{resumeDetails?.course}</h5>
      <p><span>{resumeDetails?.college}</span> | <span>{resumeDetails?.university}</span> | <span>{resumeDetails?.passoutYear}</span></p>
      <Divider sx={{fontSize:'25px'}}>Work Experience</Divider>
      <h5>{resumeDetails?.jobType}</h5>
      <p><span>{resumeDetails?.company}</span> | <span>{resumeDetails?.cLocation}</span> | <span>{resumeDetails?.duration}</span></p>
      <Divider sx={{fontSize:'25px'}}>Skills</Divider>
      <Stack direction={'row'} justifyContent={'space-evenly'} sx={{flexWrap:'wrap',gap:'10px',my:2}}>
        {/* duplicated */}
        {
          resumeDetails?.skills?.map(item=>(
            <Button variant="contained">{item}</Button>
           ))
        }
      </Stack>
      </Paper>
    </Box>
    </>
  )
}

export default Preview