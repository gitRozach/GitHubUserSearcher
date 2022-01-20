import { useState, useEffect } from 'react';
import StyledUserItem from "./styles/StyledUserItem";
import Button from "./Button";

const UserItem = ({ 
        username='', 
        avatarUrl='', 
        githubUrl='', 
        reposUrl, 
        followersUrl,
        color,
        background,  
        addToFavoritesCallback, 
        removeFromFavoritesCallback
}) => {
    const [infoExpanded, setInfoExpanded] = useState(false);
    const [reposCount, setReposCount] = useState(null);
    const [followersCount, setFollowersCount] = useState(null);
    
    useEffect(() => {
        fetch(reposUrl, {method: 'GET',}).then(data => data.json()).then(d => setReposCount(d.length));
        fetch(followersUrl, {method: 'GET',}).then(data => data.json()).then(d => setFollowersCount(d.length));
    }, [followersUrl, reposUrl]);

    return (<StyledUserItem onClick={() => setInfoExpanded(prev => !prev)} color={color} background={background} >
        <div className="user-item-header">
            <img src={avatarUrl} alt="avatar-image" className="avatar-img" />
            
            <a className="username-label" href={githubUrl} target="_blank">{username}</a>
            
            {infoExpanded && <div className="user-info-box">
                {reposCount !== null ? <p className="user-info">{`${reposCount} Repositories`}</p> : null}
                {followersCount !== null ? <p className="user-info">{`${followersCount} Followers`}</p> : null}
            </div>}
            
            {addToFavoritesCallback && (<Button className="add-button" text="Add To Favorites" clickedText="Added!" callback={addToFavoritesCallback} background="rgba(0, 204, 0, 0.7)" color="white" width="300%" />)}
            
            {removeFromFavoritesCallback && (<Button className="remove-button" text="Remove From Favorites" clickedText="Removed!" callback={removeFromFavoritesCallback} color="white" background="rgba(255, 51, 51, 1)" fontSize="18px" width="300%" />)}
        </div>
        </StyledUserItem>);
};

export default UserItem;