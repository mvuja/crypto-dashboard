import { React, useEffect, useState } from 'react'
import { Route, Switch, useLocation, Redirect } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import Navbar from './components/Navbar/Navbar.jsx'
import Profile from './components/Profile/Profile.jsx'
import Transactions from './components/Transactions/Transactions.jsx'
import Calculator from './components/Calculator/Calculator.jsx'
import Analytics from './components/Analytics/Analytics.jsx'

import { AnimatePresence } from "framer-motion"


function App() {

  const location = useLocation()
  const [contacts, setContacts] = useState(getInitialContacts())

  // LOCAL STORAGE
  function getInitialContacts() {
    const temp = localStorage.getItem('contacts')
    const savedContacts = JSON.parse(temp)
    return savedContacts || [
        {id: uuidv4(), name: 'Enoch Davies', email: 'enoch.davies@gmail.com', amount: '32543', coin: 'BTC'},
        {id: uuidv4(), name: 'Ivo Mcneill', email: 'ivo.mcneill@hotmail.com', amount: '554951', coin: 'ETH'},
        {id: uuidv4(), name: 'Marco Reus', email: 'marco.reus11@bvb.com', amount: '24441', coin: 'BTC'},
        {id: uuidv4(), name: 'Siana Whelan', email: 'siana.whelan@gmail.com', amount: '325818', coin: 'ADA'},
        {id: uuidv4(), name: 'Dawood Forrest', email: 'dawood@gmail.com', amount: '9192', coin: 'SOL'},
    ]
  }
  useEffect(() => {
    const temp = JSON.stringify(contacts)
    localStorage.setItem('contacts', temp)

  }, [contacts])


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
                <Route path="/news">
                  <Profile />
                </Route>
                <Route path="/calculator">
                  <Calculator />
                </Route>
                <Route path="/analytics">
                  <Analytics />
                </Route>
                <Route path="/transactions">
                  <Transactions contacts={contacts} setContacts={setContacts} />
                </Route>
                <Redirect from="/" to="/news"/>
                
                {/* <Route path="*" component={NotMatch}/> */}
              </Switch>
            </AnimatePresence>

          </div>
        </main>
    </section>

  )
}

export default App
