import StyledButton from './styles/StyledButton';

const Button = ({ text, callback, background='', color='', fontSize='', width='', height='', clickedText='' }) => (
    <StyledButton
        defaultValue={text}
        background={background}
        color={color}
        fontSize={fontSize}  
        width={width} 
        height={height}
        clickedText={clickedText}
        onClick={callback}>
            <span>{text}</span>
    </StyledButton>
);

export default Button;