/** 
*   Stand: 08.01.2026
*   Controller and view "Create", data from JSON-Server 
*/

// import React from 'react'  // useState etc.
import { Container, Typography, TextField} from '@mui/material'  //
import AppBarStd from '../components/AppBarStd.jsx'
import Footer from '../components/Footer.jsx'

//
export default function Admin({ theme }) {

  // 
  return (
    <>
      <header>
        <AppBarStd />
      </header>

      <main>
        <Container maxWidth="xl" sx={{ mt: 10 }}>
          <div className='row'>

          </div>
        </Container>
      </main>

      <Footer theme={theme} />
    </>
  )
}  // Admin()
