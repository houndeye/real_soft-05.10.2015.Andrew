import React from 'react';
import SearchMenu from '../daily_rent/SearchMenu'
import MainContent from '../daily_rent/MainContent'

export default React.createClass({
    render: function () {
        return (<main>
            <h1>daily_rent</h1>
            <SearchMenu/>
            <MainContent/>
        </main>

        )
    }
});