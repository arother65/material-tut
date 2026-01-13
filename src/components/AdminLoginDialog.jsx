/**
 *  Stand: 10.01.2026  
 */

// Imports
import * as React from 'react';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'  // or imported from react-router

// MUI-Components used here: 
import Button from '@mui/material/Button'
import { IconButton, Fade } from '@mui/material'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import TextField from '@mui/material/TextField'
import Slide from '@mui/material/Slide'

// MUI icons 
import SendIcon from '@mui/icons-material/Send'
// import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import CancelIcon from '@mui/icons-material/Cancel'

//* user data
// import userData from '../data/users.json'

// fn's to get user data from firestore
import getCollection from '../utils/getFirebaseApp'

// Declarations 
const Transition = React.forwardRef(function Transition(props, ref) {
   return <Slide direction="right" ref={ref} {...props} />
})

// View / Component "AdminLoginDialog"
export default function AdminLoginDialog({ theme, openState, setopenState, navTarget, dialogTexts }) {

   // navigation-function from "factory-function" useNavigate() for use with Button 
   const fnNavigate = useNavigate()

   //* ReactJS Standard hooks 
   const [loggedIn, setLoggedIn] = useState(false)
   const [loginAttempts, setLoginAttempts] = useState(0)
   const [loginError, setLoginError] = useState(false)

   useEffect((event) => {
      // console.log()
   }, [loggedIn, loginError])

   // userName and passWord:
   const [userName, setUserName] = useState('')
   const [passWord, setPassWord] = useState('')

   useEffect((event) => {
      console.log(userName, passWord)
      // setUserName(userName)
      // setPassWord(passWord)
   }, [userName, passWord])

   /**
    * Handler-functions. Only properties imported from the parent-component are used:
    */
   const handleClose = () => {
      setLoggedIn(false)
      setLoginAttempts(0)  //?
      setLoginError(false)
      setopenState(false)
   }  // handleClose()

   const writeLogFile = (actDate) => {
      console.log(actDate)

      //* fs write file synchronous

   }  // writeLogFile

   const checkUserInDb = async () => {
      let retValue = false

      await getCollection('colAdminUsers', { userName: userName, passWord: passWord })
         .then((result) => {
            retValue = result
         })
         .catch((e) => {
            retValue = false
         })
      return retValue
   }  // checkUserInDb()

   const handleBtnAgree = async () => {

      //* userData from firebase-db
      let userFound = await checkUserInDb()

      if (userFound) {
         setLoggedIn(true)
         setLoginError(false)
         setLoginAttempts(0)
         localStorage.setItem("userLoggedIn", true)

         // writeLogFile()
         writeLogFile(new Date())

         fnNavigate(navTarget)
         return
      }

      // only navigate when user is logged in / already known
      if (!loggedIn) {
         setLoginError(true)

         // Anzahl Fehlanmeldungen merken:
         let loginAttemptsNew = loginAttempts + 1
         setLoginAttempts(loginAttemptsNew)

         // meldung anzeigen
         if (loginAttemptsNew < 5) {
            // alert(`nope ${loginAttemptsNew}`)
            setLoginError(true)  // Meldung im Dialog anzeigen
         } else {
            // alert(`too many attempts: ${loginAttemptsNew}`) 
            setLoginError(true)
            setLoggedIn(false)
            setopenState(false)
         }
      }
   }  // handleBtnAgree()

   //  
   return (
      <>
         <Dialog
            open={openState}
            slots={{ transition: Transition }}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
         >
            <DialogTitle className='text-bg-dark'>   {/* sx={{ backgroundColor: theme.palette.secondary.dark, color: 'white' }} */}
               {dialogTexts.title}
               <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  sx={{ ml: 30, justifyContent: 'right' }}
                  onClick={handleClose}
               >
                  <CancelIcon sx={{ color: 'darkred', justifyContent: 'right' }} />
               </IconButton>
            </DialogTitle>

            {/* <DialogContent sx={{ backgroundColor: theme.palette.secondary.light }}> */}
            <DialogContent className='bg-component'>

               {/* <Fade in={true} timeout={1500}> */}
               <div className='row m-1'>
                  <div className='col'>
                     <FormControl variant="standard">
                        <TextField
                           id='idUserName'
                           label="Username"
                           placeholder="example@email.com"
                           value={userName}
                           color="secondary"
                           onChange={(e) => {
                              setUserName(e.target.value)
                           }}
                        />
                        <FormHelperText id="idUsernameHelperText">
                           Username
                        </FormHelperText>
                     </FormControl>
                  </div>
                  <div className='col'>
                     <TextField id='idPassWord' label="Password" value={passWord} color="secondary"
                        onChange={(e) => {
                           setPassWord(e.target.value)
                        }}
                     />
                  </div>

                  {loginError &&
                     <div className='row bg-danger border-2 rounded'>Wrong Username or Password</div>
                  }
               </div>
               {/* </Fade > */}
            </DialogContent>

            <DialogActions  className='border border-5'>
               {/* <div className='row border-2 border-top border-success m-1'> */}
               <div className='row m-1'>                  
                  {/* <div className='col m-1'>
                     <Button variant="outlined" color="error" onClick={handleClose}>Disagree</Button>
                  </div> */}
                  <div className='col m-1'>
                     <Button variant="contained"
                        color="secondary"
                        onClick={handleBtnAgree}
                        endIcon={<SendIcon />}
                        sx={{ color: 'white' }}
                     >
                        Agree
                     </Button>
                  </div>
               </div>
            </DialogActions>
         </Dialog >
      </>
   )  // return()
}  // AdminLoginDialog()
