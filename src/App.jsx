import { React, useState } from 'react'
import { Route, Switch, Redirect, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import Profile from './components/Profile/Profile.jsx'
import Transactions from './components/Transactions/Transactions.jsx'
import Calculator from './components/Calculator/Calculator.jsx'
import Analytics from './components/Analytics/Analytics.jsx'

import { AnimatePresence } from "framer-motion"


function App() {

  const [state, setState] = useState(false);

  const location = useLocation()

  return (
    <main id='main'>
      <Navbar />
      <div className='main-content'>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Redirect exact path="/" to="/profile" />
            <Route path="/profile" component={Profile} />
            <Route path="/calculator" component={Calculator} />
            <Route path="/analytics" component={Analytics}/>
            <Route path="/transactions" component={Transactions}/>
            {/* <Route path="*" component={NotMatch}/> */}
          </Switch>
        </AnimatePresence>

      </div>
    </main>
  )
}

export default App
