import React from 'react';

import Panel from './../../components/Panel/Panel';
import AnchorLink from './../../components/Anchor/Anchor';

const Bio = (props) => {
    return (
        <div className="container">
            <div className="columns">
                <div className="column align-left column-introduction">
                    <Panel header={`Education (2006 - 2010)`}>
                        <h4>
                            Wroclaw High School of Applied Informatics
                        </h4>
                        <p>
                            <strong>Course:</strong> Computer Graphic | <strong>Degree:</strong> Engineer
                        </p>
                    </Panel>

                    <Panel header={`Diploma thesis`}
                        actions={(
                            <button>
                                <i className="material-icons">picture_as_pdf</i> Download PDF (PL-lng)
                            </button>
                        )}
                        actionsClasses="justify-right"
                    >
                        <p>
                            <em>
                                Graphic design of an online store with practical implementation based on aspects of usability and availability of W3C standards using the e-Commerce Magento Demo Store platform.
                            </em>
                        </p>
                    </Panel>

                    <Panel header={`Hobbies`}>
                        <p>
                            <i className="material-icons">videogame_asset</i> Video Games, Computers, Astronomy & Science
                        </p>
                    </Panel>

                </div>

                <div className="column align-right column-exercises">

                    <Panel header={`Frontend Developer`}>
                        <p>
                            Over 10 yrs of practice in Java Script starting with pure JS through jQuery and Prototype libraries ending with React framework.
                        </p>
                        <p>
                            Over 10 yrs of playing with HTML, CSS and other stacks necessary to create dynamic Websites and Apps.
                        </p>
                        <p>
                            Over 10 yrs experience in commerce with Magento platform and other types of CMS systems.
                        </p>
                    </Panel>

                    <Panel header={`Designer`}>
                        <p>
                            In the past mostly familiar with graphic, mobile games and UX/U-CD designing jobs.
                        </p>
                    </Panel>

                    <Panel header={`Codeandlove.com`}>
                        <p>
                            Owner of <AnchorLink url="http://codeandlove.com/" label="Codeandlove.com" /> creative agency based in Wroclaw in Poland.
                        </p>
                    </Panel>

                </div>
            </div>
        </div>
    )
};

export default Bio;