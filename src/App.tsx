import { BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/films" element={<MoviesPage />} />
        <Route path="/series" element={<SeriesPage />} />
        <Route path="/details" element={<DetailsPage />} />
        <Route path="/casting" element={<CastingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
