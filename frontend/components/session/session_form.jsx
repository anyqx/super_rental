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
        this.demoLogIn = this.demoLogIn.bind(this)

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
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`} className="session-errors">
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    demoLogIn(e) {
        e.preventDefault();
        e.stopPropagation();
        const demoUser = {
            email: 'demo@gmail.com',
            password: '12345678'
        }
        this.props.processForm(demoUser)
            // .then(() => this.props.history.push('/'))
    }

    componentWillUnmount() {
        this.props.removeErrors();
    }

    render() {
        const {formType} = this.props;
        if (formType === 'signup') {
            return (
                <>
                <div className='signup-form-container'>
                    <div className='welcome'>Welcome to SuperRental</div>
                    <div>
                        <ul className='intro'>
                            <li><img id='intro-img' src={window.signup1URL} /><p>Buy and sell tenant-occupied rental houses outside your local market</p></li>
                            <li><img id='intro-img' src={window.signup2URL} /><p>Properties on our marketplace are certified so you can invest with confidence</p></li>
                            <li><img id='intro-img' src={window.signup3URL} /><p>Select a trusted local property manager and own without the hassle</p></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <form onSubmit={this.handleSubmit} className="user-form">
                        <h2>SIGN UP</h2>
                        <div className="entry-form">
                            {this.renderErrors()}
                            <input type="text" value={this.state.email} onChange={this.update('email')} className="form-input" placeholder='Your Email'/>
                            <input type="password" value={this.state.password} onChange={this.update('password')} className="form-input" placeholder='Password'/>
                            {/* <input type="password" value={this.state.password} onChange={this.update('password')} className="form-input" placeholder='Confirm Password' /> */}
                            <input className="submit-button" type="submit" value='signup' />
                        </div>
                    </form>
                        <span className='other-form-link'>Already a member? &ensp;{this.props.navLink}</span>
                    

                </div>
            </>
            )
        } else {
            return(
                <div className='login-form-container'>
                    <form onSubmit={this.handleSubmit}>
                        <h2>LOG IN</h2>
                        <div className="entry-form">
                            {this.renderErrors()}
                            <input type="text" value={this.state.email} onChange={this.update('email')} className="form-input" placeholder='Your Email' />
                            <input type="password" value={this.state.password} onChange={this.update('password')} className="form-input" placeholder='Password' />
                            <input className="submit-button" type="submit" value='login'/>
                        </div>
                    </form>
                    <div onClick={this.demoLogIn} className="demo-button">Demo Login</div>
                    <span className='other-form-link'>Don't have an account? &ensp; {this.props.navLink}</span>
                </div>
            )
        }
    }
}


 
export default SessionForm;


