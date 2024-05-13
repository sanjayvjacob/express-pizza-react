import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
      <p>&copy; 2024 expresspizza.com</p>
      <div className='socialMedia'>
<InstagramIcon/> <XIcon/> <FacebookIcon/> <LinkedInIcon/>
      </div>
    </div>
  )
}

export default Footer