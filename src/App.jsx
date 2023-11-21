import { Home } from "./pages/home/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { List } from "./pages/list/List";
import { Single } from "./pages/single/Single";
import { New } from "./pages/new/New";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="users/:userId" element={<Single />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
