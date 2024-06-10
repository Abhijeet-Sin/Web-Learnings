function App(){
    return <>
                <h1> This is inside a component </h1>
                <p>If you want to create a component then create it like you would create a Function</p>
            </>
}

// This is a Function
// ReactDOM.createRoot(document.getElementById("root")).render(App());

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);