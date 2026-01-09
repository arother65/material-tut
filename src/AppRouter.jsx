/** "Material UI Crash Course", net ninja 
 *   Stand: 24.12.2025
 * 
 *   https://netninja.dev/courses/material-ui-crash-course/lectures/31388188
 *   UI: https://mui.com/material-ui/
 *
 *  "React Routing"
 *  https://reactnative.dev/docs/getting-started
 *  https://react.dev/blog/2025/02/14/sunsetting-create-react-app#routing
*/

// 
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { createTheme } from '@mui/material/styles'

//
import Notes from './pages/Notes.jsx'
import Create from './pages/Create.jsx'
import About from './pages/About.jsx'
import NotFound from './pages/NotFound.jsx'

//
import Layout from './components/Layout.js'

// 
export default function AppRouter(props) {

  // console.log(props)

  // create theme: typeof Theme
  const theme = createTheme({
    palette: {
      primary: {
        main: process.env.REACT_APP_PRIMARY_COLOR || '#556cd6ff',  // '#556cd6ff',
        light: '#778deaff',
        dark: '#334ac2ff',
      },
      secondary: {
        main: '#19857b',
        light: '#4fb3aaff',
        dark: '#00514aff',
      },
      error: {
        main: '#ff0000',
        light: '#ff3333',
        dark: '#920707ff',
      },
      success: {
        main: '#0ea30eff',
        light: '#6fbf73',
        dark: '#357a38',
      },
      warning: {
        main: '#ff9900',
      },
      info: {
        main: '#0000ff',
      },
      background: {
        main: '#88090982',
        light: ''
      },
      contrastThreshold: 3,
      tonalOffset: 0.5,
    }  // palette

    // .typography
    // .spacing
    // .breakpoints
    // .zIndex
    // .transitions
    // .components
  })  // createTheme()
  const [actTheme] = useState(theme)

  //
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Each route has it's own URL */}
          <Route index exact path="/" element={<Notes props={props} theme={actTheme} />} />
          <Route path="/create" element={<Create props={props} theme={actTheme} />} />
          <Route path="/about" element={<About props={props} theme={actTheme} />} />

          {/* other route(s) to diffenrent components */}
          <Route path="*" element={<NotFound props={props} theme={actTheme} />} />
        </Routes>
      </Layout>
    </Router>
  )
}  // AppRouter()