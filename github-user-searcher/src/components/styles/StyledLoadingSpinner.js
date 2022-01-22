import styled from 'styled-components';

const StyledLoadingSpinner = styled.div`
    display: flex;
    align-items: center;
    
    @media screen and (min-width: 375px) {
        justify-content: center;
    }

    @media screen and (min-width: 1440px) {
        justify-content: flex-start;
    }

    width: 100%;
    height: 100%;

    padding: calc(35px - 1.5rem) 0rem;

    opacity: 0.7;

    .loader {
        border-radius: 50%;
        border: 3px solid rgba(0, 0, 0, 1);
        border-color: rgba(0, 0, 0, 0.4);
        border-top-color: rgba(0, 0, 0, 0.8);

        width: 3rem;
        height: 3rem;

        animation: loader-animation 600ms infinite ease-in-out;

        @keyframes loader-animation {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }
    }    
`

export default StyledLoadingSpinner;