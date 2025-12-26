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
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { createTheme } from '@mui/material/styles'

//
import Notes from './pages/Notes.js'
import Create from './pages/Create.js'
import NotFound from './pages/NotFound.js'

//
import Layout from './components/Layout.js'

// 
export default function App( props ) {

  console.log(props)

  // create theme: typeof Theme
  const theme = createTheme({
    palette: {
      primary: {
        main: '#556cd6ff',
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
      },
      warning: {
        main: '#ff9900',
      },
      info: {
        main: '#0000ff',
      },
      background: {
        main: '#67060666', 
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

  return (
    <Router>
      <Layout>
        <Routes>
          {/* Each route has it's own URL */}
          <Route index exact path="/" element={<Notes theme={theme} />} />
          <Route path="/create" element={<Create />} />
          {/* other route(s) to diffenrent components */}
          <Route path="*" element={<NotFound props={props} theme={theme} />} />
        </Routes>
      </Layout>
    </Router>
  )
}