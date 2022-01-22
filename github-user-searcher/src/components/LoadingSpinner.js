import StyledLoadingSpinner from "./styles/StyledLoadingSpinner";

const LoadingSpinner = ({ text }) => (
    <StyledLoadingSpinner><div className='loader'>{text}</div></StyledLoadingSpinner>
);

export default LoadingSpinner;