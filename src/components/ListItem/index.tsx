import * as C from './styles'
import { Item } from '../../types/item'
import { useState } from 'react';

type Props = {
  item: Item; 
  changeTaskValue: (id: number, taskValue: boolean) => void;
}


export const ListItem = ({ item, changeTaskValue }: Props) => {

  
  return (
    <C.Container taskDone={item.taskDone}>
      <input 
        type="checkbox" checked={item.taskDone} 
        onChange={(e) => changeTaskValue(item.id, e.target.checked)}
      />
      <label>{item.name} - {item.taskDone.toString()}</label>
    </C.Container>
  )
}