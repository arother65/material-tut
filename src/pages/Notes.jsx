/** 
*   Stand: 10.01.2026
*   Theming and colors: https://mui.com/material-ui/customization/default-theme/?expand-path=$.palette
*/

//
import React, { useState, useEffect } from 'react'  // Standard use-hooks
import {
   Accordion, AccordionSummary, AccordionDetails, Avatar, Box, Button, Card,
   Fade, Radio, RadioGroup, Typography, Tooltip
} from '@mui/material'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import { ThemeProvider } from '@mui/material/styles'

// icons 
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

//* Customer components
// import ClickableWheel from '../components/Wheel.jsx'
import AppBarTop from '../components/AppBarTop.jsx'
import SvgTests from '../components/SvgTests.jsx'
import Footer from '../components/Footer.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Texts from /src/i18n
// import deTexts from '../i18n/i18n-de.json'

// 
export default function Notes({ props, theme }) {

   //* Imported texts
   // console.log('deTexts: ', deTexts)


   //* Connect to hosting site firebase
   // TODO: Add SDKs for Firebase products that you want to use
   // https://firebase.google.com/docs/web/setup#available-libraries

   //* Your web app's Firebase configuration
   const firebaseConfig = {
      apiKey: "AIzaSyBvvrVevAgumjE-U2e2Wp43VdZb9Y8RSh8",
      authDomain: "prj-test-98994.firebaseapp.com",
      projectId: "prj-test-98994",
      storageBucket: "prj-test-98994.firebasestorage.app",
      messagingSenderId: "487823466018",
      appId: "1:487823466018:web:f375d773e8e401ae76747b"
   }

   //* Initialize Firebase
   const app = initializeApp(firebaseConfig);

   //* Get the current windows sizes:
   console.log('outerWidth:', window.outerWidth, 'outerHeight:', window.outerHeight)

   //* Handler for the <Accordion /> - component used:
   const [expanded, setExpanded] = React.useState(false);
   const [expanded00, setExpanded00] = React.useState(false);
   const [expanded02, setExpanded02] = React.useState(false);

   //* Event handler for <Accordion />
   const handleExpansion = (e) => {
      // setExpanded( (prevExpanded) => !prevExpanded );  // ok

      // get accordion id: idAccordion01
      let actAccordion = document.getElementById(e.currentTarget.id) // ! gets event from icon, not from accordion

      switch (actAccordion.id) {
         case 'idAccordion00':
            setExpanded00((expanded00) => !expanded00);  // ok      
            break;
         case 'idAccordion01':
            setExpanded((expanded) => !expanded);  // ok      
            break;
         case 'idAccordion02':
            setExpanded02((expanded02) => !expanded02);  // ok      
            break;
         default:
            break;
      }
   };

   //* Reducing/restoring the container size
   let [isReduced, setIsReduced] = useState(false)
   useEffect(() => {
      setIsReduced(isReduced)
   }, [isReduced, setIsReduced])

   let startIcon = isReduced ? <ArrowForwardIosOutlinedIcon /> : <ArrowBackIosNewOutlinedIcon />

   //* fn used to reduce size of <Box />
   const switchContainerWidth = () => {
      const mainBox = document.getElementById('idMainBox')
      const colMainBox = document.getElementById('idColMainBox')

      console.log(process.env.REACT_APP_PRIMARY_COLOR)

      switch (isReduced) {
         case false:
            if (mainBox) {
               // console.log('mainBox.style.maxWidth', mainBox.style.maxWidth)

               // let className = mainBox.getAttribute('class')
               // className = className + ' widthBox50'
               // mainBox.setAttribute('class', className)

               // // using col, the parent of box,  instead of Box
               // className = colMainBox.getAttribute('class')
               // className = className + ' widthBox50'
               // colMainBox.setAttribute('class', className)

               colMainBox.style.maxWidth = '50%'
               // colMainBox.setAttribute('style', 'maxWidth: 50%') 
               setIsReduced(true)
            }
            break;
         case true:
            if (mainBox) {
               console.log('colMainBox.style.maxWidth', colMainBox.style.maxWidth)

               // mainBox.getAttribute('style') 
               colMainBox.style.maxWidth = '100%'
               // mainBox.setAttribute('style', 'maxWidth: 100%')
               console.log('colMainBox.style.maxWidth', colMainBox.style.maxWidth)
               setIsReduced(false);
            }
            break;
         default:
            break;
      }
   }  // switchContainerWidth()

   //* animate radio buttons 
   const [rbState, setRbState] = useState('a')
   const [rbStateYellow, setRbStateYellow] = useState('')
   const [rbStateGreen, setRbStateGreen] = useState('')

   useEffect(() => {

      // idCardAmple
      const ampleCardBorder = document.getElementById('idCardAmple')
      let className = ampleCardBorder.className

      // setting checked on one radio button
      setTimeout(() => {
         setRbState('')
         setRbStateYellow('b')
         className = className.replace('border-danger', 'border-warning')
         ampleCardBorder.className = className

         setTimeout(() => {
            // 
            setRbStateYellow('')
            setRbStateGreen('c')
            className = className.replace('border-warning', 'border-success')
            ampleCardBorder.className = className
         }, 1500)  // setTimeout()
      }, 1500)  // setTimeout()
   }, []) // Ampel anzeigen

   // useEffect(()=>{
   //    // clearing all local storage now?
   // })

   // 
   return (
      <>
         <ThemeProvider theme={theme}>
            <header>
               <AppBarTop theme={theme} />
            </header>

            <main>
               <div className="row">
                  <div className="col m-1 mt-5" id="idColMainBox" width='95%'>
                     <Box id="idMainBox" sx={{ mt: 5, ml: 5, mr: 5 }}>
                        <Fade in={true} timeout={1500}>
                           <div className="row mt-1">
                              <div className="col">
                                 <p>Notes page with ThemeProvider</p>
                              </div>
                              <div className="col text-end">
                                 {/* <Divider orientation='vertical' component={FormControl} sx={{ color: 'white', ml: 3, mr: 3, width: 5 }} />                               */}
                                 <Tooltip title="Switch container width">
                                    <Button
                                       id='idBtnSwitchContainer'
                                       startIcon={startIcon}
                                       color="inherit"
                                       onClick={switchContainerWidth}
                                       variant="contained" />
                                 </Tooltip>
                              </div>
                           </div>
                        </Fade>
                        <Typography component="h4" variant="h4" gutterBottom="true">
                           Notes page h4
                        </Typography>

                        <Typography component="h5" variant="h5" gutterBottom="true">
                           <ul>
                              <li>text from li h5</li>
                           </ul>
                        </Typography>

                        {/* Card with Typography */}
                        <Card
                           className="bg-component rounded-2 mt-1 shadow">
                           <p>p on card comp</p>
                           <Typography component="h6" variant="h6">
                              Typography on Card
                           </Typography>
                        </Card>

                        {/* Card with another Card wrapping a RadioGroup */}
                        <Card className="bg-component rounded-2 mt-1 shadow">
                           <Card
                              id='idCardAmple'
                              className="rounded-2 m-2 border-5 border-bottom border-danger"
                              // sx={{ width: '8%', borderLeft: 15, borderColor: 'red' }}
                              sx={{ width: '8%' }}
                           >
                              {/* <Radio color="error" checked icon={<RadioButtonIcon />}/> */}
                              <RadioGroup row defaultValue="a">
                                 <Radio id="idRadioRed" color="error" checked={rbState} value={'a'} />
                                 <Radio id="idRadioYellow" color="warning" checked={rbStateYellow} value={'b'} />
                                 <Radio id="idRadioGreen" color="success" checked={rbStateGreen} value={'c'} />
                              </RadioGroup>
                           </Card>
                        </Card>
                     </Box>
                  </div>

                  {isReduced &&
                     <div className='col mt-5 mr-2 col-animate' style={{ width: '50%' }}>
                        <Box sx={{ position: 'relative', mt: 5 }}>
                           <div className="col text-center mt-2">
                              <Card className="border rounded-2 mt-1" sx={{ backgroundColor: theme.palette.primary.main, color: 'white' }}>
                                 <p>Card 01 theme.palette.primary.main</p>
                              </Card>
                              <Card className="border rounded-2 mt-1" sx={{ backgroundColor: theme.palette.primary.dark, color: 'white' }}>
                                 <p>Card 02 theme.palette.primary.dark</p>
                              </Card>
                              <Card className="border rounded-2 mt-1" sx={{ backgroundColor: theme.palette.secondary.light, color: 'white' }}>
                                 <p>Card 03 theme.palette.secondary.light</p>
                              </Card>
                           </div>
                           <div className='row m-1 border border-danger rounded'>
                              row
                              <div className='col m-1 border border-info rounded'>
                                 col
                              </div>
                              <div className='col m-1 border border-info rounded'>
                                 col
                              </div>
                              <div className='col m-1 border border-info rounded'>
                                 col
                              </div>
                           </div>
                           <div className='row m-1 border border-danger rounded'>row</div>
                        </Box>

                        <Box sx={{ position: 'relative', mt: 1 }}>
                           <div className='row m-1 border border-danger rounded'>row</div>
                        </Box>
                     </div>
                  }
               </div>

               <Tooltip title="Switch col width">
                  <Button
                     id='idBtnSwitchContainer'
                     startIcon={startIcon}
                     color="inherit"
                     onClick={() => {
                        // alert('vvv')
                        let col01 = document.getElementById('idCol01')
                        // alert(col01.style.width)
                        col01.style.maxWidth = '10%'
                        // setIsReduced(true)
                     }}
                     variant="contained" />
               </Tooltip>
               <Tooltip title="Switch col width back">
                  <Button
                     id='idBtnSwitchContainer'
                     startIcon={<ArrowForwardIosOutlinedIcon />}
                     color="inherit"
                     onClick={() => {
                        let col01 = document.getElementById('idCol01')
                        col01.style.maxWidth = '50%'

                        let col02 = document.getElementById('idCol02')
                        let col02Classlist = col02.getAttribute('class')
                        console.log(col02Classlist)

                        col02Classlist = 'col m-1 border rounded'
                        col02.setAttribute('class', col02Classlist)  // errs
                     }}
                     variant="contained" />
               </Tooltip>

               <div className='row m-1 border'>
                  <div id='idCol01' className='col m-1 w-100 border rounded'>
                     col01

                     {/* MUI: Unsupported `` color. */}
                     {/* <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                        Here is a gentle confirmation that your action was successful.
                     </Alert> */}
                     <Stack spacing={1} sx={{ alignItems: 'center' }}>
                        <Stack direction="row" spacing={1}>
                           <Chip label="primary" color="primary" />
                           <Chip label="success" color="success" />
                        </Stack>
                        <Stack direction="row" spacing={1}>
                           <Chip label="primary" color="primary" variant="outlined" />
                           <Chip label="success" color="success" variant="outlined" />
                        </Stack>
                     </Stack>
                  </div>
                  {/* <div id='idCol02' className='col m-1 border rounded invisible'> */}
                  <div id='idCol02' className='col m-1 invisible'>
                     col02
                  </div>
               </div>

               {/* using component Accordion */}
               <div className="row m-3 rounded shadow">
                  <Accordion
                     className='bg-component rounded-2 mt-1 shadow'
                     expanded={expanded}
                     onChange={handleExpansion}
                  // sx={{ backgroundColor: 'darkred' }}>
                  >
                     <AccordionSummary
                        id="idAccordion01"
                        className='mt-1'
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="idAccordion01"
                     >
                        <Typography>
                           AccordionSummary
                        </Typography>
                     </AccordionSummary>
                     <AccordionDetails>
                        <div className='row m-2 p-0' style={{ width: '50%', height: '50%' }}>
                           <Avatar className='avatar-rotate m-1'>
                              <p>01</p>
                           </Avatar>
                           <Avatar className='avatar-rotate m-1'>
                              <p>02</p>
                           </Avatar>
                           <Avatar className='avatar-rotate m-1'>
                              <p>03</p>
                           </Avatar>
                        </div>
                        <div className='circle border'>
                           <span class="label">1</span>
                           <div className='circleInner border mx-2 p-1'>
                              <span className="label">inner</span>
                           </div>
                        </div>
                     </AccordionDetails>
                  </Accordion>

                  <Accordion
                     className='bg-component mt-1 rounded-2 shadow'
                     expanded={expanded02}
                     onChange={handleExpansion}
                  // sx={{ backgroundColor: 'darkred' }}>
                  >
                     <AccordionSummary
                        id="idAccordion02"
                        className='mt-1 rounded-2'
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="idAccordion02"
                        >
                        <Typography>
                           Testing SVG's
                        </Typography>
                     </AccordionSummary>
                     <AccordionDetails>
                        <div className='row m-1 p-1'>
                           <SvgTests theme={theme} />
                        </div>
                     </AccordionDetails>
                  </Accordion>
               </div>
            </main>

            <Footer theme={theme} />
         </ThemeProvider >
      </>
   )
}
