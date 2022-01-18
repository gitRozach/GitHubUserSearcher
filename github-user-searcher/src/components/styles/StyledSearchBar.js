import styled from 'styled-components';

const backgroundDesktopSVG = '<svg xmlns="http://www.w3.org/2000/svg" width="1110" height="168"><path fill="rgba(52, 52, 52, 1.0)" fill-rule="evenodd" d="M647-93.924c0 52.724 15.5 90.486 73 114.877 57.5 24.391 113.055 2.134 168.786 14.894 55.731 12.76 55.731 94.962 108.214 145.549s163.142 62.874 253.12 11.552c89.976-51.322 130.765-171.152 103.88-241.807C1327.115-119.515 1275.593-184 1027-184c-248.593 0-380 37.353-380 90.076zm-781 213c0 52.724 15.5 90.486 73 114.877 57.5 24.391 113.055 2.134 168.786 14.894 55.731 12.76 55.731 94.962 108.214 145.549s163.142 62.874 253.12 11.552C559.095 354.626 599.884 234.796 573 164.141 546.115 93.485 494.593 29 246 29c-248.593 0-380 37.353-380 90.076z"/></svg>'
const backgroundMobileSVG = '<svg xmlns="http://www.w3.org/2000/svg" width="237" height="128"><path fill="rgba(52, 52, 52, 1.0)" fill-rule="evenodd" d="M0-.924C0 51.8 15.5 89.562 73 113.953c57.5 24.391 113.055 2.134 168.786 14.894 55.731 12.76 55.731 94.962 108.214 145.549s163.142 62.874 253.12 11.552C693.095 234.626 733.884 114.796 707 44.141 680.115-26.515 628.593-91 380-91 131.407-91 0-53.647 0-.924z"/></svg>';
const backgroundDesktopBase64 = window.btoa(backgroundDesktopSVG);
const backgroundMobileBase64 = window.btoa(backgroundMobileSVG);

const StyledSearchBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
    top: 50px;
    
    background: rgba(63, 63, 63, 1);
    border: none;
    border-radius: 0px;
    margin: 1rem 0rem;

    z-index: 10;

    transition: 400ms all ease-in-out;

    :hover {
        background-position: center;
    }

    @media screen and (min-width: 375px) {
        flex-direction: column;
        background-image: url('data:image/svg+xml;base64, ${backgroundMobileBase64}');
        background-position: right;
        background-size: 200%;
        padding: 1rem 3rem;
    }

    @media screen and (min-width: 1440px) {
        flex-direction: row;
        background-image: url('data:image/svg+xml;base64, ${backgroundDesktopBase64}');
        background-size: 300%;
        padding: 3rem;
    }

    .input-field {
        border-radius: 8px;
        border: none;
        outline: none;
        background-color: white;
    
        padding: 1rem 0rem;
        width: 100%;
        spellcheck: false;
    
        font-size: 3rem;
        font-family: 'Poppins', sans-serif;
        color: rgb(63, 63, 63);
        text-align: center;
        filter: drop-shadow(0px 0px .2rem white);

        @media screen and (min-width: 375px) {
            margin: 1.5rem 0rem;
        }
    
        @media screen and (min-width: 1440px) {
            margin: 0rem;
        }

        :focus {
            outline: none;
        }

        ::selection {
            color: rgb(156, 156, 156);
            background: transparent;
          }
    }

    .input-error-label {
        position: absolute;
        display: block;
        bottom: -8px;
        left: 3.1rem;
        color: red;
        text-align: left;
        width: 100%;
        font-style: oblique;
    }
`

export default StyledSearchBar;