import React, { useState } from 'react';
import './Search.css';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Search({hideButtons = false}) {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();
    console.log('Ram Ram', input);
    dispatch({
        type: actionTypes.SET_SEARCH_TERM,
        term: input
    })
    navigate('/search');
  };

  return (
    <form className='search' onSubmit={search}>
      <div className='search_input'>
        <SearchIcon className='search_inputIcon' />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>
      {!hideButtons ? (
      <div className='search_button'>
        <Button type='submit' onClick={search}
        variant='outlined'>
          Google Search
        </Button>
        <Button variant='outlined'>I'm Crazy</Button>
      </div>
      ): (
        <div className='search_button'>
        <Button className="search_buttonHidden" type='submit' onClick={search}
        variant='outlined'>
          Google Search
        </Button>
        <Button className="search_buttonHidden" variant='outlined'>I'm Crazy</Button>
      </div>
      )}
    </form>
  );
}

export default Search;
