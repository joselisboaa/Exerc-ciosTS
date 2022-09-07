import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #555;
  border-radius: 15px;
  padding: 10px;
  margin-block: 20px;

  input {
    border: 0;
    background: transparent;
    outline: none;
    color: #fff;
    font-size: 18px;
    flex: 1;
  }

  .image {
    font-size: 25px;
    margin-right: 5px;
  }
`;