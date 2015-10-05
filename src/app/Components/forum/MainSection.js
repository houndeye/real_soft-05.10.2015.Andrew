import React from 'react';
import MainInfo from '../forum/MainInfo';
import Additional from '../forum/Additional';


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