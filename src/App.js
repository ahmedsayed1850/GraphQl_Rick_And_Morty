import logo from "./logo.svg";
import "./App.css";
import CharacterList from "./pages/CharacterList";
import Character from "./pages/Character";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<CharacterList />} />
        <Route exact path="/:id" element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;
