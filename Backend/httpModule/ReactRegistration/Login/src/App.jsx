import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Components/Login";

import Home from "./Components/Home";
import Registration from "./Components/Registration";
import Dashboard from "./Components/Dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Registration />,
  },
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

