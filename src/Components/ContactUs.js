import React, { Component } from 'react'

class ContactUs extends Component {
    state = {
        firstName:'',
        lastName:'',
        email:'',
        phone:'',
        firstNameErr:'',
        lastNameErr:'',
        emailErr:'',
        phoneErr:''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.validateForm()
    }

    //validation
    // firstName > 4
    // lastName >1
    // email '@' exist are not
    // phone number be 10
    validateForm = () =>{
        let firstNameErr = '';
        let lastNameErr = '';
        let emailErr = '';
        let phoneErr = '';

        if(this.state.firstName.length <=4) {
            firstNameErr = 'first Name should be atleast 4 char';
        }

        if(this.state.lastName.length<1){
            lastNameErr = 'last name should be alteast 1char';
        }
             
        if(!this.state.email.includes('@')){
            emailErr = 'enter a valid email';
        }

        if(this.state.phone.length != 10){
            phoneErr = 'enter a valid phone number';
        }

        // falsy values
        // 0,NaN ,'', undefined, flase, null, 

        if(firstNameErr || lastNameErr || emailErr || phoneErr){
            this.setState({firstNameErr, lastNameErr, emailErr, phoneErr})
        }else{
            this.setState({firstNameErr, lastNameErr, emailErr, phoneErr})
        }
    }

    handleChange = (e) => {
       const { name, value } = e.target; 
       this.setState({[name] : value})
    }

    render() {
        return (
            <div>
                <div className='row'>
                    <div className='col-md-4'></div>
                    <div className='col-md-4'>
                        <h2 className='my-2'>Contact Us</h2>
                        <form onSubmit={this.handleSubmit}>
                            <div className='mt-1'>
                                <input type="text" name='firstName' className='form-control'
                                    placeholder='Enter your firstName'
                                    onChange={this.handleChange}
                                    value={this.state.firstName}
                                />
                            </div>
                            <p className='text-danger'>{this.state.firstNameErr}</p>
                            <div className='mt-1'>
                                <input type="text" name='lastName' className='form-control'
                                    placeholder='Enter your lastName'
                                    onChange={this.handleChange}
                                />
                            </div>
                            <p className='text-danger'>{this.state.lastNameErr}</p>

                            <div className='mt-1'>
                                <input type="email" name='email' className='form-control'
                                    placeholder='Enter your email'
                                    onChange={this.handleChange}
                                />
                            </div>
                            <p className='text-danger'>{this.state.emailErr}</p>

                            <div className='mt-1'>
                                <input type="number" name='phone' className='form-control'
                                    placeholder='Enter your phoneNmuber'
                                    onChange={this.handleChange}
                                />
                            </div>
                            <p className='text-danger'>{this.state.phoneErr}</p>

                            <button className='btn btn-primary mt-2'>Submit</button>
                        </form>
                    </div>
                    <div className='col-md-4'></div>
                </div>
            </div>
        )
    }
}

export default ContactUs