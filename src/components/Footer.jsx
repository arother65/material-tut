/** 
*   Stand: 08.01.2025
*   Theming and colors: https://mui.com/material-ui/customization/default-theme/?expand-path=$.palette
*/

// import React, { useState, useEffect } from 'react'  // Standard use-hooks
import { lighten, ThemeProvider } from '@mui/material/styles'
import { Box } from "@mui/material"

// Texts from /src/i18n
// import deTexts from '../i18n/i18n-de.json'

// 
export default function Footer({ props, theme }) {

   // console.log( {...theme } ) // puts out the whole object
   // get the current windows sizes:
   // console.log('outerWidth:', window.outerWidth, 'outerHeight:', window.outerHeight)
   // console.log('Theme: ', theme, 'Props: ', props)

   // 
   return (
      <ThemeProvider theme={theme}>
         <main>
            <div className='row m-1 bg-dark rounded'>
               <div className='col'>
                  <Box className='rounded'
                     orientation='col'
                     // sx={{ backgroundColor: theme.palette.primary.main, color: 'lightgrey', position: 'relative' }}>
                     sx={{ p: 1, 
                        backgroundColor: theme.palette.success.dark, 
                        // color: theme.palette.success.light,
                        color: 'white', 
                        position: 'relative' 
                        }}>                     
                     Box01
                  </Box>
               </div>
               <div className='col'>
                  <Box className='rounded'
                     orientation='col'
                     sx={{ p: 1, backgroundColor: 'darkslategrey', color: 'white', position: 'relative' }}>
                     Box02
                  </Box>
               </div>
            </div>
         </main>
      </ThemeProvider >
   )  // return()
}  // Footer()