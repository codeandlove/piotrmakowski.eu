import React from 'react';

import Panel from './../../components/Panel/Panel';
import AnchorLink from './../../components/Anchor/Anchor';
import {Controller, Scene} from "react-scrollmagic";
import {Tween} from "react-gsap";
import {downloadFile} from "../../utils/utils";

const Bio = () => {
    return (
        <div className="container" id="bio">
            <Controller>
                <div className="columns">
                    <div className="column align-left column-introduction">
                        <Scene
                            duration={200}
                            offset={-300}
                        >
                            <Tween
                                from={{
                                    css: {
                                        y: "50px",
                                        x: "-50px",
                                        opacity: 0
                                    },
                                    ease: 'Power4.easeOut',
                                }}
                                to={{
                                    css: {
                                        y: "0px",
                                        x: "0px",
                                        opacity: 1
                                    },
                                    ease: 'Power4.easeOut',
                                }}
                                paused
                            >
                                <div className="panel-wrapper">
                                    <Panel header={`Education (2006 - 2010)`}>
                                        <h4>
                                            Wroclaw High School of Applied Informatics
                                        </h4>
                                        <p>
                                            Computer Science | <strong>Course:</strong> Graphic | <strong>Degree:</strong> Engineer
                                        </p>
                                    </Panel>
                                </div>
                            </Tween>
                        </Scene>
                        <Scene
                            duration={200}
                            offset={-300}
                        >
                            <Tween
                                from={{
                                    css: {
                                        y: "50px",
                                        x: "-50px",
                                        opacity: 0
                                    },
                                    ease: 'Power4.easeOut',
                                }}
                                to={{
                                    css: {
                                        y: "0px",
                                        x: "0px",
                                        opacity: 1
                                    },
                                    ease: 'Power4.easeOut',
                                }}
                                paused
                            >
                                <div className="panel-wrapper">
                                    <Panel header={`Diploma thesis`}
                                        actions={(
                                            <button onClick={() => downloadFile('piotr_makowski_praca_inzynierska.pdf')}>
                                                <i className="material-icons">picture_as_pdf</i> Download PDF (PL)
                                            </button>
                                        )}
                                        actionsClasses="justify-right"
                                    >
                                        <p>
                                            <em>
                                                Graphic design of ecommerce store with practical implementation based on usability and availability aspects of W3C standards by using the eCommerce Magento Store.
                                            </em>
                                        </p>
                                    </Panel>
                                </div>
                            </Tween>
                        </Scene>
                        <Scene
                            duration={200}
                            offset={-300}
                        >
                            <Tween
                                from={{
                                    css: {
                                        y: "50px",
                                        x: "-50px",
                                        opacity: 0
                                    },
                                    ease: 'Power4.easeOut',
                                }}
                                to={{
                                    css: {
                                        y: "0px",
                                        x: "0px",
                                        opacity: 1
                                    },
                                    ease: 'Power4.easeOut',
                                }}
                                paused
                            >
                                <div className="panel-wrapper">
                                    <Panel header={`Hobbies`}>
                                        <p>
                                            <i className="material-icons">videogame_asset</i> Video Games, Computer-digital and fine Art, Astronomy & Science
                                        </p>
                                    </Panel>
                                </div>
                            </Tween>
                        </Scene>
                    </div>

                    <div className="column align-right column-expertise">
                        <Scene
                            duration={200}
                            offset={-300}
                        >
                            <Tween
                                from={{
                                    css: {
                                        y: "50px",
                                        x: "50px",
                                        opacity: 0
                                    },
                                    ease: 'Power4.easeOut',
                                }}
                                to={{
                                    css: {
                                        y: "0px",
                                        x: "0px",
                                        opacity: 1
                                    },
                                    ease: 'Power4.easeOut',
                                }}
                                paused
                            >
                                <div className="panel-wrapper">
                                    <Panel header={`Frontend Engineer`}>
                                        <p>
                                            Over 16 years of practice in Java Script starting with pure JS through jQuery and Prototype libraries through to React library.
                                        </p>
                                        <p>
                                            Over 16 years of playing with HTML, CSS and other stacks necessary to create awesome Websites and Apps.
                                        </p>
                                        <p>
                                            Over 10 years experience in eCommerce with Magento 1 & 2 platform and other 3rd kinds of CMS systems.
                                        </p>
                                    </Panel>
                                </div>
                            </Tween>
                        </Scene>
                        <Scene
                            duration={200}
                            offset={-300}
                        >
                            <Tween
                                from={{
                                    css: {
                                        y: "50px",
                                        x: "50px",
                                        opacity: 0
                                    },
                                    ease: 'Power4.easeOut',
                                }}
                                to={{
                                    css: {
                                        y: "0px",
                                        x: "0px",
                                        opacity: 1
                                    },
                                    ease: 'Power4.easeOut',
                                }}
                                paused
                            >
                                <div className="panel-wrapper">
                                    <Panel header={`Designer & Teacher`}>
                                        <p>
                                            In the past mostly familiar with graphic, mobile games and UX/U-CD designs.
                                        </p>
                                        <p>
                                            Today mostly focused on high quality code development, teaching and mentoring.
                                        </p>
                                    </Panel>
                                </div>
                            </Tween>
                        </Scene>
                        <Scene
                            duration={200}
                            offset={-300}
                        >
                            <Tween
                                from={{
                                    css: {
                                        y: "50px",
                                        x: "50px",
                                        opacity: 0
                                    },
                                    ease: 'Power4.easeOut',
                                }}
                                to={{
                                    css: {
                                        y: "0px",
                                        x: "0px",
                                        opacity: 1
                                    },
                                    ease: 'Power4.easeOut',
                                }}
                                paused
                            >
                                <div className="panel-wrapper">
                                    <Panel header={`Codeandlove.com`}>
                                        <p>
                                            CEO <AnchorLink url="http://codeandlove.com/" label="Codeandlove.com" /> creative agency based in Wroclaw in Poland.
                                        </p>
                                    </Panel>
                                </div>
                            </Tween>
                        </Scene>
                    </div>
                </div>
            </Controller>
        </div>
    )
};

export default Bio;