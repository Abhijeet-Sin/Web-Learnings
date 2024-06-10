// let fragment = (<h1> Hello This is a basic code without fragment</h1>);
// ReactDOM.createRoot(document.getElementById("root")).render(fragment);

// This below code is not woring check when u have time its depreciated but still supported
// Maybe i need to import react Library
// const hello = <React.Fragments>
//     <h1>Fragments</h1>
//     <p>This is React using Fragments</p>
//     </React.Fragments>
// ReactDOM.createRoot(document.getElementById("root")).render(<React.Fragments><h1>Fragments</h1><p>This is React using Fragments</p></React.Fragments>);

// const hello = <>
//     <h1>Fragments</h1>
//     <p>This is React using Fragments</p>
//     </>

// ReactDOM.createRoot(document.getElementById("root")).render(hello);

// ReactDOM.createRoot(document.getElementById("root")).render(<><h1>Fragments</h1><p>This is React using Fragments</p></>);

// List using Js Assignment

ReactDOM.createRoot(document.getElementById("root")).render(<>
                                                                <h1>React</h1>
                                                                <ul>
                                                                    <li>React is Declarative</li>
                                                                    <li>We Can use Jsx in React also Known as Synatatical sugar</li>
                                                                    <li>React has Virtual Doms Which make it very fast as it works inside the browser and doesnt need to render all teh elements once a node is changed</li>
                                                                </ul>
                                                            </>);