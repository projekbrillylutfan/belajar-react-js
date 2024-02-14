import ErrorPage from "./Pages/404";
import Login from "./Pages/login";
import Products from "./Pages/products";
import Register from "./Pages/register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>home</div>,
    errorElement: <ErrorPage />,
  },

  {
    path: "/register",
    element: <Register />,
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/products",
    element: <Products />,
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
