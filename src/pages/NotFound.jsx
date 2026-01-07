/** 
 *   Stand: 24.12.2025   
 * 
 *   Controller and view "NotFound" 
 * 
*/

// Imports
import { Container, Typography } from '@mui/material'  //

//
export default function NotFound( { props,theme } ) {

  console.log(props, theme)

  return (
    // <Container className="cssClassName">

    <Container maxWidth="xl">
      <Typography component="h4" variant="h4" sx={{ backgroundColor: theme.palette.error.dark, color: theme.palette.error.main }}>
        <div>
          Not Found Page
        </div>
      </Typography>

      {/* comment  */}

    </Container>
  )  // return()
}  // NotFound()
