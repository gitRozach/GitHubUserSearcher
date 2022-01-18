import styled from "styled-components";

const StyledButton = styled.button`
    cursor: pointer;
    border: none;
    border-radius: 8px;
    background-color: ${props => props.background ? props.background : 'hsl(180, 66%, 49%)'};

    width: ${props => props.width ? props.width : '40vw' };
    height: ${props => props.height ? props.height : '3.9rem' };

    margin: 1rem 0rem;
    padding: 0rem;
    position: relative;

    transition: 200ms all;
    
    font-size: ${props => props.fontSize ? props.fontSize : '20px'};
    font-family: 'Poppins', sans-serif;
    text-align: center;
    color: ${props => props.color ? props.color : 'white'};
    

    :hover {
        font-size: calc(${props => props.fontSize ? props.fontSize : '20px'} + 4px);
        ::after, ::before {
            width: 100%;
            right: 0;
        }
    }

    :active {
        font-size: calc(${props => props.fontSize ? props.fontSize : '20px'} + 6px);
        value: "hallo";
        ::after {
            width: 0rem;
            left: 0;
        }
        ::before {
            width: 100%;
            right: 0;
        }
    }

    span {
        z-index: 1;
        position: relative;
    }

    ::before {
        content: ${props => props.clickedText ?? "jajaj"};
        color: ${props => props.color || 'yellow'};
        width: ${props => props.width ? props.width : '40vw' };
        height: ${props => props.height ?? '3.9rem'};
        background-color: hsl(257, 27%, 26%);
        border-radius: 8px;
        position: absolute;
        left: 0;
        top: 0;

        display: flex;
        align-items: center;
        justify-content: center;

        z-index: ${props => props.clickedText ? '10' : '-1'};

        transition: 30ms all;
    }

    ::after {
        content: "";
        display: block;
        width: 0rem;
        height: ${props => props.height ?? '3.9rem'};
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 8px;
        position: absolute;
        left: 0;
        top: 0;
        z-index: ${props => props.clickedText ? '-1' : '1'};

        transition: 200ms all;
        transition-delay: 35ms;
    }
`

export default StyledButton;