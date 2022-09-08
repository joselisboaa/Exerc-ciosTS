import * as C from './styles'
import { Item } from '../../types/item'
import { UserData } from '../UserData/index'

type Props = {
  item: Item; 
  changeTaskValue: (id: number, taskValue: boolean) => void;
}


export const ListItem = ({ item, changeTaskValue }: Props) => {

  
  return (
    <C.Container taskDone={item.taskDone}>
      <UserData  item={item}/>
      <input 
        type="checkbox" checked={item.taskDone} 
        onChange={(e) => changeTaskValue(item.id, e.target.checked)}
      />
      <label>{item.tasks}</label>
    </C.Container>
  )
}