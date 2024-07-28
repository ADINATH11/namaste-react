const heading = React.createElement("h1",{id:"heading"},"Hello World From React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

const parent = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child1"},
        [React.createElement("h1",{id:"heading"},"Hello World From React!"),
            React.createElement("h2",{id:"heading2"},"Hello World From React!")]),
    React.createElement("div",{id:"child2"},
        [React.createElement("h1",{id:"heading"},"Hello World From React!"),
            React.createElement("h2",{id:"heading2"},"Hello World From React!")])]);
const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(parent);




/*
-React(object) => Browser(HTML)
-arguments of the ReactCreateElement are tag, props(attributes), children
-elements are nothing but the objects.
-order of the script files matter.
-nesting of sibling elements done with the help of the array.
-if there is any thing present in the root div of the html. 
 it will get replaced with the elements called from the render method.
*/