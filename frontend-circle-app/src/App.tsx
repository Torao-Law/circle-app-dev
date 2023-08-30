import { Box } from '@chakra-ui/react'
import Main from './layouts/Main'
import Home from './pages/home'
import Profile from './pages/profile'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Box >
      <Router>
        <Routes>
          <Route path={"/"} element={
            <Main>
              <Home />
            </Main>
          } />
          <Route path={"/profile"} element={<Profile />} />
        </Routes>
      </Router>   
      </Box>  
    </>
  )
}

export default App
