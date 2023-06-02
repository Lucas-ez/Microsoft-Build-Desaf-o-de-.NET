import Pizza from "./Pizza";
import { useState, useEffect } from "react";

const App = () => {
    const [pizzas, setPizzas] = useState([]);
    
    useEffect(() => {
        fetchData();
    }, [])

    function fetchData() {
        fetch("http://localhost:5059/pizza")
        .then(response => response.json())
        .then(data => setPizzas(data)) 
    }

    const data = pizzas.map(pizza => <Pizza pizza={pizza} key={pizza.id}/>)

    return <div>
        {
            pizzas.length === 0 ?
            <div>No pizzas</div> : data
        }
    </div>
}

export default App;