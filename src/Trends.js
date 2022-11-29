import './styles/trends.css';
import trash from  './icons/trash.png';

const Trends = ({ trendData, trendDelete }) => {
    return ( 
        <div className="content">
            <div className="trendList">
                {trendData.map((trend) => (
                    <div className="trendContainer">
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

                        <div className="delete">
                            <button onClick={() => trendDelete(trend.id)}><img src={trash} alt="Trash" /></button>
                        </div>
                    </div>
                    

                    
                ))}
            </div>
        </div>
    );
}
 
export default Trends;