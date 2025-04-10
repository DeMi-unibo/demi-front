import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Geographical from "./pages/Visualizations/Geographical";
import Metadata from "./pages/Metadata";
import Documentation from "./pages/Documentation";
import RootLayout from "./RootLayout";
import Demographical from "./pages/Visualizations/Demographical";

const router = createBrowserRouter([
  {
    path: '/demi-front/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      // { path: 'visualizations', element: <Geographical /> },
      { path: "visualizations/geographical", element: <Geographical /> },
      { path: "visualizations/demographical", element: <Demographical /> },
      { path: 'metadata', element: <Metadata /> },
      { path: 'documentation', element: <Documentation /> },
    ]
  }
]);

export default router;