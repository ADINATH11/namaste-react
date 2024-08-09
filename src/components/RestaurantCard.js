import resLogo from "../utils/constants";

const RestaurantCard = (props)=>{
    const {resData} = props;
    // const {url,resName,cusines,rating,delTime} = resData?.data; 
    return (<div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
        <img className="res-logo"
        alt="res-logo"
        src={resData.url}></img>
        <h3>{resData.resName}</h3>
        <h4>{resData.cusines}</h4>
        <h4>{resData.rating}</h4>
        <h4>{resData.delTime}</h4>
    </div>)
}

export default RestaurantCard;