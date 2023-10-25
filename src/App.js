import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Pages/Layout";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [{ path: "", element: <Home /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
