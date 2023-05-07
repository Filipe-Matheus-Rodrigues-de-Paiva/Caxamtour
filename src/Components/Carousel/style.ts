import styled from "styled-components";

export const StyledContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin: 0 auto 45px auto;
    overflow: hidden;
    width: 1440px;
    max-width: 90%;

    .swiper__container {
        width: 1440px;
        max-width: 90%;
        height: 450px;

        border-radius: 20px;
    }

    .text__container > h1 {
        margin: 35px 0 20px 0;
    }

    .text__container > p {
        font-size: 22px;
    }
`;

export const StyledImg = styled.img`
    box-sizing: border-box;

    z-index: 2;
    overflow: hidden;

    height: 500px;
    width: 100%;
`;
