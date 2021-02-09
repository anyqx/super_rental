import React from 'react';
import { ReactReduxContext } from 'react-redux';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: '',
            password: '',
        }
    }

    handleInput(type){
        return (e)=> {
            this.setState({ [type]: e.target.value });
        }
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createNewUser(this.state)
            .then(() => this.props.history.push('/')) //what to push?? ('/chirps')
    }

    render() { 
        return ( 
            <div className='session-form'>
                <h2>Sign Up!</h2>
                <form>
                    <label>Email:
                        <input type="text" value={this.state.email} onChange={this.handleInput('email')}/>
                    </label>
                    <label>Password:
                        <input type="password" value={this.state.password} onChange={this.handleInput('password')} />
                    </label>
                    <button onClick={this.handleSubmit}>Sign Up</button>
                </form>
            </div>
                
         );
    }
}
 
export default Signup;