// import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Article from "./pages/Article";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/article",
    element: <Article/>,
  },
  ],
)

function App() {
  return (
    <>
      <RouterProvider router={router}/>
      <NavBar/>
    </>
  );
}

export default App;
