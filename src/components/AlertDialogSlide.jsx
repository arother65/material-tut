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
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

import { useNavigate } from 'react-router-dom'  // or imported from react-router

import SendIcon from '@mui/icons-material/Send';
// import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import CancelIcon from '@mui/icons-material/Cancel';
import { IconButton } from '@mui/material';

// Declarations 
const Transition = React.forwardRef(function Transition(props, ref) {
   return <Slide direction="up" ref={ref} {...props} />
})

// View / Component 
export default function AlertDialogSlide({ theme, openState, setopenState, navTarget }) {

   // navigation for MenuItem
   const fnNavigate = useNavigate()

   /**
    * Handler-functions. Only properties imported from the parent-component are used:
    */
   const handleClickOpen = () => { setopenState(true) }
   const handleClose = () => { setopenState(false) }
   const handleBtnAgree = () => { fnNavigate(navTarget) }

   // console.log('theme in child: ', theme.theme)

   // 
   return (
      <>
         <Button variant="outlined" onClick={handleClickOpen}>
            Slide in alert dialog
         </Button>
         <Dialog
            open={openState}
            slots={{ transition: Transition }}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
         >
            {/* handlinh theme-object unklar  */}
            <DialogTitle sx={{ backgroundColor: theme.theme.palette.primary.dark }}>{"Dialog Title   "}
               <IconButton
                  id="demo-positioned-menu"
                  size="large"
                  edge="start"
                  color="inherit"
                  sx={{ mr: 2 }}
                  onClick={handleClose}
               >
                  <CancelIcon sx={{ color: 'darkred', justifyContent: 'right' }} />
               </IconButton>
            </DialogTitle>
            <DialogContent sx={{ backgroundColor: theme.theme.palette.primary.light }}>
               {/* <DialogContentText id="alert-dialog-slide-description">
                  Dialog from component "AlertDialogSlide.jsx".
               </DialogContentText> */}
               <div className='row border m-1'>
                  <Card >
                     <h6>h6 on Card</h6>
                  </Card>
               </div>
            </DialogContent>
 
            <DialogActions sx={{ backgroundColor: theme.theme.palette.primary.main }}>
               <div className='row border-2 border-top border-success m-1'>
                  {/* <div className='col m-1'>
                     <Button variant="outlined" color="error" onClick={handleClose}>Disagree</Button>
                  </div> */}
                  <div className='col m-1'>
                     <Button variant="outlined" color="info" onClick={handleBtnAgree} endIcon={<SendIcon />}>Agree</Button>
                  </div>
               </div>
            </DialogActions>
         </Dialog>
      </>
   )  // return()
}  // AlertDialogSlide()
