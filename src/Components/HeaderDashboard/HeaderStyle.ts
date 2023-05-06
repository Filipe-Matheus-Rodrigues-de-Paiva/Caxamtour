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
    height: 80px;

    @media (min-width: 425px) {
        flex-direction: row;
        justify-content: space-around;
        gap: 0px;
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
        gap: 9px;

        button {
            padding-left: 5px;
            background: none;
            border: none;
            color: blue;
            font-weight: 600;
        }

        h1 {
            font-size: 14px;
            position: relative;
            left: 10px;

        }

        span {
            cursor: pointer;
            padding-left: 15px;
        }

        @media (min-width: 425px) {
            gap: 0px;
            font-size: 14px;
        }

        @media (min-width: 768px) {
            gap: 10px;
        }

        @media (min-width: 1024px) {
            padding-right: 40px;
        }
    }
`