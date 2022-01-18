import StyledUsersBar from './styles/StyledUsersBar';

const UsersBar = ({ userItems, description, background, color }) => (
    <StyledUsersBar background={background} color={color}>
        {description && <h3 className="description-header">{description}</h3>}
        {userItems}
    </StyledUsersBar>
);

export default UsersBar;