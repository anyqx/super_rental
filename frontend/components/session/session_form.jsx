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
                <form onSubmit={this.handleSubmit} className="login-box">
                    Welcome to Roofstock!
          <br />
                Please {this.props.formType}
                    {this.renderErrors()}
                    <div className="login-form">
                        <br />
                        <label>Email:
                            <input type="text" value={this.state.email} onChange={this.update('email')} className="login-input"/>
                        </label>
                        <br />
                        <label>Password: <input type="password" value={this.state.password} onChange={this.update('password')} className="login-input"/>
                        </label>
                        <br />
                        <input className="session-submit" type="submit" value={this.props.formType} />
                    </div>
                </form>
            </div>
        )
    }
}



export default SessionForm;


