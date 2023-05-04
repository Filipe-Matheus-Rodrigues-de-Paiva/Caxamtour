import styled from "styled-components"

export const StyledModal = styled.div`
    background-color: #D9D9D9;
    position: absolute;
    right: 0;
    top: 0;
    width: 80vw;
    min-height: 450px;
    max-width: 450px;

    div {
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        width: 100%;

        span {
            font-weight: 500;
            color: white;
            position: absolute;
            top: 20px;
            left: 10px;
        }
    }

`