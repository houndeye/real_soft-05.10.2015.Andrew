import React from 'react';
import RB from 'react_bootstrap';

import SearchMenu from '../sale/SearchMenu'
import MainContent from '../sale/MainContent'


var Grid = RB.Grid;
export default React.createClass({
    render: function () {
        return (<main >
            <h1>sale</h1>
            <SearchMenu />
            <MainContent/>
        </main>

        )
    }
});