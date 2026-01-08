/*
*   Menu item open dialog commented out due to problems with blocking the home.js page
*/

// imports
import { useState, useEffect } from 'react'
import { AppBar, Box, Backdrop, CircularProgress, IconButton, Toolbar, Menu, MenuItem, } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'

import AlertDialogSlide from '../components/AlertDialogSlide'

//
export default function AppBarTop(theme) {

   // hooks for a menu-component 
   const [anchorEl, setAnchorEl] = useState(null)
   const open = Boolean(anchorEl)
   const handleClick = (event) => { setAnchorEl(event.currentTarget) }
   const handleClose = () => { setAnchorEl(null) }

   // hook for openState (Dialog) in child-component
   const [openState, setopenState] = useState(false)
   useEffect(() => {
      setopenState(openState)
   }, [openState])

   const [navTarget, setNavTarget] = useState(null)
   useEffect(() => {
      setNavTarget(navTarget)
   }, [navTarget])

   // handleNavigate4gewinnt('/VierGewinnt')
   const [loading, setLoading] = useState(false)

   // common sx-object for all MenuItems used
   const menuItemSx = {
      '&:hover': {
         color: 'white',
         // backgroundColor: 'olivedrab', 
         backgroundColor: 'primary.light',
      }
   }  // 

   // 
   return (
      <AppBar sx={{ backgroundColor: 'rgba(40, 45, 60, 0.85)', position: 'fixed' }} >
         <Toolbar>
            <IconButton
               id="demo-positioned-menu"
               size="large"
               edge="start"
               color="inherit"
               aria-label="open drawer"
               sx={{ mr: 2 }}
               aria-controls={open ? 'demo-positioned-menu' : undefined}
               onClick={handleClick}
            >
               <MenuIcon sx={{ color: 'green' }} />
            </IconButton>
            <Menu
               id="demo-positioned-menu"
               aria-labelledby="demo-positioned-button"
               anchorEl={anchorEl}  // element to diplay menu list underneath
               open={open}
               onClose={handleClose}
               anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
               }}
               transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
               }}
            >
               {/* 					<MenuItem
						sx={{
							'&:hover': {
								color: 'white',
								backgroundColor: 'olivedrab',
							}
						}}
						onClick={handleOpenDialog}>
						open dialog
					</MenuItem> {/* opens Dialog */}
               {/* <Dialog
						open={openDialog}
						slots={{
							transition: lvTransition,
						}}
						keepMounted= {false}
						onClose={handleCloseDialog}
						aria-describedby="alert-dialog-slide-description"
					>
						<DialogTitle>{"Title DialogTitle"}</DialogTitle>
						<DialogContent>
							<DialogContentText id="alert-dialog-slide-description">
								This is a component of type "Dialog".
								No functionality, you are safe...
							</DialogContentText>
						</DialogContent>
						<DialogActions>
							<IconButton
								id="idBtnCloseDialog"
								size="large"
								edge="start"
								color="inherit"
								aria-label="close dialog"
								sx={{ mr: 2 }}
								onClick={handleCloseDialog}
							>
								<CloseRoundedIcon sx={{ color: 'red' }} />
							</IconButton>
						</DialogActions>
					</Dialog> */}

               <MenuItem
                  sx={menuItemSx}
                  onClick={() => {
                     setopenState(true)  // just open a dialog component
                     setNavTarget('/create')
                  }}>
                  create page
               </MenuItem>

               <MenuItem
                  sx={menuItemSx}
                  onClick={() => {
                     setopenState(true)
                     setNavTarget('/about')
                  }}>
                  about page
               </MenuItem>

               <Backdrop open={loading} sx={{ zIndex: 500 }} onClick={() => { setLoading(false) }}>
                  <Box sx={{ display: 'flex' }}>
                     <CircularProgress color="midnightblue" sx={{ position: 'fixed' }} />
                  </Box>
               </Backdrop>
            </Menu>

            {/* <AlertDialogSlide openState={openState} setopenState= {setopenState}/> */}
            <AlertDialogSlide theme={theme}
               openState={openState}
               setopenState={setopenState}
               navTarget={navTarget}/>
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            {/* <Switch defaultChecked /> */}
         </Toolbar>
      </AppBar>

   )  // return()
}  // AppBarTop()



