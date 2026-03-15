import { useState } from 'react'

import type { TaskType } from './types/task'
import type { FilterType } from './types/filter'

import Input from './components/Inputs/Input'
import { Filters } from './components/Filters/Filters'
import ListOfTasks from './components/ListOfTasks/ListOfTasks'
import './App.css'


function App() {
  const [input, setInput] = useState<string>('');
  const [tasks, setTasks] = useState<TaskType[] | []>(() => {
    const storagedData = localStorage.getItem('tasks');
    const data = storagedData ? JSON.parse(storagedData) : [];
    return data
  });
  const [filter, setFilter] = useState<FilterType>('all');
  const [nextId, setNextId] = useState<number>(0);


  function saveData(data: TaskType[]) {
    setTasks(data);
    localStorage.setItem('tasks', JSON.stringify(data));
  }

  function onHandleAdd(): void {
    if(input.trim() === '') return
    const newTask: TaskType = {
      id: nextId,
      title: input,
      completed: false,
      priority: 'low',
      createdAt: new Date().toDateString()
    }
    
    setNextId(prev => prev + 1);
    setInput('');
    saveData([...tasks, newTask]);
  }

  function onHandleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setInput(e.target.value);
  }

  function onHandleDelete(id: number) {
    const filteredTasks = tasks.filter(item => item.id !== id);
    saveData(filteredTasks);
  }

  function onHandleComplete(id: number) {
    const filteredTasks = tasks.map(item => {
      if(item.id === id) {
        return {...item, completed: true}
      }
      return item
    })
    saveData(filteredTasks);
  }

  function onHandleFilter(value: FilterType) {
    setFilter(value);
    console.log(value);
  }





  return (
    <>
      <div className="App">
        <Input handleClick={onHandleAdd} handleChange={onHandleChange} value={input} />
        <Filters filter={filter} changeFilter={onHandleFilter} />
        {tasks.length > 0 ? <ListOfTasks tasks={tasks} onDelete={onHandleDelete} onComplete={onHandleComplete} filter={filter} /> : null}
      </div>
    </>
  )
}

export default App

// Нужно написать маленькую систему управления задачами.
// Требования:
// Тип задачи. Поля: id, title, completed, priority, createdAt
// Массив задач
// Функция добавления задачи
// Функция завершения задачи -- Принимает id.
// Фильтр задач -- Принимает priority.Возвращает массив задач только с этим приоритетом.
// Фильтр незавершенных -- Возвращает только незавершённые задачи.
//