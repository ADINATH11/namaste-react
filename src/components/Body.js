import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/constants";
import { useState } from "react";

const Body = () =>{
    const [listOfRestaurant,setListOfRestaurant] = useState(resList);
    return (
    <div className="body">
        <div className="search"> Search </div>
        <button className="filter-btn" 
        onClick={()=>{
            const filterList = listOfRestaurant.filter((rest)=>rest.rating>4);
            setListOfRestaurant(filterList);
       }}
        >Top Restaurants</button>
        <div className="res-container">
            {resList.map((restaurant) => <RestaurantCard resData={restaurant}/>)}
        </div>
    </div>
)}
export default Body;