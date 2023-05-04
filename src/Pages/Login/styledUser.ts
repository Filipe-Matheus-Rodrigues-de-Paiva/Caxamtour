import styled from "styled-components";

export const StyledHeaderLogin = styled.header`
  border-bottom: 1px solid #828282;
  padding-left: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  position: sticky;
  z-index: 1;
  top: 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h1 {
    font-weight: 500;
  }

  span {
    color: #33C9FF;
  }

  margin-bottom: 50px;
`

export const Conteiner = styled.div`

display: flex;
width: 100%;
justify-content: center;

`

export const StyledLogin = styled.div`

    padding: 10px 15px;
    border: 1px solid #023047;
    border-radius: 10px;
    align-self: center;
    display: flex;
    width: 90%;
    max-width: 360px;
    flex-direction: column;
  

  .divButton {
    text-align: center;
    width: 100%;

    button {
        margin-top: 15px;
        height: 40px;
        background-color: #FFB703;
        color: black;
        border: none;
        border-radius: 4px;
        width: 100%;

      @media (min-width: 375px){
        left: 265px;
      }

      @media (min-width: 425px){
        left: 290px;
      }
    }
  }
  `
  
  export const StyledFormLogin = styled.form`
    

      label {
        font-size: 16px;
      }

      input {
        color: black;
        height: 40px;
        width: 100%;
        padding-left: 15px;
        background-color: #E7F4F7;
        border: none;
      }

      input::placeholder {
        color: #0077B6;
      }

      button {
        height: 40px;
        background-color: #FB8500;
        color: white;
        border: none;
        border-radius: 4px;
        width: 100%;
        margin-bottom: 15px;
      }

      p {
        color: red;
      }
`