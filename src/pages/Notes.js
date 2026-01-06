/** 
*   Stand: 06.01.2025
*   Theming and colors: https://mui.com/material-ui/customization/default-theme/?expand-path=$.palette
*/

//
import React, { useState, useEffect } from 'react'  // Standard use-hooks
import {
   Accordion, AccordionSummary, AccordionDetails, Box, Button, Card,
   Container, Divider, Radio, Typography, Tooltip,
   Zoom,
   RadioGroup
   // Fade
} from '@mui/material'

import { ThemeProvider } from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { makeStyles } from '@mui/styles'  // errs when taken from '@mui/material/styles'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { red } from '@mui/material/colors';


// 
export default function Notes({ theme }) {

   // console.log( {...theme } ) // puts out the whole object
   // get the current windows sizes:
   console.log('outerWidth:', window.outerWidth, 'outerHeight:', window.outerHeight)

   // 
   const [expanded, setExpanded] = React.useState(false);

   // event handler for <Accordion />
   const handleExpansion = () => {
      // setExpanded( (prevExpanded) => !prevExpanded );  // ok
      setExpanded((expanded) => !expanded);  // ok
   };

   // reducing/restoring the container size
   const [containerClassList, setContainerClassList] = useState()
   const [isReduced, setIsReduced] = useState(false)

   let startIcon = isReduced ? <ArrowForwardIosOutlinedIcon /> : <ArrowBackIosNewOutlinedIcon />

   // fn to switch the theme using the main body-tag
   const switchTheme = async (event) => {

      // idBodyIndexHtml from "index.html"
      const bodyTag = document.getElementById('idBodyIndexHtml')
      console.log(bodyTag)

      // const actTheme = bodyTag.getAttribute('data-bs-theme')
      bodyTag.setAttribute('data-bs-theme', event.target.value)
   }

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

   const sText = "local Text variable"

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

            <div className="row m-1" style={{ width: '100%' }}>
               <div className="col m-1">
                  <Box id="idMainBox" maxWidth="xl" sx={{ mt: 1, ml: 5, mr: 5 }}>
                     <div className="row mt-1">
                        <div className="col">
                           <p>Notes page with ThemeProvider</p>
                        </div>
                        <div className="col text-end">
                           <Tooltip title="Switch theme" placement="left-start" arrow sx={{}}
                              slots={{
                                 transition: Zoom
                                 // transition: Fade
                              }}
                              slotProps={{
                                 transition: { timeout: 500 },
                              }}>
                              {/*                 <Button
                  id='idBtnSwitchContainer'
                  // startIcon={startIcon}
                  color="primary"
                  onClick={switchTheme}
                  variant="contained">
                  switch theme
                </Button> */}

                              <FormControl variant="filled" sx={{ minWidth: 100 }}>
                                 <InputLabel id="demo-simple-select-label" sx={{ color: 'white' }}>Theme</InputLabel>
                                 <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={''}
                                    // defaultValue='blue'
                                    label="Theme"
                                    onChange={switchTheme}
                                    sx={{ color: 'white' }}
                                 >
                                    <MenuItem value={'red'}>Red</MenuItem>
                                    <MenuItem value={'orange'}>Orange</MenuItem>
                                    <MenuItem value={'blue'}>Blue</MenuItem>
                                    <MenuItem value={'light'}>Light</MenuItem>
                                    <MenuItem value={'dark'}>Dark</MenuItem>
                                 </Select>
                              </FormControl>
                           </Tooltip>

                           <Divider orientation='vertical' component={FormControl} sx={{ color: theme.palette.error.main, mr: 1, width: 10 }} />
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

                     <Typography component="h4" variant="h4" gutterBottom="true" className={classes.heading}>
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
                        expanded={expanded}
                        onChange={handleExpansion}
                        // sx={{ backgroundColor: 'darkred' }}>
                        sx={{ backgroundColor: theme.palette.background.main }}>
                        <AccordionSummary
                           id="panel1-header"
                           className='mt-1'
                           expandIcon={<ExpandMoreIcon />}
                           aria-controls="panel1-content"
                        >
                           <Typography className={classes.details} component="span">
                              Typography on AccordionSummary
                           </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                           <Typography color={theme.secondary}>
                              {sText}
                           </Typography>
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
                  <div className='col mr-2 col-animate' style={{ width: '50%' }}>
                     <Box sx={{ position: 'relative' }}>
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
                     </Box>
                  </div>
               }
            </div>

         </ThemeProvider >
      </>
   )
}
