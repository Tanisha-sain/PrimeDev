import React from "react";
import ReactDOM from "react-dom/client";

const domRoot = document.getElementById("parent");
const reactRoot = ReactDOM.createRoot(domRoot);

const Card = ({name}) => {
    // console.log(abc)
    // console.log(abc.name)
    // const {name} = abc;
    // console.log(name)
    return (
        <div>
            <h3>Hello {name} !</h3>
            <p>Nice to meet you !</p>
        </div>
    )
}

const App = () => {
    return (
        <div>
            <Card name="Likhilesh"/>
            <Card name="Raj"/>
            <Card name="Rajesh"></Card>
            {/* {Card("Likhilesh")} */}
            {Card({name: "Rohan"})}
        </div>
    )
}

console.log("Hello");

reactRoot.render(<App />);
// reactRoot.render(App());