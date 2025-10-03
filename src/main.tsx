import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";

console.log("main.tsx en cours");

import App from "./App";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import SeriesPage from "./pages/SeriesPage";
import DetailsPage from "./pages/DetailsPage";
import CastingPage from "./pages/CastingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/movies", element: <MoviesPage /> },
      { path: "/series", element: <SeriesPage /> },
      { path: "/details", element: <DetailsPage /> },
      { path: "/casting", element: <CastingPage /> },
    ],
  },
]);

console.log("Configuration du router créée :", router);

const rootElement = document.getElementById("root");

console.log("element 'root' trouvé dans le HTML :", rootElement);

if (rootElement) {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
} else {
  console.error(
    "ERREUR CRITIQUE : l'élement avec l'ID 'root' est introuvable dans l'index.html"
  );
}