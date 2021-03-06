import React from 'react';
import RB from 'react_bootstrap'


var Input = RB.Input;


export default React.createClass({
    onChange(){

        this.props.labels[this.props.language].forEach(function (value, i) {

            this.props.params[this.props.labels[0][i]] = this.refs[this.props.labels[0][i]]['refs']['input'].getDOMNode().value

        }.bind(this));

        if (this.props.dbActions) {
            this.props.dbActions(this.props.params);
        }

    },

    componentWillUpdate(){
        this.props.labels[this.props.language].forEach(function (value, i) {
            this.refs[this.props.labels[0][i]]['refs']['input'].getDOMNode().value = this.props.data ?
                (this.props.data[this.props.labels[0][i]] != undefined ? this.props.data[this.props.labels[0][i]] : "")
                : "";
        }.bind(this));
        // console.log(2)

    },

    render()
    {
        //  console.log(this.props);

        this.props.params.type = this.props.type;
        this.props.params.kind = this.props.realtyType;
        this.props.params.region = this.props.region;

        return (

            <div >

                {this.props.labels[this.props.language].map(function (value, i) {
                    if (this.props.labels[0][i] == "price") {
                        return (<Input className='col-sm-6' type='textarea' ref={this.props.labels[0][i]}
                                       placeholder={value}
                                       disabled={this.props.readable}
                                       onChange={this.onChange}/>)
                    }
                    return (
                        <Input className={this.props.classProp[0]}
                               type={this.props.labels[0][i] == "description"?'textarea' :'text' }
                               ref={this.props.labels[0][i]}
                               disabled={this.props.readable}
                               placeholder={value} onChange={this.onChange}/>         )


                }.bind(this))}

            </div>
        )
    }
})