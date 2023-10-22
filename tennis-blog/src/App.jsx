import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Article from "./pages/Article";
import ArticleListings from "./pages/ArticleListings";
import GenericSite from "./pages/GenericSite";
// import '../dist/output.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/article",
    element: <Article />,
  },
  {
    path: "/atp",
    element: <ArticleListings title="ATP Articles" />,
  },
  {
    path: "/wta",
    element: <ArticleListings title="WTA Articles" />,
  },
  {
    path: "/college",
    element: <ArticleListings title="College Articles" />,
  },
  {
    path: "/about-us",
    element: <GenericSite title="About Us" content="We play tennis" />,
  },
  {
    path: "/contact-us",
    element: <GenericSite title="Contact Us" content="tgallup@berkeley.edu" />,
  },
]);

function App() {
  return (
    <>
      <NavBar />
      <RouterProvider router={router} />
      <p className="underline">Test</p>
    </>
  );
}

export default App;
