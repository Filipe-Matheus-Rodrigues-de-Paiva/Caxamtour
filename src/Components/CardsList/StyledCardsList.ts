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
      width: 300px;
      @media (min-width: 321px) {
        width: 31%;
      }
      height: 300px;
      background: #d9d9d9;
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
        height: 180px;
      }
      button {
        border-style: none;
        background-color: #d9d9d9;
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        color: #000000;
        margin-top: 10px;
      }
    }
  }
`;
