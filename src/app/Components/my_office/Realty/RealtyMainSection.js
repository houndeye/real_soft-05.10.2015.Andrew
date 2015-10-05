import React from 'react';
import Reflux from 'reflux';


import MainInfo from '../Realty/RealtyMainInfo';
import Additional from '../Realty/RealtyAdditional';

//import store from '../../../Stores/MyOffice/UserRealty'
//import actions from '../../../Actions/dbRealtyActions'


import PanelContainer from  '../../../helper/RealtyDataHandler'


export default React.createClass({

    render() {
        var labels, realty;
        var content = "";
        if (this.props.data) {
            labels = this.props.content.view[this.props.type].labels;
            //  realty = this.props.data;
            //var l = this.props.language;
            //console.log(labels);
            realty = myOfficeRealtyDataHandler(this.props.data[this.props.type], labels);

            content = (  < section >

                <PanelContainer data={realty}/>
                <MainInfo content={this.props.content}
                          labels={labels}
                          realty={realty.inactive}
                          data={this.props.data[this.props.type].inactive}
                          language={this.props.language}/>
                < Additional
                    content={this.props.content}
                    labels={labels}
                    realty={realty.active}
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


var myOfficeRealtyDataHandler = (data, labels)=> {
    var res = {};
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
    res.active = dataHandler(data.active);
    res.inactive = dataHandler(data.inactive);

    return res;
};