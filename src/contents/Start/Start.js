import React from 'react';

const Start = (props) => {
    return (
        <div className="container">
            <div className="col-md-4 col-sm-5 fadein showfirst bounce-in">
                <div className="white-panel no-panel ">
                    <h1 className="white-panel-title handwritte">Piotr Makowski</h1>
                    <div className="white-panel-content">
                        <img src="images/piotr_makowski_prof.jpg" alt="Piotr Makowski" className="img-responsive img-circle hidden-lg hidden-md hidden-sm"/>
                        <p>Witaj na moim kreatywnym CV.</p>
                        <p>Nazywam się <strong>Piotr Makowski</strong> i chciałbym pokazać Ci czym się zajmuję.</p>
                        <p>Działam w obszarze projektowania grafiki komputerowej, programowania witryn internetowych oraz związanych z tym technologii.</p>
                    </div>
                </div>
                <div className="white-panel no-panel ">
                    <h3 className="white-panel-title ">Portfolio &amp; Curriculum Vitae</h3>
                    <div className="white-panel-content">
                        <p>Pobierz moje Portfolio lub Curriculum Vitae w dokumencie PDF.</p>
                        <a href="download/cv.pdf" className="btn btn-primary" rel="download_cv" data-toggle="tooltip" data-placement="top" title="" data-original-title="Pobrano 78 razy	">
                            <span className="glyphicon glyphicon-download"></span> Pobierz CV
                        </a>
                        <a href="download/portfolio.pdf" className="btn btn-primary" rel="download_portfolio" data-toggle="tooltip" data-placement="top" title="" data-original-title="
						Pobrano 49 razy					">
                            <span className="glyphicon glyphicon-download"></span> Zobacz Portfolio PDF
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-md-offset-4 col-sm-5 col-sm-offset-2 fadein showfirst bounce-in">
                <div className="white-panel no-panel">
                    <div className="white-panel-content">
                        <div className="graphic-developer">
                            <h1 className="handwritte">
                                <span className="designer">Frontend <br /> Developer</span>
                                <span className="developer">UX/UI Designer</span>
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="white-panel no-panel">
                    <h3 className="white-panel-title ">Profil zawodowy</h3>
                    <div className="white-panel-content">
                        <ul>
                            <li>Senior Frontend at <div className="effect"><a href="http://wearevirtua.com"><span data-hover="WeAreVirtua.com">WeAreVirtua.com</span></a></div></li>
                            <li>Magento Certified FE developer</li>
                            <li>React/Redux developer</li>
                            <li>CEO agencji <div className="effect"><a href="http://www.codeandlove.com" title="Agencja reklamowa Codeandlove.com z Wrocławia"><span data-hover="Codeandlove.com">Codeandlove.com</span></a></div></li>
                            <li>Programista z wieloletnim doświadczeniem</li>
                            <li>UX/UI &amp; UC-D Designer</li>
                        </ul>
                        <a href="#timeline" className="navlink btn btn-primary pull-right hidden-xs">Przejdź do osi czasu</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Start;