import React from 'react';
import renderHTML from 'react-render-html';
import Panel from './../../components/Panel/Panel';

const data = [
    {
        year: '2004 - 2006',
        icon: 'agency',
        icon_alt: 'Freelance creative works',
        title: 'Cooperation with local social portal for students <strong>dlaStudenta.pl</strong>',
        content: (
            <ul>
                <li>Webdesign</li>
                <li>ADV design (flash, DTP)</li>
                <li>Marketing consulting</li>
            </ul>
        )
    },
    {
        year: '2006 - 2007',
        icon: 'games',
        icon_alt: 'Games and apps',
        title: 'Graphic designer and inventor in <strong>Qubic Games</strong> studio - mobile game entertainment',
        content: (
            <ul>
                <li>Projektant brandowych gier mobilnych i aplikacji</li>
                <li>Sprite artist, low pixel artist</li>
            </ul>
        )
    },
    {
        year: '2007 - 2010',
        icon: 'games',
        icon_alt: 'Gry i aplikacje',
        title: 'Projektant gier/Grafik w <strong>XOFTO</strong> mobile game entertainment',
        content: (
            <ul>
                <li>Projektant brandowych gier mobilnych i aplikacji</li>
                <li>Sprite artist, low pixel artist</li>
            </ul>
        )
    },
    {
        year: '2010 - 2011',
        icon: 'games',
        icon_alt: 'Gry i aplikacje',
        title: 'Projektant gier/Grafik w <strong>E-MUZYKA S.A.</strong>',
        content: (
            <ul>
                <li>Projektant brandowych gier mobilnych i aplikacji</li>
                <li>Projekt i realizacja portalu dedykowanego grom mobilnym</li>
                <li>Project manager/team leader</li>
            </ul>
        )
    },
    {
        year: '2011 - 2014',
        icon: 'agency',
        icon_alt: 'Gry i aplikacje',
        title: 'CEO Agencji Kreatywnej <strong>Codeandlove.com</strong>, freelancer',
        content: (
            <ul>
                <li>Web design &amp; web development</li>
                <li>eCommerce design/developing</li>
                <li>Reklama wizualna, BTL, DTP &amp; CI</li>
                <li>Projektowanie graficzne, animacja oraz video montaż</li>
            </ul>
        )
    },
    {
        year: '2014 - 2018',
        icon: 'agency',
        icon_alt: 'Gry i aplikacje',
        title: 'Kontrakt z firmą <strong>Virtua LTD</strong>, Senior Frontend Developer, Magento developer',
        content: (
            <ul>
                <li>Certyfikowany Magento Developer (frontend)</li>
                <li>Kreacja i rozbudowa istniejących motywów graficznych dla sklepów opartych o Magetno</li>
                <li>Kreacja i rozbydowa aplikacji opartych o frameworki reaktywne (React.js, VUE.js, Angular.js)</li>
            </ul>
        )
    },
    {
        year: '2018 - ∞',
        icon: 'personal',
        icon_alt: 'Gry i aplikacje',
        title: 'Otwarty na współpracę z Państwa firmą',
        content: (
            <ul>
                <li>Otwarty na nowe kontakty i projekty</li>
                <li>Zmotywowany do pracy</li>
                <li>Kompetentny i terminowy</li>
            </ul>
        )
    }
];

const TimelineBlock = props => {
    return (
        <div className={`timeline-block ${props.orderClass}`}>
            <div className={`timeline-icon icon-${props.icon}`}>
                <img src={`images/icons/${props.icon}_icon.svg`} alt={props.icon_alt} />
            </div>
            <div className="timeline-content">
                <Panel
                    classes="shadowed full-bg"
                    header={renderHTML(props.title)}
                    headerTag="h5"
                >
                    {props.content}
                </Panel>
            </div>
            <div className="timeline-date">
                {props.year}
            </div>
        </div>
    );
}

const Timeline = () => {
    return (
        <div className="container">
            <h3 className="text-align-center">
                <span className="hand-written">
                    The timeline of work practice
                </span>
            </h3>
            <div className="timeline">
                {
                    data.map((props, key) => {
                        return <TimelineBlock {...props} orderClass={(key % 2 ===0)? 'odd' : 'even' } key={`timeline-item-${key}`} />
                    })
                }
            </div>
        </div>
    )
};

export default Timeline;