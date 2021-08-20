import { BrowserRouter, Route } from "react-router-dom"

import Home from "./page/home"
import Detail from "./page/detail"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/detail/:id" component={Detail} />
        <Route exact path="/" component={Home} />
      </BrowserRouter>
    </div>
  )
}

export default App
