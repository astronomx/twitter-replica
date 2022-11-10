import './styles/tweets.css';


const Tweets = ({ posts }) => {
    return ( 
        <div className="tweetList">
            {posts.map((post) => (
                <div className="tweetIndex">

                    <div className="profileInfo">
                        <img src={post.pfp} alt="profilePic" />

                        <div className="seperator">
                            <div className="names">
                                <p style={{fontWeight: "bold"}}>{post.name}</p>
                                <p style={{color: "#71767b"}}>@{post.user}</p>
                            </div>

                            <div className="tweetContent">
                                <p style={{fontSize: "15px"}}>{post.post}</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            ))}
        </div>
     );
}
 
export default Tweets;