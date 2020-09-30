import React from 'react'
import "./side_bar.css"
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import NoteIcon from '@material-ui/icons/Note';

function Side_bar() {
    return (
            <div className="sidebar">
  
  <p><HomeIcon/><p>Home</p></p>
  <p><WhatshotIcon/><p>Trending</p></p>
  <p><SubscriptionsIcon/><p>Subscriptions</p></p>
  
  <hr/>
  
  <p><VideoLibraryIcon/><p>Library</p></p>
  <p><HistoryIcon/><p>History</p></p>
  
  <hr/>
  
  <h5>Sign in to like videos,<br/>commeny, and subscribe.</h5>
  
  <div className="signinbox">
    <p><AccountCircleIcon/><p>SIGN IN</p></p>
  </div>
  
  <hr/>
  <h3 className="bestofyoutube">BEST OF YOUTUBE</h3>
  <p><MusicNoteIcon/><p>Music</p></p>
  <p><SportsEsportsIcon/><p>Gaming</p></p>
  <p><SportsSoccerIcon className="sports"/><p>Sports</p></p>
  <p><NoteIcon/><p>News</p></p>

  
</div>
    )
}

export default Side_bar
