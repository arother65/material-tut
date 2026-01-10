/**
 *  Stand: 08.01.2026  
 */

// Imports
import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

import { useNavigate } from 'react-router-dom'  // or imported from react-router

import SendIcon from '@mui/icons-material/Send';
// import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import CancelIcon from '@mui/icons-material/Cancel';
import { IconButton } from '@mui/material';

// Declarations 
const Transition = React.forwardRef(function Transition(props, ref) {
   return <Slide direction="right" ref={ref} {...props} />
})

// View / Component "AdminLoginDialog"
export default function AdminLoginDialog({ theme, openState, setopenState, navTarget, dialogTexts }) {

   // navigation-function from "factory-function" useNavigate() for use with Button 
   const fnNavigate = useNavigate()

   /**
    * Handler-functions. Only properties imported from the parent-component are used:
    */
   const handleClickOpen = () => { setopenState(true) }
   const handleClose = () => { setopenState(false) }
   const handleBtnAgree = () => { fnNavigate(navTarget) }

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
            <DialogTitle sx={{ backgroundColor: theme.palette.secondary.dark }}>
               { dialogTexts.title }
               <IconButton
                  id="demo-positioned-menu"
                  size="large"
                  edge="start"
                  color="inherit"
                  sx={{ ml: 20, justifyContent: 'right' }}
                  onClick={handleClose}
               >
                  <CancelIcon sx={{ color: 'darkred', justifyContent: 'right' }} />
               </IconButton>
            </DialogTitle>

            <DialogContent sx={{ backgroundColor: theme.palette.secondary.light }}>
               {/* <DialogContentText id="alert-dialog-slide-description">
                  Dialog from component "AdminLoginDialog.jsx".
               </DialogContentText> */}
               <p>admin dialog</p>
            </DialogContent>

            <DialogActions >
               <div className='row border-2 border-top border-success m-1'>
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
         </Dialog>
      </>
   )  // return()
}  // AdminLoginDialog()
