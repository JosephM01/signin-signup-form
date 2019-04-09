import React, { Component } from 'react'
import '../App.css'
import { Button, Input } from '../components/index'

class SignInForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    let { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit (event) {
    event.preventDefault()
    console.log(this.state)
  }

  render () {
    const {
      email,
      password
    } = this.state
    const { onClick } = this.props
    return (
      <div className='formCenter'>
        <form className=''>
          <label className='formField__Label'>Sign In</label>
          <div className='formField'>
            <Input type='email' id='email' name='email' placeholder='Email' value={email} onChange={this.handleChange} className='formField__Input' />
          </div>
          <div className='formField'>
            <Input type='password' id='password' name='password' placeholder='Password' value={password} onChange={this.handleChange} className='formField__Input' />
          </div>
          <div className='formField'>
            <Button
              type='submit'
              onClick={this.handleSubmit}
              className='formField__Button'
            >
              Sign In
            </Button>
          </div>
          <div className='formField'>
            <Button
              type='button'
              className='pageSwitcher'
              onClick={onClick}
            >
              Don't have an account? Click here!
            </Button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignInForm
