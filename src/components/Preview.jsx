import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
function Preview() {
  return (
    <>
    <Box component="section" className='my-5 text-center p-5'>
      <Paper elevation={3} className=' text-center p-5'>
      <h2>Name</h2>
      <h5>JobTitle</h5>
      <p><span>location</span> | <span>email</span> | <span>phone</span></p>
      <p>
        <a href="" target='-blank' className='me-1'>GITHUB</a>
        <a href="" target='-blank' className='me-1'>LINKEDIN</a>
        <a href="" target='-blank' className='me-1'>PORTFOLIO</a>
      </p>
     
      <Divider sx={{fontSize:'25px'}}>Summary</Divider>
      <p style={{textAlign:'justify'}}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto voluptatibus suscipit sed eos nam praesentium, architecto quae fugit, laborum veniam officia facere ipsam officiis asperiores veritatis molestiae in nihil doloremque!</p>
      <Divider sx={{fontSize:'25px'}}>Education</Divider>
      <h5>course</h5>
      <p><span>college</span> | <span>university</span> | <span>year</span></p>
      <Divider sx={{fontSize:'25px'}}>Work Experience</Divider>
      <h5>jobType</h5>
      <p><span>company</span> | <span>location</span> | <span>duration</span></p>
      <Divider sx={{fontSize:'25px'}}>Skills</Divider>
      <Stack direction={'row'} justifyContent={'space-evenly'} sx={{flexWrap:'wrap',gap:'10px',my:2}}>
        {/* duplicated */}
        <Button variant="contained">NODE</Button>
      </Stack>
      </Paper>
    </Box>
    </>
  )
}

export default Preview