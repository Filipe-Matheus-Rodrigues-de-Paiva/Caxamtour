import styled from "styled-components";

export const StyledMenuNavigation = styled.nav`
    display: flex;
    gap: 10px;
    margin-top: 20px;
    position: absolute;

    button {
        padding: 0px 7px;
        background-color: white;
        color: rgba(2, 62, 138, 1);
        font-size: 14px;
        height: 30px;
        width: fit-content;
        border: 2px solid rgba(2, 48, 71, 0.2);
        transition: cubic-bezier(0.165, 0.84, 0.44, 1) 0.5s;

        :hover {
            background-color: rgba(2, 62, 138, 0.6);
            color: white;
        }
    }

    @media (min-width: 375px) {
        left: 30px;
    }

    @media (min-width: 425px) {
        left: 0;
        button {
            width: 98px;
            padding: 0;
        }
    }

    @media (min-width: 768px) {
        width: 100%;
        display: flex;
        justify-content: center;
        button {
            width: 180px;
            font-size: 24px;
            height: 48px;
            padding: 0px 10px;
        }
    }

    @media (min-width: 1024px) {
        gap: 30px;
    }
`