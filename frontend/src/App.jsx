import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./layout/RootLayout";
import Homepage from "./pages/HomePage";
import Recipes from "./pages/Recipes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/recipes",
        element: <Recipes />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
