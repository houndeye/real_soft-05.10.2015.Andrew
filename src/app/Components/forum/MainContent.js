import React from 'react';
import MainSection from '../forum/MainSection';
import SearchResult from '../forum/SearchResult';


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
