import React from 'react';
import MainSection from '../rent/MainSection';
import SearchResult from '../rent/SearchResult';


export default React.createClass({

    render() {
        return (
            <main >
                <SearchResult labels={this.props.labels.realty}/>
                <MainSection labels={this.props.labels.client}/>
            </main>
        )
    }

});

/*
 */
