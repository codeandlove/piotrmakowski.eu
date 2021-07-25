import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import renderHTML from 'react-render-html';
import Panel from './../../components/Panel/Panel';
import { Tween } from 'react-gsap';

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
        title: 'Graphic designer and inventor in <strong>Qubic Games</strong> mobile game entertainment company',
        content: (
            <ul>
                <li>Mobile branding games and apps designer</li>
                <li>Sprites and low-pixel art artist</li>
            </ul>
        )
    },
    {
        year: '2007 - 2010',
        icon: 'games',
        icon_alt: 'Games and apps',
        title: 'Games designer in <strong>XOFTO</strong> mobile game entertainment company',
        content: (
            <ul>
                <li>Mobile branding games and apps designer</li>
                <li>Sprites and low-pixel art artist</li>
            </ul>
        )
    },
    {
        year: '2010 - 2011',
        icon: 'games',
        icon_alt: 'Games and apps',
        title: 'Games designer in <strong>E-MUZYKA S.A.</strong> digital media company',
        content: (
            <ul>
                <li>Mobile branding games and apps designer</li>
                <li>Co-founder of mobile games website</li>
                <li>Team leader</li>
            </ul>
        )
    },
    {
        year: '2011 - 2014',
        icon: 'agency',
        icon_alt: 'Games and apps',
        title: 'CEO <strong>Codeandlove.com</strong> creative agency, freelancer',
        content: (
            <ul>
                <li>Web design &amp; web development</li>
                <li>eCommerce design/development</li>
                <li>Visual advertising, BTL, DTP &amp; CI</li>
                <li>Graphic designer, motion and video designer</li>
            </ul>
        )
    },
    {
        year: '2014 - 2018',
        icon: 'agency',
        icon_alt: 'Frontend development',
        title: 'Cooperation with <strong>Virtua LTD</strong> company, Senior Frontend Developer, Magento developer',
        content: (
            <ul>
                <li>Certified Magento 1 Frontend Developer</li>
                <li>Designer and developer of client's eCommerce stores based on Magento</li>
                <li>Designer and developer of apps based on modern Javascript frameworks (React/Vue/Angular)</li>
            </ul>
        )
    },
    {
        year: '2018 - 2021',
        icon: 'agency',
        icon_alt: 'Frontend development',
        title: 'Cooperation with <strong>Virtua Codelab</strong> company, Frontend Technical Leader',
        content: (
            <ul>
                <li>Certified Magento 2 Frontend Developer</li>
                <li>Support in the development of company</li>
                <li>Recruitment processes supervisor</li>
                <li>Mentor in the internship programs</li>
            </ul>
        )
    },
    {
        year: '2021 - ∞',
        icon: 'personal',
        icon_alt: 'Websites and apps',
        title: 'Looking for new opportunities',
        content: (
            <ul>
                <li>Opened for new contracts and projects</li>
                <li>Motivated to work</li>
                <li>Competent and on time</li>
            </ul>
        )
    }
];

const TimelineBlock = props => {
    return (
        <Controller>
            <div className={`timeline-block ${props.orderClass}`} id={props.id}>
                <div className="timeline-icon-wrapper">
                    <Scene
                        triggerElement={`#${props.id}`}
                        duration={200}
                        offset={-200}
                    >
                        <Tween
                            from={{
                                css: {
                                    scale: 0
                                },
                                ease: 'Power4.easeOut',
                            }}
                            to={{
                                css: {
                                    scale: 1
                                },
                                ease: 'Power4.easeOut',
                            }}
                            paused
                        >
                            <div className={`timeline-icon icon-${props.icon}`}>
                                <img src={`images/icons/${props.icon}_icon.svg`} alt={props.icon_alt} />
                            </div>
                        </Tween>
                    </Scene>
                </div>
                <div className="timeline-content-wrapper">
                    <Scene
                        triggerElement={`#${props.id}`}
                        duration={400}
                        offset={-200}
                    >
                        <Tween
                            from={{
                                css: {
                                    x: props.index % 2 === 0 ? '100px' : '-100px',
                                    opacity: 0
                                },
                                ease: 'Power4.easeOut',
                            }}
                            to={{
                                css: {
                                    x: '0px',
                                    opacity: 1
                                },
                                ease: 'Power4.easeOut',
                            }}
                            paused
                        >
                            <div className="timeline-content">
                                <Panel
                                    classes="shadowed full-bg"
                                    header={renderHTML(props.title)}
                                    headerTag="h5"
                                >
                                    {props.content}
                                </Panel>
                            </div>
                        </Tween>
                    </Scene>
                </div>
                <div className="timeline-date-wrapper">
                    <Scene
                        triggerElement={`#${props.id}`}
                        duration={400}
                        offset={-200}
                    >
                        <Tween
                            from={{
                                css: {
                                    x: props.index % 2 === 0 ? '-100px' : '100px',
                                    opacity: 0
                                },
                                ease: 'Power4.easeOut',
                            }}
                            to={{
                                css: {
                                    x: '0px',
                                    opacity: 1
                                },
                                ease: 'Power4.easeOut',
                            }}
                            paused
                        >
                            <div className="timeline-date">
                                {props.year}
                            </div>
                        </Tween>
                    </Scene>
                </div>
            </div>
        </Controller>
    );
}

const Timeline = () => {
    return (
        <div className="container">
            <h3 className="text-align-center">
                <span className="hand-written">
                    Work experience
                </span>
            </h3>
            <div className="timeline">
                {
                    data.map((props, key) => (
                        <TimelineBlock {...props}
                            index={key}
                            orderClass={(key % 2 === 0)? 'odd' : 'even' }
                            key={`timeline-item-${key}`}
                            id={`timeline-item-${key}`}
                        />
                    ))
                }
            </div>
        </div>
    )
};

export default Timeline;