import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import gameJson from '../../static/game.json'

import NavState from '../../context/navContext'
import AnswerList from './AnswerList'
import BurgerButton from '../UI/BurgerButton'
import Stages from './Stages'

import './style.css'

export type Answered = {
    [answered: string]: string | number
}
export type AnsweredState = Answered | null

export type Active = number

const Question: React.FC = () => {
    const [activeQuestion, setActiveQuestion] = useState<Active>(0)
    const [answeredQuestion, setAnsweredQuestion] = useState<AnsweredState>(null)

    const history = useHistory()

    const { quiz } = gameJson
    const { stages } = gameJson
    const { answers } = gameJson.quiz[activeQuestion]
    const question = gameJson.quiz[activeQuestion]

    console.log(stages)

    const onAnswerClick = (answerId: number) => {
        if (answeredQuestion) {
            return
        }
        if (answerId === question.rightAnswerId) {
            //true???
            setAnsweredQuestion({ [answerId]: 'success' })

            const isGameFinished = () => {
                return activeQuestion + 1 === quiz.length
            }

            const timeout = setTimeout(() => {
                if (isGameFinished()) {
                    history.push({
                        pathname: '/millionaire-game/finish',
                        state: {
                            prizeStep: activeQuestion,
                        },
                    })
                    setAnsweredQuestion(null)
                    setActiveQuestion(0)
                } else {
                    setActiveQuestion((prev) => prev + 1)
                    setAnsweredQuestion(null)
                }

                clearTimeout(timeout)
            }, 1000)
        } else {
            setAnsweredQuestion({ [answerId]: 'failed' })
            const timeout = setTimeout(() => {
                history.push({
                    pathname: '/millionaire-game/finish',
                    state: {
                        prizeStep: activeQuestion - 1,
                    },
                })
                clearTimeout(timeout)
            }, 1000)
        }
    }

    return (
        <NavState>
            <div className="quiz-container">
                <div className="quiz-game">
                    <div className="game-container">
                        <span className="quiz-game__title">{question.question}</span>
                        <div className="quiz-game__questions">
                            <AnswerList
                                answers={answers}
                                onAnswerClick={onAnswerClick}
                                answeredQuestion={answeredQuestion}
                            />
                        </div>
                    </div>
                </div>
                <BurgerButton />

                <Stages stages={stages} activeQuestion={activeQuestion} />
            </div>
        </NavState>
    )
}

export default Question
