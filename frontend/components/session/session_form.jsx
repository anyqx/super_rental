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
        return (
            <div className="login-form-container">
                    Welcome to Roofstock
                    <ul classname='intro-msg'>
                        <li>Buy and sell tenant-occupied rental houses outside your local market</li>
                        <li>Properties on our marketplace are certified so you can invest with confidence</li>
                        <li>Select a trusted local property manager and own without the hassle</li>
                    </ul>
                <form onSubmit={this.handleSubmit} className="welcome-msg">
                Please {this.props.formType}
                    {this.renderErrors()}
                    <div className="login-form">
                        <input type="text" value={this.state.email} onChange={this.update('email')} className="login-input" placeholder='Your Email'/>
                        <input type="password" value={this.state.password} onChange={this.update('password')} className="login-input" placeholder='Password'/>
                        <input type="password" value={this.state.password} onChange={this.update('password')} className="login-input" placeholder='Confirm Password' />

                        <input className="session-submit" type="submit" value={this.props.formType} />
                    </div>
                </form>
            </div>
        )
    }
}



export default SessionForm;


