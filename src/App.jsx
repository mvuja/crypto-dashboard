import { React } from 'react'
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import Profile from './components/Profile/Profile.jsx'
import Contacts from './components/Contacts/Contacts.jsx'
import Calculator from './components/Calculator/Calculator.jsx'
import News from './components/News/News.jsx'

function App() {
  return (
    <main id='main'>
      <Navbar />
      <div className='main-content'>
      <Switch>
          <Route exact path="/profile" component={Profile} />
          <Route path="/contacts" component={Contacts}/>
          <Route path="/calculator" component={Calculator} />
          <Route path="/news" component={News}/>
          {/* <Route path="*" component={NotMatch}/> */}
      </Switch>
      </div>
    </main>
  )
}

export default App
