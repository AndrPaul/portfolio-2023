import React, { useState } from 'react';
import './home.scss';
import HelloIcon from '../../assets/icons/waving-hand.png';
import PrimaryBtn from '../../components/primaryBtn/PrimaryBtn';
import StackImgs from '../../components/stack-list/StackImgs';


function Home() {
    const jobTitles = ['Front-end developer', 'Web integrator', 'Web publisher'];
    return (
        <div className='homepage page'>
            <div className='section'>
                <header>
                    <div className='heading'>
                        <h1>Paul Andrica</h1>
                    </div>
                    <h2 className='subtitle'>
                        <span className='job-titles-wrapper'>{jobTitles.map((title, index) => (
                            <span className='job-titles' key={index}>{title}</span>
                        ))}</span>
                    </h2>
                </header>
                <div className='description-hp'>
                    <p>Welcome to my website! My name is <strong>Paul Andrica</strong> and I'm based in Belgium.</p>
                    <p>If you have stumbled upon this page, you have come to the right place to discover my <strong>portfolio</strong> of <strong>web development</strong> projects. I&nbsp;specialize in creating stunning, user-friendly websites using the latest technologies and techniques, with <strong>React</strong> being my main focus.</p>
                </div>
                <div className='cta-container'>
                    <PrimaryBtn path={'/portfolio'} color='green' text={'Portoflio'} />
                    <PrimaryBtn path={'#'} color='orange' text={'Open CV'} />
                </div>
                <div className='tech-stack-logos'>
                    <StackImgs />
                </div>
            </div>
        </div>
    );
}

export default Home;