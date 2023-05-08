import styled from "styled-components"

export const StyledModal = styled.div`
    background-color: #D9D9D9;
    position: absolute;
    right: 0;
    top: 0;
    width: 80vw;
    height: 100vh;
    max-width: 450px;
    box-shadow: -10px 0 10px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    gap: 15px;
    overflow-y: auto;

    .emptyModalCloseButton {
        position: relative;
        top: 25px;
        left: 25px;
    }

    .emptyModal {
        align-self: center;
        position: absolute;
        top: 350px;

    }

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: rgba(2, 197, 252, 1);
        border-radius: 5px;
    }


    button {
        :hover {
            text-decoration: underline  ;
        }
    }

    .header {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 40px;

        span {
            font-weight: 500;
            color: white;
            position: absolute;
            top: 20px;
            left: 10px;
        }
    }

    .preferences {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
        position: relative;
        left: 20px;
        

        h1 {
            text-decoration: underline;
            align-self: center;
        }

        .hotel {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }

        .restaurants {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }

        .events {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }

        ul {
            
            display: flex;
            flex-direction: column;
            align-items: center;
            align-self: center;
            gap: 20px;

            li {
                display: flex;
                flex-direction: column;
                gap: 15px;
                background-color: white;

                h1 {
                    text-decoration: none;
                    align-self: center;
                }
            }
        }

        img {
            width: 100%;
        }
    }

`