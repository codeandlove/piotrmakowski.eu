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
        title: 'Graphic Designer and Creator for the student portal dlaStudenta.pl',
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
        title: 'Graphic Designer at Qubic Games Mobile Game Entertainment Company',
        content: (
            <ul>
                <li>Mobile Branding Games and Apps Designer</li>
                <li>Sprites and Low-Pixel Art Artist</li>
            </ul>
        )
    },
    {
        year: '2007 - 2010',
        icon: 'games',
        icon_alt: 'Games and apps',
        title: 'Game Designer at XOFTO Mobile Game Entertainment Company',
        content: (
            <ul>
                <li>Mobile Branding Games and Apps Designer</li>
                <li>Sprites and Low-Pixel Art Artist</li>
            </ul>
        )
    },
    {
        year: '2010 - 2011',
        icon: 'games',
        icon_alt: 'Games and apps',
        title: 'Game Designer at E-MUZYKA S.A. Digital Media Company',
        content: (
            <ul>
                <li>Mobile Branding Games and Apps Designer</li>
                <li>Co-founder of Mobile Games Website</li>
                <li>Team Leader</li>
            </ul>
        )
    },
    {
        year: '2011 - 2014',
        icon: 'agency',
        icon_alt: 'Games and apps',
        title: 'CEO of Codeandlove.com Digital Agency, Freelancer',
        content: (
            <ul>
                <li>Web design & development</li>
                <li>eCommerce design & development</li>
                <li>Visual advertising, BTL, DTP & CI</li>
                <li>Graphic design, motion graphics, and video design</li>  
            </ul>
        )
    },
    {
        year: '2014 - 2018',
        icon: 'agency',
        icon_alt: 'Frontend development',
        title: 'Virtua LTD, Senior Frontend Developer, Magento Developer',
        content: (
            <ul>
                <li>Certified Magento 1 Frontend Developer</li>
                <li>Designer and developer of client's eCommerce stores based on Magento</li>
                <li>Designer and developer of apps based on modern Javascript</li>
            </ul>
        )
    },
    {
        year: '2018 - 2021',
        icon: 'agency',
        icon_alt: 'Frontend development',
        title: 'Virtua Codelab, Frontend Team Lead',
        content: (
            <ul>
                <li>Certified Magento 2 Frontend Developer</li>
                <li>Tech support in the development teams</li>
                <li>Recruitment processes supervisor</li>
                <li>Mentor in the internship programs</li>
            </ul>
        )
    },
    {
        year: '2021 - 2024',
        icon: 'agency',
        icon_alt: 'Team Leader & Senior Frontend Developer',
        title: 'Alpacode.com, Frontend Team Leader, Magento Developer',
        content: (
            <ul>
                <li>Certified Magento 2 Frontend Developer</li>
                <li>Technical support for development teams</li>
                <li>Supervisor of recruitment processes</li>
                <li>Mentor in internship programs</li>
            </ul>
        )
    },
    {
        year: '2024 - ∞',
        icon: 'personal',
        icon_alt: 'Websites and apps',
        title: 'Always prepared for new challenges!',
        content: (
            <ul>
                <li>Open to new contracts and projects</li>
                <li>Motivated to build development teams</li>
                <li>Highly skilled in communication</li>
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
                                <img loading="lazy" src={`images/icons/${props.icon}_icon.svg`} alt={props.icon_alt} />
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