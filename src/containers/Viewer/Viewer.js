import React, {Component} from 'react';
import {withContext} from "../../Context";
import Vimeo from "@u-wave/react-vimeo";
import Slider from "../Slider/Slider";

const url = process.env.PUBLIC_URL + '/images/portfolio/';

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
        const {match: {params: {href} }, portfolioActiveItem} = this.props;
        return [...Array(portfolioActiveItem.imagesAmount)].map((item, key) => { return {src: `${url}${href}/${key}.jpg`}});
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