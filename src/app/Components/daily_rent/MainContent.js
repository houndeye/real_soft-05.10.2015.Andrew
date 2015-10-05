import React from 'react';
import MainSection from '../daily_rent/MainSection';
import SearchResult from '../daily_rent/SearchResult';


export default React.createClass({

    render: function () {
        // console.log(this.props.data)
        return (
            <main className="container_12 wrap main">
                <SearchResult/>
                <MainSection/>
            </main>
        )
    }

});

/*
 */
