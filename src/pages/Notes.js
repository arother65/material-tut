/** 
*   Stand: 25.12.2025
*   Theming and colors: https://mui.com/material-ui/customization/default-theme/?expand-path=$.palette
*/

//
import React, { useState } from 'react'  // Standard use-hooks
import {
  Accordion, AccordionSummary, AccordionDetails, Box, Button, Card,
  Divider, Typography, Tooltip
} from '@mui/material'

import { ThemeProvider } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'  // errs when taken from '@mui/material/styles'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

// import MongoClient 
// import { MongoClient } from 'mongodb';  // errs out 
// const { MongoClient, ServerApiVersion } = require("mongodb"); // errs out

// 
export default function Notes({ theme }) {

  // console.log( {...theme } ) // puts out the whole object
  // get the current windows sizes:
  console.log('outerWidth:', window.outerWidth, 'outerHeight:', window.outerHeight)


  // 
  const [expanded, setExpanded] = React.useState(false);

  // event handler, other functions 
  const handleExpansion = () => {
    // setExpanded( (prevExpanded) => !prevExpanded );  // ok
    setExpanded((expanded) => !expanded);  // ok
  };

  // reducing/restoring the container size
  const [containerClassList, setContainerClassList] = useState()
  const [isReduced, setIsReduced] = useState(false)

  let startIcon = isReduced ? <ArrowForwardIosOutlinedIcon /> : <ArrowBackIosNewOutlinedIcon />

  // fn to switch the them uding the main body-tag
  const switchTheme = async () => {
    // idBodyIndexHtml
    const bodyTag = document.getElementById('idBodyIndexHtml')
    console.log(bodyTag)

    const actTheme = bodyTag.getAttribute('data-bs-theme')

    switch (actTheme) {
      case 'blue':
        bodyTag.setAttribute('data-bs-theme', 'orange')
        break;
      case 'orange':
        bodyTag.setAttribute('data-bs-theme', 'blue')
        break
      default:
        break
    }  // switch()
    console.log()
  }

  // fn used to reduce container size
  const switchContainerWidth = async () => {

    // const container = document.querySelector('.MuiContainer-root')

    const container = document.getElementById('idMainBox')

    setContainerClassList(container.classList)

    switch (isReduced) {
      case false:
        if (container) {
          container.style.maxWidth = '50%';
          // container.style.justifyContent = 'left';  // ?

          // container.style.border = '2px solid red';
          // container.style.padding = '10px';
          // container.style.margin = '0 auto';  // center the container

          // container.style.position = 'fixed';
          // container.style.top = '1px';
          // container.style.left = '50px';
          // container.style.right = '800px';

          container.style.position = 'fixed';  // fixed
          container.style.top = '0';
          // container.style.backgroundColor = 'rgba(10, 5, 70, 0.75)';  //ok

          // container.style.transition = '50% 2s';  // errs
          // container.style.transform = 'rotate(20deg)';  //ok
          setIsReduced(true)
        }
        break;

      case true:
        if (container) {

          //? set window.innerWidth, window.innerHeight : errs 
          container.style.maxWidth = '100%'

          // setContainerClassList(containerClassList);  // no effect
          // container.setAttribute('classList', containerClassList);  // no effect
          container.classList = containerClassList
          // container.style.position = 'relative';
          container.style.backgroundColor = 'transparent'

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

  // 
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <Container maxWidth="xl"> */}
        <Box id="idMainBox" sx={{ mt: 1, ml: 5, width: 1850 }}>

          <div className="row mt-1">
            <div className="col">
              <p>Notes page with ThemeProvider</p>
            </div>
            <div className="col text-end">

              <Tooltip title="Switch theme">
                <Button
                  id='idBtnSwitchContainer'
                  // startIcon={startIcon}
                  color="primary"
                  onClick={switchTheme}
                  variant="contained">
                  switch theme
                </Button>
              </Tooltip>
              <Divider orientation='vertical' flexItem />
              <Tooltip title="Switch container width">
                <Button
                  id='idBtnSwitchContainer'
                  startIcon={startIcon}
                  color="primary"
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
            className='rounded-2 mt-1'
            expanded={expanded}
            onChange={handleExpansion}>
            <AccordionSummary
              id="panel1-header"
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
            >
              <Typography className={classes.details} component="span">Typography on AccordionSummary</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color={theme.secondary}>
                {sText}
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* comment  */}
          <Card className="border rounded-2 mt-1 shadow">
            <p>p on card comp</p>
            <Typography component="h6" variant="h6">
              Typography on Card
            </Typography>
          </Card>
        </Box >

        {isReduced &&
          <>
            {/* <Typography component="h6" variant="h6" color="warning.main" sx={{ ml: 400 }}>
                Container is reduced
              </Typography> */}
            {/* <Container className="text-center" sx={{ position: 'relative', left: '560px', right:'25px'}}> */}
            <Box sx={{ position: 'relative', left: 1000, width: '50%', border: 1, borderColor: 'primary.main' }}>
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
          </>
        }
      </ThemeProvider>
    </>
  )
}
