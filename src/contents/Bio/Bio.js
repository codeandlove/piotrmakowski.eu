import React from 'react';

import AnchorLink from './../../components/Anchor/Anchor';

const Bio = (props) => {
    return (
        <div className="container">
            <div className="columns">
                <div className="column align-left column-introduction">
                    <div className="panel">
                        <h3 className="panel-header">
                            Education (2006 - 2010)
                        </h3>
                        <div className="panel-content">
                            <h4>
                                Wroclaw High School of Applied Informatics
                            </h4>
                            <p>
                                <strong>Course:</strong> Computer Graphic | <strong>Degree:</strong> Engineer
                            </p>
                        </div>
                    </div>

                    <div className="panel">
                        <h3 className="panel-header">
                            Diploma thesis
                        </h3>
                        <div className="panel-content">
                            <p>
                                <em>
                                    Graphic design of an online store with practical implementation based on aspects of usability and availability of W3C standards using the e-Commerce Magento Demo Store platform.
                                </em>
                            </p>
                            <p className="panel-actions justify-right">
                                <button>
                                    <i className="material-icons">picture_as_pdf</i> Download PDF (PL-lng)
                                </button>
                            </p>
                        </div>
                    </div>

                    <div className="panel">
                        <h3 className="panel-header">
                            Hobbies
                        </h3>
                        <div className="panel-content">
                            <p>
                                <i class="material-icons">videogame_asset</i> Video Games, Computers, Astronomy Science
                            </p>
                        </div>
                    </div>
                </div>

                <div className="column align-right column-exercises">
                    <div className="panel">
                        <h3 className="panel-header">
                            Frontend Developer
                        </h3>
                        <div className="panel-content">
                            <p>
                                Over 10 yrs of practice in Java Script strating with pure JS through jQuery and Prototype libraries ending with React framework.
                            </p>
                            <p>
                                Over 10 yrs of playing with HTML, CSS and other stacks necessary to create dynamic Websites and Apps.
                            </p>
                            <p>
                                Over 10 yrs experience in commerce with Magento platform and other types of CMS systems.
                            </p>
                        </div>
                    </div>

                    <div className="panel">
                        <h3 className="panel-header">
                            Designer
                        </h3>
                        <div className="panel-content">
                            <p>
                                In the past mostly familiar with graphic, mobile games and UX/U-CD designing jobs.
                            </p>
                        </div>
                    </div>

                    <div className="panel">
                        <h3 className="panel-header">
                            Codeandlove.com
                        </h3>
                        <div className="panel-content">
                            <p>
                                Owner of <AnchorLink url="http://codeandlove.com/" label="Codeandlove.com" /> creative agency based in Wroclaw in Poland.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Bio;