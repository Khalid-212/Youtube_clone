import React from 'react'
import "./header.css";
import YouTubeIcon from '@material-ui/icons/YouTube';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import PublishSharpIcon from '@material-ui/icons/PublishSharp';
import AppsSharpIcon from '@material-ui/icons/AppsSharp';
import MoreVertSharpIcon from '@material-ui/icons/MoreVertSharp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Header() {
    return (
      <div className="app__header">

        <MenuIcon className = "menu__icon"/>
        <div className="logo">
          <div className="logo_yt">

        <YouTubeIcon className="youtube__icon"/>
          </div>
      <div className="logo__text">
      <h1>YouTube</h1>
        </div>
        </div>
     
      <div className="search__input">
    <input type="search"  placeholder="Search"/>
          <div className="searchicon">
            <SearchIcon/>
            </div>
    </div>
    <div className="header__right">
      <p><PublishSharpIcon/></p>
      <p><AppsSharpIcon/></p>
      <p><MoreVertSharpIcon/></p>
      <div className="signinbox">
    <p><AccountCircleIcon/><p>SIGN IN</p></p>
     </div>
    </div>
    </div> 
    )
}

export default Header

