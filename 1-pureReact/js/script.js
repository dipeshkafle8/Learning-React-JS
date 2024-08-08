const Dance=(props)=>{
    return React.createElement("div",
        {className:"pets"},[
            React.createElement('h1',{},"Name:"+props.name),
            React.createElement('h2',{},"Style:"+props.style),
            React.createElement("h2",{},"Energy:"+props.energy)
        ]
    )
}



const App=()=>{
    return React.createElement(
        "div",
        {id:"Mydiv"},
        React.createElement(Dance,{name:"HipHop",
            style:"New Style HipHop",
            energy:"High"
        }),
        React.createElement(Dance,{name:"Contemproray",
            style:"Contemp",
            energy:"Medium"
        }),
        React.createElement(Dance,{name:"HipHop",
            style:"Krump",
            energy:"High"
        })
    )
   }
   const container=document.getElementById('root');
   const root=ReactDOM.createRoot(container);
   root.render(React.createElement(App));