import React from 'react';
import Reflux from 'reflux';

import store from '../../Stores/Rent/ShowMainInfo'






export default React.createClass({
    mixins: [Reflux.connect(store)],
    render () {

        return (
            <main className="col-sm-3">
                {this.state.info}

            </main>
        )
    }

});