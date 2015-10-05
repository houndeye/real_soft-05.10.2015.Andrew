import React from 'react';
import Reflux from 'reflux';

import store from '../Stores/MainMenu'




export default React.createClass({
    mixins: [Reflux.connect(store)],
    render: function () {
        return (
            <div>
                {React.createElement(this.state.page.view, this.state.page.props)}
            </div>
        )
    }
});

