import React, { Component } from 'react';

class Link extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false
        }
    }

    handleClick = (e) => {
        e.preventDefault();

        const {url} = this.props;

        window.location.hash = url;
    };

    render() {
        const {url, label, icon} = this.props;

        return (
            <a href={url} onClick={this.handleClick}>{icon}{label}</a>
        );
    }
}

export default Link;
