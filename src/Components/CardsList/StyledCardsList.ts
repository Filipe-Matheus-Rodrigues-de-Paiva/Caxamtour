import styled from "styled-components";

export const CardsListStyled = styled.section`
  margin-top: 140px;
  display: flex;
  justify-content: center;
  ul {
    width: 90%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
    margin-bottom: 60px;
    li {
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 300px;
      border-radius: 8px;
      @media (min-width: 321px) {
        width: 31%;
      }
      height: 300px;
      background-color: #9DB3BE;
      border: 2px solid #02C5FC;
      text-align: center;
      p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        color: #000000;
        margin-top: 10px;
      }
      img {
        width: 90%;
        align-self: center;
        height: 180px;
      }
      button {
        align-self: center;
        border-radius: 8px;
        border-style: none;
        background-color: #d9d9d9;
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        color: #000000;
        margin-top: 10px;
        padding: 10px;

        :hover {
          background-color: #FFFFFF;
        }
      }
    }
  }
`;
