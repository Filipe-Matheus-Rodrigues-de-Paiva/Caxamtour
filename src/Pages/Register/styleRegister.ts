import styled from "styled-components";

export const StyledHeaderRegister = styled.header`
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

export const StyledRegister = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: fit-content;

  .divButton {
    align-self: center;
    width: 90%;
    max-width: 360px;
    margin-bottom: 20px;

    button {
      position: relative;
      left: 210px;
      width: 70px;
      height: 30px;
      border-radius: 4px;
      border: none;
      background-color: #FB8500;
      color: white;

      @media (min-width: 375px){
        left: 265px;
      }

      @media (min-width: 425px){
        left: 290px;
      }
    }
  }
  
  form {
    padding: 10px 15px;
    border: 1px solid #023047;
    border-radius: 10px;
    align-self: center;
    display: flex;
    gap: 10px;
    width: 90%;
    max-width: 360px;
    flex-direction: column;

    

      label {
        font-size: 16px;
      }

      input {
        color: black;
        height: 40px;
        padding-left: 15px;
        background-color: #E7F4F7
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
      }

      p {
        color: red;
      }
  }
`
