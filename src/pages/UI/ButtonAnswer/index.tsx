import React from 'react'

import './style.css'

interface Props {
    id: number
    text: string | number
    onAnswerClick(id: number): void
    answeredQuestion: string | number | null
}

const Button: React.FC<Props> = ({ id, text, onAnswerClick, answeredQuestion }) => {
    const addClass = () => {
        if (answeredQuestion === 'failed') {
            return 'failed'
        }
        if (answeredQuestion === 'success') {
            return 'success'
        }
        return ''
    }

    return (
        <button className={`btn-answer ${addClass()}`} onClick={() => onAnswerClick(id)}>
            <span className="id">{id}: </span>
            {text}
        </button>
    )
}

export default Button
