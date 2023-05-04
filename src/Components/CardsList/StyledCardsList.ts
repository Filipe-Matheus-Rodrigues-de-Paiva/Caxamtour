import styled from "styled-components";

export const CardsListStyled = styled.section`
  margin-top: 140px;
  margin-left: 100px;
  ul {
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin-bottom: 60px;
    li {
      width: 32%;
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
