import './styles/tweets.css';


const Tweets = ({ tweetsData, tweetDelete }) => {
    return ( 
        <div className="tweetList">
            {tweetsData.map((post) => (
                <div className="tweetIndex">

                    <div className="profileInfo">
                        <img src={post.pfp} alt="profilePic" />

                        <div className="seperator">
                            <div className="names">
                                <p style={{marginLeft: "0px", fontWeight: "bold"}}>{post.name}</p>
                                <p style={{color: "#71767b"}}>@{post.user}</p>
                            </div>

                            <div className="tweetContent">
                                <p style={{fontSize: "1rem"}}>{post.post}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
     );
}
 
export default Tweets;