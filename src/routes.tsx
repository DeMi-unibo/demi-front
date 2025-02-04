import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Visualizations from "./pages/Visualizations";
import Metadata from "./pages/Metadata";
import Documentation from "./pages/Documentation";
import RootLayout from "./RootLayout";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'visualizations', element: <Visualizations /> },
      { path: 'metadata', element: <Metadata /> },
      { path: 'documentation', element: <Documentation /> },
    ]
  }
]);

export default router;