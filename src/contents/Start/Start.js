import React from 'react';

import Panel from './../../components/Panel/Panel';
import AnchorLink from './../../components/Anchor/Anchor';

const Start = (props) => {
    return (
        <div className="container">
            <div className="columns">
                <div className="column align-left column-introduction">

                    <Panel classes="no-bg"
                        header={(
                            <span className="hand-written">
                                Piotr Makowski
                            </span>
                        )}
                    >
                        <p>
                            Welcome to my creative Curriculum Vitae page.
                        </p>
                        <p>
                            My name is <strong>Piotr Makowski</strong> and I would like to show You my personal works.
                        </p>
                        <p>
                            I was working as the Graphic designer and Web developer until i have become a Frontend Warrior.
                        </p>
                    </Panel>

                    <Panel classes="no-bg" header={`Portfolio & Curriculum Vitae`} 
                        actions={[
                            <button key='button-cv'>
                                <i className="material-icons">picture_as_pdf</i> Download CV (PDF)
                            </button>,
                            <button key='button-porfolio'>
                                <i className="material-icons">picture_as_pdf</i> Dowload Porfolio (PDF)
                            </button>                                   
                        ]}
                    >
                        <p>
                            Please, take a look at my Curriculum Vitae and Porfolio available to download in PDF files.
                        </p>
                    </Panel>
                </div>

                <div className="column align-right column-exercises">
                    <Panel classes="no-bg" 
                        header={(
                            <React.Fragment>
                                <span className="hand-written">
                                    Frontend Developer
                                </span>
                                <span className="and-separator">&</span>
                                <span className="hand-written">
                                    UX/UI Designer
                                </span>
                            </React.Fragment>
                        )}
                        headerTag='h2'
                        headerClasses="no-border no-margin"
                    />

                    <Panel classes="no-bg" header={`Work expertise`} 
                        actions={(
                            <button>
                                <i className="material-icons">timeline</i> Go to Timeline
                            </button>
                        )}
                        actionsClasses="justify-right"
                    >
                         <ul>
                                <li>
                                    <AnchorLink url="http://codeandlove.com/" label="Codeandlove.com" /> CEO
                                </li>
                                <li>
                                    Senior Frontend Developer / JS Engineer
                                </li>
                                <li>
                                    Magento Certified Developer (FE Certification)
                                </li>
                                <li>
                                    Code lover with over 13 yrs experience
                                </li>
                                <li>
                                    UX/UI & UC-D amateur
                                </li>
                            </ul>
                    </Panel>
                </div>
            </div>
        </div>
    )
};

export default Start;