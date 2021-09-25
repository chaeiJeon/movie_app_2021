import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Navigation />
      {/* path="/"가 되면 component Home 실행, exact={true}는 
          path="/"일때만 작동한다는 의미, 안하면 path="/about"일때 같이 렌더링됨 */}
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      {/* :id : id라는 변수가 올것이다 */}
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;