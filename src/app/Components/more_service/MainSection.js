import React from 'react';
import MainInfo from '../more_service/MainInfo';
import Additional from '../more_service/Additional';


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