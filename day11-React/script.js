// // const root = document.getElementById("root");

// // const ul = document.createElement("ul");
// // const li1 = document.createElement("li");
// // li1.innerText = "Item1";
// // const li2 = document.createElement("li");
// // li2.innerText = "Item2";
// // const li3 = document.createElement("li");
// // li3.innerText = "Item3";
// // ul.appendChild(li1);
// // ul.appendChild(li2);
// // ul.appendChild(li3);

// // root.appendChild(ul);

// // console.log(React);
// // console.log(ReactDOM);

// const root = document.getElementById("root");
// const reactRoot = ReactDOM.createRoot(root);

// const li1 = React.createElement("li", {
//     className: "text-big",
//     style: {
//         color: "Red"
//     }
// }, "Item 1") // type, options, children
// const li2 = React.createElement("li", {}, "Item 2") // type, options, children
// const li3 = React.createElement("li", {}, "Item 3") // type, options, children

// const ul = React.createElement("ul", {}, [li1, li2, li3]);

// reactRoot.render(ul)

// ---------------------------------------------------------------------------------------

const domRoot = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(domRoot);

// const title = React.createElement("h1", {}, "Hello from react DOM!");

// const title2 =  <h2>Hello from JS</h2> // react element
//{
//     $$typeof: Symbol.for('react.element'),
//     "type": "h4",
//     "key": null,
//     "ref": null,
//     "props": {
//         "children": "Hello from react DOM!"
//     },
//     "_owner": null,
//     "_store": {}
// }

// console.log(typeof title)
// console.log(title)


// React component
const Title2 = () => {
    return <h1>Hello from JSX Again!</h1>
};
// reactRoot.render(Title2());
reactRoot.render(<Title2 />);


// HTML Document -> DOM API -> React(Brain, Black Box) -> Object -> react.createElement -> JSX
