import styled from "styled-components"

export const HeaderStyled = styled.header`
    border-bottom: 2px solid #828282;
    display: flex;
    flex-direction: column;
    gap: 7px;
    align-items: center;
    justify-content: center;
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: white;
    height: 60px;

    @media (min-width: 425px) {
        flex-direction: row;
        justify-content: space-around;
    }

    @media (min-width: 1024px) {
        justify-content: space-between;
        padding-left: 15px;
        padding-right: 15px;
    }

    .logo {
        font-size: 1.5rem;

        @media (min-width: 1024px) {
            position: relative;
            left: 40px;
        }
        
        span {
            color: #33C9FF;
        }
    }

    div {
        display: flex;
        gap: 15px;

        button {
            background: none;
            border: none;
            color: blue;
            font-weight: 600;
        }

        h1 {
            font-size: 16px;
        }

        span {
            position: relative;
            top: 2px;
            cursor: pointer;
        }

        @media (min-width: 1024px) {
            position: relative;
            right: 40px;
        }
    }
`