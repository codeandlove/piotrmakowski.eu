import React from 'react';

const data = [
    {
        year: '2004 - 2006',
        icon: 'games',
        icon_alt: 'Gry i aplikacje',
        title: 'Kooperacja z lokalnym portalem społecznościowym <b>dlaStudenta.pl</b>',
        content: (
            <ul>
                <li>webdesign</li>
                <li>Projektowanie reklamy (flash, DTP)</li>
                <li>marketing consulting</li>
            </ul>
        )
    },

    {
        year: '2006 - 2007',
        icon: 'games',
        icon_alt: 'Gry i aplikacje',
        title: 'Projektant/Grafik w <b>Qubic Games</b> mobile game entertainment',
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
        title: 'Projektant gier/Grafik w <b>XOFTO</b> mobile game entertainment',
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
        title: 'Projektant gier/Grafik w <b>E-MUZYKA S.A.</b>',
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
        title: 'CEO Agencji Kreatywnej <b>Codeandlove.com</b>, freelancer',
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
        title: 'Kontrakt z firmą <b>Virtua LTD</b>, Senior Frontend Developer, Magento developer',
        content: (
            <ul>
                <li>Certyfikowany Magento Developer (frontend)</li>
                <li>Kreacja i rozbudowa istniejących motywów graficznych dla sklepów opartych o Magetno</li>
                <li>Kreacja i rozbydowa aplikacji opartych o frameworki reaktywne (React.js, VUE.js, Angular.js, Backbone.js)</li>
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
        <div className="timeline-block">
            <div className={`timeline-icon icon-${props.icon}`}>
                <img src={`images/icons/${props.icon}_icon.svg`} alt={props.icon_alt} />
            </div>
        </div>
    );
}

const Timeline = props => {
    return (
        <div className="timeline">
            {
                data.map((props, key) => {
                    return <TimelineBlock {...props} />
                })
            }
        </div>
    )
};

export default Timeline;