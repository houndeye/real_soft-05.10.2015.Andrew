import React from 'react';
import RB from 'react_bootstrap';
import ImgSlider from '../../helper/ImgSlider';
import Map from '../../helper/map'


var Carousel = RB.Carousel;
var CarouselItem = RB.CarouselItem;
var Well = RB.Well;


export default React.createClass({

    render () {
        return (
            <div>
                <ImgSlider img={this.props.img}/>
                <Map lat={this.props.lat} lng={this.props.lng} zoom={this.props.zoom} width='100%'
                     height={250}
                     points={this.props.points}/>
                <Well> {this.props.description}</Well>
            </div>
        )
    }

});