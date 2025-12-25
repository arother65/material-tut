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
// import { ThemeProvider } from '@mui/material/styles'  // errs out

//
import Notes from './pages/Notes'
import Create from './pages/Create'
import NotFound from './pages/NotFound'

//
import Layout from './components/Layout'

// 
export default function App() {
  return (
    // <ThemeProvider>
    <Router>
      <Layout>
        <Routes>
          {/* Each route has it's own URL */}
          <Route index exact path="/" element={<Notes />} />
          <Route path="/create" element={<Create />} />
          {/* other route(s) to diffenrent components */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
    // </ThemeProvider>
  )
}