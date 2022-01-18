import StyledHeaderBar from './styles/StyledHeaderBar';
import Button from './Button';

const HeaderBar = () => (
    <StyledHeaderBar>
        <Button text='LOGO' width='100px' height='50px' fontSize='35px' background='transparent' color='rgb(99, 99, 99)'/>
        <Button text='Features' width='100px' height='50px' fontSize='16px' background='transparent' color='rgb(99, 99, 99)'/>
        <Button text='Resources' width='100px' height='50px' fontSize='16px' background='transparent' color='rgb(99, 99, 99)'/>
        <Button className='login-button' text='Login' width='100px' height='50px' fontSize='16px' background='transparent' color='rgb(99, 99, 99)'/>
        <Button className='sign-up-button' text='Sign Up' width='100px' height='50px' fontSize='16px' background='rgb(74, 74, 74)' />
    </StyledHeaderBar>
);

export default HeaderBar;