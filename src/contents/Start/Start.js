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
                            Hi! Welcome on my creative Resume page.
                        </p>
                        <p>
                            I am <strong>Piotr Makowski</strong> and I would like to show you my work experience.
                        </p>
                        <p>
                            Few years ago i used to be a Graphic designer and Web Developer till i become a Frontend
                            Software Engineer and currently a Tech-Leader.
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
                            Please, take a look at my Resume and Portfolio available to download in PDF files.
                        </p>
                    </Panel>
                </div>
                <div className="column align-right column-expertise">
                    <Panel classes="no-bg"
                        header={(
                            <span className="custom-typo">
                                <span className="hand-written">
                                    Frontend Tech-leader
                                </span>
                                <span className="ampersand">&</span>
                                <span className="hand-written">
                                    Software Engineer
                                </span>
                            </span>
                        )}
                        headerTag='h2'
                        headerClasses="no-border no-margin"
                    />

                    <Panel classes="no-bg" header={`Work expertise`}
                           actions={(
                               <button onClick={() => window.location.hash = '#timeline'}>
                                   <i className="material-icons">timeline</i> See my timeline below
                               </button>
                           )}
                           actionsClasses="justify-right"
                    >
                        <ul>
                            <li>
                                <AnchorLink url="http://codeandlove.com/" label="Codeandlove.com"/> CEO & Funder
                            </li>
                            <li>
                                Magento 1 & 2 Certified Developer
                            </li>
                            <li>
                                Senior Frontend Developer / JS Engineer
                            </li>
                            <li>
                                CS engineer with over 16 yrs experience
                            </li>
                            <li>
                                Teacher & inventor
                            </li>
                        </ul>
                    </Panel>
                </div>
            </div>
        </div>
    )
};

export default withRouter(Start);