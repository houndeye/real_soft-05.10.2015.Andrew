import React from 'react';
import RB from 'react_bootstrap';

var Input = RB.Input;


export default React.createClass({

    //setFirstElement(){
    //    console.log(this.props.first, 2)
    //    this.props.onChange(this.props.first);
    //    this.props.first = undefined;
    //},
    componentDidMount(){
        //  this.props.first = '';
    },
    onChange(e){
        if (this.props.onChange) {
            e.preventDefault();
            this.props.onChange(e.target.value);
        }
    },
    eventHandler(arr, index){
        this.setState({index: index, nameArray: arr});
        return name[0];
    },
    render()
    {
        //console.log(this.props.first);
        //if (this.props.first) {
        //    this.setFirstElement();
        //}
        var Option = this.props.data.map(function (name, i) {
            return ( <option key={i} value={name[0]}>{name[this.props.language] }</option>)
        }.bind(this));
        return (
            <Input type='select' placeholder='select' value={this.props.first} disabled={this.props.readable}
                   onChange={this.onChange}>
                {Option}
            </Input>
        )
    }
})

//var option = React.createClass({});