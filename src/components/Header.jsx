import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
    const aboutUs="At Resume Builder, we believe creating a professional resume should be simple, fast, and stress-free. Our platform empowers job seekers with modern templates, smart suggestions, and real-time editing tools to craft resumes that stand out. Whether you’re a student, a professional, or switching careers, we’re here to help you showcase your skills and land your dream job with confidence."
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'purple'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           <img width={'40px'} height={'40px'} src="https://icon-library.com/images/resume-icon/resume-icon-16.jpg" alt="" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={'/'} className='text-light text-decoration-none'>Resume Builder</Link>
          </Typography>
         <Tooltip title={aboutUs}><Button color="inherit">ABOUT US</Button></Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
)
}

export default Header