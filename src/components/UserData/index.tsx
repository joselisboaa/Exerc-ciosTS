import * as C from './styles'
import { Item } from '../../types/item'

type Props = {
  item: Item
}

export const UserData = ({ item }: Props) => {

  return (
    <C.Container>
      <span>Tarefa de {`${item.first_name} ${item.last_name}`}</span>
    </C.Container>
  )
}