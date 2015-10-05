import React from 'react';
import Reflux from 'reflux';

import PanelTemplate from '../../helper/RentRealty'

import actions from '../../Actions/Rent/ShowMainInfo'
import clientHandler from '../../Actions/Rent/ClientHandler'
import imgActions from '../../Actions/Rent/ImageHandler'

import imgStore from '../../Stores/Rent/ImageHandler'
import store from '../../Stores/Rent/GetUsers'


import SliderMapDescription from "../rent/SliderMapDescription"
var style = {maxHeight: 500, overflow: "auto"};
export default React.createClass({
    mixins: [Reflux.connect(store)],
    getDefaultProps(){
        return {
            "Style": {
                "width": {width: '100%', display: 'inline-block', cursor: "default"},
                "displayInline": {display: 'inline-block'},
                "bg": {backgroundColor: "#d9edf7", color: "5E6061"}
            }

        };
    },
    viewRealty(realty){

        var img = imgStore.getImage(realty._id);

        actions.click(
            <SliderMapDescription img={ img ? img.image ? img.image[0]? img.image : undefined :undefined:undefined}
                                  zoom={15} width='100%'
                                  height={250}
                                  lat={realty.mapCoordinates.lat} lng={realty.mapCoordinates.lng}
                                  points={[realty.mapCoordinates]}
                                  description={realty.description }
                />
        )
    },
    onClick2(realty){
        clientHandler.searchClients(realty)
    },
    render () {
        //console.log(this.props);
        console.log(this.state, this.props);
        var data;
        var content = '';
        if (this.state.allRealty && this.state.allRealty.length >= 1 ? this.state.allRealty[0] : false) {

            data = RentDataHandler(this.state.allRealty, this.props.labels);
            content = ( <PanelTemplate data={this.state.allRealty} realty={data}
                                       labels={this.props.labels}
                                       language={this.props.language}
                                       Style={this.props.Style}
                                       click={[this.viewRealty,this.onClick2]}/> );

        }
        return (

            <aside className="col-sm-4 scroll">
                {content}
            </aside>
        )
    }

});

var RentDataHandler = (data, labels)=> {
    var res = [];
    var dataHandler = (data)=> {
        return data.map(function (obj) {
            var newObj = {};
            newObj[labels[0][0]] = obj[labels[0][0]];
            newObj[labels[1][0]] = obj[labels[1][0]];
            newObj[labels[2][0]] = obj.address[labels[2][0]];
            newObj[labels[3][0]] = obj.address.stAddress.streetName;
            return newObj;
        });
    };
    res = dataHandler(data);
    return res;
};


