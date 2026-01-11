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

  const effectsPlaceholder = false

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
          const myModalAlternative = bootstrap.Modal.getOrCreateInstance('#idBSModal', { backdrop: false })
          myModalAlternative.show()
        }}>
        Launch demo modal
      </button>

      <div className="modal mt-5 fade" id="idBSModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">

            <div className="modal-header border border-5 border-danger border-start-5 border-end-0 border-top-0 border-bottom-0" >
              <h5 class="modal-title">Modal title</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div class="card" aria-hidden="true">
                <div class="card-body">

                  {effectsPlaceholder &&
                    <>
                      <h5 class="card-title placeholder-glow">
                        <span class="placeholder col-6"></span>
                      </h5>
                      <p class="card-text placeholder-glow">
                        <span class="placeholder col-7"></span>
                        <span class="placeholder col-4"></span>
                        <span class="placeholder col-4"></span>
                        <span class="placeholder col-6"></span>
                        <span class="placeholder col-8"></span>
                      </p>
                    </>}

                    <p>card-body text p</p>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary border border-5 border-danger border-start-5 border-end-0 border-top-0 border-bottom-0" data-bs-dismiss="modal"
                onClick={() => {
                  bootstrap.Modal.getInstance(
                    document.getElementById('idBSModal')
                  ).hide()

                  // clean-up the backdrop from this modal:
                  document.body.classList.remove("modal-open");
                  document.body.style.removeProperty("overflow");
                  document.body.style.removeProperty("padding-right");
                  document.querySelectorAll(".modal-backdrop").forEach(el => el.remove());
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
