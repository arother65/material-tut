/*
*   Menu item open dialog commented out due to problems with blocking the home.js page
*/

// imports
import { useState, useEffect } from 'react'
import { AppBar, Box, Backdrop, CircularProgress, IconButton, Toolbar, Menu, MenuItem, FormControl, InputLabel, Select, Tooltip, Zoom } from "@mui/material"
import Chip from '@mui/material/Chip'
import MenuIcon from '@mui/icons-material/Menu'
import { useNavigate } from 'react-router-dom'  // or imported from react-router

// Radio Butons inclusive a Group for these 
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

// customer components
import AlertDialogSlide from './AdminLoginDialog.jsx'
import AdminLoginDialog from './AdminLoginDialog.jsx'


//
export default function AppBarTop({ theme }) {

   // hooks for a menu-component 
   const [anchorEl, setAnchorEl] = useState(null)
   const open = Boolean(anchorEl)
   const handleClick = (event) => { setAnchorEl(event.currentTarget) }
   const handleClose = () => { setAnchorEl(null) }

   // hook for openState (Dialog) in child-component
   const [openStateDlg, setOpenState] = useState(false)
   useEffect(() => {
      setOpenState(openStateDlg)
   }, [openStateDlg])

   // hooks for Dialog AdminLogin
   const [openDlgAdmin, setOpenDlgAdmin] = useState(false)
   useEffect(() => {
      setOpenDlgAdmin(openDlgAdmin)
   }, [openDlgAdmin])

   //
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

   // fn to switch the theme using the main body-tag
   const switchTheme = async (event) => {

      // idBodyIndexHtml from "index.html"
      const bodyTag = document.getElementById('idBodyIndexHtml')
      console.log(bodyTag)

      // const actTheme = bodyTag.getAttribute('data-bs-theme')
      bodyTag.setAttribute('data-bs-theme', event.target.value)
   }

   // navigation-function from "factory-function" useNavigate() for use with Button 
   const fnNavigate = useNavigate()

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
               <MenuIcon sx={{ color: 'lightgreen' }} />
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
               <MenuItem
                  sx={menuItemSx}
                  onClick={() => {
                     setOpenState(false)  // just open a dialog component
                     // setNavTarget('/create') 
                     fnNavigate('/create')
                  }}>
                  create page
               </MenuItem>

               <MenuItem
                  sx={menuItemSx}
                  onClick={() => {
                     setOpenDlgAdmin(true)  // just open a dialog component
                     setNavTarget('/admin')
                  }}>
                  Admin page
               </MenuItem>

               <MenuItem
                  sx={menuItemSx}
                  onClick={() => {
                     setOpenState(false)
                     // setNavTarget('/about')
                     fnNavigate('/about')
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
               openState={openStateDlg}
               setopenState={setOpenState}
               navTarget={navTarget}
               dialogTexts={{ title: 'Titel from parent' }} />
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            {/* <Switch defaultChecked /> */}

            <AdminLoginDialog theme={theme}
               openState={openDlgAdmin}
               setopenState={setOpenDlgAdmin}
               navTarget={navTarget}
               dialogTexts={{ title: 'Admin Login page' }} />

            <div className="col m-3 p-1 border rounded">
               <Tooltip title="Switch theme" placement="bottom" arrow sx={{}}>
                  <RadioGroup
                     aria-labelledby="radio-buttons-group-label"
                     defaultValue="blue"
                     name="radio-buttons-group"
                     row
                  >
                     <FormControlLabel value="blue"
                        label="blue"
                        control={<Radio color='primary' />}
                        onChange={(event) => {
                           switchTheme(event)
                        }}
                     />
                     <FormControlLabel value="red"
                        label="red"
                        control={<Radio color='error' />}
                        onChange={(event) => {
                           switchTheme(event)
                        }}
                     />
                     <FormControlLabel value="orange"
                        label="orange"
                        control={<Radio color='warning' />}
                        onChange={(event) => {
                           switchTheme(event)
                        }}
                     />
                  </RadioGroup>
               </Tooltip>
            </div>

            <Chip label="not logged in" color="success" variant="outlined"
               sx={{ color: 'white' }}
            />

            <div className="col text-end">
               <Tooltip title="Switch theme" placement="left-start" arrow sx={{}}
                  slots={{
                     transition: Zoom
                     // transition: Fade
                  }}
                  slotProps={{
                     transition: { timeout: 500 },
                  }}>
                  <FormControl className='border border-warning rounded' variant="filled" sx={{ minWidth: 100, backgroundColor: 'darkslategrey' }}>
                     <InputLabel id="demo-simple-select-label" sx={{ color: 'white' }}>Theme</InputLabel>
                     <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={''}
                        // defaultValue='blue'
                        label="Theme"
                        onChange={switchTheme}
                        sx={{ backgroundColor: 'lightgreen', color: 'white' }}
                     >
                        <MenuItem value={'red'} sx={{ backgroundColor: 'green', color: 'red' }}>Red</MenuItem>
                        <MenuItem value={'orange'} sx={{ backgroundColor: 'green', color: 'orange' }}>Orange</MenuItem>
                        <MenuItem value={'blue'} sx={{ backgroundColor: 'green', color: 'blue' }}>Blue</MenuItem>
                        <MenuItem value={'light'} sx={{ backgroundColor: 'green', color: 'white' }}>Light</MenuItem>
                        <MenuItem value={'dark'} sx={{ backgroundColor: 'green', color: 'black' }}>Dark</MenuItem>
                     </Select>
                  </FormControl>
               </Tooltip>
            </div>
         </Toolbar>
      </AppBar>

   )  // return()
}  // AppBarTop()



