import React from 'react';

import Panel from './../../components/Panel/Panel';
import {Controller, Scene} from "react-scrollmagic";
import {Tween} from "react-gsap";

const Contact = () => {
    return (
        <div className="container" id="contact">
            <Controller>
                <div className="columns">
                    <div className="column align-left">
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
                                    <Panel header={`Contact me`}>
                                        <div className="contact">
                                            <div className="contact-icon">
                                                <img src="/images/contact_email.png" alt="Email" />
                                            </div>
                                            <div className="contact-data">
                                                <a href="mailto:hello@piotrmakowski.eu" rel="noopener noreferrer" target="_blank"><strong>hello@piotrmakowski.eu</strong></a>
                                            </div>
                                        </div>
                                    </Panel>
                                </div>
                            </Tween>
                        </Scene>
                    </div>
                    <div className="column align-right">
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
                                    <Panel header={`Social Media`}>
                                        <div className="social-icons">
                                            <div className="social-icon">
                                                <a className="tw" href="https://www.github.com/codeandlove" rel="noopener noreferrer" title="Find Piotr Makowski on Github.com" target="_blank">
                                                    <img loading="lazy" src="/images/gh.png" alt="Github.com"/>
                                                </a>
                                            </div>
                                            <div className="social-icon">
                                                <a className="tw" href="https://www.Linkedin.com/in/piotr-makowski-ninja" rel="noopener noreferrer" title="Find Piotr Makowski on LinkedIn" target="_blank">
                                                    <img loading="lazy" src="/images/in.png" alt="LinkedIn"/>
                                                </a>
                                            </div>
                                            <div className="social-icon">
                                                <a className="fb" href="https://www.facebook.com/codeandlove" rel="noopener noreferrer" title="Like Codeandlove.com on Facebook.com" target="_blank">
                                                    <img loading="lazy" src="/images/fb.png" alt="Facebook.com"/>
                                                </a>
                                            </div>
                                            <div className="social-icon">
                                                <a className="tw" href="https://www.twitter.com/codeandlove" rel="noopener noreferrer" title="Like Codeandlove.com on Twitter.com" target="_blank">
                                                    <img loading="lazy" src="/images/tw.png" alt="Twitter.com"/>
                                                </a>
                                            </div>
                                            <div className="social-icon">
                                                <a className="tw" href="https://www.behance.net/codeandlove" rel="noopener noreferrer" title="Like Codeandlove.com on Behance.net" target="_blank">
                                                    <img loading="lazy" src="/images/be.png" alt="Behance.net"/>
                                                </a>
                                            </div>
                                            <div className="social-icon">
                                                <a className="tw" href="https://www.vimeo.com/codeandlove" rel="noopener noreferrer" title="Like Codeandlove.com on Vimeo.com" target="_blank">
                                                    <img loading="lazy" src="/images/vi.png" alt="Vimeo.com"/>
                                                </a>
                                            </div>
                                        </div>
                                    </Panel>
                                </div>
                            </Tween>
                        </Scene>
                    </div>
                </div>
            </Controller>
            <footer className="footer">
                &copy; {new Date().getUTCFullYear()} Piotrmakowski.eu + All rights reserved.
            </footer>
        </div>
    )
};

export default Contact;