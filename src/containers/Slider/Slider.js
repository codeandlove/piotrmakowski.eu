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
                    hasThumbnails={true}
                    isMaximized={false}
                    hasSizeButton={false}
                    hasMediaButton={false}
                    hasIndexBoard={false}
                    hasLeftButton="centerLeft"
                    hasRightButton="centerRight"
                    hasCaptionsAtMax='top'
                    hasDotButtonsAtMax='bottom'
                    hasThumbnailsAtMax={true}
                    style={{ maxWidth: `1200px`, height: `auto`}}
                />
            </div>
        )
    }
}

export default withContext(Slider);