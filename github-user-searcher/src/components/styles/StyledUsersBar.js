import styled from 'styled-components';

export const StyledUsersBar = styled.div`
    display: flex;
    flex-direction: column;
    
    align-items: flex-start;
    justify-content: stretch;
    
    position: relative;
    min-height: 0px;
    max-height: 500px;
    overflow-x: hidden;

    background: ${props => props.background ? props.background : 'rgba(99, 99, 99, 0.1)'};
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    margin: 0rem 0rem;
    padding: 7rem 4rem 4rem 4rem;
    scroll-padding: 0rem;
    color: ${props => props.color ? props.color : 'rgb(99, 99, 99)'};

    .description-header {
        width: 100%;
        text-align: center;

        @keyframes description-header-animation {
            0% {
                transform: translateY(-50px);
                opacity: 0;
            }
            100% {
                transform: translateY(0px);
                opacity: 1;
            }
        }

        animation: description-header-animation 1s ease forwards; 
    }

    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    ::-webkit-scrollbar {
        display: none;
    }
    ::-webkit-scrollbar-thumb {
        border: 2rem solid rgba(0, 0, 0, 0);
        background-clip: padding-box;
        border-radius: 9999px;
        background-color: #AAAAAA;
    }
`

export default StyledUsersBar;