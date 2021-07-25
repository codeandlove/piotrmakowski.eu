import React, {Component} from 'react';
import {withContext} from "../../Context";
import Vimeo from "@u-wave/react-vimeo";
import Slider from "../Slider/Slider";

class Viewer extends Component {

    componentDidMount() {
        this.props.toggleDrawer(true);
        this.props.setActivePortfolioItem(this.props);
        document.body.classList.add('drawer-is-opened');
    }

    componentWillUnmount() {
        document.body.classList.remove('drawer-is-opened');
    }

    mapImages = () => {
        const {portfolioActiveItem: {name, imagesAmount}} = this.props;
        return [...Array(imagesAmount)].map((item, key) => { return {src: `${process.env.PUBLIC_URL}/images/portfolio/${name}/${key}.jpg`}});
    }

    render() {
        const {portfolioActiveItem: {imagesAmount, videoUrl}} = this.props;
        return (
            <div className="viewer">
                {!!imagesAmount && (
                    <div className="viewer-images-wrapper">
                        <Slider data={this.mapImages()} />
                    </div>
                )}
                {!!videoUrl && (
                    <div className="viewer-video-wrapper">
                        <Vimeo
                            video={videoUrl}
                            responsive={true}
                            autoplay
                        />
                    </div>
                )}
            </div>
        )
    }
}

export default withContext(Viewer);