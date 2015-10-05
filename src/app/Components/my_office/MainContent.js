import React from 'react';
import Reflux from 'reflux';


import store from '../../Stores/MyOffice/Index'

export default React.createClass({
    mixins: [Reflux.connect(store)],
    render() {
        return (
            <main >
                {this.state.pageContent.content ? React.createElement(this.state.pageContent.content, this.state.pageContent.props) : " "}
            </main>
        )
    }
});
