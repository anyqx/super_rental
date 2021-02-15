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

    demoSignIn(e) {
        e.preventDefault();
        const demoUser = {
            email: 'demo@email.com',
            password: '1234567'
        }
        this.props.demoLogin(demoUser)
            .then(() => this.props.history.push('/home'))
            .then(this.props.closeModal)
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
        )
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
                            <li><img id='intro-img' src={window.signup1URL} />Buy and sell tenant-occupied rental houses outside your local market</li>
                            <li><img id='intro-img' src={window.signup2URL} />Properties on our marketplace are certified so you can invest with confidence</li>
                            <li><img id='intro-img' src={window.signup3URL} />Select a trusted local property manager and own without the hassle</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <form onSubmit={this.handleSubmit} className="welcome-msg">
                        <h2>SIGN UP</h2>
                        {this.renderErrors()}
                        <div className="signup-form">
                            <input type="text" value={this.state.email} onChange={this.update('email')} className="login-input" placeholder='Your Email'/>
                            <input type="password" value={this.state.password} onChange={this.update('password')} className="login-input" placeholder='Password'/>
                            <input type="password" value={this.state.password} onChange={this.update('password')} className="login-input" placeholder='Confirm Password' />
                            <input className="signup-submit" type="submit" value='signup' />
                        </div>
                        <span className='other-form-link'>Already a member?</span>
                        {this.props.navLink}
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
                            <input className="signin-submit" type="submit" value='login' className="login-input" />
                        </div>
                        <span className='other-form-link'>Don't have an account?</span>
                        {this.props.navLink}
                    </form>
                </div>
            )
        }
    }
}


 
export default SessionForm;


