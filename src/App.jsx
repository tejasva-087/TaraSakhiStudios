import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./Components/Layout";
import HomePage from "./Pages/HomePage";
import WorkPage from "./Pages/WorkPage";
import WorksPage from "./Pages/WorksPage";
import NewsPage from "./Pages/NewsPage";
import PressPage from "./Pages/PressPage";
import CollabsPage from "./Pages/CollabsPage";
import ContactPage from "./Pages/ContactPage";
import AboutPage from "./Pages/AboutPage";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage />, index: true },
      { path: "/about", element: <AboutPage /> },
      { path: "/work", element: <WorksPage /> },
      { path: "/work/:id", element: <WorkPage /> },
      { path: "/news", element: <NewsPage /> },
      { path: "/press", element: <PressPage /> },
      { path: "/collabs", element: <CollabsPage /> },
      { path: "/contact", element: <ContactPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
