import React, {useState} from 'react'

const Question = ({title, info}) => {
    const [opened, setOpened] = useState(false)

    return (
        <article className='question'>
            <div className='question-header'>
                <h1>{title}</h1>
                <button onClick={() => setOpened(!opened)}>
                    {opened ? '-' : '+'}
                </button>
            </div>            
            {opened && <p>{info}</p>}
        </article>
    )
}

export default Question