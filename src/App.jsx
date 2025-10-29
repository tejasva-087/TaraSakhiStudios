import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./Pages/HomePage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/about", element: <p>About</p> },
  { path: "/work", element: <p>Work</p> },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
