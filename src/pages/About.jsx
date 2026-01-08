/** 
*   Stand: 08.01.2026
*   Controller and view "Create", data from JSON-Server 
*/

// import React from 'react'  // useState etc.
import { Container, Typography, TextField, RadioGroup, Radio } from '@mui/material'  //
import AppBarStd from '../components/AppBarStd'
import Footer from '../components/Footer.jsx'

//
export default function About({ theme }) {

  // 
  return (
    <>
      <header>
        <AppBarStd />
      </header>

      <main>
        <Container maxWidth="xl" sx={{ mt: 10 }}>
          <Typography component="h4" variant="h4" gutterBottom="true">
            <div>
              About page
            </div>
          </Typography>
          <Typography component="h6" variant="h6" gutterBottom="true">
            <ul>
              <li>Uses Material UI components</li>
              <li>Uses Bootstrap CSS classes</li>
              <li>Uses ReactJS components</li>
            </ul>
          </Typography>

          <div className='row m-1'>
            <div className='col m-1 border border-1 rounded'>
              <Typography component="h6" variant="h6" gutterBottom="false">
                <ul>
                  <li>Material UI components</li>
                </ul>
              </Typography>
            </div>

            <div className='col m-1 border border-1 rounded'>
              Explanation
            </div>
          </div>  {/* row */}

          <div className='row m-1'>
            <div className='col m-1 border border-1 rounded'>
              <Typography component="h6" variant="h6" gutterBottom="false">
                <ul>
                  <li>Uses Bootstrap CSS classes</li>
                </ul>
              </Typography>
            </div>
            <div className='col m-1 border border-1 rounded'>
              <nav>
                <a href='https://www.getbootstrap.com'>https://www.getbootstrap.com</a>
              </nav>
            </div>
          </div>  {/* row */}
        </Container>
      </main>

      <Footer theme={theme} />
    </>
  )
}  // About()
