import React, {Component} from 'react';
import { Link } from "react-router-dom";
import {withContext} from "../../Context";
import {Controller, Scene} from "react-scrollmagic";
import {Tween} from "react-gsap";

class PortfolioThumb extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dir: 'from-top'
        }
    }

    componentDidMount() {
        this.elm.addEventListener('mousemove', e => this.onMouseMove(e) );
    }

    onMouseMove = event => {

        const getDirection = function (ev, obj) {
            const w = obj.offsetWidth,
                h = obj.offsetHeight,
                x = (ev.pageX - obj.offsetLeft - (w / 2) * (w > h ? (h / w) : 1)),
                y = (ev.pageY - obj.offsetTop - (h / 2) * (h > w ? (w / h) : 1));

            return Math.round( Math.atan2(y, x) / 1.57079633 + 5 ) % 4;
        };

        this.setState(s => {

            let tmp = s.dir;

            switch(getDirection(event, this.elm)) {
                case 0:
                    tmp = 'from-top';
                    break;
                case 1:
                    tmp = 'from-right';
                    break;
                case 2:
                    tmp = 'from-bottom';
                    break;
                case 3:
                    tmp = 'from-left';
                    break;
            }

            return {
                dir: tmp
            }
        })
    };

    render() {
        const {name, title, href} = this.props;
        const {dir} = this.state;

        return (
            <div className="portfolio-thumb" ref={elm => this.elm = elm}>
                <div className="thumb-wrapper">
                    <Link to={`/portfolio/${href}`} >
                        <img src={`${process.env.PUBLIC_URL}/images/portfolio/${name}/cover.jpg`} alt={title} />
                        <div className={`thumb-description ${dir}`}>
                            <i className="material-icons">add</i>
                            <span className="title">
                                {title}
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}

const Portfolio = (props) => {
    const {portfolio} = props;

    return (
        <div className="container with-bg">
            <h3 className="text-align-center">
                <span className="hand-written white">
                    Freelance projects (2010-16)
                </span>
            </h3>
            <div className="portfolio">
                <Controller>
                    {
                        portfolio.map((props, key) => {
                            return (
                                <Scene
                                    duration={300}
                                    offset={-300 + ((key + 1) * 5)}
                                    key={`scene-thumb-item-${key}`}
                                >
                                    <Tween
                                        from={{
                                            css: {
                                                y: "50px",
                                                opacity: 0
                                            },
                                            ease: 'Power4.easeOut',
                                        }}
                                        to={{
                                            css: {
                                                y: "0px",
                                                opacity: 1
                                            },
                                            ease: 'Power4.easeOut',
                                        }}
                                        paused
                                    >
                                        <div className="portfolio-thumb-wrapper">
                                            <PortfolioThumb {...props} key={`thumb-item-${key}`} />
                                        </div>
                                    </Tween>
                                </Scene>
                            )
                        })
                    }
                </Controller>
            </div>
        </div>
    )
};

export default withContext(Portfolio);