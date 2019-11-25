import React, { useContext } from 'react';
import { MyContext } from '../../App'
import { Task, TaskContainer } from './ListStyled'

export const List = () => {
    const { list } = useContext(MyContext);

    const handlePric = () => {
        alert('norm');
    }

    return (
        <TaskContainer>
            {list.map(item => (
                <Task key={item.id} onClick={handlePric}>
                    {item.name}
                </Task>
            ))}
        </TaskContainer>
    )
}
