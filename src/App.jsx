import ErrorPage from "./Pages/404";
import Login from "./Pages/login";
import Products from "./Pages/products";
import Register from "./Pages/register";
import DetailProduct from "./Pages/detailProduct";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/register",
    element: <Register />,
  },

  {
    path: "/products",
    element: <Products />,
  },

  {
    path: "/products/:id",
    element: <DetailProduct />,
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
