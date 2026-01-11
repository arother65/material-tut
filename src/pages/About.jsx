/** 
*   Stand: 11.01.2026
*   Controller and view "Create", data from JSON-Server 
*/

// import React from 'react'  // useState etc.
import { Container, Typography } from '@mui/material'  //
import AppBarStd from '../components/AppBarStd'
import Footer from '../components/Footer.jsx'

import * as bootstrap from 'bootstrap'

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

      {/* Bootstrao modal declaration */}
      <button type="button" className="btn btn-primary focus-ring" data-bs-toggle="modal" data-bs-target="#idBSModal"
        onClick={() => {
          // alert('') 
          const myModalAlternative = new bootstrap.Modal('#idBSModal', { backdrop: false })
          myModalAlternative.show()
        }}>
        Launch demo modal
      </button>

      <div className="modal mt-5 fade" id="idBSModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 class="modal-title">Modal title</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                onClick={() => {
                  bootstrap.Modal.getInstance(
                    document.getElementById('idBSModal')
                  ).hide()  // .dispose()
                }}>
                Close
              </button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

      <Footer theme={theme} />
    </>
  )
}  // About()
