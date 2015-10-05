'use strict';

import    React from 'react'

export default React.createClass({
    displayName: "Icon",
    render() {
        return (
            React.createElement("div", {"data-filetype": this.props.filetype, className: "filepicker-file-icon"})
        );
    }
});


