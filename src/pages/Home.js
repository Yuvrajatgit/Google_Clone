import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import AppsIcon from '@mui/icons-material/Apps';
import {Avatar} from '@mui/material';
import InputSearch from '../components/InputSearch';

function Home() {
  return (
    <div className='home'>
        <div className='home__header'>
            <div className='home__header__left'>
                 <Link to="/about">About</Link>
                 <Link to="store">Store</Link>
            </div>
            <div className='home__header__right'>
                 <Link to="/gmail">Gmail</Link>
                 <Link to="images">Images</Link>
                 <AppsIcon/>
                 <Avatar/>
            </div>
        </div>
        <div className='home__body'>
            <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt='logo'></img>
            <div className='home__body__input'>
                <InputSearch hideButtons={false}/>
            </div>
        </div>
    </div>
  )
}

export default Home;