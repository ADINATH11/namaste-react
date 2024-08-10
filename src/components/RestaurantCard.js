import resLogo from "../utils/constants";

const RestaurantCard = (props)=>{
    const {resData} = props;
    const {cloudinaryImageId,name,cuisines,avgRating,sla} = resData?.info; 
    return (<div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
        <img className="res-logo"
        alt="res-logo"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320/"+cloudinaryImageId}></img>
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{sla.deliveryTime}</h4>
    </div>)
}

export default RestaurantCard;