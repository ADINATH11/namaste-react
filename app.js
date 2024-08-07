import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => (
<div className="header">
    <div className="logo-container">
        <img className="logo"
        src="https://img.freepik.com/premium-vector/simple-minimalist-food-bag-restaurant-delivery-service-logo-design-vector_493994-1029.jpg">
        </img>
    </div>
    <div className="nav-links">
        <ul>
            <li>Home</li>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Cart</li>            
        </ul>
    </div>
</div>
) 

const RestaurantCard = ()=>(
    <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
        <img className="res-logo"
        alt="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320/zvvosi8aw7mujogghnqk"></img>
        <h3>Meghana Foods</h3>
        <h4>Biryani, North Indian, Asian</h4>
        <h4>4.4 stars</h4>
        <h4>30 minutes</h4>
    </div>
)

const Body = () =>(
    <div className="body">
        <div className="search"> Search </div>
        <div className="res-container">
        <RestaurantCard/>
        <RestaurantCard/>
        </div>
    </div>
)

const AppLayout = () => (
    <div>
        <Header/>
        <Body/>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);