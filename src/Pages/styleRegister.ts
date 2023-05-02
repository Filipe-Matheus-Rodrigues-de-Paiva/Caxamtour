import styled from "styled-components";

export const StyledRegister = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;

  .headerAndForm {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 230px;
    .returnButton {
      height: 42px;
      width: 135px;
      border-radius: 8px;
      background: #ffb703;
      font-family: "Inter";
      font-size: 24px;
      font-weight: 500;
      line-height: 29px;
      letter-spacing: 0em;
      color: #ffffff;
      border: 1px solid #FFB703;
    }
    
  }
  form {
    gap: 20px;
    height: 700px;
    width: 600px;
    border: 1px solid #02304733;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    label {
      font-family: "Inter";
      font-size: 24px;
      font-weight: 500;
      line-height: 29px;
      letter-spacing: 0em;
      text-align: left;
      padding-left: 50px;
    }
    input {
      align-self: center;
      height: 48px;
      width: 501px;
      border-radius: 8px;
      font-family: "Inter";
      font-size: 20px;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: left;
      color: #0077B6;
      background: #E7F4F7;
      border:1px solid #E7F4F7;

    }
    .signUpButton {
      align-self:center;
      height: 44px;
      width: 501px;
      border-radius: 8px;
      font-family: "Inter";
      font-size: 24px;
      font-weight: 500;
      line-height: 29px;
      letter-spacing: 0em;
      color: #FFFFFF;
      background: #FB8500;
      border: 1px solid #FB8500;

    }
  }
`;
