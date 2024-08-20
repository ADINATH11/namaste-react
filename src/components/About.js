import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
    <div className="about">
        <h1>Namaste we are React Devlopers</h1>
        <User/>
        <UserClass  location={"pune"} contact={"adinath@august18"}/>
    </div>)
}

export default About;