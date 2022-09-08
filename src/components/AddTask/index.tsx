import { useState, KeyboardEvent } from 'react'
import * as C from './styles'

type Props = {
  onEnter: (taskName: string, personName: string) => void;
}

export const AddTask = ({ onEnter }: Props) => {

  const [taskInputText, setTaskInputText]= useState('');
  const [personInputText, setPersonInputText] = useState('')

  const handleKey = (e: KeyboardEvent) => {
    if (e.code === 'Enter' && taskInputText !== '' && personInputText !== '') {
      onEnter(taskInputText, personInputText);
      setTaskInputText('');
      setPersonInputText('');
    }  
  }

  
  return (
    <C.Container>
      <div className='image'>
        +
      </div>
      <C.ContainerField>
        <input 
          className="taskFor"
          type="text" 
          placeholder="Pessoa designada para a tarefa"
          spellCheck="false"
          onChange={event => setPersonInputText(event.target.value)}
          value={personInputText}
          onKeyUp={handleKey}
        />
        <input 
          className="newTask"
          type="text" 
          placeholder="Nova tarefa"
          spellCheck="false"
          onChange={event => setTaskInputText(event.target.value)}
          value={taskInputText}
          onKeyUp={handleKey}
        />
      </C.ContainerField>
    </C.Container>
  )
}