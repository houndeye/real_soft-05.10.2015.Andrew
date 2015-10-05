import React from 'react'
import ReactDropzone from '../helper/lib/dropzone/dropzone'

import * as ajax from '../helper/ajax'

var componentConfig = {
    uploadMultiple: false,
    allowedFiletypes: ['.jpg', '.png'],
    parallelUploads: 6,
    showFiletypeIcon: true,
    postUrl: 'https://api.cloudinary.com/v1_1/hmdtjbkli/image/upload'
};
//var filesToSave = [];
//var filesToRemove = [];
/**
 * For a full list of possible configurations,
 * please consult
 * http://www.dropzonejs.com/#configuration
 */
var djsConfig = {
    addRemoveLinks: true
};

//var onRemoveFile = function (file) {
//    ajax.sendJson('uploadHandler', {name: file.name, size: file.size});
//    filesToRemove.push();
//    var arr = [];
//    filesToSave.forEach(function (item) {
//        if (file.name != item.name) {
//            arr.push(file)
//        }
//    });
//    filesToSave = arr;
//    // console.log(filesToRemove)
//};
//var onThumbnailFile = function (file, dd) {
//    //  console.log(file, dd)
//};
//var onAddedFile = function (file) {
//    filesToSave.push(file);
//    //  console.log(filesToSave)
//};
/**
 * Attach event handlers here to be notified
 * for pretty much any event.
 * Arrays are accepted.
 */
var eventHandlers = {
    // All of these receive the event as first parameter:
    drop: null,
    dragstart: null,
    dragend: null,
    dragenter: null,
    dragover: null,
    dragleave: null,
    // All of these receive the file as first parameter:
    addedfile: null,
    removedfile: null,
    thumbnail: null,
    error: null,
    processing: null,
    uploadprogress: null,
    sending: null,
    success: null,
    complete: null,
    canceled: null,
    maxfilesreached: null,
    maxfilesexceeded: null,
    // All of these receive a list of files as first parameter
    // and are only called if the uploadMultiple option
    // in djsConfig is true:
    processingmultiple: null,
    sendingmultiple: null,
    successmultiple: null,
    completemultiple: null,
    canceledmultiple: null,
    // Special Events
    totaluploadprogress: null,
    reset: null,
    queuecompleted: null
};

// Render
export default React.createClass({
    component(){
},
render(){
    console.log(this.props.image);
    return (<ReactDropzone config={componentConfig}
    eventHandlers={eventHandlers}
    djsConfig={djsConfig}
    img={this.props.image}
refluxAction={this.props.refluxAction}
/>)

}
});
