import React from 'react';

import Panel from '../../components/Panel/Panel';
import AnchorLink from '../../components/Anchor/Anchor';
import {Controller, Scene} from "react-scrollmagic";
import {Tween} from "react-gsap";

const Certificates = () => {
    return (
        <div className="container" id="certificates">
            <Controller>
                <div className="certificates">
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
                                        <Panel header={`Magento`}>
                                            <h4>
                                                <img className="cert-badge" src="../images/certs/adobe_magento_expert_badge.png" alt="Magento Certified Developer" />
                                                Adobe Certified Expert-Adobe Commerce Front-End Developer
                                            </h4>
                                            <ul>
                                                <li>Magento 1 Front-End Developer (2017)</li>
                                                <li>Magento 2 Expert Front-End Developer (2019)</li>
                                            </ul>
                                            <p>
                                                Certification proves expert knowledge of the Magento 1 and Magento 2 eCommerce platforms, which is needed to understand Adobe Commerce's theming components and the ability to modify the user interface.
                                            </p>
                                            <p className="align-right">
                                                <AnchorLink href="https://www.credly.com/badges/c99eee9d-a4e0-491c-a5e4-f644a0fb38a8" label="See certification" />
                                            </p>
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
                                        <Panel header={`AI & Next.js`}>
                                            <h4>
                                                <img className="cert-badge" src="../images/certs/ai_devs_badge.png" alt="AI devs 2 - GPT-4 Expert" />
                                                AI devs 2 - GPT-4 Expert
                                            </h4>
                                            <p>
                                                Knowledge of GPT-4's connection with applications and the ability to automate workflows using the OpenAI API.
                                            </p>
                                            <p className="align-right">
                                                <AnchorLink href="https://credsverse.com/credentials/ecaa8358-697f-4e97-a370-f813489d2b30?" label="See it here" />
                                            </p>
                                            <h4>
                                                <img className="cert-badge" src="../images/certs/next_js_masters_badge.png" alt="Next.js Masters" />
                                                Next.js 14 Masters
                                            </h4>
                                            <p>
                                                Created powerful applications, with a focus on eCommerce, based on Next.js App Router and GraphQL.
                                            </p>
                                            <p className="align-right">
                                                <AnchorLink href="https://credsverse.com/credentials/1f989186-a620-4eac-9911-bb0bff589ce3?" label="See it here" />
                                            </p>
                                        </Panel>
                                    </div>
                                </Tween>
                            </Scene>
                        </div>
                    </div>
                </div>
            </Controller>
        </div>
    )
};

export default Certificates;