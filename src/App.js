import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import SignInForm from './pages/SignInForm'
import SignUpForm from './pages/SignUpForm'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      registered: true
    }
    this.pageSwitch = this.pageSwitch.bind(this)
  }

  pageSwitch () {
    const { registered } = this.state
    this.setState({ registered: !registered })
  }

  render () {
    const { registered } = this.state
    return (
      <div className='App'>
        <div className='appLogoBox'>
          <img src={logo} className='App-logo' alt='logo' />
        </div>
        <div className='appForm'>
          { registered
            ? <SignInForm onClick={this.pageSwitch} />
            : <SignUpForm onClick={this.pageSwitch} />
          }
        </div>
      </div>
    )
  }
}

export default App
