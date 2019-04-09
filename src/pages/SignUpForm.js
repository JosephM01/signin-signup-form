import React, { Component } from 'react';
import { Button, Input, Select } from '../components/index';
import countries from '../country.json';
import genders from '../gender.json';

const serviceTerms = 'https://en.wikipedia.org/wiki/Terms_of_service';
const privacyPolicy = 'https://en.wikipedia.org/wiki/Privacy_policy';



class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      gender: '',
      country: '',
      agreed: false,
    };

    this.handleSelection = this.handleSelection.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange (event) {
    let target = event.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    let name = target.id;
      this.setState({
        [name]: value
      });
  }
  
  handleSelection (event) {
    let { name, value } = event.target;
    this.setState({
      [name]: value
     });
  }

  handleSubmit (event) {
    event.preventDefault();
    console.log(this.state)
    
  }


  render() {
    const {
      firstName,
      lastName,
      email,
      password,
      agreed,
    }= this.state;
    const { onClick } = this.props;
    return(
      <div>
        <form>
          <label className='labels'>Sign Up</label>
          <div className='fieldPosition'>
            <Input 
              type='text' 
              id='firstName' 
              name='firstName' 
              placeholder='First name' 
              value={firstName} 
              className='inputField' 
              onChange={this.handleChange} 
            />
          </div>
          <div className='fieldPosition'>
            <Input 
              type='text' 
              id='lastName' 
              name='lastName' 
              placeholder='Last name' 
              value={lastName} 
              className='inputField' 
              onChange={this.handleChange}
            />
          </div>
          <div className='fieldPosition'>
            <Input 
              type='email' 
              id='email' 
              name='email' 
              placeholder='Email' 
              value={email} 
              className='inputField' 
              onChange={this.handleChange}
            />
          </div>    
          <div className='fieldPosition'>
            <Input 
              type='password' 
              id='password' 
              name='password' 
              placeholder='Password' 
              value={password} 
              className='inputField' 
              onChange={this.handleChange}
            />
          </div>
          <div className='fieldPosition'>
            <label className='labels'>Select a gender</label>
            <Select 
              name='gender' 
              required 
              options={genders} 
              placeholder='-- Select --' 
              onChange={this.handleSelection} 
            />
          </div>
          <div className='fieldPosition'>
            <div>
              <label className='labels'>Select a country</label>
            </div>
            <Select 
              name="country" 
              required 
              options={countries} 
              placeholder='-- Select --' 
              onChange={this.handleSelection}
            />
          </div>
          <div className='checkboxField'>
            <label className='labels'>
              I agree to the &nbsp;
              <a 
                href={serviceTerms}
              >
                Terms of Service
              </a>&nbsp; and &nbsp;
              <a 
                href={privacyPolicy}
              > 
                Privacy Policy
              </a>.
            </label>
            <Input 
              type='checkbox' 
              id='agreed' 
              name='agreed' 
              value={agreed} 
              className='checkbox' 
              onChange={this.handleChange}
            />
          </div>
          <div className='fieldPosition'>
            <Button 
              type='submit' 
              onClick={this.handleSubmit}
            >
              Sign Up
            </Button>
          </div>            
        </form>
        <div className='fieldPosition'>
          <Button type='button' onClick={onClick}>
            Already have an account? Click here!
          </Button>
        </div>
      </div>
    );
  }
}

export default SignUpForm;