'use strict';
import * as ajax from '../../ajax'

import    React from 'react'
import    Dropzone from 'dropzone'
import    Helpers from '../../lib/dropzone/helpers'
import    IconComponent from '../../lib/dropzone/icon'


export default React.createClass({
    displayName: "DropzoneComponent",
    /**
     * Configuration of Dropzone.js. Defaults are
     * overriden overriden by the 'djsConfig' property
     * For a full list of possible configurations,
     * please consult
     * http://www.dropzonejs.com/#configuration
     */
    getDjsConfig: function () {
        var options,
            defaults = {
                url: this.props.config.postUrl,
                //headers: {
                //    'Access-Control-Allow-Credentials': true,
                //    'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With, X-PINGOTHER, X-File-Name, Cache-Control',
                //    'Access-Control-Allow-Methods': 'PUT, POST, GET, OPTIONS',
                //    'Access-Control-Allow-Origin': '*'
                //},
                //withCredentials: true

            };

        if (this.props.config.allowedFiletypes && this.props.config.allowedFiletypes.length > 0) {
            defaults.acceptedFiled = this.props.config.allowedFiletypes;
        }

        if (this.props.djsConfig) {
            options = Helpers.extend(true, {}, defaults, this.props.djsConfig);
        } else {
            options = defaults;
        }
        return options;
    },

    /**
     * React 'componentDidMount' method
     * Sets up dropzone.js with the component.
     */
    componentDidMount: function () {
        var self = this,
            options = this.getDjsConfig();
        if (!this.props.config.postUrl && !this.props.eventHandlers.drop) {
            console.info('Neither postUrl nor a "drop" eventHandler specified, the React-Dropzone component might misbehave.');
        }

        Dropzone.autoDiscover = false;
        this.dropzone = new Dropzone(React.findDOMNode(self), options);
        this.setupEvents();

        if (this.props.img) {
            console.log(3);
            this.props.img.forEach(function (item) {
                var mockFile = {name: item.name, size: item.size};
                this.dropzone.emit("addedfile", mockFile);
                // And optionally show the thumbnail of the file:
                this.dropzone.createThumbnailFromUrl(mockFile, item.path);
                //   this.dropzone.emit("thumbnail", mockFile, item.path);
                this.dropzone.emit("complete", mockFile);
                //     this.props.img = undefined;
            }.bind(this));
        }


    },
    componentWillReceiveProps(){
        try {
            if (!this.props.img && this.state.files) {
                this.state.files.forEach(function (file) {
                    //if (file) {
                    //    this.dropzone.emit("removedfile", file);
                    //}
                    this.setState({files: []})
                }.bind(this));
                this.setState({files: []})
            }
        }
        catch (err) {
            console.log(err);
        }
    },
    componentWillUpdate(){
        if (this.props.refluxAction && this.state.images) {
            this.props.refluxAction(this.state.images);
        }
    },


    /**
     * React 'componentWillUnmount'
     * Removes dropzone.js (and all its globals) if the component is being unmounted
     */
    componentWillUnmount: function () {
        this.dropzone.destroy();
    },

    /**
     * React 'render'
     */
    render: function () {
        var icons = [],
            files = this.state.files,
            config = this.props.config,
            className = (this.props.className) ? 'filepicker dropzone' + this.props.className : 'filepicker dropzone';

        if (config.showFiletypeIcon && config.allowedFiletypes && (!files || files.length < 1)) {
            for (var i = 0; i < this.props.config.allowedFiletypes.length; i = i + 1) {
                icons.push(React.createElement(IconComponent, {
                    filetype: this.props.config.allowedFiletypes[i],
                    key: "icon-component" + i
                }));
            }
        }

        return (
            React.createElement("div", {className: className},
                icons,
                this.props.children
            )
        );
    },

    /**
     * React 'getInitialState' method, setting the initial state
     * @return {object}
     */
    getInitialState: function () {
        return {
            files: [],
            images: this.props.img || []

        }
    },

    /**
     * Takes event handlers in this.props.eventHandlers
     * and binds them to dropzone.js events
     */
    setupEvents: function () {
        var eventHandlers = this.props.eventHandlers;

        if (!this.dropzone || !eventHandlers) {
            return;
        }

        for (var eventHandler in eventHandlers) {
            if (eventHandlers.hasOwnProperty(eventHandler) && eventHandlers[eventHandler]) {
                // Check if there's an array of event handlers
                if (Object.prototype.toString.call(eventHandlers[eventHandler]) === '[object Array]') {
                    for (var i = 0; i < eventHandlers[eventHandler].length; i = i + 1) {
                        // Check if it's an init handler
                        if (eventHandler === 'init') {
                            eventHandlers[eventHandler][i](this.dropzone);
                        } else {
                            this.dropzone.on(eventHandler, eventHandlers[eventHandler][i]);
                        }
                    }
                } else {
                    if (eventHandler === 'init') {
                        eventHandlers[eventHandler](this.dropzone);
                    } else {
                        this.dropzone.on(eventHandler, eventHandlers[eventHandler]);
                    }
                }
            }
        }
        this.dropzone.on('sending', function (file, xhr, formData) {
            formData.append('api_key', 846914238645592);
            formData.append('timestamp', Date.now() / 1000 | 0);
            formData.append('upload_preset', 'imgUploader');
        });
        this.dropzone.on('success', function (file, image) {
            if (file) {
                var images = this.state.images;

                if (!images) {
                    images = [];
                }
                images.push(image);
                this.setState({images: images});
                console.log(this.state)
            }
        }.bind(this));


        this.dropzone.on('addedfile', function (file) {
            if (file) {
                var files = this.state.files;

                if (!files) {
                    files = [];
                }
                files.push(file);
                this.setState({files: files});

            }
        }.bind(this));

        this.dropzone.on('removedfile', function (file) {
            if (file) {
                console.log(file);
                var files = this.state.files;
                var images = this.state.images;

                if (files && files.length > 0) {
                    for (var i = 0; i < files.length; i++) {
                        if (files[i].name === file.name && files[i].size === file.size) {
                            files.splice(i, 1);
                        }
                        if (images[i].name === file.name && images[i].size === file.size) {
                            images.splice(i, 1);
                        }
                    }
                    this.setState({files: files});
                    this.setState({images: images});
                }
            }
        }.bind(this));
    }
});


