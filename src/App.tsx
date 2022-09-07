import './App.css'
import { useState } from 'react'
import * as C from './App.styles'
import { Item } from './types/item'
import { ListItem } from './components/ListItem'
import { initialData } from './services/data'
import { AddTask } from './components/AddTask'

function App() {
  const [list, setList] = useState<Item[]>(initialData);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      taskDone: false
    });

    setList(newList);
  }

  const handleTaskChange = (id: number, task: boolean) => {
    let newList = [...list];
    for(let i = 0; i < newList.length; i++) {
      if(newList[i].id === id) {
        newList[i].taskDone = task;
      }
    }

    setList(newList);
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>
          Lista de Tarefas
        </C.Header>

        <AddTask onEnter={handleAddTask}/>

        {list.map(item => (
          <ListItem key={item.id} item={item} changeTaskValue={handleTaskChange}/>
        ))}

      </C.Area>
    </C.Container>
  )
}

export default App
