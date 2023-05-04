import styled from "styled-components";

export const StyledMenuNavigation = styled.nav`
    display: flex;
    gap: 30px;
    position: absolute;
    top: 100px;
    left: 50px;

    button {
        background-color: white;
        color: rgba(2, 62, 138, 1);
        font-size: 24px;
        height: 48px;
        width: 184px;
        border: 2px solid rgba(2, 48, 71, 0.2);
        transition: cubic-bezier(0.165, 0.84, 0.44, 1) 0.5s;

        :hover {
            background-color: rgba(2, 62, 138, 0.6);
            color: white;
        }
    }
`