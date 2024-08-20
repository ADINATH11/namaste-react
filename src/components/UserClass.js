 
import React from "react";

  class UserClass extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            count:1,
        }
    }
    render(){
        const {location,contact} = this.props;
        const {count,name,avatar_url} = this.state;

        return (
        <div className="user-card">
            <h2>Name: {name}</h2>
            <img src={avatar_url}></img>
            <h3>Location: {location}</h3>
            <h4>Contact: {contact}</h4>
            <h5>Count: {count}</h5>
            <button 
            onClick={() =>{
                this.setState({
                    count:this.state.count +1,
                });
            }}>Count increase</button>
        </div>)
    }

    async componentDidMount(){
            const data = await fetch("https://api.github.com/users/ADINATH11");
            const json = await data.json();
            console.log(json);
            this.setState({
                count:0,
                name: json.login,
                avatar_url: json.avatar_url,
            })
    }
  }

  export default UserClass;