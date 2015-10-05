import React from 'react';
import RB from 'react_bootstrap'

import actions from '../Actions/Login';


let Style = {};
let Button = RB.Button;
let Input = RB.Input;

export default React.createClass({
    getInitialState(){
        return {
            username: "",
            password: ""
        }
    },
    userInput(e){
        this.setState({username: e.target.value});
    },
    passwordInput(e){
        this.setState({password: e.target.value});
    },
    onClick(){
        actions.login(this.state.username, this.state.password);

    },
    render(){
        return (<form  >
            <div className="form-group">
                <Input type="text" name="username"
                       className="form-control" ref='username' placeholder="Username" onChange={this.userInput}/>
            </div>
            <div className="form-group">
                <Input type="password" name="password"
                       className="form-control" ref='password' placeholder="Password" onChange={this.passwordInput}/>
            </div>
            <div className="form-group text-center">
                <input type="checkbox" className=""/>
                <label htmlFor="remember"> Remember Me</label>
            </div>
            <div className="form-group">
                <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                        <Button className="form-control btn btn-login"
                                onClick={this.onClick}>Log In</Button>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-center">
                            <a href="#"
                               className="forgot-password">Forgot Password?</a>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        )
    }
});
