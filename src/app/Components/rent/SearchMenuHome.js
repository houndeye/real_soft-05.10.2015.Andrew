import React from 'react';
import Reflux from 'reflux';
import RB from 'react_bootstrap';

import Slider from '../../helper/Slider';
import InputSelect from '../../helper/InputSelect';
import MenuTemplate from '../../helper/MenuTempltae';



import store from '../../Stores/Rent/GetParameters';


import dbClientActions from '../../Actions/dbClientActions';
import clientHandler from '../../Actions/Rent/ClientHandler';
import actions from '../../Actions/dbRealtyActions';
import realtyHandler from '../../Actions/Rent/DataHandler';

var Button = RB.Button;
export default  React.createClass({
    mixins: [Reflux.connect(store)],
    getInitialState(){
        return {
            eventKey: 'Room',
            super: false,
            button: {on: 'on', off: 'off'}
        }
    },
    getDefaultProps(){
        return ({
            slider: {
                price: {max: 10000},
                area: {max: 100},
                floor: {max: 10},
                rooms: {max: 10}
            }
        })
    },
    onChange(eventKey){
        this.setState({eventKey: eventKey})
    },
    onSChange(sliderKey, value){
        this.setState({
            [sliderKey]: {
                min: value[0],
                max: value[1]
            }
        });
        if (this.state.super) {

            this.super()
        }
    },
    super(){
        setTimeout(function () {
                var searchProps = this.getSliderProps();
                realtyHandler.setSliderParams(searchProps);
                realtyHandler.handleRealty('home');
            }.bind(this), 200
        )

    },
    getSliderProps(){
        return {
            price: this.state.price || {min: 0, max: Infinity},
            area: this.state.area || {min: 0, max: Infinity},
            floor: this.state.floor || {min: 0, max: Infinity},
            rooms: this.state.rooms || {min: 0, max: Infinity}
        };

    },
    onClick(){
        clientHandler.handleClients('home', this.getSliderProps());
        this.super();
    },
    onClick1(){
        //  var searchProps = this.getSliderProps();
        this.setState({super: !this.state.super});
        //dataHandler.setSliderParams(searchProps);
        //actions.findAllActiveRealtyWithParams(searchProps, dataHandler.setRealty);
    },
    componentDidMount(){
        clientHandler.handleClients('home', this.getSliderProps());
        this.super()
    },
    componentDidUpdate(){
        if (this.state.super) {

            this.super()
        }
    },

    render () {

        var parameters = this.state.parameters.slider || this.props.slider;
        return (
            <nav className="col-sm-12">
                <MenuTemplate
                    classProp={["col-sm-5","col-sm-5","col-sm-7"]}
                    labels={this.props.labels[this.props.language]}
                    elements={[
                    (<InputSelect data={this.props.regions} language={this.props.language}/>),
                    (<InputSelect data={this.props.content.types}  language={this.props.language}
                    onChange={this.onChange}
                    />),
                    ( <Slider min={0} max={parameters['price'].max} sliderKey={'price'}
                    onSChange ={ this.onSChange}step={10} orientation={"horizontal"}/>)
                    ]}/>
                <MenuTemplate classProp={["col-sm-5","col-sm-5","col-sm-7"]}
                              labels={this.props.content[this.state.eventKey][this.props.language]}
                              elements={[
                     ( <Slider min={0} max={parameters['area'].max} sliderKey={'area'}
                     step={1}onSChange ={ this.onSChange} orientation={"horizontal"}/>),
                           ( <Slider min={0} max={parameters['rooms'].max} sliderKey={'rooms'}
                     step={1}onSChange ={ this.onSChange} orientation={"horizontal"}/>),
                     ( <Slider min={0} max={parameters['floor'].max} sliderKey={'floor'}
                     step={1}onSChange ={ this.onSChange} orientation={"horizontal"}/>)
                    ]}/>

                <div className="col-sm-2"><Button onClick={this.onClick}> Search</Button></div>
                <div className="col-sm-2">
                    <Button
                        onClick={this.onClick1}> {this.state.super ? this.state.button.off : this.state.button.on}</Button>
                </div>

            </nav>
        )
    }

});

