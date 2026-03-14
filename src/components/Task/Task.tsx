import './task.css'

import closeIcon from '../../assets/close-round-svgrepo-com.svg'
import doneIcon from '../../assets/done-svgrepo-com.svg'

type Props = {
    onDelete: (id: number) => void,
    onComplete: (id: number) => void,
    text: string,
    id: number,
    completed: boolean
}

export function Task({onDelete, onComplete, text, id, completed}: Props) {

    const doneButton = (
        <button onClick={() => onComplete(id)} >
            <img className='done-icon' src={doneIcon} alt="" />
        </button>
    )

    const closeButton = (
        <button onClick={() => onDelete(id)}>
            <img className='close-icon' src={closeIcon} alt="" />
        </button>
    )


    return (
        <div className="task">
            <p>{text}</p>
            <div className="buttons">
                {completed === false ? doneButton : null}
                {closeButton}
            </div>
        </div>
    )
}