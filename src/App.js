



import Burhan from "./components/Burhan.jsx";
import Deneme from "./components/deneme.jsx";

function  App() {

  const props="props mantığı";


return(
  <div className="App">
<Burhan alaca={props} />
<Deneme/>

<button onClick={clickFunc}>Tıkla</button>
  </div>
);
}

export default App;