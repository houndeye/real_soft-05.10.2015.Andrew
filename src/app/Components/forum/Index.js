import React from 'react';
import SearchMenu from '../forum/SearchMenu'
import MainContent from '../forum/MainContent'

export default React.createClass({
    render: function () {
        return (<main>
            <h1>forum</h1>
            <SearchMenu/>
            <MainContent/>
        </main>

        )
    }
});