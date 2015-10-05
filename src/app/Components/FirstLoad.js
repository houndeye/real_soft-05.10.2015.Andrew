import React from 'react';
import Reflux from 'reflux';
import RB from 'react_bootstrap';

import store from '../Stores/Login';
import actions from '../Actions/Login'

let Input = RB.Input;
let Grid = RB.Grid;
let Nav = RB.Nav;
let NavItem = RB.NavItem;

export default React.createClass({
    mixins: [Reflux.connect(store)],

    onClick(value){
        actions.change(value);


        // this.setState(this.props.register);
    },
    render(){
        console.log(this.state);
        return (<div className="container">
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <div className="panel panel-login">
                        <div className="panel-heading">
                            <Nav >
                                <div className="col-xs-6">
                                    <NavItem eventKey="login" onSelect={this.onClick}>
                                        <a href="#" className={this.state.active=="login"? "active": "" }
                                            >Login</a>
                                    </NavItem>
                                </div>
                                <div className="col-xs-6">
                                    <NavItem eventKey="register" onSelect={this.onClick}>
                                        <a href="#" className={this.state.active=="register"? "active": "" }
                                            >Register</a>
                                    </NavItem>
                                </div>
                            </Nav>

                        </div>
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-lg-12">

                                    {React.createElement(this.state.formBody)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
});
