import React from 'react'

import ButtonAnswer from '../../UI/ButtonAnswer'

import { AnsweredState } from '../index'

type Answer = {
    id: number
    text: number | string
}

interface Props {
    answers: Answer[]
    onAnswerClick(id: number): void
    answeredQuestion: AnsweredState
}

const AnswerList: React.FC<Props> = ({ answers, onAnswerClick, answeredQuestion }) => {
    return (
        <>
            {answers.map((answer) => (
                <ButtonAnswer
                    key={answer.id}
                    id={answer.id}
                    text={answer.text}
                    onAnswerClick={onAnswerClick}
                    answeredQuestion={answeredQuestion ? answeredQuestion[answer.id] : null}
                />
            ))}
        </>
    )
}

export default AnswerList
