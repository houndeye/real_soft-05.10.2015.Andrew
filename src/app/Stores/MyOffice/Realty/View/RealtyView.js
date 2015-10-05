import Reflux from 'reflux';

import actions from '../../../../Actions/MyOffice/Realty/View/RealtyView';
import actionsInputs from '../../../../Actions/MyOffice/Realty/View/Inputs';
import imgActions from '../../../../Actions/MyOffice/Realty/View/GetRealtyImg'

import realtyDbActions from '../../../../Actions/MyOffice/Realty/realtyDb'
import realtyAdditionalActions  from '../../../../Actions/MyOffice/Realty/RealtyAdditional'
import realtyMainInfoActions from '../../../../Actions/MyOffice/Realty/RealtyMainInfo'

var keys = ['type', 'kind', 'condition', 'description',
    'price', 'roomsNumber', 'area', 'floors'];

let viewProps = {action: undefined, buttonName: undefined};

export default Reflux.createStore({
    listenables: actions,
    getInitialState(){
        return (
        {viewProps: viewProps}
        )

    },
    onAdd(){
        imgActions.getRealtyImg(undefined);
        actionsInputs.setInput(undefined);
        realtyAdditionalActions.changeReadableWritableView(false);
        realtyMainInfoActions.changeReadableWritableView(false);
        viewProps.action = realtyDbActions.saveRealty;
        viewProps.buttonName = 'save';
        this.trigger(viewProps);
    },
    onEdit(realty){
        var param = {};
        keys.forEach(function (key) {
            param[key] = realty[key];
        });
        realtyDbActions.getRealtyCoordinate(realty.mapCoordinates);
        realtyDbActions.getRealtyAddress(realty.address);
        realtyDbActions.getRealtyParams(param);
        realtyAdditionalActions.changeReadableWritableView(false);
        realtyMainInfoActions.changeReadableWritableView(false);
        viewProps.action = actions.update;
        viewProps.buttonName = 'save';
        this.trigger(viewProps);
    },
    onUpdate(realty){
        realtyDbActions.updateRealty(realty);
        viewProps.action = actions.edit;
        viewProps.buttonName = 'edit';
        this.trigger(viewProps);
    },
    onView(){
        realtyAdditionalActions.changeReadableWritableView(true);
        realtyMainInfoActions.changeReadableWritableView(true);
        viewProps.action = actions.edit;
        viewProps.buttonName = 'edit';
        this.trigger(viewProps);
    },
    onExit(){
        imgActions.getRealtyImg(undefined);
        actionsInputs.setInput(undefined);
        realtyAdditionalActions.closeViewRealty();
        realtyMainInfoActions.closeViewRealty();
    }

})