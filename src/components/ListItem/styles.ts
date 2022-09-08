import styled from "styled-components";

type ContainerProps = {
  taskDone: boolean;
}

export const Container = styled.div(({ taskDone }: ContainerProps) => (
`
  display: flex;
  flex-flow: row wrap;
  background-color: #20212C;
  padding: 10px;
  border-radius: 10px;
  margin-block: 10px;
  align-items: center;
  border: 1px solid #444;

  input {
    width: 15px;
    height: 15px;
    margin-right: 5px; 
  }

  label {
    color: #CCC;
    text-decoration: ${taskDone ? 'line-through' : 'initial'}
  }

  div {
    flex: 100%;
  }
`
));