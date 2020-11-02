import React, { useContext } from 'react'

import { MenuContext } from '../../../context/navContext'
import { Active } from '../index'

import './style.css'

interface Stage {
    id: string | number
    amount: string
}

interface Props {
    stages: Stage[]
    activeQuestion: Active
}

const Stages: React.FC<Props> = ({ stages, activeQuestion }) => {
    const { isMenuOpen } = useContext(MenuContext)

    const setActiveStage = (stage: Stage) => {
        if (activeQuestion === stage.id) {
            return 'current'
        } else if (activeQuestion > stage.id) {
            return 'completed'
        } else {
            return ''
        }
    }

    return (
        <>
            <div className={`quiz-stage ${isMenuOpen ? 'opened' : ''}`}>
                {stages.map((stage) => (
                    <div className={`stage ${setActiveStage(stage)}`} key={stage.id}>
                        {stage.amount}
                    </div>
                ))}
            </div>
        </>
    )
}

export default Stages
