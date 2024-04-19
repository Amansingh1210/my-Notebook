import Navbar from "./components/navbar";
import Home from "./components/Home";
import About from "./components/About";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import NoteState from "./context/notes/NoteState";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Alert from "./components/Alert";
import SetAlerts from "./context/Alerts/SetAlerts";

function App() {
  return (
    <>
    <NoteState>
      <SetAlerts>
      <BrowserRouter>
          <Navbar/>
          <Alert alert={alert}/>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/home" element={<Home/>}></Route>
          <Route exact path="/about" element={<About/>}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
          <Route exact path="/signup" element={<Signup/>}></Route>
        </Routes>
      </BrowserRouter >
        </SetAlerts>
    </NoteState>

    </>
  );
}

export default App;
