import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  border: 1px solid #555;
  border-radius: 15px;
  padding: 8px;
  height: 75px;
  margin-block: 20px;

  div:nth-child(2) {
    flex: 1;
  }
  
  .image {
    font-size: 25px;
    margin-right: 5px;
  }
  `;
  
  export const ContainerField = styled.div`
  display: flex;
  flex-flow: column wrap;

  input {
    border: 0;
    background: transparent;
    outline: none;
    color: #fff;
    font-size: 18px;
    flex: 1;
  }

  .newTask {
    border-top: 1px solid #555;
  }
  `