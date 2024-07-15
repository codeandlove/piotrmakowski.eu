import React from 'react';

import Panel from './../../components/Panel/Panel';
import AnchorLink from './../../components/Anchor/Anchor';
import {downloadFile} from "../../utils/utils";
import {withRouter} from 'react-router';

const Start = () => {
    return (
        <div className="container">
            <div className="columns">
                <div className="column align-left column-introduction">
                    <Panel classes="no-bg"  header={(
                        <span className="hand-written">
                            Piotr Makowski
                        </span>
                    )}>
                        <p>
                            Hi! Welcome to my Reasume.
                        </p>
                        <p>
                            I'm <strong>Piotr Makowski</strong>, and I would like to present my work experience.
                        </p>
                        <p>
                            I have worked as a Graphic Designer and Web Developer. <br />
                            For the past {(new Date().getUTCFullYear()) - (new Date('2015').getUTCFullYear())} years, I have been working as a Frontend Software Engineer, and I am currently a Team Leader.
                        </p>
                    </Panel>
                    <Panel classes="no-bg" header={`Portfolio & Resume`}
                           actions={[
                               <button key='button-cv' onClick={() => downloadFile('cv.pdf')}>
                                   <i className="material-icons">picture_as_pdf</i> Download CV (PDF)
                               </button>,
                               <button key='button-porfolio' onClick={() => downloadFile('portfolio.pdf')}>
                                   <i className="material-icons">picture_as_pdf</i> Download Portfolio (PDF)
                               </button>
                           ]}
                    >
                        <p>
                            Please take a look at my résumé and portfolio, available for download in PDF format.
                        </p>
                    </Panel>
                </div>
                <div className="column align-right column-expertise">
                    <Panel classes="no-bg"
                        header={(
                            <span className="custom-typo">
                                <span className="hand-written">
                                    Senior Frontend Developer
                                </span>
                                <span className="ampersand">&</span>
                                <span className="hand-written">
                                    Team leader
                                </span>
                            </span>
                        )}
                        headerTag='h2'
                        headerClasses="no-border no-margin"
                    />

                    <Panel classes="no-bg" header={`Work expertise`}
                           actions={(
                               <button onClick={() => window.location.hash = '#timeline'}>
                                   <i className="material-icons">timeline</i> Go to timeline below
                               </button>
                           )}
                           actionsClasses="justify-right"
                    >
                        <ul>
                            <li>
                                <AnchorLink href="http://codeandlove.com/" label="Codeandlove.com"/> digital agency founder
                            </li>
                            <li>
                                Senior Frontend Developer / Full-stack 
                            </li>
                            <li>
                                Magento 1 & 2 Certified Developer
                            </li>
                            <li>
                                AI & Next.js Certified Developer
                            </li>
                            <li>
                                Web engineer with over {(new Date().getUTCFullYear()) - (new Date('2004').getUTCFullYear())} yrs experience
                            </li>
                            <li>
                                Trainer, entrepreneur & inventor
                            </li>
                        </ul>
                    </Panel>
                </div>
            </div>
        </div>
    )
};

export default withRouter(Start);