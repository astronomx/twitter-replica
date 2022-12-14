import './styles/navbar.css';

import twitterLogo from './icons/twitter.png';
import pfp from './profilePictures/profilePicture.png';
import homeIcon from './icons/home.png';
import exploreIcon from './icons/explore.png';
import notificationIcon from './icons/notification.png';
import messageIcon from './icons/message.png';
import bookmarkIcon from './icons/bookmark.png';
import listIcon from './icons/list.png';
import profileIcon from './icons/profile.png';
import moreIcon from './icons/more.png';
import menuProfile from './icons/menuProfile.png';



const Navbar = () => {
    return (  
        <nav className="navbar">
            <div className="links">
                <img id="logo" src={twitterLogo} alt="logo" />

                <div className="navigation">
                    <button><img src={homeIcon} alt="homeIcon" /><span>Home</span></button>
                    <button><img src={exploreIcon} alt="exploreIcon" /><span>Explore</span></button>
                    <button><img src={notificationIcon} alt="notificationIcon" /><span>Notifications</span></button>
                    <button><img src={messageIcon} alt="messageIcon" /><span>Messages</span></button>
                    <button><img src={bookmarkIcon} alt="bookmarkIcon" /><span>Bookmarks</span></button>
                    <button><img src={listIcon} alt="listIcon" /><span>List</span></button>
                    <button><img src={profileIcon} alt="profileIcon" /><span>Profile</span></button>
                    <button><img src={moreIcon} alt="moreIcon" /><span>More</span></button>
                </div>
                
                <div className="tweetButton">
                    <button id='tweet'>Tweet</button>
                </div>

                <div className="profileInfo">
                    <div className="photo">
                        <img src={pfp} alt="PFP" className="pfp" />
                    </div>

                    <div className="profileName">
                        <p className="displayName">1UPGENESIS</p>
                        <p className="userName">@oneupgenesis</p>
                    </div>
                    <img src={menuProfile} alt="Menu" className='menu' />
                </div>

            </div>
        </nav>
    );
}
 
export default Navbar;