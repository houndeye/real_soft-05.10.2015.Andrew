"use strict";
import React from 'react';
import RB from 'react_bootstrap';

var Input = RB.Input;
var Table = RB.Table;

let address = {
    stAddress: {
        number: '',
        streetName: ''
    },
    city: '',
    state: '',
    country: '',
    region: ''

};
export default React.createClass({

    // initialize local variables

    getInitialState: function () {
        return {address: address};


    },
    // set some default values
    getDefaultProps: function () {
        return {
            address: address
            , width: 500

        }
    },


// update geo-encoded markers
    fillInAddress: function (address) {
        console.log(this.state, this.props);

        //address name type (long_name,short_name)
        var type = 'long_name';
        this.setState({
                address: {
                    stAddress: {
                        number: address[0][type],
                        streetName: address[1][type]
                    },
                    city: address[3][type],
                    state: address[5][type],
                    country: address[0][type],
                    region: address[2][type]
                }
            }
        );

        if (this.props.dbActions) {
            this.props.dbActions(this.state.address)
        }
        this.props.addressArr = '';
    }
    ,
    componentWillUpdate()
    {
        if (this.props.addressArr.length >= 6) {
            this.fillInAddress(this.props.addressArr)
        }

    },
    render: function () {

        var style = {
            width: this.props.width,
            label: {
                textAlign: 'right',
                fontWeight: 'bold',
                color: '#303030'
            }
        };
        console.log(this.props);

        return (
            <Table striped bordered condensed hover style={{width:500}}>
                <tr>
                    <td style={style.label}>{this.props.labels[0][this.props.language]}</td>
                    <td ><Input ref="street_number"
                                disabled="true"> {this.state.address.stAddress.number || this.props.address.stAddress.number}</Input>
                    </td>
                    <td  ><Input ref="route"
                                 disabled="true">{this.state.address.stAddress.streetName || this.props.address.stAddress.streetName}</Input>
                    </td>
                </tr>
                <tr>
                    <td style={style.label}>{this.props.labels[1][this.props.language]}</td>
                    <td  ><Input ref="locality"
                                 disabled="true">{this.state.address.region || this.props.address.region}</Input></td>
                </tr>
                <tr>
                    <td style={style.label}>{this.props.labels[2][this.props.language]}</td>
                    <td ><Input
                        ref="administrative_area_level_1"
                        disabled="true">{this.state.address.city || this.props.address.city}</Input></td>
                </tr>
                <tr>
                    <td style={style.label}>{this.props.labels[3][this.props.language]}</td>
                    <td  ><Input ref="country"
                                 disabled="true">{this.state.address.state || this.props.address.state}</Input>
                    </td>
                </tr>
            </Table>



        );
    }

})
;

