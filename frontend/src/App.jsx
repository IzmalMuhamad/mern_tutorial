
import HomePage from "./pages/HomePage.jsx";
import NoteDetailPage from "./pages/NoteDetailPage.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import { Route, Routes } from "react-router";

const App = () => {
  return (
    <div data-theme="night">
      <button className="btn btn-outline">Click me</button>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/notes/:id" element={<NoteDetailPage />} />
        <Route path="/create" element={<CreatePage />} /> 
      </Routes>
    </div>
  );
};

export default App;
