import styled from 'styled-components';

export const StyledFooterBar = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (min-width: 375px) {
        flex-direction: column;
        align-items: center;
        padding: 1rem 0rem 1rem 0rem;
    }

    @media screen and (min-width: 1440px) {
        flex-direction: row;
        align-items: flex-start;
        padding: 0rem;
    }
    
    
    align-items: flex-start;
    justify-content: center;
    
    margin: 0;
    width: 100%;

    font-family: 'Poppins', sans-serif;
    font-weight: 700;

    background: rgb(74, 74, 74);

    button {
        cursor: pointer;
        border: none;
        outline: none;
        background: transparent;
        color: rgb(156, 156, 156);
        margin-bottom: .8rem;
        font-family: 'Poppins', sans-serif;
        font-size: 18px;
        font-weight: 500;
    }

    .footer-box {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20%;
        color: white;
        flex-direction: column;
        margin: 1rem 0rem;
    }

    .footer-icon-box {
        margin: 1rem 1rem;
        cursor: pointer;
        color: white;
    }

    .footer-social-media-box {
        display: flex;
        padding: 2.5rem 1rem 1rem 1rem;        
    }
`

export default StyledFooterBar;