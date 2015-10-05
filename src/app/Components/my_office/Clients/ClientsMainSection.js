import React from 'react';
import Reflux from 'reflux';


import MainInfo from '../Clients/ClientsMainInfo';
import Additional from '../Clients/ClientsAdditional';

//import store from '../../../Stores/MyOffice/UserRealty'
//import actions from '../../../Actions/dbRealtyActions'


import PanelContainer from  '../../../helper/RealtyDataHandler'


export default React.createClass({

    render() {

        var labels, clients;
        var content = "";
        if (this.props.data) {
            labels = this.props.content.labels;
            //    clients = this.props.data;
            clients = myOfficeClientsDataHandler(this.props.data[this.props.type], labels);
            //   console.log(labels);
            content = (  < section >

                <PanelContainer data={clients}/>
                <MainInfo content={this.props.content}
                          labels={labels}
                          clients={clients.inactive}
                          data={this.props.data[this.props.type].inactive}
                          language={this.props.language}/>
                < Additional
                    content={this.props.content}
                    labels={labels}
                    clients={clients.active}
                    data={this.props.data[this.props.type].active}
                    language={this.props.language}/></section>);
        }
        return (
            <div>
                {content }
            </div>
        )
    }
});


var myOfficeClientsDataHandler = (data, labels)=> {
    var res = {};
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
    res.active = dataHandler(data.active);
    res.inactive = dataHandler(data.inactive);

    return res;
};