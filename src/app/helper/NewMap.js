/**
 * @jsx React.DOM
 */
"use strict";
import React from 'react';

//var __in_node = (typeof exports !== 'undefined' && this.exports !== exports);
//
//if( __in_node ) {
//var React = require('react')


export default React.createClass({

    // initialize local variables
    getInitialState: function () {
        return {
            map: null,
            markers: []
        };
    },

    // set some default values
    getDefaultProps: function () {
        return {
            lat: 49.839683,
            lng: 24.029717000000005,
            zoom: 13,
            width: 500,
            height: 500,
            gmaps_api_key: "",
            gmaps_sensor: false

        }
    },
    onChange(){

        var searchBox = new google.maps.places.SearchBox(React.findDOMNode(this.refs.input));
        google.maps.event.addListener(searchBox, 'places_changed', function () {
            var places = searchBox.getPlaces();
            if (places.length == 0) {
                return false;
            }

            this.updateMarkers(places);

        }.bind(this));
    },


    // update geo-encoded markers
    updateMarkers: function (places) {

        //  console.log(places)
        var markers = this.state.markers;
        var map = this.state.map;

        // map may not be loaded when parent component re-renders
        if (map === null) {
            return false;
        }

        // remove everything
        markers.forEach(function (marker) {
            marker.setMap(null);
        });

        this.setState({markers: []});


        // add new markers
        places.forEach((function (place) {

            map.setCenter(place.geometry.location);
            var marker = new google.maps.Marker({
                position: place.geometry.location,
                map: map,
                title: places.label
            });

            markers.push(marker);

        }));

        this.setState({markers: markers});

        if (this.props.dbActions) {      places[0].geometry.location.hasOwnProperty("H")?
            this.props.dbActions({lat: places[0].geometry.location.H, lng: places[0].geometry.location.L}):
            this.props.dbActions({lat: places[0].geometry.location.G, lng: places[0].geometry.location.K})
        }
        if (this.props.RefluxAction) {
            this.props.RefluxAction(places[0].address_components)
        }
    },

    render() {

        var style = {
            width: this.props.width,
            height: this.props.height
        };

        return (


            <div>

                <input id="pac-input" className="controls" type="text" placeholder="Search Box" ref="input"
                       onChange={this.onChange}/>

                <div id="map-canvas" style={style} ref="mapContainer"/>
            </div>


        );
    },
    componentWillUpdate()
    {
        if (this.props.place && this.state.map) {
            var marker = new google.maps.Marker({
                position: this.props.place
            });
            this.state.map.setCenter(this.props.place ? this.props.place :
                new google.maps.LatLng(this.props.lat, this.props.lng), this.props.zoom);
            marker.setMap(this.state.map);

        }

    },
    componentDidMount: function () {
        var createMap = (function () {
            var mapOptions = {
                zoom: this.props.zoom,
                center: this.props.place ? this.props.place :
                    new google.maps.LatLng(this.props.lat, this.props.lng),
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            var map = new google.maps.Map(React.findDOMNode(this.refs.mapContainer), mapOptions);
            //  map.controls[google.maps.ControlPosition.TOP_LEFT].push(React.findDOMNode(this.refs.input));
            this.setState({map: map});
            // set default marker
            if (this.props.place && this.state.map) {
                var marker = new google.maps.Marker({
                    position: this.props.place

                });
                marker.setMap(map);
                this.props.place = undefined;
            }
        }).bind(this);


        if (typeof google !== 'undefined') {
            // scripts already loaded, create map immediately

            createMap()
        } else {
            if (!window.reactMapCallback) {
                // if this is the first time, load the scripts:
                var s = document.createElement('script');
                s.src = 'https://maps.googleapis.com/maps/api/js?key=' + this.props.gmaps_api_key + '&sensor=' + this.props.gmaps_sensor + '&libraries=places&callback=reactMapCallback';
                document.head.appendChild(s);

                // when the script has loaded, run all the callbacks
                window.reactMapCallbacks = [];
                window.reactMapCallback = function () {
                    while (window.reactMapCallbacks.length > 0)
                        (window.reactMapCallbacks.shift())(); // remove from front
                }
            }

            // add a callback to the end of the chain
            window.reactMapCallbacks.push(createMap)
        }

    },

    // update markers if needed
    componentWillReceiveProps: function (props) {
        if (props.points) this.updateMarkers(props.points);
    }

});

//if( __in_node ) {
//  module.exports = Map;
//}
