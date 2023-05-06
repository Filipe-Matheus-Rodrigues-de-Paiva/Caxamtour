import styled from "styled-components";

export const StyledHotelModal = styled.div`
    width: 70%;
    height: 600px;
    border: 2px solid #828282;
    background-color: #567899;
    position: absolute;
    right: 350px;
    z-index: 1;
    border-radius: 4px;
    padding-bottom: 10px;
    border-radius: 8px;

    .modal_header {
        padding-left: 10px;
        padding-right: 10px;
        height: 39.97px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        h4 {
            color: var(--color-grayZero);
        }

        span {
            font-weight: 700;
            font-size: 14px;
            color: #000000;
            cursor: pointer;
        }
    }

    .modalMainContainer {
        height: 90%;
        display: flex;
        gap: 50px;
        position: relative;
        
        img {
            width: 36%;
            height: 500px;
            padding-left: 10px;
            align-self: center;
        }

        div {
            display: flex;
            flex-direction: column;
            gap: 15px;
            padding-right: 10px;

            h1 {
                text-align: center;
            }

            p {
                text-align: justify;
                line-height: 22px;
                font-weight: 600;
            }

            ul {
                display: flex;
                flex-direction: column;
                gap: 8px;
                width: fit-content;
            }

            li {
                text-decoration: underline;
                text-align: left;
                font-weight: 600;
                width: 100%;
                height: fit-content;
                background-color: transparent;
            }

            .favoriteContainer {
                display: flex;
                width: fit-content;
                flex-direction: row;
                align-items: center;
                position: absolute;
                right: 40px;
                bottom: 150px;

                svg {
                    font-size: larger;
                    cursor: pointer;

                    :hover {
                        fill: red;
                    }
                }
            }
        }
    }
`