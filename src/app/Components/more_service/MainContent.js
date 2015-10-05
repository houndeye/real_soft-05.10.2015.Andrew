import React from 'react';
import MainSection from '../more_service/MainSection';
import SearchResult from '../more_service/SearchResult';


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
