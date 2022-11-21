import React from 'react'
import About from './Components/Home/About/About'
import Arrival from './Components/Home/Arrival/Arrival'
import Popular from './Components/Home/Popular/Popular'
import Header from './Layout/Header/Header'
import Footer from './Layout/Footer/Footer'
import Home from './Pages/Home/Home'
import "./Scss/Style.scss"  

const App = () => {
  return (
    <>
    <Header/>
      <main>
        <Home/>
        <Arrival/>
        <Popular/>
        <About/>
      </main>  
    <Footer/>
              {/* <Link to="/AboutPage">About</Link>
          <Router>
            <Route path='/AboutPage' element={<AboutPage/>}/>
          </Router> */}
    </>
  )
}

export default App