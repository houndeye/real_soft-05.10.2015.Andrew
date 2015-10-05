import React from 'react';
import Reflux from 'reflux';

import RB from 'react_bootstrap'

import actions from '../Actions/Register';
import store from '../Stores/Register';

let Style = {};
let Button = RB.Button;
let Input = RB.Input;

export default React.createClass({

    mixins: [Reflux.connect(store)],
    userInput(e){
        this.setState({username: e.target.value});
    },
    passwordInput(e){
        this.setState({password: e.target.value});
    },
    confirmPasswordInput(e){
        this.setState({confirmPassword: e.target.value});
        if (e.target.value == this.state.password) {
            this.setState({register: true})
        }
    },
    onClick(){
        if (this.state.register) {
            console.log(this.state);
            actions.register(this.state.username, this.state.password);
        }
    },

    render(){
        return (<form style={Style}>
            <div className="form-group">
                <Input type="text"
                       className="form-control" ref='username' placeholder="Username"
                       onChange={this.userInput}/>
            </div>
            <div className="form-group">
                <input type="password" name="password"
                       className="form-control" ref='password' placeholder="Password"
                       onChange={this.passwordInput}/>
            </div>
            <div classNmae="form-group">
                <input type="password" name="confirm-password"
                       className="form-control" ref='confirmPassword'
                       placeholder="Confirm Password" onChange={this.confirmPasswordInput}/>
            </div>
            <div className="form-group">
                <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                        <Button className="form-control btn btn-register" onClick={this.onClick}>
                            Register Now
                        </Button>
                    </div>
                </div>
            </div>
        </form>)
    }
})