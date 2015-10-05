import React from 'react';

import MainSection from '../sale/MainSection';
import SearchResult from '../sale/SearchResult';


export default React.createClass({

    render: function () {
        // console.log(this.props.data)
        return (
            <div>
                <SearchResult />
                <MainSection/>
            </div>
        )
    }

});

/*
 */
