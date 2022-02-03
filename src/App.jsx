import { React, useEffect, useState } from 'react'
import { Route, Switch, Redirect, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import Profile from './components/Profile/Profile.jsx'
import Transactions from './components/Transactions/Transactions.jsx'
import Calculator from './components/Calculator/Calculator.jsx'
import Analytics from './components/Analytics/Analytics.jsx'

import { AnimatePresence } from "framer-motion"


function App() {

  const location = useLocation()

  // const [resize, setResize] = useState(false)

  // useEffect(() => {
  //   window.addEventListener('resize', () => {
  //     console.log(window.innerWidth)
  //     if(window.innerWidth <= 1640){
  //       setResize(true)
  //     }else{
  //       setResize(false)
  //     }
  //   });

  //   function myFunction(x) {
  //     if (x.matches) { // If media query matches
  //       setResize(true)
  //     } else {
  //       setResize(false)
  //     }
  //   }
    
  //   const x = window.matchMedia("(max-width: 1640px)")
  //   x.addListener(myFunction)
  // }, [])

  return (
    <section id="main-app">
        <div className="resize">
          <p className="resize-txt">
            SITE NOT RESPONSIVE...YET :)
          </p>
        </div>
        <main id='main'>
        <Navbar />
        <div className='main-content'>
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Redirect exact path="/" to="/news" />
              <Route path="/news" component={Profile} />
              <Route path="/calculator" component={Calculator} />
              <Route path="/analytics" component={Analytics} />
              <Route path="/transactions" component={Transactions} />
              
              {/* <Route path="*" component={NotMatch}/> */}
            </Switch>
          </AnimatePresence>

        </div>
      </main>
    </section>

  )
}

export default App
