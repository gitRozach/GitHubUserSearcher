import { useState, useEffect } from 'react';
import { StyledGitHubUserSearcher, StyledGitHubUserSearcherWrapper } from './styles/StyledGitHubUserSearcher';
import HeaderBar from './HeaderBar';
import FooterBar from './FooterBar';
import SearchBar from './SearchBar';
import UsersBar from './UsersBar';
import UserItem from './UserItem';

const GitHubUserSearcher = () => {
    const fetchAbortController = new AbortController();
    const fetchSignal = fetchAbortController.signal;

    const [searchValue, errorValue, setErrorValue, searchBar] = SearchBar({});
    const [userItems, setUserItems] = useState(new Map());
    const [favoriteUserItems, setFavoriteUserItems] = useState(new Map());
    
    const resetUserItems = () => setUserItems(new Map());
    const resetFavoriteUserItems = () => setFavoriteUserItems(new Map());

    useEffect(() => {
        if (localStorage.getItem('favorite-users')) {
            try {
                setFavoriteUserItems(JSON.parse(localStorage.getItem('favorite-users')));
            } catch (e) {
                setFavoriteUserItems(new Map());
            }        
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('favorite-users', JSON.stringify(favoriteUserItems));
    }, [favoriteUserItems]);

    useEffect(() => {
        async function fetchUser() {
            searchForUser(searchValue);
        }

        fetchUser();
        return () => fetchAbortController.abort();
    }, [searchValue]);

    const addFavoriteUser = (user) => {
        if (!user) return;
        const newFavoriteUserItems = {...favoriteUserItems};
        newFavoriteUserItems[user.username] = user;
        setFavoriteUserItems(newFavoriteUserItems);
    }

    const removeFavoriteUser = (username) => {
        if (!username || !favoriteUserItems[username]) return;
        const newFavoriteUserItems = {...favoriteUserItems};
        delete newFavoriteUserItems[username];
        setFavoriteUserItems(newFavoriteUserItems);
    }

    const searchForUser = (username) => {
        if(!searchValue || searchValue.length < 3) {
            setErrorValue(null);
            resetUserItems();
            return;
        }
        if(userItems[searchValue]) /*Avoids spamming with the same requests*/{
            return;
        }

        fetch('https://api.github.com/search/users\?q\=user:' + searchValue, {signal: fetchSignal})
        .then(response => response.json())
        .then(data => {
            if (data.items){
                const newUserItems = {};
                
                data.items.map(user => newUserItems[user.login] = { avatarUrl: user.avatar_url, githubUrl: user.html_url, reposUrl: user.repos_url, followersUrl: user.followers_url });
                setUserItems(newUserItems);
            } else {
                setErrorValue(`'${searchValue}' Does Not Exist.`);
            }
        })
        .catch(error => console.error('Could not fetch user data: ' + error));
    }

    const onKeyPressed = ({ keyCode }) => {
        if (keyCode === 13) /*Enter*/ {
            searchForUser(searchValue);
        }
    }

    return (<StyledGitHubUserSearcherWrapper 
        id="git-hub-user-searcher-wrapper"
        role="button" 
        tabIndex="0" 
        onKeyDown={onKeyPressed}>
        <StyledGitHubUserSearcher>
            <HeaderBar />
            {searchBar}
            {<UsersBar background='rgb(74, 74, 74)' color='rgba(51, 255, 51, 0.7)' description={Object.keys(userItems).length > 0 ? 'We Found A User!' : null} userItems={[Object.keys(userItems).map(key => (
                <UserItem 
                    username={key} 
                    avatarUrl={userItems[key].avatarUrl} 
                    githubUrl={userItems[key].githubUrl}
                    reposUrl={userItems[key].reposUrl}
                    followersUrl={userItems[key].followersUrl} 
                    key={'user-' + key} 
                    addToFavoritesCallback={favoriteUserItems[key] ? null : e => {
                        addFavoriteUser({
                            username: key,
                            avatarUrl: userItems[key].avatarUrl, 
                            githubUrl: userItems[key].githubUrl,
                            reposUrl: userItems[key].reposUrl,
                            followersUrl: userItems[key].followersUrl,
                        });
                        e.stopPropagation();
                    }}
                    removeFromFavoritesCallback={favoriteUserItems[key] ? e => { removeFavoriteUser(key); e.stopPropagation(); } : null}/> 
            ))]}/>}
            {favoriteUserItems && (<UsersBar background='rgb(63, 63, 63)' color='white' description={Object.keys(favoriteUserItems).length > 0 ? 'Your Favorite GitHub Users' : null} userItems={[Object.keys(favoriteUserItems).map(key => (
                <UserItem 
                    username={key} 
                    avatarUrl={favoriteUserItems[key].avatarUrl} 
                    githubUrl={favoriteUserItems[key].githubUrl}
                    reposUrl={favoriteUserItems[key].reposUrl}
                    followersUrl={favoriteUserItems[key].followersUrl}  
                    key={'favorite-user-' + key} 
                    removeFromFavoritesCallback={favoriteUserItems[key] ? e => { removeFavoriteUser(key); e.stopPropagation(); } : null}
                />))]}/>)}
            <FooterBar />
        </StyledGitHubUserSearcher>
    </StyledGitHubUserSearcherWrapper>)
};

export default GitHubUserSearcher;