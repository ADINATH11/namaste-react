const MenuItemCard = (props) => {
    const menuItemData = props.menuItemData;
    const {imageId,name,description,price,ratings} = menuItemData; 
    return (<div className="menu-item-card" style={{backgroundColor: "#f0f0f0"}}>
        <img className="menu-item-logo"
        alt="res-logo"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_201,h_127/"+imageId}></img>
        <h3>{name}</h3>
        <h4>{description}</h4>
        <h4>{price/100}</h4>
        <h4>{ratings.aggregatedRating.rating}</h4>
    </div>)

}

export default MenuItemCard;