import './styles/trends.css'

const Trends = ({ trendData }) => {
    return ( 
        <div className="content">
            <div className="trendList">
                {trendData.map((trend) => (
                    <div className="trendIndex">

                        <div className="trendInfo">
                            <p>Trending in {trend.category}</p>
                        </div>

                        <div className="trend">
                            <p>{trend.trend}</p>
                        </div>

                        <div className="tweetAmount">
                            <p>{trend.tweets}</p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default Trends;