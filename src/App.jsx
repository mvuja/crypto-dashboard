import { React } from 'react'
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import Contacts from './components/Contacts/Contacts.jsx'

function App() {
  return (
    <main id='main'>
      <Navbar />
      <div className='main-content'>
      <Switch>
          {/* <Route exact path="/profile" component={Profile} /> */}
          <Route path="/contacts" component={Contacts}/>
          {/* <Route path="/calculator" component={Calculator} /> */}
          {/* <Route path="/api" component={Api}/> */}
          {/* <Route path="*" component={NotMatch}/> */}
      </Switch>
      </div>
    </main>
  )
}

export default App
