import Reflux from 'reflux';


import * as ajax from '../../../helper/ajax'


import actions from '../../../Actions/MyOffice/Realty/ImageDb';

let imgArray = [];
let imgId = {};
export default Reflux.createStore({
    listenables: actions,
    onSetImages(arr){
        console.log(imgArray)
        imgArray = arr;
        this.trigger(imgArray);
    },
    onSaveImages(realtyId){
        if (imgId) {
            ajax.SendImg('ImageHandler', 'save', realtyId, imgArray);
        }
    },
    onUpdateImages()
    {
        if (imgId) {
            ajax.SendImg('ImageHandler', 'update', imgId, imgArray);
        }
    },
    onRemoveImages()
    {
        if (imgId) {
            ajax.DbRequest('ImageHandler', 'remove', imgId);
        }
    },
    onSetImagesId(id)
    {
        //  console.log(id);
        if (id[0]) {
            imgId = id[0]._id;
        }
        else {
            imgId = undefined;
        }
        this.trigger(imgId)
    }
})