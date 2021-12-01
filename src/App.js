import React, {useState, useEffect} from "react"
import "bootstrap/dist/css/bootstrap.css"
import Card from "./components/Card"

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("https://mock-data-api.firebaseio.com/marvel-characters.json")
    .then(res => res.json())
    .then(data => setData(data.data.results))
  }, [])

  return(
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>⭐️ Marvel Data ⭐️</h1>
        </div>
      </div>
      <div className="row">
        {data.map((item, index) => {
          console.log(item)
          return (
            <Card 
              key={item.id}
              name={item.name} 
              description={item.description} 
              thumbnail={item.thumbnail}
              comics={item.comics} 
            />
          )
        })}
      </div>
    </div>
  );
}

export default App;
