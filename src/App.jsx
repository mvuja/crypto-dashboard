import { React } from 'react'
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'

function App() {
  return (
    <main id='main'>
      <Navbar />
      <div className='main-content'>
      {/* <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/crates" component={CratesPage}/>
          <Route path="/contact" component={ContactPage}/>
          <Route path="*" component={NotMatch}/>
      </Switch> */}
      </div>
    </main>
  )
}

export default App
