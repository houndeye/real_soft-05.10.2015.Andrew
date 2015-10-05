import React from 'react';

var Element = React.createClass({
    render(){
        return (
            <div>
                <div className={this.props.class1}>
                    <label ><h4> {this.props.label}</h4></label>
                </div>
                <div className={this.props.class2}>
                    {this.props.element}
                </div>
            </div>
        )
    }
});


export default React.createClass({
    render(){
        return (
            <div className={this.props.classProp[0]}>
                {this.props.labels.map(function (value, i) {
                    return (<Element key={i} label={value} element={this.props.elements[i]}
                                     class1={this.props.classProp[1]}
                                     class2={this.props.classProp[2]}
                        />)
                }.bind(this))}
            </div>
        )
    }
})