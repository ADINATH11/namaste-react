import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1",{id:"heading"},"Namaste React");

const Title = () => <h1 className="heading">this is heading from the JSX</h1>;

const Heading = () => (
    <div>
        <Title/>
        <h1>This is component composition</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading/>);