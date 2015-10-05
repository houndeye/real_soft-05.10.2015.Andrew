import React from 'react';
import MainInfo from '../rent/MainInfo';
import Additional from '../rent/Additional';


export default React.createClass({

    render: function () {
        return (
            <section >
                <MainInfo/>
                <Additional labels={this.props.labels}/>
            </section>
        )


    }

});