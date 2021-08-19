
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./page/home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Route path="/detail/:id" component={MovieDetail} /> */}
        <Route exact path="/" component={Home} />
      </BrowserRouter>
    </div>
  );
}

export default App;
