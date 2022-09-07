import { useState, KeyboardEvent } from 'react'
import * as C from './styles'

type Props = {
  onEnter: (taskName: string) => void;
}

export const AddTask = ({ onEnter }: Props) => {
  const [inputText, setInputText]= useState('');

  const handleKey = (e: KeyboardEvent) => {
    if (e.code === 'Enter' && inputText !== '') {
      onEnter(inputText);
      setInputText('');
    }  
  }
  
  return (
    <C.Container>
      <div className='image'>
        +
      </div>
      <input 
        type="text" 
        placeholder="Nova tarefa"
        onChange={event => setInputText(event.target.value)}
        value={inputText}
        onKeyUp={handleKey}
      />
    </C.Container>
  )
}