import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainPageLayout from "./layout/MainPageLayout";
import HomePage from "./pages/HomePage";
import WorkPage from "./pages/WorkPage";
import WorkDetailsPage from "./pages/WorkDetailsPage";
import CollabsPage from "./pages/CollabsPage";

const router = createBrowserRouter([
  {
    element: <MainPageLayout />,
    children: [
      { path: "/", element: <HomePage />, index: true },
      { path: "/home", element: <HomePage />, index: true },
      { path: "/work", element: <WorkPage /> },
      { path: "/work/:id", element: <WorkDetailsPage /> },
      { path: "/collabs", element: <CollabsPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
