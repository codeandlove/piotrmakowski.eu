import React from 'react';

import AnchorLink from './../../components/Anchor/Anchor';

const Start = (props) => {
    return (
        <div className="container">
            <div className="columns">
                <div className="column align-left column-introduction">
                    <div className="panel no-bg">
                        <h1 className="panel-header">
                            <span className="hand-written">
                                Piotr Makowski
                            </span>
                        </h1>
                        <div className="panel-content">
                            <p>
                                Welcome to my creative Curriculum Vitae page.
                            </p>
                            <p>
                                I am <strong>Piotr Makowski</strong> and i would like to show You my personal works.
                            </p>
                            <p>
                                I was working as the Graphic designer and Web developer until i have become a Frontend Warrior.
                            </p>
                        </div>
                    </div>

                    <div className="panel no-bg">
                        <h3 className="panel-header">
                            Portfolio & Curriculum Vitae
                        </h3>
                        <div className="panel-content">
                            <p>
                                Please, take a look at my Curriculum Vitae and Porfolio available to download in PDF files.
                            </p>
                            <p className="panel-actions">
                                <button>
                                    <i className="material-icons">picture_as_pdf</i> Download CV (PDF)
                                </button>
                                <button>
                                    <i className="material-icons">picture_as_pdf</i> Dowload Porfolio (PDF)
                                </button>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="column align-right column-exercises">
                    <div className="panel no-bg">
                        <h2 className="panel-header no-border">
                            <span className="hand-written">
                                Frontend Developer
                            </span>
                            <span className="and-separator">&</span>
                            <span className="hand-written">
                                UX/UI Designer
                            </span>
                        </h2>
                    </div>

                    <div className="panel no-bg">
                        <h3 className="panel-header">
                            Work expertise
                        </h3>
                        <div className="panel-content">
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
                            <p className="panel-actions justify-right">
                                <button>
                                    <i className="material-icons">timeline</i> Go to Timeline
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Start;