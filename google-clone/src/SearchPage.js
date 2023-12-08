// SearchPage.js
import React from 'react';
import './SearchPage.css';
import useGoogleSearch from './useGoogleSearch';
import { useStateValue } from './StateProvider';
import Response from './response';
import { Link } from 'react-router-dom';
import Search from './Search';
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RoomIcon from '@mui/icons-material/Room';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  // const { data } = useGoogleSearch(term);
  const data = Response;
  console.log(data);

  return (
    <div className='searchPage'>
      <div className='searchPage_header'>
        <Link to='/'>
          <img
            className='searchPage_logo'
            src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png'
            alt='Google Logo'
          />
        </Link>
        <div className='searchPage_headerBody'>
          <Search hideButtons />
          <div className='searchPage_options'>
          <div className='searchPage_optionsLeft'>
            <div className='searchPage_options_row'>
          <div className='searchPage_options'>
            <SearchIcon/>
            <Link to="/all">All</Link>
          </div>
          <div className='searchPage_options'>
            <DescriptionIcon/>
            <Link to="/news">News</Link>
          </div>
          <div className='searchPage_options'>
            <ImageIcon/>
            <Link to="/images">Images</Link>
          </div>
          <div className='searchPage_options'>
            <LocalOfferIcon/>
            <Link to="/shopping">Shopping</Link>
          </div>
          <div className='searchPage_options'>
            <RoomIcon/>
            <Link to="/maps">Maps</Link>
          </div>
          <div className='searchPage_options'>
            <MoreVertIcon/>
            <Link to="/more">More</Link>
          </div>
          </div>
          </div>
      <div className='searchPage_optionsRight'>
        <div className='searchPage_option'>
          <Link to="/settings">Settings</Link>
        </div>
        <div className='searchPage_option'>
          <Link to="/tools">Tools</Link>
          </div>
        </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default SearchPage;
