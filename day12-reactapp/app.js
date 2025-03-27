import React from "react";
import ReactDOM from "react-dom/client";
import Card, {Title} from "./components/Card"
import {Button} from "./components/button.js";

const domRoot = document.getElementById("parent");
const reactRoot = ReactDOM.createRoot(domRoot);



const App = () => {
    return (
        <div>
            <Button color="submit">Submit</Button>
            <Button color="danger">Cancel</Button>
            <Card name={Title}/>
            <Card name="Likhilesh"/>
            <Card name="Raj"/>
            <Card name="Rajesh"></Card>{/* {Card("Likhilesh"
            )} */}
            {Card({name: "Rohan"})}
        </div>
    )
}

console.log("Hello");

reactRoot.render(<App />);
// reactRoot.render(App());