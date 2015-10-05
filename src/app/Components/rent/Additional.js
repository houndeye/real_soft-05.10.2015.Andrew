import React from 'react';
import Reflux from 'reflux';

import actions from '../../Actions/Rent/ShowMainInfo';

import PanelWithContent from '../../helper/PanelWithContent';
import PanelTemplate from '../../helper/RentClients';

import store from '../../Stores/Rent/GetClients';
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
    onClick(data, obj){
        actions.click(<PanelWithContent data={data} txt={obj.description}
                                        Style={this.props.Style}/>)
    },
    onClick1(){
        //actions.click(<PanelWithContent data={this.props.info.data} txt={this.props.info.txt}
        //                                Style={this.props.Style}/>)
        alert(2);
    },

    render() {
        var content = "";
        var clients;
        if (this.state.clients[0]) {
            var labels = this.props.labels;
            clients = RentClientsDataHandler(this.state.clients, labels);
            content = (
                <PanelTemplate client={this.state.clients} data={clients} labels={labels}
                               language={this.props.language}
                               Style={this.props.Style}
                               click={[this.onClick,this.onClick1]}/>           )

        }
        console.log(this.state, this.props);
        return (

            <aside className="col-sm-5">
                {content}
            </aside>
        )


    }

});
//<PanelTemplate data={this.props.data} Style={this.props.Style} click={this.onClick}/>

var RentClientsDataHandler = (data, labels)=> {
    var res = [];
    var dataHandler = (data)=> {
        return data.map(function (obj) {
            var newObj = {};
            newObj[labels[0][0]] = obj[labels[0][0]];
            newObj[labels[1][0]] = obj[labels[1][0]];
            newObj[labels[2][0]] = obj[labels[2][0]];
            newObj[labels[3][0]] = obj[labels[3][0]];
            return newObj;
        });
    };
    res = dataHandler(data);


    return res;
};