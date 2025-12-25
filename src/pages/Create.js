/** 
*   Stand: 15.10.2025   
*   Controller and view "Create", data from JSON-Server 
*/

import React from 'react'  // useState etc.
import { Container, Typography, TextField, RadioGroup, Radio, FormControlLabel } from '@mui/material'  //
// use component "material icons"? 

export default function Create() {

  // const [localVariable, setFunction] = React.useState(initialValue);

  // interact with object from json-server, data from ./data-folder
  // React.useEffect( () => { fetch() }, [] )  // useEffect() 

  return (
    // <Container className="cssClassName">

    <Container maxWidth="xl">
      <Typography component="h4" variant="h4" gutterBottom="true">
        <div>
          Create page
        </div>
        <ul>
          <li>Use Material UI components</li>
        </ul>
      </Typography>

      {/* <form noValidate autoComplete="on" onSubmit={handleSubmit}> */}
      <form noValidate autoComplete="on">
        <TextField
          className=''
          // onChange={(e) => setFN(e.target.value)}
          variant="outlined"
          color="secondary"
          type="text"
          required
          label="TextField label"
          defaultValue="defaultValue"
          fullWidth
          margin="normal"
        />

        {/* use FormControl, FormLabel, <RadioGroup value, onChange>, <FormControlLabel value="" control={<React-HTML-Tag>} label=""/> */} 

        <RadioGroup value="">
          <Radio id='' value="RadioValue" />
        </RadioGroup>
      </form>

      {/* use submit-button  */}

    </Container>
  )
}
