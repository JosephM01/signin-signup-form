import React, { Component } from 'react';
import '../App.css';
import { Button, Input } from '../components/index'


class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      email: '',
      password: '',
    };
  
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  handleChange(event) {
    let { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }
  
  
  render() {
    const {
      email,
      password,
    } = this.state;
    const { onClick } = this.props;
    return(
      <div>
        <form>
          <label className='labels'>Sign In</label>
          <div className="fieldPosition">
            <Input type='email' id='email' name='email' placeholder='Email' value={email} onChange={this.handleChange} className='inputField' />
          </div>
          <div className='fieldPosition'>
            <Input type='password' id='password' name='password' placeholder='Password' value={password} onChange={this.handleChange} className='inputField' />
          </div>
          <div className='fieldPosition'>
            <Button 
              type='submit' 
              onClick={this.handleSubmit} 
              className=''
            >
              Sign In
            </Button>
          </div>
          <div className='fieldPosition'>
            <Button 
              type='button'
              className='' 
              onClick={onClick}
            >
              Don't have an account? Click here!
            </Button>
          </div>
        </form>
      </div>
      
    );
  }
}

export default SignInForm;