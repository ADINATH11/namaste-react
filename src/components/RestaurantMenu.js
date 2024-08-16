import { useParams } from "react-router-dom";
import MenuItemCard from "./MenuItemCard";

const { useEffect,useState } = require("react");


const RestaurantMenu = () => {
    let {resId} = useParams();
    const [listOfMenuItems, setListOfMenuItems] = useState([]);
    useEffect(() => {fetchData();},[])

    const fetchData = async() =>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.61610&lng=73.72860&restaurantId="+resId);
        const json = await data.json();
        console.log(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
        setListOfMenuItems(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
    }

   return (<div className="restaurant-menu">
    <h1>Restaurant Menu</h1>
    <div className="menu-item-card-container">
    {listOfMenuItems.map((itemCard)=>{
        return(<MenuItemCard key={itemCard.card.info.id} menuItemData={itemCard.card.info}/>)
    })}
    </div>
    </div>)
};

export default RestaurantMenu;