import Reflux from 'reflux';

import actions from '../../../../Actions/MyOffice/Client/View/ClientView';
import actionsInputs from '../../../../Actions/MyOffice/Client/View/Inputs';

import clientDbActions from '../../../../Actions/MyOffice/Client/clientDb'
import clientAdditionalActions  from '../../../../Actions/MyOffice/Client/ClientAdditional'
import clientMainInfoActions from '../../../../Actions/MyOffice/Client/ClientMainInfo'

var keys = ['type', 'kind', 'region', 'description',
    'price', 'roomsNumber', 'area', 'phone'];

let viewProps = {action: undefined, buttonName: undefined};

export default Reflux.createStore({
    listenables: actions,
    getInitialState(){
        return (
        {viewProps: viewProps}
        )

    },
    onAdd(){
        actionsInputs.setInput(undefined);
        clientAdditionalActions.changeReadableWritableView(false);
        clientMainInfoActions.changeReadableWritableView(false);
        viewProps.action = clientDbActions.saveClient;
        viewProps.buttonName = 'save';
        this.trigger(viewProps);
    },
    onEdit(client){
        var param = {};
        keys.forEach(function (key) {
            param[key] = client[key];
        });
        console.log(param)
        clientDbActions.getRealtyParams(param);
        clientAdditionalActions.changeReadableWritableView(false);
        clientMainInfoActions.changeReadableWritableView(false);
        viewProps.action = actions.update;
        viewProps.buttonName = 'save';
        this.trigger(viewProps);
    },
    onUpdate(client){
        clientDbActions.updateClient(client);
        viewProps.action = actions.edit;
        viewProps.buttonName = 'edit';
        this.trigger(viewProps);
    },
    onView(){

        clientAdditionalActions.changeReadableWritableView(true);
        clientMainInfoActions.changeReadableWritableView(true);
        viewProps.action = actions.edit;
        viewProps.buttonName = 'edit';
        this.trigger(viewProps);
    },
    onExit(){
        actionsInputs.setInput(undefined);
        clientAdditionalActions.closeView();
        clientMainInfoActions.closeView();
    }

})