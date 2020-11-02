import React from 'react'
import { Link } from 'react-router-dom'

import ButtonGame from '../UI/ButtonGame'

import hand from '../../static/img/hand.png'
import './style.css'

const Start: React.FC = () => {
    return (
        <div className="container">
            <div className="wrapper">
                <img src={hand} className="hand" alt="hand" />
                <div className="block">
                    <span className="title">Who wants to be a millionaire?</span>
                    <Link to="/millionaire-game/game">
                        <ButtonGame title="Start" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Start
