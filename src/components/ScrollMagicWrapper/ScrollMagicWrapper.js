import React, {Component} from 'react';

import ScrollMagic from "./ScrollMagic";

class ScrollMagicWrapper extends Component {

    componentDidMount() {
        this.controller = new ScrollMagic.Controller();

        this.scene = new ScrollMagic.Scene({
            duration: 1000,
            offset: 0
        })
        .setTween(this.elm, 25.5, {backgroundColor: "green", scale: .5})
        .addTo(this.controller);
    }

    render () {
        return (
            <div ref={elm => this.elm = elm}>
                {this.props.children}
            </div>
        )
    }
}

export default ScrollMagicWrapper;