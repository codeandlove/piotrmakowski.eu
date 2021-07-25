import React, {Component} from 'react';
import {withContext} from "../../Context";
import Carousel from "react-gallery-carousel";
import 'react-gallery-carousel/dist/index.css';

class Slider extends Component {
    render() {
        const {data} = this.props;

        return (
            <div className="slider">
                <Carousel
                    images={data}
                    hasThumbnails={false}
                    isMaximized={false}
                    hasSizeButton={false}
                    hasMediaButton={false}
                    hasIndexBoard={false}
                    hasLeftButton={false}
                    hasRightButton={false}
                    hasCaptionsAtMax='top'
                    hasDotButtonsAtMax='bottom'
                    hasThumbnailsAtMax={true}
                    style={{ maxWidth: `1200px`}}
                />
            </div>
        )
    }
}

export default withContext(Slider);