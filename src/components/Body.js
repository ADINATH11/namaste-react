import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/constants";
import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";

const Body = () =>{
    const [listOfRestaurant,setListOfRestaurant] = useState([]);
    const [searchtxt,setSearchTxt] = useState("");
    useEffect(()=>{fetchData();},[]);

    const fetchData = async() =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[1].info);
        let resList=json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
        setListOfRestaurant(resList);
    }

    if(listOfRestaurant.length === 0){
        return <Shimmer/>
    }

    return (
    <div className="body">
        <div className="filter-container">
        <div className="search"> 
            <input type="text" value={searchtxt} onChange={(e)=>{setSearchTxt(e.target.value)}}></input>
            <button className="search-btn" onClick={()=>{
                console.log(searchtxt);
                const filterList = resList.filter((res)=>{
                    console.log(res.info.name);
                    return res.info.name.toLowerCase().includes(searchtxt.toLowerCase());
                })
                console.log(filterList)
                setListOfRestaurant(filterList);

            }}>search</button>
         </div>
        <button className="filter-btn" 
        onClick={()=>{
            const filterList = resList.filter((restaurant)=>restaurant.rating>4);
            setListOfRestaurant(filterList);
       }}
        >Top Restaurants</button>
        </div>
        <div className="res-container">
            {listOfRestaurant.map((restaurant) => <RestaurantCard key={restaurant.info.id}resData={restaurant}/>)}
        </div>
    </div>
)}
export default Body;