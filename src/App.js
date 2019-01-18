import React, { Component } from 'react'
import './App.css'
import 'typeface-roboto'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './component/header/header'
import Loginsignup from './component/loginsignup/loginsignup'
import Otpverify from './component/loginsignup/otpverify/otpverify'
import Testlist from './component/testlist/testlist'
import Forgetpassword from './component/loginsignup/forgetpassword/forgetpassword'
import Testdescptions from './component/testdescptions/testdescptions'
import Test from './component/test/test'
import Speaking from './component/test/speaking/speaking'
import Speakingtest from './component/test/speaking/speakingtest/speakingtest'
import Demo from './component/test/speaking/demo/demo'
import Demoquestion from './component/test/speaking/demo/demoquestion/demoquestion'
import Listening from './component/test/listening/listening'
import Listeningtest from './component/test/listening/listeningtest/listeningtest'
import Reading from './component/test/reading/reading'
import Readingtest from './component/test/reading/readingtest/readingtest'
import Writingtest from './component/test/writing/writingtest/writingtest'
import Writing from './component/test/writing/writing'
import Writingresult from './component/test/writing/result/result'
import Listeningresult from './component/test/listening/listeningresult/listeningresult'
import Readingresult from './component/test/reading/readingresult/readingresult'
import Speakingresult from './component/test/speaking/speakingresult/speakingresult'
import Plans from './component/plans/plans'
import Profile from './component/profile/profile'
import Setting from './component/setting/setting'
import Message from './component/message/message'
import Speakinginstructions from './component/test/speaking/speakinginstructions/speakinginstructions'
import Listeninginstructions from './component/test/listening/listeninginstructions/listeninginstructions'
import Writinginstructions from './component/test/writing/writinginstructions/writinginstructions'
import Readinginstructions from './component/test/reading/readinginstructions/readinginstructions'

class App extends Component {
  render () {
    return (
      <Router>
        <div >
          <Header />
          <Switch>
            <Route path='/speakinginstructions' component={Speakinginstructions}/>
            <Route path='/readinginstructions' component={Readinginstructions}/>
            <Route path='/writinginstructions' component={Writinginstructions}/>
            <Route path='/listeninginstructions' component={Listeninginstructions}/>
            <Route path='/message' component={Message}/>
            <Route path='/setting' component={Setting}/>
            <Route path='/plans' component={Plans}/>
            <Route path='/profile' component={Profile}/>
            <Route path='/speakingresult' component={Speakingresult}/>
            <Route path='/readingresult' component={Readingresult}/>
            <Route path='/listeningresult' component={Listeningresult}/>
            <Route path='/writingresult' component={Writingresult}/>
            <Route path='/writingtest' component={Writingtest} />
            <Route path='/writing' component={Writing} />
            <Route path='/readingtest' component={Readingtest} />
            <Route path='/reading' component={Reading} />
            <Route path='/listeningtest' component={Listeningtest} />
            <Route path='/listening' component={Listening} />
            <Route path='/speakingtest' component={Speakingtest} />
            <Route path='/demoquestion' component={Demoquestion} />
            <Route path='/demo' component={Demo} />
            <Route path='/speaking' component={Speaking} />
            <Route path='/test' component={Test} />
            <Route path='/testlist' component={Testlist} />
            <Route path='/testdescptions' component={Testdescptions} />
            <Route path='/' component={Loginsignup} />
            <Route path='/otp' component={Otpverify} />
            <Route path='/forgetpassword' component={Forgetpassword} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
