import React from 'react'
import './home.scss'
import HelloIcon from '../../assets/icons/waving-hand.png'

function Home() {
    return (
        <div className='homepage page'>
            <div className='section'>
                <header>
                    <img src={HelloIcon} alt='Hello icon'/>
                    <h1 className='secondary-text'><span className='bigTitle'>Hello</span> <br/>and welcome to my portfolio!</h1>
                </header>
            </div>
        </div>
    )
}

export default Home