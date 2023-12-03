import { Home } from "./pages/home/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { List } from "./pages/list/List";
import { Single } from "./pages/single/Single";
import { New } from "./pages/new/New";
import { Register } from "./pages/register/Register";
import { Login } from "./pages/login/Login";
import { HospitalLogin } from "./pages/hospitalLogin/HospitalLogin";
import { HospitalRegister } from "./pages/hospitalRegister/HospitalRegister";
import { HospitalHome } from "./pages/hospitalHome/HospitalHome";
import { ProtectedRoutes } from "./utils/ProtectedRoutes";
import { History } from "./pages/history/History";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="/hospital" element={<HospitalHome />} />
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<History />} />
            <Route path="users/:userId" element={<Single />} />
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/hlogin" element={<HospitalLogin />} />
          <Route path="/hregister" element={<HospitalRegister />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
