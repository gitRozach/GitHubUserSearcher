import styled from 'styled-components';

const StyledUserItem = styled.div`
    display: flex;
    align-items: center;

    padding: 0;
    margin: 0 0 1rem 0;
    width: 100%;
    border-radius: 8px;
    transform: translateY(200px);
    filter: drop-shadow(0px 0px .2rem ${props => props.color ? props.color : 'white'});

    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-weight: 300;
    color: ${props => props.color ? props.color : 'black'};;

    background: ${props => props.background ? props.background : 'white'};
    animation: slide-in-animation 1s ease forwards; 

    .user-info-box {
        display: flex;
		justify-content: flex-start;
		align-items: center;
        flex-direction: row;
        padding: 0;
        margin: 0;

        .user-info {
			font-size: 20px;
            padding: 0rem 1rem 0rem 0rem;
            opacity: 0;
            animation: user-info-animation 1s ease forwards;

            @keyframes user-info-animation {
                from { 
                    opacity: 0;
                }
                to {
                    opacity: 1;
                }
            }
        }
    }

    .username-label {
        text-decoration: none;
        font-size: 20px;
        font-weight: 700;
        color: black;
    }
    
    Button {
        max-width: 7rem;
    }

    @media screen and (min-width: 375px) {
        flex-direction: column;
        padding: 0rem;

        .user-item-header {
            display: flex;
            flex-direction: column;
            width: 100%;
            align-items: center;
            justify-content: center;
        }

        .avatar-img {
            width: 70px;
            height: 70px;
            margin: .7rem;
            border-radius: 50%;
			filter: drop-shadow(0px 0px 5px rgba(63, 63, 63, 0.5));
        }
        
        Button {
            position: static;
            max-width: 95%;
            height: 35px;
			filter: drop-shadow(0px 0px 5px rgba(63, 63, 63, 0.5));
        }
    }

    @media screen and (min-width: 1440px) {
        flex-direction: row;

        .user-item-header {
            display: flex;
            flex-direction: row;
            width: 100%;
            align-items: center;
            justify-content: flex-start;
        }

        .avatar-img {
            width: 60px;
            height: 60px;
            margin: .5rem 1rem;
            border-radius: 50%;
        }
    
        .username-label {
			text-align: center;
            padding: 0rem 1rem 0rem 1rem;
        }
        
        Button {
            position: absolute;
            right: 1rem;
            max-width: 20%;
            height: 35px;
        }
    }

    .username-label {
        color: rgb(63, 63, 63);
        font-weight: bold;
    }

    @keyframes slide-in-animation {
        0% {
            transform: translateY(50px);
            opacity: 0;
        }
        100% {
            transform: translateY(0px);
            opacity: 1;
        }
    }
`

export default StyledUserItem;