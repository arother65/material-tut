/** 
*   Stand: 08.01.2025
*   Theming and colors: https://mui.com/material-ui/customization/default-theme/?expand-path=$.palette
*/

//
import React, { useState, useEffect } from 'react'  // Standard use-hooks
import {
   Accordion, AccordionSummary, AccordionDetails, Alert, Avatar, Box, Button, Card,
   Radio, RadioGroup, Typography, Tooltip
} from '@mui/material'

import { ThemeProvider } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'  // errs when taken from '@mui/material/styles'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ClickableWheel from '../components/Wheel.jsx'
import AppBarTop from '../components/AppBarTop.jsx'
import SvgTests from '../components/SvgTests.jsx'
import Footer from '../components/Footer.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Texts from /src/i18n
import deTexts from '../i18n/i18n-de.json'


// 
export default function Notes({ props, theme }) {

   // imported texts
   console.log(deTexts)

   // connect to hosting site firebase

   // TODO: Add SDKs for Firebase products that you want to use
   // https://firebase.google.com/docs/web/setup#available-libraries

   // Your web app's Firebase configuration
   const firebaseConfig = {
      apiKey: "AIzaSyBvvrVevAgumjE-U2e2Wp43VdZb9Y8RSh8",
      authDomain: "prj-test-98994.firebaseapp.com",
      projectId: "prj-test-98994",
      storageBucket: "prj-test-98994.firebasestorage.app",
      messagingSenderId: "487823466018",
      appId: "1:487823466018:web:f375d773e8e401ae76747b"
   }

   // Initialize Firebase
   const app = initializeApp(firebaseConfig);

   // console.log( {...theme } ) // puts out the whole object
   // get the current windows sizes:
   console.log('outerWidth:', window.outerWidth, 'outerHeight:', window.outerHeight)

   // handler for <Accordion />
   const [expanded, setExpanded] = React.useState(false);
   const [expanded00, setExpanded00] = React.useState(false);
   const [expanded02, setExpanded02] = React.useState(false);

   // event handler for <Accordion />
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

   // reducing/restoring the container size
   const [containerClassList, setContainerClassList] = useState()
   const [isReduced, setIsReduced] = useState(false)

   let startIcon = isReduced ? <ArrowForwardIosOutlinedIcon /> : <ArrowBackIosNewOutlinedIcon />

   // fn used to reduce size of <Box />
   const switchContainerWidth = async () => {

      const mainBox = document.getElementById('idMainBox')

      setContainerClassList(mainBox.classList)

      switch (isReduced) {
         case false:
            if (mainBox) {

               console.log('mainBox.style.maxWidth', mainBox.style.maxWidth)

               mainBox.getAttribute('style')
               mainBox.style.maxWidth = '50%'
               // mainBox.style.backgroundColor = 'transparent'

               mainBox.setAttribute('style', 'maxWidth: 50%')
               console.log('mainBox.style.maxWidth', mainBox.style.maxWidth)

               setIsReduced(true)
            }
            break;

         case true:
            if (mainBox) {

               //? set window.innerWidth, window.innerHeight : errs 
               console.log('mainBox.style.maxWidth', mainBox.style.maxWidth)

               mainBox.getAttribute('style')
               mainBox.style.maxWidth = '100%'
               // mainBox.style.backgroundColor = 'transparent'

               mainBox.setAttribute('style', 'maxWidth: 100%')
               console.log('mainBox.style.maxWidth', mainBox.style.maxWidth)

               setIsReduced(false);
            }
            break;
         default:
            break;
      }
   }  // switchContainerWidth()

   // create CSS class / classes (test only)
   const useStyles = makeStyles({
      heading: {
         color: 'olivedrab',
         fontSize: '18px',
         fontWeight: 'initial',
      },
      details: {
         backgroundColor: 'rgba(220, 175, 30, 0.5)',
      },
      color: 'white',
      border: 'solid',
      // border-color: 'blue',
      // borderColor: 'red',  // errs
   })
   const classes = useStyles()

   // animate radio buttons 
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

   // 
   return (
      <>
         <ThemeProvider theme={theme}>
            <header>
               <AppBarTop theme={theme} />
            </header>

            <main>
               <div className="row" style={{ width: '100%' }}>
                  <div className="col m-1 mt-5">
                     <Box id="idMainBox" maxWidth="xl" sx={{ mt: 5, ml: 5, mr: 5 }}>
                        <div className="row mt-1">
                           <div className="col">
                              <p>Notes page with ThemeProvider</p>
                              {/* <Divider orientation='vertical' component={FormControl} sx={{ color: 'white', ml: 3, mr: 3, width: 5 }} />                               */}
                              <Tooltip title="Switch container width">
                                 <Button
                                    id='idBtnSwitchContainer'
                                    startIcon={startIcon}
                                    color="background"
                                    onClick={switchContainerWidth}
                                    variant="contained" />
                              </Tooltip>
                           </div>
                        </div>

                        <Typography component="h4" variant="h4" gutterBottom="true" className={classes.details}>
                           Notes page h4
                        </Typography>
                        <Typography component="h5" variant="h5" gutterBottom="true">
                           <ul>
                              <li>text from li h5</li>
                           </ul>
                        </Typography>

                        {/* using component Accordion */}
                        <Accordion
                           className='bg-component rounded-2 mt-1 shadow'
                           expanded={expanded00}
                           onChange={handleExpansion}
                           // sx={{ backgroundColor: 'darkred' }}>
                           sx={{ backgroundColor: theme.palette.background.main }}>
                           <AccordionSummary
                              id="idAccordion00"
                              className='mt-1'
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1-content"
                           >
                              <Typography className={classes.details} component="span">
                                 Typography on AccordionSummary
                              </Typography>
                           </AccordionSummary>
                           <AccordionDetails>
                              <div className='row m-1 p-1'>
                                 <ClickableWheel segments={12}
                                    onSelect={(segment) => {
                                       // console.log("Clicked segment:", segment);
                                       alert(segment)
                                    }} />
                              </div>
                           </AccordionDetails>
                        </Accordion>

                        {/* Card with Typography */}
                        <Card
                           className="bg-component rounded-2 mt-1 shadow"
                           sx={{ backgroundColor: theme.palette.background.main }}>
                           <p>p on card comp</p>
                           <Typography className='bg-light' component="h6" variant="h6">
                              Typography on Card
                           </Typography>
                        </Card>

                        {/* Card with another Card wrapping a RadioGroup */}
                        <Card className="bg-component rounded-2 mt-1 shadow"
                           sx={{ backgroundColor: theme.palette.background.main }}>
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
                           <Alert sx={{ mt: 1, ml: 1, mr: 1, backgroundColor: 'rgba(40, 45, 60, 0.1)', borderRadius: 2, boxShadow: 1 }}></Alert>
                           <Alert severity="success"
                              variant="outlined"
                              sx={{ mt: 1, ml: 1, mr: 1, backgroundColor: 'rgba(40, 45, 60, 0.1)', borderRadius: 2, boxShadow: 1 }}>
                              This is a success Alert.
                           </Alert>
                        </Box>
                     </div>
                  }
               </div>

               {/* using component Accordion */}
               <div className="row m-3 rounded shadow">
                  <Accordion
                     className='bg-component rounded-2 mt-1 shadow'
                     expanded={expanded}
                     onChange={handleExpansion}
                     // sx={{ backgroundColor: 'darkred' }}>
                     sx={{ backgroundColor: theme.palette.background.main }}>
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
                              <span class="label">inner</span>
                           </div>
                        </div>
                     </AccordionDetails>
                  </Accordion>

                  <Accordion
                     className='bg-component mt-1 rounded-2 shadow'
                     expanded={expanded02}
                     onChange={handleExpansion}
                     // sx={{ backgroundColor: 'darkred' }}>
                     sx={{ backgroundColor: theme.palette.secondary.main }}>
                     <AccordionSummary
                        id="idAccordion02"
                        className='mt-1 rounded-2'
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="idAccordion02"
                        sx={{ backgroundColor: theme.palette.secondary.light }}
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
