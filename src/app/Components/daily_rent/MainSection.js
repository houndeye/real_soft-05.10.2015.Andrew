import React from 'react';
import MainInfo from '../daily_rent/MainInfo';
import Additional from '../daily_rent/Additional';


export default React.createClass({

    render: function () {
        return (

            <section className="grid_8 ">
                <MainInfo/>
                <Additional/>
            </section>
        )


    }

});