import React from 'react';
import SearchMenu from '../more_service/SearchMenu'
import MainContent from '../more_service/MainContent'

export default React.createClass({
    render: function () {
        return (<main>
            <h1>more_service</h1>
            <SearchMenu/>
            <MainContent/>
        </main>

        )
    }
});