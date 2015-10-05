import React from 'react';
import RB from 'react_bootstrap';

var Carousel = RB.Carousel;
var CarouselItem = RB.CarouselItem;


export default React.createClass({

    render(){
        if (this.props.img) {
            var Elements = this.props.img.map(function (item, i) {
                    return (
                        <CarouselItem key={i}>
                            <img style={this.props.imgStyle} alt='900x500'
                                 src={item.path}/>
                        </CarouselItem>)
                }.bind(this)
            );
            return (
                <Carousel>
                    {Elements}
                </Carousel>
            )
        }
        else {
            return (
                <div>{""}</div>
            )
        }
    }
});


//var ImgViewerElement = React.createClass({
//    render(){
//        return (
//            <CarouselItem>
//                <img width={this.props.width} height={this.props.height} alt='900x500'
//                     src={this.props.src}/>
//            </CarouselItem>
//        )
//    }
//});