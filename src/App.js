import { useState } from 'react';
import Navbar from './Navbar';
import Tweets from './Tweets';

import './styles/App.css';
import elonProfile from './profilePictures/elonProfile.png'


function App() {

  const[posts, setPosts] = useState([
    {id: 1, name: "Elon Musk", user: "elonmusk", post: "I just bought Twitter because I felt a wide range of beliefs should be debated in a healthy manner", pfp: elonProfile}
  ]);

  return (
    <div className="content">
      <div className="nav">
        <Navbar />
      </div>
      <Tweets posts={posts} />
    </div>
  );
}

export default App;
