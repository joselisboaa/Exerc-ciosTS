import './App.css'
import { useEffect, useState } from 'react'
import * as C from './App.styles'
import { Item } from './types/item'
import { ListItem } from './components/ListItem'
import { AddTask } from './components/AddTask'
import { FetchingData } from './services/fetchingData'

function App() {
  const [list, setList] = useState<Item[]>([]);
  
  useEffect(() => {
    FetchingData().then(data => setList(data));
  }, []);
  
  const handleAddTask = (taskName: string, personName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      tasks: taskName,
      first_name: personName,
      last_name: '',
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
