/*
*   Standard AppBar for all components except the NOTES.jsx component.
*/

// imports
// import { useState, forwardRef } from 'react'

import { AppBar, IconButton, Toolbar, Tooltip } from "@mui/material"
import { useNavigate } from 'react-router-dom'  // or imported from react-router
import HomeIcon from '@mui/icons-material/Home'

import logo from '../logo.svg'

//
export default function AppBarStd() {

   // navigation for MenuItem
   const fnNavigate = useNavigate()

   // 
   return (
      <AppBar sx={{ backgroundColor: 'rgba(40, 45, 60, 0.85)', position: 'fixed' }} >
         <Toolbar>
            <Tooltip title='Home' arrow sx={{}}>
               <IconButton
                  id="idBtnNavHome"
                  size="medium"
                  edge="start"
                  aria-label="nav to home"
                  sx={{ mr: 2 }}
                  onClick={() => { fnNavigate('/') }}
               >
                  <HomeIcon sx={{ color: 'lightgreen' }} />
               </IconButton>
            </Tooltip>
            <Tooltip title='ReactJS home' arrow >
               <nav>
                  <a href="https://reactnative.dev/" rel='noreferrer' target='_blank'>
                     <img src={logo} className="App-logo" alt="logo" />
                  </a>
               </nav>
            </Tooltip>
         </Toolbar>
      </AppBar>
   )  // return()
}  // AppBarStd()



