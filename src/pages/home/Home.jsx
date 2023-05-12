import React, { useState } from 'react';
import './home.scss';
import HelloIcon from '../../assets/icons/waving-hand.png';
import PrimaryBtn from '../../components/primaryBtn/PrimaryBtn';
import StackImgs from '../../components/stack-list/StackImgs';

function Home() {
    const jobTitles = ['front-end developer', 'web integrator', 'web publisher'];
    return (
        <div className='homepage page'>
            <div className='section'>
                <header>
                    <div className='heading-hp'>
                        <h1>Hello</h1>
                        <img src={HelloIcon} alt='Hello icon' />
                    </div>
                    <h2 className='subtitle'>
                        I'm a&nbsp;
                        <span className='job-titles-wrapper'>{jobTitles.map((title, index) => (
                            <span className='job-titles' key={index}>{title}</span>
                        ))}</span>
                    </h2>
                </header>
                <div className='description-hp'>
                    <p>Welcome to my website! My name is <strong>Paul Andrica</strong> and I'm based in Belgium. </p>
                    <p>If you have stumbled upon this page, you have come to the right place to discover my <strong>portfolio</strong> of <strong>web development</strong> projects. I&nbsp;specialize in creating stunning, user-friendly websites using the latest technologies and techniques, with <strong>React.js</strong> being my main focus.</p>
                </div>
                <div className='cta-container'>
                    <PrimaryBtn path={'/portfolio'}color='green' text={'Portoflio'} />
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