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
                                                Graphic design for an eCommerce store with practical implementation, based on usability and accessibility aspects of W3C standards, utilizing the Magento platform (2010).
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
                                            With nearly 20 years of experience in JavaScript, I have worked extensively with pure JS, as well as libraries such as jQuery, Prototype, and React.
                                        </p>
                                        <p>
                                            My two-decade-long journey also includes working with HTML, CSS, and various other technologies essential for creating outstanding websites and applications.
                                        </p>
                                        <p>
                                            I have over 14 years of experience in eCommerce, specializing in the Magento 1 & 2 platforms, as well as other CMS systems.
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
                                    <Panel header={`Designer & Trainer`}>
                                        <p>
                                            In the past, I was primarily familiar with graphic design, mobile games, and UX/UI design.
                                        </p>
                                        <p>
                                            Today, I am mostly focused on developing high-quality code, teaching, and mentoring.
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
                                            CEO <AnchorLink href="http://codeandlove.com/" label="Codeandlove.com" /> digital agency based in Wroclaw in Poland.
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