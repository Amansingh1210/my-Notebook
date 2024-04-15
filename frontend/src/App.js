import Navbar from "./components/navbar";
import Home from "./components/Home";
import About from "./components/About";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import NoteState from "./context/notes/NoteState";

function App() {
  return (
    <>
    <NoteState>
      <BrowserRouter>
          <Navbar/>
        <Routes>
          <Route exact path="/home" element={<Home/>}></Route>
          <Route exact path="/about" element={<About/>}></Route>
        </Routes>
      </BrowserRouter >
    </NoteState>

    </>
  );
}

export default App;
