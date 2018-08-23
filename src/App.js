import React from 'react';

import { withContext } from './Context';

import Header from './containers/Header/Header';
import Section from './containers/Section/Section';
import Background from './containers/Background/Background';
import Me from './components/Me/Me';

import MouseMovement from './components/MouseMovement/MouseMovement';

import Start from './contents/Start/Start';
import Timeline from './contents/Timeline/Timeline';
import Bio from './contents/Bio/Bio';

const App = props => {

    return (
        <div className={`app ${props.navigationIsOpened ? 'nav-is-opened' : 'nav-is-closed'}`}>
            <Header />
            <main className={`wrapper ${props.navigationIsOpened ? 'nav-is-opened' : 'nav-is-closed'}`}>
                <div className="sections">
                    <Section name="start" content={<Start />} />
                    <Section name="timeline" classes="white-bg" content={<Timeline />} />
                    <Section name="bio" content={<Bio />} />
                    <Section name="portfolio" />
                    <Section name="future" />
                    <Section name="contact" />
                </div>
                <div className="me">
                    <div className="me-wrapper">
                        <MouseMovement factorX={2} factorY={2}>
                            <Me />
                        </MouseMovement>
                    </div>
                </div>
                <div className="backgrounds">
                    <MouseMovement factorX={20} factorY={10}>
                        <Background referTo={["start", "timeline"]} image="./images/backgrounds/section_00.jpg" />
                        <Background referTo={["bio"]} image="./images/backgrounds/section_01.jpg" add="./images/backgrounds/section_01_add.png" />
                        <Background referTo={["portfolio"]} image="./images/backgrounds/section_02.jpg" add="./images/backgrounds/section_02_add.png"/>
                        <Background referTo={["future"]} image="./images/backgrounds/section_05.jpg" add="./images/backgrounds/section_04_add.png"/>
                        <Background referTo={["contact"]} image="./images/backgrounds/section_03.jpg" add="./images/backgrounds/section_03_add.png"/>
                        <Background referTo={["contact"]} image="./images/backgrounds/section_04.jpg" add="./images/backgrounds/section_04_add.png"/>
                    </MouseMovement>
                </div>
            </main>
        </div>
    );
};

export default withContext(App);
