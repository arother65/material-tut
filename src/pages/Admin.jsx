/** 
*   Stand: 10.01.2026
*   Controller and view "Create", data from JSON-Server 
*/

//* Imports 
import { useState } from 'react'
import { Button, Chip, Stack, Tooltip, Typography } from "@mui/material"
import { Container } from '@mui/material'  //

//* Interface
import Slider from '@mui/joy/Slider'
import SendIcon from '@mui/icons-material/Send'

//' 
import AppBarStd from '../components/AppBarStd.jsx'
import Footer from '../components/Footer.jsx'

//
export default function Admin({ theme }) {

  // react-standard-hooks/functions to control Sliders
  const [state, setState] = useState({
    idUsernameLength: 10,
    idPwdLength: 10
  })

  // handle function for data changes in the CHILD component "TestSlider"
  const [data, setData] = useState()
  const handleDataChange = (childData) => {
    setData(childData)
  }  // handleDataChange

  const handleChange = (event) => {

    handleDataChange(event.target.value)
    switch (true) {
      /* ! hier wird als id nur undefined vom slider geliefert */
      case event.target.name === 'idUsernameLength' || event.target.name === 'idPwdLength':
        setState({
          ...state,
          [event.target.name]: event.target.value
        })
        break
      default:
        break
    }
  }  // handleChange() Slider-Components

  // 
  return (
    <>
      <header>
        <AppBarStd theme={theme} showLoginState={true} />
      </header>

      <main>
        <Container maxWidth="xl" sx={{ mt: 10 }}>
          <div className='row rounded shadow-lg'>
            <div className='col m-1 border rounded-2'>
              <Stack direction="row" spacing={1}
                sx={{ m: 1, p: 1, flexDirection: 'row', justifyContent: 'flex-start' }}>
                <Stack direction="col" sx={{ width: '50%', m: 1 }}>
                  <Typography>
                    Set Username-length:
                  </Typography>
                </Stack>
                <Stack direction="col" sx={{ width: '50%', m: 1 }}>
                  <Slider
                    name='idUsernameLength'
                    aria-label="Slider with pwdLengthValue"
                    defaultValue={10}
                    valueLabelDisplay="auto"
                    step={1}
                    marks
                    /*                         min={ getState() } */
                    min={10}
                    /* min und max können nicht aus dem state-objekt gezogen werden! */
                    max={20}
                    onChange={handleChange}
                    value={state.idUsernameLength}
                  /* wird nicht aktuell an die UI weitergegeben */
                  /* no change of state-object */
                  /* onChangeCommitted={handleChange} */
                  />
                  <Chip label= {state.idUsernameLength} color="success" variant="outlined" />
                </Stack>
              </Stack>  {/* Stack for one row with Sliders*/}
            </div>

            <div className='col m-1 border rounded-2'>
              <Tooltip title="set pwd-length" arrow>
                <Stack direction="col" sx={{ m: 1 }}>
                  <Typography sx={{ p: 1 }}>
                    Set Password-length:
                  </Typography>
                  <Slider
                    name='idPwdLength'
                    aria-label="Slider pwdLength"
                    defaultValue={10}
                    valueLabelDisplay="auto"
                    step={1}
                    marks
                    min={10}
                    max={20}
                    sx={{
                      color: 'lightgreen',
                      '&:hover': {
                        bgcolor: 'secondary.light',
                      }
                    }}
                    onChange={handleChange}
                    value={state.idPwdLength}
                  />
                  <Chip label= {state.idPwdLength} color="success" variant="outlined"/>
                </Stack>
              </Tooltip>
            </div>
          </div>

          <div className='row border rounded shadow-lg'>
            <div className='col m-1 border rounded-2'>
              <Button variant="contained" endIcon={<SendIcon />}
                onClick={() => {
                  // set the choosen values to localStorage, object state
                  localStorage.setItem("adminData", JSON.stringify(state))
                }}>
                Save
              </Button>
            </div>
          </div>
        </Container>
      </main>

      <Footer theme={theme} />
    </>
  )
}  // Admin()
