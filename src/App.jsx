import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPageLayout from "./layout/MainPageLayout";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    element: <MainPageLayout />,
    children: [
      { path: "/", element: <HomePage />, index: true },
      { path: "/work", element: <p>Work page</p> },
      { path: "/work/:id", element: <p>work details</p> },
      { path: "/collabs", element: <p>collabs</p> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
