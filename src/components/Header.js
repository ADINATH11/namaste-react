import { appLogo } from "../utils/constants";
const Header = () => (
    <div className="header">
        <div className="logo-container">
            <img className="logo"
            src = {appLogo} >
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

    export default Header;