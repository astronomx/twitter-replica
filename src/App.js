import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Navbar from './Navbar';
import Tweets from './Tweets';
import Trends from './Trends';

import './styles/App.css';
import profilePicture from './profilePictures/profilePicture.png';
import elonProfile from './profilePictures/elonProfile.png';
import jackProfile from './profilePictures/jackProfile.jpg';
import nbaProfile from './profilePictures/nbaProfile.jpg';
import manjaroProfile from './profilePictures/manjaroProfile.png';
import stephenProfile from './profilePictures/stephenProfile.jpg';
import ethereumProfile from './profilePictures/ethereumProfile.jpg';
import andrewProfile from './profilePictures/andrewProfile.jpg';
import markusProfile from './profilePictures/markusProfile.jpg';
import toughtsProfile from './profilePictures/thoughtsProfile.jpg';


function App() {

  const[post, setPost] = useState([
    {id: uuidv4(), name: "Elon Musk", user: "elonmusk", pfp: elonProfile, post: "I just bought Twitter because I felt a wide range of beliefs should be debated in a healthy manner"},
    {id: uuidv4(), name: "jack", user: "jack", pfp: jackProfile, post: "Just setting up my twttr"},
    {id: uuidv4(), name: "NBA", user: "NBA", pfp: nbaProfile, post: "The NBA selects Terrance Clark fly high kid R.I.P"},
    {id: uuidv4(), name: "Manjaro Linux", user: "ManjaroLinux", pfp: manjaroProfile, post: "There will be a new laptop with pre-installed. Some specs you can choose from: AMD Ryzen 7 6800H w/ 64GB DDR5 MEM Intel Alder Lake Core i3-1215U w/ 16GB DDR5 MEM Intel Alder Lake Core i7-1255U w/ 32GB DDR5 MEM Intel Alder Lake Core i9-12900H w/ 64GB DDR5 MEM"},
    {id: uuidv4(), name: "Stephen King", user: "StephenKing", pfp: stephenProfile, post: "Musk makes me think of Tom Sawyer, who is given the job of whitewashing a fence as punishment. Tom cons his friends into doing the chore for him, and getting them to pay for the privilege. That's what Musk wants to do with Twitter. No, no, no."},
    {id: uuidv4(), name: "Ethereum", user: "ethereum", pfp: ethereumProfile, post: "Ask your mom and dad for some change to buy some ETH!"},
    {id: uuidv4(), name: "Andrew Tate", user: "Cobratate", pfp: andrewProfile, post: "Fight the Matrix "},
    {id: uuidv4(), name: "Andrew Tate", user: "Cobratate", pfp: andrewProfile, post: "Fight the Matrix "},
    {id: uuidv4(), name: "Andrew Tate", user: "Cobratate", pfp: andrewProfile, post: "Fight the Matrix "},
    {id: uuidv4(), name: "Andrew Tate", user: "Cobratate", pfp: andrewProfile, post: "Fight the Matrix "},
    {id: uuidv4(), name: "Andrew Tate", user: "Cobratate", pfp: andrewProfile, post: "Fight the Matrix "},
    {id: uuidv4(), name: "Andrew Tate", user: "Cobratate", pfp: andrewProfile, post: "Fight the Matrix "},
    {id: uuidv4(), name: "Andrew Tate", user: "Cobratate", pfp: andrewProfile, post: "Fight the Matrix "},
    {id: uuidv4(), name: "Markus Magnusson 🟢", user: "MotionMarkus", pfp: markusProfile, post: "So we’re all more or less calling it digital collectibles now right?"},
    {id: uuidv4(), name: "Toughts", user: "TheToughtsNFT", pfp: toughtsProfile, post: "FREE MINT DEC 13 (3 PM EST) Next 888 to RT and Drop eth address = Free mint"},
  ]);

  const [trend, setTrend] = useState([
    {id: uuidv4(), trend: "Moroccan", tweets: "25.6K", category: "Netherlands"},
    {id: uuidv4(), trend: "Steve Jobs", tweets: "2,468", category: "Business & finance"},
    {id: uuidv4(), trend: "Forum", tweets: "60.1K", category: "Netherlands"},
    {id: uuidv4(), trend: "Portugal", tweets: "117K", category: "Sports"},
    {id: uuidv4(), trend: "#databreach", tweets: "1,556", category: "Technology"},
    {id: uuidv4(), trend: "Serbia", tweets: "111K", category: "Events"},
    {id: uuidv4(), trend: "Rome", tweets: "21.1K", category: "Netherlands"},
    {id: uuidv4(), trend: "#Cryptocommunity", tweets: "2,883", category: "Business & finance"},
    {id: uuidv4(), trend: "Onana", tweets: "50.1K", category: "Netherlands"}
  ]);

  const tweetDelete = (id) => {
    const newTweets = post.filter(post => post.id !== id);
    setPost(newTweets);
  }
  
  const trendDelete = (id) => {
    const newTrends = trend.filter(trend => trend.id !== id);
    setTrend(newTrends);
  }

  return (
    <div className="content">
      <div className="nav">
        <Navbar />
      </div>

      <div className="tweets">
        <div className="homeBar">
          <h3 className="barTitle">Home</h3>
        </div>

        <div className="tweetBox">
            <img src={profilePicture} alt="pfp" />
            <textarea className="tweet" placeholder="What's happening?"></textarea>
        </div>
        
        <div className="seperatorTweets">
          <Tweets tweetsData={post} tweetDelete={tweetDelete} />
        </div>
      </div>
      
      
      <div className="trending">
        <div className="list">
          <h3 className="title">Trending for you</h3>
          <Trends trendData={trend} trendDelete={trendDelete} />
        </div>
      </div>
    </div>
  );
}

export default App;
