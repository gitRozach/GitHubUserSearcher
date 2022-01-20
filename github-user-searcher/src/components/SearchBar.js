import StyledSearchBar from './styles/StyledSearchBar';
import { useState } from 'react';

const SearchBar = ({ searchText='Search for GitHub User Profiles', searchChangedCallback }) => {
    const [inputValue, setInputValue] = useState(null);
    const [errorValue, setErrorValue] = useState(null);

    return [inputValue, errorValue, setErrorValue,
            (<StyledSearchBar>
                <input type="text" spellCheck="false" placeholder={searchText} className="input-field" onChange={e => {
                    setInputValue(e.target.value);
                    if(searchChangedCallback) searchChangedCallback(e.target.value);
                }} />
                {errorValue && <p className="input-error-label">{errorValue}</p>}
            </StyledSearchBar>)
    ];
};

export default SearchBar;