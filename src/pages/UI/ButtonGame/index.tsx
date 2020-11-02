import React from 'react'

import './style.css'

interface Props {
    title: string
}

const ButtonGame: React.FC<Props> = ({ title }) => {
    return <button className="btn-game">{title}</button>
}

export default ButtonGame
