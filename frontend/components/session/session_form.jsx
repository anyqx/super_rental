import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);

    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    renderErrors() { // need to fix
        return (
            <ul>
                {/* {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`} className="session-errors">
                        {error}
                    </li>
                ))} */}
            </ul>
        );
    }

    render() {
        const {formType} = this.props;
        if (formType === 'signup') {
            return (
                <>
                <div className='signup-form-container'>
                    <div className='welcome'>Welcome to Roofstock</div>
                    <div>
                        <ul className='intro'>
                            <li>Buy and sell tenant-occupied rental houses outside your local market</li>
                            <li>Properties on our marketplace are certified so you can invest with confidence</li>
                            <li>Select a trusted local property manager and own without the hassle</li>
                        </ul>
                    </div>
                    <form onSubmit={this.handleSubmit} className="welcome-msg">
                        <h2>SIGN UP</h2>
                        {this.renderErrors()}
                        <div className="signup-form">
                            <input type="text" value={this.state.email} onChange={this.update('email')} className="login-input" placeholder='Your Email'/>
                            <input type="password" value={this.state.password} onChange={this.update('password')} className="login-input" placeholder='Password'/>
                            <input type="password" value={this.state.password} onChange={this.update('password')} className="login-input" placeholder='Confirm Password' />
                            <input className="signup-submit" type="submit" value='signup' />
                        </div>
                    </form>
                </div>
            </>
            )
        } else {
            return(
                <div className='login-form-container'>
                    <form onSubmit={this.handleSubmit}>
                        <h2>LOG IN</h2>
                        {this.renderErrors()}
                        <div className="login-form">
                            <input type="text" value={this.state.email} onChange={this.update('email')} className="login-input" placeholder='Your Email' />
                            <input type="password" value={this.state.password} onChange={this.update('password')} className="login-input" placeholder='Password' />
                            <input className="signin-submit" type="submit" value='login' />
                        </div>
                    </form>
                </div>
            )
        }
    }
}



export default SessionForm;


