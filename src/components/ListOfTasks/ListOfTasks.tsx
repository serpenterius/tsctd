
import type { TaskType } from "../../types/task"
import type { FilterType } from "../../types/filter";
import { Task } from "../Task/Task";

import './listOfTasks.css'


type Props = {
    tasks: TaskType[] | [],
    filter: FilterType,
    onDelete: (id: number) => void,
    onComplete: (id: number) => void
}

// Сделал систему фильтрации и вывода задач, надо пересмотреть потом, может ниоч вышло


function ListOfTasks({tasks, onDelete, onComplete, filter}: Props) {

    const undoneTasks = tasks.map(item => {
        if(item.completed === false) return <Task key={item.id} id={item.id} text={item.title} completed={item.completed} onDelete={onDelete} onComplete={onComplete} />
    });
    const doneTasks = tasks.map(item => {
        if(item.completed === true) return <Task key={item.id} id={item.id} text={item.title} completed={item.completed} onDelete={onDelete} onComplete={onComplete} />
    })

    let taskList;


    switch(filter) {
        case 'all':
            taskList = (
                <div className="tasks">
                    <div className="undone-tasks">
                        {...undoneTasks}
                    </div>

                    <div className="done-tasks">
                        {...doneTasks}
                    </div>
                </div>
            )
            break;
        case 'active':
            taskList = (
                <div className="tasks">
                    <div className="undone-tasks">
                        {...undoneTasks}
                    </div>
                </div>
            )
            break;
        case 'completed':
            taskList = (
                <div className="tasks">
                    <div className="done-tasks">
                        {...doneTasks}
                    </div>
                </div>
            )
            break;
    }
    


    return (
        {...taskList}
    )
}

export default ListOfTasks

