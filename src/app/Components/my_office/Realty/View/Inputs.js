import React from 'react'
import Reflux from'reflux'

import InputTemplate from '../../../../helper/InputTemplate'
import ImgUpload from '../../../../helper/ImageUpload'
import ImgSlider from '../../../../helper/ImgSlider'

import store from '../../../../Stores/MyOffice/Realty/RealtyAdditional'
import inputStore from '../../../../Stores/MyOffice/Realty/View/Inputs'
import imgStore from '../../../../Stores/MyOffice/Realty/View/GetRealtyImg'

import realtyDb from '../../../../Actions/MyOffice/Realty/realtyDb'
import imageActions from '../../../../Actions/MyOffice/Realty/ImageDb'

var params = {
    type: "",
    kind: "",
    condition: "",
    description: "",
    price: "",
    roomsNumber: "",
    area: "",
    floor: ""
};


export default React.createClass({
    mixins: [Reflux.connect(inputStore), Reflux.connect(store), Reflux.connect(imgStore)],
    getDefaultProps(){
        return ({"imgStyle": {width: "100%", height: "200px"}})
    },
    //componentWillUnmount(){
    //    if (this.state.inputData) {
    //        this.setState({inputData: undefined});
    //        this.setState({realtyImg: undefined})
    //    }
    //},

    render()
    {
        return (<div>
            {(<InputTemplate
                data={this.state.inputData||params}
                readable={this.state.readable}
                classProp={["col-sm-6"]}
                labels={this.props.content}
                language={this.props.language}
                dbActions={realtyDb.getRealtyParams}
                type={this.props.type}
                realtyType={this.props.realtyType}
                params={params}
                />)}

            {this.state.readable ? (
                <ImgSlider
                    img={this.state.realtyImg?this.state.realtyImg[0] ? this.state.realtyImg[0].image:undefined:undefined}
                    imgStyle={this.props.imgStyle}/>) :
                (<ImgUpload refluxAction={imageActions.setImages}
                            image={this.state.realtyImg?this.state.realtyImg[0] ? this.state.realtyImg[0].image:undefined:undefined}/>)}
        </div>)
    }
})
